import urllib.request
import json
import concurrent.futures
from datetime import datetime

DIVISION_ID = "380200"
API_BASE = f"https://peakyblinders.shop/omnis/v3/division/{DIVISION_ID}"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read().decode("utf-8"))

def map_category(types):
    types = types or []
    if "Printed T-shirt" in types or "Vests" in types:
        return "T-shirts"
    elif "Printed Sweater" in types or "Printed Hoody" in types:
        return "Hoodies & Sweatshirts"
    else:
        return "Accessories"

def main():
    print("Fetching product list from API...")
    products_list_url = f"{API_BASE}/products?limit=250&page=1"
    raw_products = fetch_json(products_list_url)
    print(f"Total products fetched: {len(raw_products)}")

    # Load existing products.json to preserve desired curated ordering
    with open("products.json", "r", encoding="utf-8") as f:
        existing_pj = json.load(f)
        order_map = {p["id"]: i for i, p in enumerate(existing_pj["products"])}

    # Map products by slug (urlName)
    product_map = {p["urlName"]: p for p in raw_products}

    # Order slugs: known order first, then any extra
    all_slugs = list(product_map.keys())
    all_slugs.sort(key=lambda slug: order_map.get(slug, 999999))

    print("Fetching single product variants concurrently...")
    details_map = {}

    def fetch_product_detail(slug):
        url = f"{API_BASE}/products/{slug}"
        try:
            return slug, fetch_json(url)
        except Exception as e:
            print(f"Error fetching {slug}: {e}")
            return slug, None

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(fetch_product_detail, slug) for slug in all_slugs]
        for future in concurrent.futures.as_completed(futures):
            slug, detail = future.result()
            if detail:
                details_map[slug] = detail

    print(f"Successfully fetched details for {len(details_map)}/{len(all_slugs)} products.")

    total_variants = 0
    final_products = []

    for slug in all_slugs:
        p = product_map[slug]
        detail = details_map.get(slug) or {}

        # Category mapping
        category = map_category(p.get("types"))

        # Color thumbnails map: colorName -> hex
        color_thumbs = p.get("colorThumbnails") or {}

        # Build variants
        variants = []
        options = detail.get("options") or {}

        if isinstance(options, dict):
            # Iterate through colors
            for color_name, opt_data in options.items():
                hex_val = color_thumbs.get(color_name, {}).get("value", "")
                if not hex_val:
                    # fallback to groupColour or default
                    hex_val = opt_data.get("colour", "")

                sizes_dict = opt_data.get("sizes") or {}
                sizes_list = []
                for s_name, s_info in sizes_dict.items():
                    total_variants += 1
                    sizes_list.append({
                        "size": s_name,
                        "price": s_info.get("price", p.get("price", 0)),
                        "variantId": s_info.get("uuid", "")
                    })

                variants.append({
                    "color": color_name,
                    "colorHex": hex_val,
                    "sizes": sizes_list
                })

        # Image URL
        image_url = p.get("image") or ""
        product_url = f"https://peakyblinders.shop/product/{slug}/"

        final_products.append({
            "id": slug,
            "name": p.get("name"),
            "category": category,
            "price": p.get("price"),
            "image": image_url,
            "productUrl": product_url,
            "variants": variants
        })

    today_str = datetime.now().strftime("%Y-%m-%d")

    meta = {
        "source": "https://peakyblinders.shop/collection/peaky-blinders-official-merchandise/",
        "collectedAt": today_str,
        "productCount": len(final_products),
        "currency": "GBP",
        "note": "Product options are grouped by color. Size-level regular and sale prices are retained; stock levels are not included.",
        "variantSource": f"{API_BASE}/products/{{slug}}",
        "variantDataCollectedAt": today_str,
        "variantCount": total_variants
    }

    result = {
        "meta": meta,
        "products": final_products
    }

    output_path = "new_products.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f"Generated {output_path} successfully!")
    print(f"Total Products: {len(final_products)}")
    print(f"Total Variants: {total_variants}")

if __name__ == "__main__":
    main()
