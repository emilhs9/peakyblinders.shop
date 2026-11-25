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

  let sebet = [];
  try {
    const yaddas = localStorage.getItem('peaky_sebet');
    if (yaddas) sebet = JSON.parse(yaddas) || [];
  } catch (e) {
    sebet = [];
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
  }

  function valyutaDeyis(yeniKod) {
    if (!mezenne[yeniKod]) return;
    cariValyuta = yeniKod;
    localStorage.setItem('peaky_valyuta', cariValyuta);
    qiymetleriYenile();
    bildirisGoster(`${cariValyuta} (${mezenne[cariValyuta].simvol})`);
  }

  function sebetiYaddaSaxla() {
    try {
      localStorage.setItem('peaky_sebet', JSON.stringify(sebet));
    } catch (e) {}
  }

  function sebetiYenile() {
    if (!sebetSiyahi) return;

    const sebetAyaq = document.querySelector('.cart-drawer-footer');

    if (sebet.length === 0) {
      sebetSiyahi.innerHTML = '<div class="cart-empty-message"><p>Your bag is empty.</p></div>';
      if (sebetCem) sebetCem.textContent = qiymetFormat(0);
      if (sebetSayac) sebetSayac.textContent = '0';
      if (sebetAyaq) sebetAyaq.style.display = 'none';
      return;
    }

    if (sebetAyaq) sebetAyaq.style.display = 'block';

    let cemValyuta = 0;
    let umumiSay = 0;
    let html = '';
    const v = mezenne[cariValyuta] || mezenne.GBP;

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

      html += `
        <div class="cart-item" style="display:flex; gap:14px; padding:14px 0; border-bottom:1px solid #222; align-items:center;">
          <img src="${mal.image}" alt="${mal.title}" class="cart-item-img" style="width:68px; height:80px; object-fit:cover;">
          <div class="cart-item-details" style="flex:1;">
            <h4 class="cart-item-title" style="font-family:var(--font-serif); font-size:0.95rem; margin-bottom:4px;">${mal.title}</h4>
            <div class="cart-item-size" style="font-size:0.8rem; color:#aaa; margin-bottom:6px;">Size: ${mal.size}</div>
            <div class="cart-item-price tabular-nums" style="font-weight:700; margin-bottom:8px;" data-base-price="${mal.basePrice}" data-product-id="${mal.id}">${v.simvol}${tekQiymet}</div>
            <div class="cart-item-qty" style="display:flex; align-items:center; gap:8px;">
              <button class="qty-btn" data-emel="azalt" data-sira="${sira}" style="width:26px; height:26px; border:1px solid #444; color:#fff; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;">-</button>
              <span class="qty-count tabular-nums" style="font-size:0.9rem; min-width:18px; text-align:center;">${mal.quantity}</span>
              <button class="qty-btn" data-emel="artir" data-sira="${sira}" style="width:26px; height:26px; border:1px solid #444; color:#fff; display:inline-flex; align-items:center; justify-content:center; cursor:pointer;">+</button>
              <button class="qty-btn" data-emel="sil" data-sira="${sira}" style="margin-left:auto; background:none; border:none; color:#888; text-decoration:underline; font-size:0.8rem; cursor:pointer;">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    sebetSiyahi.innerHTML = html;
    if (sebetCem) sebetCem.textContent = `${v.simvol}${cemValyuta}`;
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
  if (arxaFon) arxaFon.addEventListener('click', () => {
    sebetiBagla();
    mobilMenyuBaglaFunksiya();
  });

  if (sebetSiyahi) {
    sebetSiyahi.addEventListener('click', (e) => {
      const d = e.target.closest('[data-emel]');
      if (!d) return;
      const emel = d.getAttribute('data-emel');
      const idx = parseInt(d.getAttribute('data-sira'), 10);
      if (isNaN(idx) || !sebet[idx]) return;

      if (emel === 'artir') {
        sebet[idx].quantity += 1;
      } else if (emel === 'azalt') {
        sebet[idx].quantity -= 1;
        if (sebet[idx].quantity <= 0) {
          sebet.splice(idx, 1);
        }
      } else if (emel === 'sil') {
        sebet.splice(idx, 1);
      }
      sebetiYaddaSaxla();
      sebetiYenile();
    });
  }

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
      <a href="product.html?id=${p.id}" class="product-card" data-product-id="${p.id}">
        <div class="product-card-image-wrap">
          <img src="${p.featuredImage || p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
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
      { id: 'solomons-bakery-oversized-sweatshi', name: 'Solomons Bakery Oversized Sweatshirt', price: 35, image: 'images/img-15-solomons-bakery-oversized-swea.png' },
      { id: 'bleak-midwinter-oversized-jumper', name: 'Bleak Midwinter Oversized Sweatshirt', price: 40, image: 'images/img-16-bleak-midwinter-oversized-swea.png' },
      { id: 'the-streets-belong-to-us-t-shirt', name: 'The Streets Belong to Us T-Shirt', price: 22, image: 'images/img-17-the-streets-belong-to-us-t-shi.png' },
      { id: 'peaky-blinders-women-t-shirt', name: 'Take Over T-Shirt', price: 22, image: 'images/img-18-take-over-t-shirt.png' },
      { id: 'peaky-blinders-merch-hoodie', name: 'No F**king Fighting Hoodie', price: 47, image: 'images/img-19-no-f-king-fighting-hoodie.png' },
      { id: 'peaky-blinders-by-order-hoodie', name: 'Peaky Blinders Bakerboy Hoodie', price: 47, image: 'images/img-20-peaky-blinders-bakerboy-hoodie.png' },
      { id: 'king-of-hearts-t-shirt', name: 'King of Hearts T-Shirt', price: 22, image: 'images/img-21-king-of-hearts-t-shirt.png' },
      { id: 'bleak-midwinter-t-shirt', name: 'Bleak Midwinter T-Shirt', price: 22, image: 'images/img-22-bleak-midwinter-t-shirt.png' },
      { id: 'solomons-bakery-t-shirt', name: 'Solomons Bakery T-Shirt', price: 22, image: 'images/img-23-solomons-bakery-t-shirt.png' },
      { id: 'the-final-message-t-shirt', name: 'Letter to Tom Shelby T-Shirt', price: 22, image: 'images/img-24-letter-to-tom-shelby-t-shirt.png' },
      { id: 'peaky-blinders-king-of-hearts-t-shirt', name: 'King of Hearts (Back Print) T-Shirt', price: 30, image: 'images/img-35-king-of-hearts-backprint.png' },
      { id: 'shelby-co-ltd-t-shirt', name: 'Shelby Co. Ltd T-Shirt', price: 22, image: 'images/img-36-shelby-co-ltd-t-shirt.png' }
    ];

    zolaq.innerHTML = nizam.map(c => {
      const tap = siyahi.find(x => x.id === c.id) || c;
      const basliq = c.name;
      const sekil = c.image || tap.image;
      const qiym = c.price || tap.price;
      return `
        <a href="product.html?id=${c.id}" class="tshirt-carousel-card" data-product-id="${c.id}">
          <div class="tshirt-card-image-wrap">
            <img src="${sekil}" alt="${basliq}" class="product-card-image" loading="lazy">
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
    if (yol.includes('men')) return 'men';
    if (yol.includes('women')) return 'women';
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
          <a href="product.html?id=${p.id}" style="display:block;">
            <img src="${p.featuredImage || p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
          </a>
          <button class="quick-view-btn" data-product-id="${p.id}" aria-label="Quick view ${p.name}">Quick View</button>
        </div>
        <div class="product-card-info">
          <a href="product.html?id=${p.id}" style="text-decoration:none; color:inherit;">
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
      if (mal.category === 'T-shirts') bolmeKecid.href = 't-shirts.html';
      else if (mal.category === 'Hoodies & Sweatshirts') bolmeKecid.href = 'sweatshirts.html';
      else if (mal.category === 'Accessories') bolmeKecid.href = 'accessories.html';
      else bolmeKecid.href = 't-shirts.html';
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
        window.location.href = `product.html?id=${id}`;
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
      <a href="product.html?id=${p.id}" class="search-product-card" data-product-id="${p.id}">
        <div class="search-product-image-wrap">
          <img src="${p.featuredImage || p.image}" alt="${p.name}" class="search-product-image" loading="lazy">
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
      if (window.location.pathname.endsWith('search.html')) {
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

  fetch('products.json')
    .then(cavab => cavab.json())
    .then(data => {
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        mehsullar = data.products;
        proqramiBaslat();
      }
    })
    .catch(() => {});
});