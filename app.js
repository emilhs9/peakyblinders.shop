document.addEventListener('DOMContentLoaded', () => {
  const funtSvg = '<svg class="svg-inline--fa" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sterling-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M0 272C0 263.2 7.164 256 16 256H240C248.8 256 256 263.2 256 272C256 280.8 248.8 288 240 288H16C7.164 288 0 280.8 0 272zM168 64C119.4 64 80 103.4 80 152V278.1C80 336.9 67.02 394.9 42.12 448H304C312.8 448 320 455.2 320 464C320 472.8 312.8 480 304 480H16C10.35 480 5.124 477 2.242 472.2C-.641 467.3-.7504 461.3 1.954 456.3L3.066 454.3C32.55 400.2 48 339.7 48 278.1V152C48 85.73 101.7 32 168 32H175.1C188 32 200.8 34.08 213.1 38.16L293.1 64.82C301.4 67.62 305.1 76.68 303.2 85.06C300.4 93.44 291.3 97.97 282.9 95.18L202.1 68.52C193.1 65.53 184.6 64 175.1 64L168 64z"></path></svg>';
  const dollarSvg = '<svg class="svg-inline--fa" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M176 64.78C207.7 67.45 237.9 73.82 259.8 79.15C268.4 81.24 273.6 89.89 271.5 98.48C269.5 107.1 260.8 112.3 252.2 110.2C219.2 102.2 170.2 92.71 127.9 96.25C106.8 98.02 88.75 102.9 75.32 111.7C62.43 120.2 53.01 132.6 49.36 151.9C46.56 166.7 48.33 177.5 52.35 185.7C56.46 194.2 63.66 201.6 74.26 208.4C96.21 222.4 128.3 230.9 164.1 240.3L165.7 240.7C199.4 249.5 236.3 259.2 262.9 276.2C276.9 285.1 288.1 296.5 296.4 311.8C303.1 327.3 305.9 345.2 302.1 365.5C295.6 399.8 271.4 422.9 239.4 435.4C220.8 442.7 199.2 446.6 176 447.4V496C176 504.8 168.8 512 160 512C151.2 512 144 504.8 144 496V446.5C137.8 445.1 131.5 445.3 125.1 444.3L125 444.3C98.79 440.4 59.31 431.4 25.67 416.9C17.55 413.4 13.81 403.1 17.31 395.9C20.81 387.8 30.22 384 38.33 387.5C68.67 400.6 105.3 409 129.7 412.7C168.6 418.2 202.8 415.4 227.7 405.6C252.2 396 266.7 380.3 270.6 359.6C273.4 344.8 271.7 334.1 267.6 325.8C263.5 317.4 256.3 309.9 245.7 303.2C223.8 289.2 191.7 280.6 155.9 271.2L154.3 270.8C120.6 262 83.71 252.3 57.06 235.4C43.14 226.5 31.01 215 23.57 199.7C16.05 184.2 14.07 166.3 17.91 146C23.2 118 37.72 98.08 57.81 84.94C77.36 72.16 101.3 66.38 125.2 64.37C131.4 63.85 137.7 63.58 144 63.51V16C144 7.164 151.2 0 160 0C168.8 0 176 7.164 176 16V64.78Z"></path></svg>';
  const euroSvg = '<svg class="svg-inline--fa" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="euro-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M48 224C39.16 224 32 216.8 32 208C32 199.2 39.16 192 48 192H73.28C100.8 99.47 186.5 32 288 32H336.1C345.8 32 352.1 39.16 352.1 48C352.1 56.84 345.8 64 336.1 64H288C204.4 64 133.3 117.4 106.9 192H304C312.8 192 320 199.2 320 208C320 216.8 312.8 224 304 224H98.65C96.91 234.4 96 245.1 96 256C96 266.9 96.91 277.6 98.65 288H304C312.8 288 320 295.2 320 304C320 312.8 312.8 320 304 320H106.9C133.3 394.6 204.4 448 288 448H336.1C345.8 448 352.1 455.2 352.1 464C352.1 472.8 345.8 480 336.1 480H288C186.5 480 100.8 412.5 73.28 320H48C39.16 320 32 312.8 32 304C32 295.2 39.16 288 48 288H66.27C64.77 277.5 64 266.9 64 256C64 245.1 64.77 234.5 66.27 224H48z"></path></svg>';
  const yenSvg = '<svg class="svg-inline--fa" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="yen-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M160 220.6L291 38.65C296.2 31.48 306.2 29.85 313.4 35.02C320.5 40.18 322.1 50.18 316.1 57.35L196.1 224H272C280.8 224 288 231.2 288 240C288 248.8 280.8 256 272 256H176V320H272C280.8 320 288 327.2 288 336C288 344.8 280.8 352 272 352H176V464C176 472.8 168.8 480 160 480C151.2 480 144 472.8 144 464V352H48C39.16 352 32 344.8 32 336C32 327.2 39.16 320 48 320H144V256H48C39.16 256 32 248.8 32 240C32 231.2 39.16 224 48 224H123L3.017 57.35C-2.147 50.18-.5187 40.18 6.652 35.02C13.82 29.85 23.82 31.48 28.99 38.65L160 220.6z"></path></svg>';

  const mezenne = {
    GBP: { simvol: '£', kurs: 1.0, htmlSimvol: funtSvg, ad: 'Pound' },
    USD: { simvol: '$', kurs: 1.3113, htmlSimvol: dollarSvg, ad: 'United States Dollar' },
    EUR: { simvol: '€', kurs: 1.1962, htmlSimvol: euroSvg, ad: 'Euro' },
    CAD: { simvol: '$', kurs: 1.8713, htmlSimvol: dollarSvg + '<sub>c</sub>', ad: 'Canadian Dollar' },
    AUD: { simvol: '$', kurs: 1.9759, htmlSimvol: dollarSvg + '<sub>A</sub>', ad: 'Australian Dollar' },
    JPY: { simvol: '¥', kurs: 208.8597, htmlSimvol: yenSvg, ad: 'Japanese Yen' }
  };

  let cariValyuta = localStorage.getItem('peaky_valyuta') || 'GBP';
  if (!mezenne[cariValyuta]) cariValyuta = 'GBP';

  let kuponKodu = localStorage.getItem('peaky_kupon') || '';

  function cihazIdAl() {
    let id = '';
    try {
      id = localStorage.getItem('peaky_device_id') || '';
    } catch (e) { }
    if (!id) {
      const m = document.cookie.match(/(?:^|;\s*)peaky_device_id=([^;]+)/);
      if (m) id = decodeURIComponent(m[1]);
    }
    if (!id) {
      id = (window.crypto && crypto.randomUUID)
        ? crypto.randomUUID()
        : 'dev-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    }
    try {
      localStorage.setItem('peaky_device_id', id);
    } catch (e) { }
    document.cookie = 'peaky_device_id=' + encodeURIComponent(id) + '; path=/; max-age=315360000; SameSite=Lax';
    return id;
  }

  const cihazId = cihazIdAl();

  function idbAc() {
    return new Promise((resolve) => {
      if (!window.indexedDB) { resolve(null); return; }
      const req = indexedDB.open('PeakyStoreDB', 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains('account')) {
          db.createObjectStore('account');
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    });
  }

  async function idbYaz(melumat) {
    try {
      const db = await idbAc();
      if (!db) return;
      const tx = db.transaction('account', 'readwrite');
      tx.objectStore('account').put(melumat, cihazId);
    } catch (e) { }
  }

  async function idbOxu() {
    try {
      const db = await idbAc();
      if (!db) return null;
      return await new Promise((resolve) => {
        const tx = db.transaction('account', 'readonly');
        const req = tx.objectStore('account').get(cihazId);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  function hesabiBackendSaxla() {
    const simdi = Date.now();
    try { localStorage.setItem('peaky_updated_at', String(simdi)); } catch (e) { }
    const payload = {
      deviceId: cihazId,
      cart: sebet,
      favorites: favoriler,
      currency: cariValyuta,
      coupon: kuponKodu
    };
    idbYaz(payload);
    fetch('/api/state', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => { });
  }

  let sebet = [];
  try {
    const yaddas = localStorage.getItem('peaky_sebet');
    if (yaddas) sebet = JSON.parse(yaddas) || [];
  } catch (e) {
    sebet = [];
  }

  let favoriler = [];
  try {
    const favYaddas = localStorage.getItem('peaky_favoriler');
    if (favYaddas) favoriler = JSON.parse(favYaddas) || [];
  } catch (e) {
    favoriler = [];
  }

  let mehsullar = [];
  if (window.PEAKY_PRODUCTS_DATA && Array.isArray(window.PEAKY_PRODUCTS_DATA.products)) {
    mehsullar = window.PEAKY_PRODUCTS_DATA.products;
  }

  const sebetQutu = document.getElementById('cartDrawer');
  const arxaFon = document.getElementById('drawerBackdrop');
  const sebetAcDugmeler = document.querySelectorAll('.cart-open-trigger');
  const sebetBaglaDugme = document.getElementById('cartCloseBtn');
  const sebetSiyahi = document.getElementById('cartItemsList');
  const sebetCem = document.getElementById('cartSubtotal');
  const sebetSayac = document.getElementById('cartBadge');

  const favoriQutu = document.getElementById('favoritesDrawer');
  const favoriAcDugmeler = document.querySelectorAll('.favorites-open-trigger');
  const favoriBaglaDugme = document.getElementById('favoritesCloseBtn');
  const favoriSiyahi = document.getElementById('favoritesItemsList');
  const favoriSayac = document.getElementById('headerFavCount');

  const urekBosSvg = '<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M256 448l-30.16-27.44C118.7 323.4 48 259.4 48 180.9 48 117 98.11 67.15 162 67.15c36.12 0 70.79 16.81 94 43.31 23.21-26.5 57.88-43.31 94-43.31 63.89 0 114 49.85 114 113.7 0 78.47-70.7 142.5-177.8 239.7L256 448zM162 99.15c-46.31 0-82 35.42-82 81.7 0 64.94 64.61 123.5 162.5 212.3L256 405.4l13.5-12.26C367.4 304.3 432 245.8 432 180.9c0-46.28-35.69-81.7-82-81.7-33.89 0-66.16 20.47-80.74 51.18L256 178.1l-13.26-27.77C228.2 119.6 195.9 99.15 162 99.15z"></path></svg>';
  const urekDoluSvg = '<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>';

  const baxisModal = document.getElementById('quickViewModal');
  const baxisBagla = document.getElementById('modalCloseBtn');
  const baxisSekil = document.getElementById('modalImage');
  const baxisBasliq = document.getElementById('modalTitle');
  const baxisQiymet = document.getElementById('modalPrice');
  const baxisSebeteAt = document.getElementById('modalAddBtn');
  const baxisOlculer = document.querySelectorAll('#quickViewModal .size-pill');

  const valyutaSecici = document.getElementById('currencyPicker');
  const valyutaDugme = document.getElementById('currencyTrigger');
  const valyutaMenyu = document.getElementById('currencyDropdown');
  const valyutaVariantlar = document.querySelectorAll('.currency-menu-item');
  const headerValyutaSimvol = document.getElementById('headerCurrencySymbol');
  const footerValyutalar = document.querySelectorAll('.currency-symbol');

  const axtarisDugme = document.getElementById('searchTrigger');
  const axtarisModal = document.getElementById('searchModal');
  const axtarisBagla = document.getElementById('searchCloseBtn');
  const axtarisGiris = document.getElementById('searchInput');
  const axtarisNetice = document.getElementById('searchResults');

  const mobilMenyuDugme = document.getElementById('mobileMenuToggle');
  const mobilMenyuQutu = document.getElementById('mobileNavDrawer');
  const mobilMenyuBagla = document.getElementById('mobileNavClose');

  const bildirisQutu = document.getElementById('toastNotice');

  let aktivModalMehsul = null;
  let secilenOlcu = 'M';

  function bildirisGoster(metn) {
    if (!bildirisQutu) return;
    bildirisQutu.textContent = metn;
    bildirisQutu.classList.add('show');
    clearTimeout(bildirisQutu._taymer);
    bildirisQutu._taymer = setTimeout(() => {
      bildirisQutu.classList.remove('show');
    }, 2400);
  }

  function qiymetFormat(gbpDeyer, pId) {
    const v = mezenne[cariValyuta] || mezenne.GBP;
    if (pId && mehsullar && mehsullar.length > 0) {
      const p = mehsullar.find(x => x.id === pId);
      if (p && p.prices && p.prices[cariValyuta] !== undefined) {
        return `${v.simvol}${p.prices[cariValyuta]}`;
      }
    }
    const netice = Math.round(Number(gbpDeyer) * v.kurs);
    return `${v.simvol}${netice}`;
  }

  function qiymetleriYenile() {
    document.querySelectorAll('[data-base-price]').forEach(el => {
      const pId = el.getAttribute('data-product-id');
      const esas = parseFloat(el.getAttribute('data-base-price'));
      if (!isNaN(esas)) {
        el.textContent = qiymetFormat(esas, pId);
      }
    });

    if (headerValyutaSimvol && mezenne[cariValyuta]) {
      headerValyutaSimvol.innerHTML = mezenne[cariValyuta].htmlSimvol;
    }

    if (valyutaSecici) {
      valyutaSecici.value = cariValyuta;
    }

    valyutaVariantlar.forEach(variant => {
      variant.classList.toggle('active', variant.getAttribute('data-currency') === cariValyuta);
    });

    document.querySelectorAll('.currency-symbol').forEach(span => {
      const kod = span.getAttribute('data-currency') || 'GBP';
      span.classList.toggle('active', kod === cariValyuta);
    });

    sebetiYenile();
    favorileriYenile();
  }

  function valyutaDeyis(yeniKod) {
    if (!mezenne[yeniKod]) return;
    cariValyuta = yeniKod;
    localStorage.setItem('peaky_valyuta', cariValyuta);
    hesabiBackendSaxla();
    qiymetleriYenile();
    bildirisGoster(`${cariValyuta} (${mezenne[cariValyuta].simvol})`);
  }

  function sebetiYaddaSaxla() {
    try {
      localStorage.setItem('peaky_sebet', JSON.stringify(sebet));
    } catch (e) { }
    hesabiBackendSaxla();
  }

  const etiketSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>';
  const zibilSvg = '<svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';

  function bagQiymetFormat(deyer, simvol) {
    const num = Number(deyer) || 0;
    return `${simvol}${num.toFixed(2)}`;
  }

  function sebetiYenile() {
    if (!sebetSiyahi) return;

    const sebetAyaq = document.querySelector('.cart-drawer-footer');
    const v = mezenne[cariValyuta] || mezenne.GBP;

    if (sebet.length === 0) {
      sebetSiyahi.innerHTML = '<div class="cart-empty-message"><p>Your bag is empty.</p></div>';
      if (sebetCem) sebetCem.textContent = bagQiymetFormat(0, v.simvol);
      if (sebetSayac) sebetSayac.textContent = '0';
      if (sebetAyaq) sebetAyaq.style.display = 'none';
      return;
    }

    if (sebetAyaq) sebetAyaq.style.display = 'block';

    let cemValyuta = 0;
    let umumiSay = 0;
    let html = '';

    sebet.forEach((mal, sira) => {
      let tekQiymet = Math.round(Number(mal.basePrice) * v.kurs);
      if (mehsullar && mehsullar.length > 0) {
        const p = mehsullar.find(x => x.id === mal.id);
        if (p && p.prices && p.prices[cariValyuta] !== undefined) {
          tekQiymet = p.prices[cariValyuta];
        }
      }
      cemValyuta += tekQiymet * mal.quantity;
      umumiSay += mal.quantity;

      const secimler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n =>
        `<option value="${n}" ${n === mal.quantity ? 'selected' : ''}>${n}</option>`
      ).join('');
      const reng = mal.color || 'Black';

      html += `
        <div class="bag-item-row">
          <a href="/product/?id=${mal.id}" style="flex-shrink:0;">
            <img src="${mal.image}" alt="${mal.title}" class="bag-item-thumb">
          </a>
          <div class="bag-item-info">
            <a href="/product/?id=${mal.id}" style="text-decoration:none; color:inherit;">
              <h4 class="bag-item-title">${mal.title}</h4>
            </a>
            <div class="bag-item-meta">${reng} (size ${mal.size || 'M'})</div>
            <div class="bag-item-price-row tabular-nums" data-base-price="${mal.basePrice}" data-product-id="${mal.id}">
              ${etiketSvg}
              <span>${bagQiymetFormat(tekQiymet, v.simvol)}</span>
            </div>
          </div>
          <div class="bag-item-controls">
            <div class="bag-qty-wrap">
              <span class="bag-qty-label">Quantity</span>
              <select class="bag-qty-select" data-sira="${sira}" aria-label="Quantity">
                ${secimler}
              </select>
            </div>
            <button type="button" class="bag-remove-btn" data-emel="sil" data-sira="${sira}">
              ${zibilSvg}
              <span>Remove</span>
            </button>
          </div>
        </div>
      `;
    });

    sebetSiyahi.innerHTML = html;

    let yekun = cemValyuta;
    const statusMsg = document.getElementById('couponStatusMsg');
    if (kuponKodu.toUpperCase() === 'TAKE10') {
      yekun = cemValyuta * 0.9;
      if (statusMsg) statusMsg.textContent = 'TAKE10 applied (10% off)';
    } else if (statusMsg) {
      statusMsg.textContent = '';
    }

    if (sebetCem) sebetCem.textContent = bagQiymetFormat(yekun, v.simvol);
    if (sebetSayac) sebetSayac.textContent = umumiSay.toString();
  }

  function sebeteAt(mal) {
    const varOlan = sebet.find(x => x.id === mal.id && x.size === mal.size);
    if (varOlan) {
      varOlan.quantity += 1;
    } else {
      sebet.push({
        id: mal.id,
        title: mal.title,
        basePrice: mal.basePrice,
        size: mal.size || 'M',
        image: mal.image,
        quantity: 1
      });
    }
    sebetiYaddaSaxla();
    sebetiYenile();
    sebetiAc();
    bildirisGoster(`${mal.title}`);
  }

  function sebetiAc() {
    if (sebetQutu && arxaFon) {
      if (favoriQutu) favoriQutu.classList.remove('active');
      sebetQutu.classList.add('active');
      arxaFon.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function sebetiBagla() {
    if (sebetQutu && arxaFon) {
      sebetQutu.classList.remove('active');
      arxaFon.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  sebetAcDugmeler.forEach(duyme => duyme.addEventListener('click', (e) => {
    e.preventDefault();
    sebetiAc();
  }));

  if (sebetBaglaDugme) sebetBaglaDugme.addEventListener('click', sebetiBagla);
  function favoriDugmeHtml(pId) {
    const aktiv = favoriler.includes(pId);
    return `<button type="button" class="fav-heart-btn ${aktiv ? 'active' : ''}" data-fav-id="${pId}" aria-label="Toggle favorite">${aktiv ? urekDoluSvg : urekBosSvg}</button>`;
  }

  function favorileriYaddaSaxla() {
    try {
      localStorage.setItem('peaky_favoriler', JSON.stringify(favoriler));
    } catch (e) { }
    hesabiBackendSaxla();
  }

  function favoriDugmeleriYenile() {
    document.querySelectorAll('.fav-heart-btn').forEach(btn => {
      const id = btn.getAttribute('data-fav-id');
      const aktiv = favoriler.includes(id);
      btn.classList.toggle('active', aktiv);
      btn.innerHTML = aktiv ? urekDoluSvg : urekBosSvg;
    });
  }

  function favorileriYenile() {
    if (favoriSayac) {
      if (favoriler.length > 0) {
        favoriSayac.textContent = favoriler.length.toString();
        favoriSayac.style.display = 'block';
      } else {
        favoriSayac.textContent = '0';
        favoriSayac.style.display = 'none';
      }
    }

    favoriDugmeleriYenile();

    if (!favoriSiyahi) return;

    if (favoriler.length === 0) {
      favoriSiyahi.innerHTML = '<div class="cart-empty-message"><p>Your favorites list is empty.</p></div>';
      return;
    }

    let html = '';
    favoriler.forEach(id => {
      const p = mehsullar.find(x => x.id === id);
      if (!p) return;
      const qiymet = qiymetFormat(p.price, p.id);
      const sekil = p.featuredImage || p.image;
      html += `
        <div class="cart-item" style="display:flex; gap:14px; padding:14px 0; border-bottom:1px solid #222; align-items:center;">
          <a href="/product/?id=${p.id}" style="flex-shrink:0;">
            <img src="${sekil}" alt="${p.name}" class="cart-item-img" style="width:68px; height:80px; object-fit:cover;">
          </a>
          <div class="cart-item-details" style="flex:1;">
            <a href="/product/?id=${p.id}" style="color:inherit; text-decoration:none;">
              <h4 class="cart-item-title" style="font-family:var(--font-serif); font-size:0.95rem; margin-bottom:4px;">${p.name}</h4>
            </a>
            <div class="cart-item-price tabular-nums" style="font-weight:700; margin-bottom:8px;">${qiymet}</div>
            <div class="fav-item-actions">
              <button type="button" class="fav-add-btn" data-fav-add="${p.id}">Add to Bag</button>
              <button type="button" class="fav-remove-btn" data-fav-remove="${p.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    favoriSiyahi.innerHTML = html || '<div class="cart-empty-message"><p>Your favorites list is empty.</p></div>';
  }

  function favoriDeyis(pId) {
    if (!pId) return;
    const idx = favoriler.indexOf(pId);
    if (idx === -1) {
      favoriler.push(pId);
      const p = mehsullar.find(x => x.id === pId);
      bildirisGoster(p ? `${p.name} added to favorites` : 'Added to favorites');
    } else {
      favoriler.splice(idx, 1);
    }
    favorileriYaddaSaxla();
    favorileriYenile();
  }

  function favoriAc() {
    if (favoriQutu && arxaFon) {
      if (sebetQutu) sebetQutu.classList.remove('active');
      favoriQutu.classList.add('active');
      arxaFon.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function favoriBagla() {
    if (favoriQutu && arxaFon) {
      favoriQutu.classList.remove('active');
      if (!sebetQutu || !sebetQutu.classList.contains('active')) {
        arxaFon.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }

  favoriAcDugmeler.forEach(duyme => duyme.addEventListener('click', (e) => {
    e.preventDefault();
    favoriAc();
  }));

  if (favoriBaglaDugme) favoriBaglaDugme.addEventListener('click', favoriBagla);

  if (favoriSiyahi) {
    favoriSiyahi.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-fav-add]');
      if (addBtn) {
        const id = addBtn.getAttribute('data-fav-add');
        const p = mehsullar.find(x => x.id === id);
        if (p) {
          favoriBagla();
          sebeteAt({
            id: p.id,
            title: p.name,
            basePrice: p.price,
            image: p.featuredImage || p.image,
            size: 'M'
          });
        }
        return;
      }
      const remBtn = e.target.closest('[data-fav-remove]');
      if (remBtn) {
        const id = remBtn.getAttribute('data-fav-remove');
        favoriDeyis(id);
      }
    });
  }

  document.addEventListener('click', (e) => {
    const heartBtn = e.target.closest('.fav-heart-btn');
    if (!heartBtn) return;
    e.preventDefault();
    e.stopPropagation();
    const id = heartBtn.getAttribute('data-fav-id');
    favoriDeyis(id);
  });

  if (arxaFon) arxaFon.addEventListener('click', () => {
    sebetiBagla();
    favoriBagla();
    mobilMenyuBaglaFunksiya();
  });

  if (sebetSiyahi) {
    sebetSiyahi.addEventListener('click', (e) => {
      const d = e.target.closest('[data-emel]');
      if (!d) return;
      const emel = d.getAttribute('data-emel');
      const idx = parseInt(d.getAttribute('data-sira'), 10);
      if (isNaN(idx) || !sebet[idx]) return;

      if (emel === 'sil') {
        sebet.splice(idx, 1);
        sebetiYaddaSaxla();
        sebetiYenile();
      }
    });

    sebetSiyahi.addEventListener('change', (e) => {
      const sel = e.target.closest('.bag-qty-select');
      if (!sel) return;
      const idx = parseInt(sel.getAttribute('data-sira'), 10);
      const yeniSay = parseInt(sel.value, 10);
      if (isNaN(idx) || !sebet[idx] || isNaN(yeniSay) || yeniSay < 1) return;
      sebet[idx].quantity = yeniSay;
      sebetiYaddaSaxla();
      sebetiYenile();
    });
  }

  const couponToggleBtn = document.getElementById('couponToggleBtn');
  const couponFormWrap = document.getElementById('couponFormWrap');
  const couponInput = document.getElementById('couponInput');
  const couponApplyBtn = document.getElementById('couponApplyBtn');

  if (couponToggleBtn && couponFormWrap) {
    couponToggleBtn.addEventListener('click', () => {
      const aciq = couponToggleBtn.getAttribute('aria-expanded') === 'true';
      couponToggleBtn.setAttribute('aria-expanded', aciq ? 'false' : 'true');
      couponFormWrap.classList.toggle('collapsed', aciq);
    });
  }

  if (couponApplyBtn && couponInput) {
    if (kuponKodu) couponInput.value = kuponKodu;
    couponApplyBtn.addEventListener('click', () => {
      const kod = couponInput.value.trim().toUpperCase();
      if (kod === 'TAKE10') {
        kuponKodu = 'TAKE10';
        localStorage.setItem('peaky_kupon', kuponKodu);
        hesabiBackendSaxla();
        sebetiYenile();
        bildirisGoster('Coupon TAKE10 applied');
      } else if (!kod) {
        kuponKodu = '';
        localStorage.removeItem('peaky_kupon');
        hesabiBackendSaxla();
        sebetiYenile();
      } else {
        const statusMsg = document.getElementById('couponStatusMsg');
        if (statusMsg) {
          statusMsg.style.color = '#b91c1c';
          statusMsg.textContent = 'Invalid coupon code';
        }
      }
    });
  }

  async function hesabiYukle() {
    let backendData = null;
    try {
      const res = await fetch(`/api/state?deviceId=${encodeURIComponent(cihazId)}`, { cache: 'no-store' });
      if (res.ok) {
        backendData = await res.json();
      }
    } catch (e) { }

    if (backendData && backendData.exists) {
      const yerliBosdur = sebet.length === 0 && favoriler.length === 0;
      if (yerliBosdur) {
        sebet = Array.isArray(backendData.cart) ? backendData.cart : sebet;
        favoriler = Array.isArray(backendData.favorites) ? backendData.favorites : favoriler;
        if (backendData.currency && mezenne[backendData.currency]) {
          cariValyuta = backendData.currency;
        }
        if (typeof backendData.coupon === 'string') {
          kuponKodu = backendData.coupon;
        }
        try {
          localStorage.setItem('peaky_sebet', JSON.stringify(sebet));
          localStorage.setItem('peaky_favoriler', JSON.stringify(favoriler));
          localStorage.setItem('peaky_valyuta', cariValyuta);
          localStorage.setItem('peaky_kupon', kuponKodu);
        } catch (e) { }
        idbYaz({ deviceId: cihazId, cart: sebet, favorites: favoriler, currency: cariValyuta, coupon: kuponKodu });
      } else {
        hesabiBackendSaxla();
      }
    } else {
      const idbData = await idbOxu();
      if (idbData) {
        if ((!sebet || sebet.length === 0) && Array.isArray(idbData.cart) && idbData.cart.length > 0) {
          sebet = idbData.cart;
          try { localStorage.setItem('peaky_sebet', JSON.stringify(sebet)); } catch (e) { }
        }
        if ((!favoriler || favoriler.length === 0) && Array.isArray(idbData.favorites) && idbData.favorites.length > 0) {
          favoriler = idbData.favorites;
          try { localStorage.setItem('peaky_favoriler', JSON.stringify(favoriler)); } catch (e) { }
        }
      }
      if (sebet.length > 0 || favoriler.length > 0) {
        hesabiBackendSaxla();
      }
    }
    qiymetleriYenile();
  }

  hesabiYukle();

  function baxisAc(mal) {
    aktivModalMehsul = mal;
    secilenOlcu = 'M';
    if (baxisSekil) {
      baxisSekil.src = mal.featuredImage || mal.image;
      baxisSekil.alt = mal.name || mal.title;
    }
    if (baxisBasliq) baxisBasliq.textContent = mal.name || mal.title;
    if (baxisQiymet) {
      const q = mal.price !== undefined ? mal.price : mal.basePrice;
      baxisQiymet.setAttribute('data-base-price', q);
      baxisQiymet.setAttribute('data-product-id', mal.id);
      baxisQiymet.textContent = qiymetFormat(q, mal.id);
    }

    baxisOlculer.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-size') === 'M');
    });

    if (baxisModal) {
      baxisModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function baxisBaglaFunksiya() {
    if (baxisModal) {
      baxisModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (baxisBagla) baxisBagla.addEventListener('click', baxisBaglaFunksiya);
  if (baxisModal) {
    baxisModal.addEventListener('click', (e) => {
      if (e.target === baxisModal) baxisBaglaFunksiya();
    });
  }

  baxisOlculer.forEach(pill => {
    pill.addEventListener('click', () => {
      baxisOlculer.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      secilenOlcu = pill.getAttribute('data-size') || 'M';
    });
  });

  if (baxisSebeteAt) {
    baxisSebeteAt.addEventListener('click', () => {
      if (aktivModalMehsul) {
        const ad = aktivModalMehsul.name || aktivModalMehsul.title;
        const q = aktivModalMehsul.price !== undefined ? aktivModalMehsul.price : aktivModalMehsul.basePrice;
        sebeteAt({
          id: aktivModalMehsul.id,
          title: ad,
          basePrice: q,
          image: aktivModalMehsul.featuredImage || aktivModalMehsul.image,
          size: secilenOlcu
        });
        baxisBaglaFunksiya();
      }
    });
  }

  function basSehifeVitrin(siyahi) {
    const qefes = document.getElementById('featuredProductsGrid');
    if (!qefes || !siyahi || siyahi.length === 0) return;

    const secilmisler = siyahi.slice(0, 8);
    qefes.innerHTML = secilmisler.map(p => `
      <a href="/product/?id=${p.id}" class="product-card" data-product-id="${p.id}">
        <div class="product-card-image-wrap">
          <img src="${p.featuredImage || p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
          ${favoriDugmeHtml(p.id)}
        </div>
        <div class="product-card-info">
          <h3 class="product-card-title">${p.name}</h3>
        </div>
      </a>
    `).join('');
  }

  function basSehifeSlayder(siyahi) {
    const zolaq = document.getElementById('tshirtsCarouselTrack');
    if (!zolaq || !siyahi || siyahi.length === 0) return;

    const nizam = [
      { id: 'solomons-bakery-oversized-sweatshi', name: 'Solomons Bakery Oversized Sweatshirt', price: 35, image: '/images/img-15-solomons-bakery-oversized-swea.png' },
      { id: 'bleak-midwinter-oversized-jumper', name: 'Bleak Midwinter Oversized Sweatshirt', price: 40, image: '/images/img-16-bleak-midwinter-oversized-swea.png' },
      { id: 'the-streets-belong-to-us-t-shirt', name: 'The Streets Belong to Us T-Shirt', price: 22, image: '/images/img-17-the-streets-belong-to-us-t-shi.png' },
      { id: 'peaky-blinders-women-t-shirt', name: 'Take Over T-Shirt', price: 22, image: '/images/img-18-take-over-t-shirt.png' },
      { id: 'peaky-blinders-merch-hoodie', name: 'No F**king Fighting Hoodie', price: 47, image: '/images/img-19-no-f-king-fighting-hoodie.png' },
      { id: 'peaky-blinders-by-order-hoodie', name: 'Peaky Blinders Bakerboy Hoodie', price: 47, image: '/images/img-20-peaky-blinders-bakerboy-hoodie.png' },
      { id: 'king-of-hearts-t-shirt', name: 'King of Hearts T-Shirt', price: 22, image: '/images/img-21-king-of-hearts-t-shirt.png' },
      { id: 'bleak-midwinter-t-shirt', name: 'Bleak Midwinter T-Shirt', price: 22, image: '/images/img-22-bleak-midwinter-t-shirt.png' },
      { id: 'solomons-bakery-t-shirt', name: 'Solomons Bakery T-Shirt', price: 22, image: '/images/img-23-solomons-bakery-t-shirt.png' },
      { id: 'the-final-message-t-shirt', name: 'Letter to Tom Shelby T-Shirt', price: 22, image: '/images/img-24-letter-to-tom-shelby-t-shirt.png' },
      { id: 'peaky-blinders-king-of-hearts-t-shirt', name: 'King of Hearts (Back Print) T-Shirt', price: 30, image: '/images/img-35-king-of-hearts-backprint.png' },
      { id: 'shelby-co-ltd-t-shirt', name: 'Shelby Co. Ltd T-Shirt', price: 22, image: '/images/img-36-shelby-co-ltd-t-shirt.png' }
    ];

    zolaq.innerHTML = nizam.map(c => {
      const tap = siyahi.find(x => x.id === c.id) || c;
      const basliq = c.name;
      const sekil = c.image || tap.image;
      const qiym = c.price || tap.price;
      return `
        <a href="/product/?id=${c.id}" class="tshirt-carousel-card" data-product-id="${c.id}">
          <div class="tshirt-card-image-wrap">
            <img src="${sekil}" alt="${basliq}" class="product-card-image" loading="lazy">
            ${favoriDugmeHtml(c.id)}
          </div>
          <div class="tshirt-card-info">
            <h3 class="tshirt-card-title">${basliq}</h3>
            <div class="tshirt-card-price tabular-nums" data-base-price="${qiym}" data-product-id="${c.id}">${qiymetFormat(qiym, c.id)}</div>
          </div>
        </a>
      `;
    }).join('') + '<div class="tshirt-carousel-spacer" aria-hidden="true"></div>';

    slayderQulaqAs(zolaq);
  }

  function slayderQulaqAs(zolaq) {
    const solOx = document.getElementById('tshirtsPrevBtn');
    const sagOx = document.getElementById('tshirtsNextBtn');
    if (!zolaq) return;

    const oxYenile = () => {
      const surusme = zolaq.scrollLeft;
      const maks = zolaq.scrollWidth - zolaq.clientWidth;
      if (solOx) solOx.style.display = surusme > 15 ? 'flex' : 'none';
      if (sagOx) sagOx.style.display = (maks > 15 && surusme < maks - 15) ? 'flex' : 'none';
    };

    if (sagOx) {
      sagOx.onclick = () => {
        zolaq.scrollTo({ left: zolaq.scrollWidth, behavior: 'smooth' });
        setTimeout(oxYenile, 350);
      };
    }

    if (solOx) {
      solOx.onclick = () => {
        zolaq.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(oxYenile, 350);
      };
    }

    let basildi = false;
    let basX = 0;
    let surusIlk = 0;
    let cekildi = false;

    zolaq.onmousedown = (e) => {
      basildi = true;
      cekildi = false;
      basX = e.pageX - zolaq.offsetLeft;
      surusIlk = zolaq.scrollLeft;
      zolaq.style.scrollBehavior = 'auto';
      zolaq.style.cursor = 'grabbing';
    };

    window.addEventListener('mouseup', () => {
      if (!basildi) return;
      basildi = false;
      zolaq.style.scrollBehavior = 'smooth';
      zolaq.style.cursor = 'grab';
      oxYenile();
    });

    zolaq.onmousemove = (e) => {
      if (!basildi) return;
      e.preventDefault();
      const x = e.pageX - zolaq.offsetLeft;
      const addim = (x - basX);
      if (Math.abs(addim) > 5) cekildi = true;
      zolaq.scrollLeft = surusIlk - addim;
    };

    zolaq.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (cekildi) e.preventDefault();
      });
    });

    zolaq.addEventListener('scroll', oxYenile, { passive: true });
    window.addEventListener('resize', oxYenile);
    oxYenile();
  }

  function sehifeBolmesiTap() {
    const yol = window.location.pathname.toLowerCase();
    if (yol.includes('t-shirts')) return 't-shirts';
    if (yol.includes('sweatshirts')) return 'sweatshirts';
    if (yol.includes('accessories')) return 'accessories';
    if (yol.includes('oversized')) return 'oversized';
    if (yol.includes('women')) return 'women';
    if (yol.includes('men')) return 'men';
    if (yol.includes('gift-guide')) return 'gift-guide';
    return null;
  }

  function mehsulFiltrle(siyahi, bolme) {
    if (!bolme) return siyahi;
    switch (bolme) {
      case 't-shirts':
        return siyahi.filter(p => p.category === 'T-shirts');
      case 'sweatshirts':
        return siyahi.filter(p => p.category === 'Hoodies & Sweatshirts');
      case 'accessories':
        return siyahi.filter(p => p.category === 'Accessories');
      case 'oversized':
        return siyahi.filter(p => p.name.toLowerCase().includes('oversized'));
      case 'men':
        return siyahi.filter(p => p.category === 'T-shirts' || p.category === 'Hoodies & Sweatshirts');
      case 'women':
        return siyahi.slice();
      case 'gift-guide':
        return siyahi.filter(p => p.category === 'Accessories' || p.price <= 25);
      default:
        return siyahi;
    }
  }

  function kataloqQefesiQur(siyahi) {
    const qefes = document.getElementById('productsGrid') || document.querySelector('.product-grid-12');
    if (!qefes) return;

    if (!siyahi || siyahi.length === 0) {
      qefes.innerHTML = '<p style="text-align:center; grid-column:1 / -1; padding:3rem 0; color:#888;">No products found.</p>';
      return;
    }

    qefes.innerHTML = siyahi.map(p => `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-card-image-wrap">
          <a href="/product/?id=${p.id}" style="display:block;">
            <img src="${p.featuredImage || p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
          </a>
          ${favoriDugmeHtml(p.id)}
          <button class="quick-view-btn" data-product-id="${p.id}" aria-label="Quick view ${p.name}">Quick View</button>
        </div>
        <div class="product-card-info">
          <a href="/product/?id=${p.id}" style="text-decoration:none; color:inherit;">
            <h3 class="product-card-title">${p.name}</h3>
          </a>
          <div class="product-card-price tabular-nums" data-base-price="${p.price}" data-product-id="${p.id}">${qiymetFormat(p.price, p.id)}</div>
          <button class="product-add-btn" data-product-id="${p.id}">Add to Bag</button>
        </div>
      </article>
    `).join('');

    qefes.querySelectorAll('.quick-view-btn').forEach(d => {
      d.addEventListener('click', (e) => {
        e.preventDefault();
        const id = d.getAttribute('data-product-id');
        const tap = mehsullar.find(x => x.id === id);
        if (tap) baxisAc(tap);
      });
    });

    qefes.querySelectorAll('.product-add-btn').forEach(d => {
      d.addEventListener('click', (e) => {
        e.preventDefault();
        const id = d.getAttribute('data-product-id');
        const tap = mehsullar.find(x => x.id === id);
        if (tap) {
          sebeteAt({
            id: tap.id,
            title: tap.name,
            basePrice: tap.price,
            image: tap.featuredImage || tap.image,
            size: 'M'
          });
        }
      });
    });
  }

  function bolmeSehifesiQur() {
    const bolme = sehifeBolmesiTap();
    if (!bolme) return;

    let bolmeMehsullari = mehsulFiltrle(mehsullar, bolme);

    const sayEl = document.getElementById('collectionItemCount') || document.querySelector('.collection-item-count');
    if (sayEl) {
      sayEl.textContent = `Showing ${bolmeMehsullari.length} Products`;
    }

    kataloqQefesiQur(bolmeMehsullari);

    const secimSirala = document.getElementById('sortSelect');
    if (secimSirala) {
      secimSirala.addEventListener('change', (e) => {
        const val = e.target.value;
        let siralanmis = [...bolmeMehsullari];
        if (val === 'price-asc') {
          siralanmis.sort((a, b) => {
            const pa = (a.prices && a.prices[cariValyuta] !== undefined) ? a.prices[cariValyuta] : a.price;
            const pb = (b.prices && b.prices[cariValyuta] !== undefined) ? b.prices[cariValyuta] : b.price;
            return pa - pb;
          });
        } else if (val === 'price-desc') {
          siralanmis.sort((a, b) => {
            const pa = (a.prices && a.prices[cariValyuta] !== undefined) ? a.prices[cariValyuta] : a.price;
            const pb = (b.prices && b.prices[cariValyuta] !== undefined) ? b.prices[cariValyuta] : b.price;
            return pb - pa;
          });
        } else if (val === 'name-asc') {
          siralanmis.sort((a, b) => a.name.localeCompare(b.name));
        }
        kataloqQefesiQur(siralanmis);
      });
    }
  }

  function mehsulDetaliQur() {
    const basliqEl = document.getElementById('detailTitle');
    if (!basliqEl) return;

    const parametr = new URLSearchParams(window.location.search);
    const id = parametr.get('id');

    let mal = mehsullar.find(p => p.id === id) || mehsullar[0];
    if (!mal) return;

    document.title = `${mal.name} | Peaky Blinders Official Store`;
    basliqEl.textContent = mal.name;

    const corekBasliq = document.getElementById('detailBreadcrumbTitle');
    if (corekBasliq) corekBasliq.textContent = mal.name;

    const sekilEl = document.getElementById('detailImage');
    if (sekilEl) {
      sekilEl.src = mal.featuredImage || mal.image;
      sekilEl.alt = mal.name;
      if (sekilEl.parentElement) {
        sekilEl.parentElement.style.position = 'relative';
        const eskiBtn = sekilEl.parentElement.querySelector('.fav-heart-btn');
        if (eskiBtn) eskiBtn.remove();
        sekilEl.parentElement.insertAdjacentHTML('beforeend', favoriDugmeHtml(mal.id));
      }
    }

    const qiymetEl = document.getElementById('detailPrice');
    if (qiymetEl) {
      qiymetEl.setAttribute('data-base-price', mal.price);
      qiymetEl.setAttribute('data-product-id', mal.id);
      qiymetEl.textContent = qiymetFormat(mal.price, mal.id);
    }

    const bolmeKecid = document.getElementById('detailCatLink');
    if (bolmeKecid) {
      bolmeKecid.textContent = mal.category || 'Collection';
      if (mal.category === 'T-shirts') bolmeKecid.href = '/t-shirts/';
      else if (mal.category === 'Hoodies & Sweatshirts') bolmeKecid.href = '/sweatshirts/';
      else if (mal.category === 'Accessories') bolmeKecid.href = '/accessories/';
      else bolmeKecid.href = '/t-shirts/';
    }

    let detalOlcu = 'M';
    const olcuQutu = document.querySelector('.size-options');
    if (olcuQutu && mal.variants && mal.variants[0] && Array.isArray(mal.variants[0].sizes)) {
      const olcuSiyahisi = mal.variants[0].sizes.map(s => s.size);
      if (olcuSiyahisi.length > 0) {
        detalOlcu = olcuSiyahisi.includes('M') ? 'M' : olcuSiyahisi[0];
        olcuQutu.innerHTML = olcuSiyahisi.map(sz => `
          <button class="size-pill ${sz === detalOlcu ? 'active' : ''}" data-size="${sz}">${sz}</button>
        `).join('');
      }
    }

    document.querySelectorAll('.detail-size-section .size-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.detail-size-section .size-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        detalOlcu = pill.getAttribute('data-size') || 'M';
      });
    });

    const atDugme = document.getElementById('detailAddBtn');
    if (atDugme) {
      atDugme.addEventListener('click', () => {
        sebeteAt({
          id: mal.id,
          title: mal.name,
          basePrice: mal.price,
          image: mal.featuredImage || mal.image,
          size: detalOlcu
        });
      });
    }
  }

  function axtarisGoster(sorgu) {
    if (!axtarisNetice) return;
    const q = sorgu.trim().toLowerCase();

    const uygunlar = q
      ? mehsullar.filter(p => p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q)))
      : mehsullar.slice(0, 8);

    if (uygunlar.length === 0) {
      axtarisNetice.innerHTML = '<p style="text-align:center; padding:2rem; color:#888;">No products found.</p>';
      return;
    }

    axtarisNetice.innerHTML = uygunlar.map(p => `
      <div class="search-result-item" data-id="${p.id}" style="display:flex; gap:12px; align-items:center; padding:10px 0; border-bottom:1px solid #333; cursor:pointer;">
        <img src="${p.featuredImage || p.image}" alt="${p.name}" style="width:48px; height:58px; object-fit:cover;">
        <div>
          <div style="font-weight:700; font-family:var(--font-serif); font-size:0.92rem; color:#fff;">${p.name}</div>
          <div style="color:#aaa; font-size:0.85rem;" data-base-price="${p.price}" data-product-id="${p.id}">${qiymetFormat(p.price, p.id)}</div>
        </div>
      </div>
    `).join('');

    axtarisNetice.querySelectorAll('.search-result-item').forEach(setir => {
      setir.addEventListener('click', () => {
        const id = setir.getAttribute('data-id');
        window.location.href = `/product/?id=${id}`;
      });
    });
  }

  function axtarisAcFunksiya() {
    if (axtarisModal) {
      axtarisModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (axtarisGiris) {
        axtarisGiris.value = '';
        setTimeout(() => axtarisGiris.focus(), 80);
      }
      axtarisGoster('');
    }
  }

  function axtarisBaglaFunksiya() {
    if (axtarisModal) {
      axtarisModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function sehifeAxtarisiIcraEt(sorgu, urlYenile = true) {
    const netice = document.getElementById('searchResultsGrid');
    if (!netice) return;

    const q = (sorgu || '').trim();
    if (!q) {
      netice.innerHTML = '';
      if (urlYenile) {
        history.pushState(null, '', window.location.pathname);
      }
      return;
    }

    if (urlYenile) {
      history.pushState(null, '', `?search=${encodeURIComponent(q)}`);
    }

    const qLower = q.toLowerCase();
    const tapilanlar = mehsullar.filter(p => {
      const ad = (p.name || '').toLowerCase();
      const kat = (p.category || '').toLowerCase();
      const id = (p.id || '').toLowerCase();
      return ad.includes(qLower) || kat.includes(qLower) || id.includes(qLower);
    });

    if (tapilanlar.length === 0) {
      netice.innerHTML = `<div class="search-empty-state"><p>No products found matching "${q}".</p></div>`;
      return;
    }

    netice.innerHTML = tapilanlar.map(p => `
      <a href="/product/?id=${p.id}" class="search-product-card" data-product-id="${p.id}">
        <div class="search-product-image-wrap">
          <img src="${p.featuredImage || p.image}" alt="${p.name}" class="search-product-image" loading="lazy">
          ${favoriDugmeHtml(p.id)}
        </div>
        <div class="search-product-info">
          <h3 class="search-product-title">${p.name}</h3>
          <div class="search-product-price tabular-nums" data-base-price="${p.price}" data-product-id="${p.id}">${qiymetFormat(p.price, p.id)}</div>
        </div>
      </a>
    `).join('');
  }

  function axtarisSehifesiniQur() {
    const form = document.getElementById('searchPageForm');
    const giris = document.getElementById('searchPageInput');
    const submitBtn = document.getElementById('searchPageSubmit');
    const netice = document.getElementById('searchResultsGrid');
    if (!form || !giris || !netice) return;

    giris.addEventListener('input', () => {
      if (submitBtn) {
        if (giris.value.trim().length > 0) {
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
        } else {
          submitBtn.style.opacity = '0';
          submitBtn.style.pointerEvents = 'none';
        }
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      sehifeAxtarisiIcraEt(giris.value, true);
    });

    const parametrler = new URLSearchParams(window.location.search);
    const ilkinSorgu = parametrler.get('search') || parametrler.get('q') || '';
    if (ilkinSorgu.trim()) {
      giris.value = ilkinSorgu.trim();
      if (submitBtn) {
        submitBtn.style.opacity = '1';
        submitBtn.style.pointerEvents = 'auto';
      }
      sehifeAxtarisiIcraEt(ilkinSorgu.trim(), false);
    } else {
      if (submitBtn) {
        submitBtn.style.opacity = '0';
        submitBtn.style.pointerEvents = 'none';
      }
      netice.innerHTML = '';
      giris.focus();
    }

    window.addEventListener('popstate', () => {
      const p = new URLSearchParams(window.location.search);
      const s = p.get('search') || p.get('q') || '';
      giris.value = s;
      if (submitBtn) {
        if (s.trim().length > 0) {
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
        } else {
          submitBtn.style.opacity = '0';
          submitBtn.style.pointerEvents = 'none';
        }
      }
      sehifeAxtarisiIcraEt(s, false);
    });
  }

  if (axtarisDugme) {
    axtarisDugme.addEventListener('click', (e) => {
      if (window.location.pathname.replace(/\/+$/, '').endsWith('/search')) {
        e.preventDefault();
        const sehifeGiris = document.getElementById('searchPageInput');
        if (sehifeGiris) sehifeGiris.focus();
      }
    });
  }

  if (axtarisBagla) axtarisBagla.addEventListener('click', axtarisBaglaFunksiya);
  if (axtarisModal) {
    axtarisModal.addEventListener('click', (e) => {
      if (e.target === axtarisModal) axtarisBaglaFunksiya();
    });
  }

  if (axtarisGiris) {
    axtarisGiris.addEventListener('input', (e) => {
      axtarisGoster(e.target.value);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      axtarisBaglaFunksiya();
      baxisBaglaFunksiya();
      sebetiBagla();
      mobilMenyuBaglaFunksiya();
    }
  });

  if (valyutaDugme && valyutaMenyu) {
    valyutaDugme.addEventListener('click', (hadise) => {
      hadise.stopPropagation();
      const aciqdir = valyutaMenyu.classList.contains('active');
      valyutaMenyu.classList.toggle('active', !aciqdir);
      valyutaDugme.setAttribute('aria-expanded', (!aciqdir).toString());
    });

    document.addEventListener('click', (hadise) => {
      if (!valyutaMenyu.contains(hadise.target) && hadise.target !== valyutaDugme && !valyutaDugme.contains(hadise.target)) {
        valyutaMenyu.classList.remove('active');
        valyutaDugme.setAttribute('aria-expanded', 'false');
      }
    });

    valyutaVariantlar.forEach(variant => {
      variant.addEventListener('click', (hadise) => {
        hadise.stopPropagation();
        const kod = variant.getAttribute('data-currency');
        if (kod) {
          valyutaDeyis(kod);
          valyutaMenyu.classList.remove('active');
          valyutaDugme.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  if (valyutaSecici) {
    valyutaSecici.addEventListener('change', (e) => {
      valyutaDeyis(e.target.value);
    });
  }

  document.querySelectorAll('.currency-symbol').forEach(duyme => {
    duyme.addEventListener('click', () => {
      const kod = duyme.getAttribute('data-currency') || 'GBP';
      valyutaDeyis(kod);
    });
  });

  qiymetleriYenile();

  function mobilMenyuAcFunksiya() {
    if (mobilMenyuQutu && arxaFon) {
      mobilMenyuQutu.classList.add('active');
      arxaFon.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function mobilMenyuBaglaFunksiya() {
    if (mobilMenyuQutu && arxaFon) {
      mobilMenyuQutu.classList.remove('active');
      arxaFon.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobilMenyuDugme) mobilMenyuDugme.addEventListener('click', mobilMenyuAcFunksiya);
  if (mobilMenyuBagla) mobilMenyuBagla.addEventListener('click', mobilMenyuBaglaFunksiya);

  const abuneForm = document.getElementById('newsletterForm');
  if (abuneForm) {
    abuneForm.addEventListener('submit', (e) => {
      e.preventDefault();
      bildirisGoster('Thank you for subscribing to Peaky Blinders updates.');
      abuneForm.reset();
    });
  }

  const odenisDugmeleri = document.querySelectorAll('.checkout-btn');
  odenisDugmeleri.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      bildirisGoster('Redirecting to secure checkout...');
    });
  });

  function proqramiBaslat() {
    basSehifeVitrin(mehsullar);
    basSehifeSlayder(mehsullar);
    bolmeSehifesiQur();
    mehsulDetaliQur();
    axtarisSehifesiniQur();
    sebetiYenile();
    qiymetleriYenile();
  }

  if (mehsullar && mehsullar.length > 0) {
    proqramiBaslat();
  }

  fetch('/products.json')
    .then(cavab => cavab.json())
    .then(data => {
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        mehsullar = data.products;
        proqramiBaslat();
      }
    })
    .catch(() => { });
});