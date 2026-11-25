import json
import os
import sqlite3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'store_data.db')


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        '''
        CREATE TABLE IF NOT EXISTS browser_accounts (
            device_id TEXT PRIMARY KEY,
            cart_json TEXT NOT NULL DEFAULT '[]',
            favorites_json TEXT NOT NULL DEFAULT '[]',
            currency TEXT NOT NULL DEFAULT 'GBP',
            coupon TEXT NOT NULL DEFAULT '',
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        '''
    )
    conn.commit()
    conn.close()


class StoreRequestHandler(SimpleHTTPRequestHandler):
    def send_json(self, status_code, payload):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/state':
            params = parse_qs(parsed.query)
            device_id = (params.get('deviceId') or [''])[0].strip()
            if not device_id:
                self.send_json(400, {'error': 'deviceId is required'})
                return
            conn = sqlite3.connect(DB_PATH)
            row = conn.execute(
                'SELECT cart_json, favorites_json, currency, coupon FROM browser_accounts WHERE device_id = ?',
                (device_id,),
            ).fetchone()
            conn.close()
            if not row:
                self.send_json(200, {'exists': False, 'cart': [], 'favorites': [], 'currency': 'GBP', 'coupon': ''})
                return
            self.send_json(
                200,
                {
                    'exists': True,
                    'cart': json.loads(row[0]),
                    'favorites': json.loads(row[1]),
                    'currency': row[2],
                    'coupon': row[3],
                },
            )
            return
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/state':
            length = int(self.headers.get('Content-Length', '0') or 0)
            raw = self.rfile.read(length) if length > 0 else b'{}'
            try:
                data = json.loads(raw.decode('utf-8'))
            except Exception:
                self.send_json(400, {'error': 'Invalid JSON'})
                return
            device_id = str(data.get('deviceId') or '').strip()
            if not device_id:
                self.send_json(400, {'error': 'deviceId is required'})
                return
            cart_json = json.dumps(data.get('cart') or [], ensure_ascii=False)
            favorites_json = json.dumps(data.get('favorites') or [], ensure_ascii=False)
            currency = str(data.get('currency') or 'GBP')
            coupon = str(data.get('coupon') or '')
            conn = sqlite3.connect(DB_PATH)
            conn.execute(
                '''
                INSERT INTO browser_accounts (device_id, cart_json, favorites_json, currency, coupon, updated_at)
                VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                ON CONFLICT(device_id) DO UPDATE SET
                    cart_json = excluded.cart_json,
                    favorites_json = excluded.favorites_json,
                    currency = excluded.currency,
                    coupon = excluded.coupon,
                    updated_at = CURRENT_TIMESTAMP
                ''',
                (device_id, cart_json, favorites_json, currency, coupon),
            )
            conn.commit()
            conn.close()
            self.send_json(200, {'ok': True})
            return
        self.send_json(404, {'error': 'Not found'})


if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', '8080'))
    server = ThreadingHTTPServer(('0.0.0.0', port), StoreRequestHandler)
    print(f'Server running on http://localhost:{port}')
    server.serve_forever()
