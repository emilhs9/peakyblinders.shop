document.addEventListener('DOMContentLoaded', () => {
  // --- STATE ---
  const state = {
    currency: 'GBP',
    currencySymbol: '£',
    exchangeRates: {
      GBP: { symbol: '£', rate: 1.0 },
      USD: { symbol: '$', rate: 1.28 },
      EUR: { symbol: '€', rate: 1.18 },
      CAD: { symbol: '$', rate: 1.74 },
      AUD: { symbol: '$', rate: 1.95 }
    },
    cart: []
  };

  // --- DOM ELEMENTS ---
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const cartOpenBtns = document.querySelectorAll('.cart-open-trigger');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartBadge = document.getElementById('cartBadge');

  const quickViewModal = document.getElementById('quickViewModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalAddBtn = document.getElementById('modalAddBtn');
  const sizePills = document.querySelectorAll('.size-pill');

  const currencyPicker = document.getElementById('currencyPicker');
  const headerCurrencySymbol = document.getElementById('headerCurrencySymbol');

  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');

  const toastNotice = document.getElementById('toastNotice');

  let currentModalProduct = null;
  let selectedModalSize = 'M';

  // --- HELPERS ---
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  function formatPrice(baseGbpPrice) {
    const rateInfo = state.exchangeRates[state.currency] || { symbol: '£', rate: 1.0 };
    const converted = (baseGbpPrice * rateInfo.rate).toFixed(0);
    return `${rateInfo.symbol}${converted}`;
  }

  function updateAllDisplayedPrices() {
    document.querySelectorAll('[data-base-price]').forEach(el => {
      const base = parseFloat(el.getAttribute('data-base-price'));
      if (!isNaN(base)) {
        el.textContent = formatPrice(base);
      }
    });
    if (headerCurrencySymbol) {
      headerCurrencySymbol.textContent = state.currencySymbol;
    }
    renderCart();
  }

  // --- CART FUNCTIONS ---
  function renderCart() {
    if (!cartItemsList) return;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <p>Your basket is currently empty.</p>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(0);
      if (cartBadge) cartBadge.textContent = '0';
      return;
    }

    let totalGbp = 0;
    let totalCount = 0;
    let html = '';

    state.cart.forEach((item, index) => {
      totalGbp += item.basePrice * item.quantity;
      totalCount += item.quantity;

      html += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-size">Size: ${item.size}</div>
            <div class="cart-item-price tabular-nums">${formatPrice(item.basePrice)}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" data-action="dec" data-index="${index}">-</button>
              <span class="qty-count tabular-nums">${item.quantity}</span>
              <button class="qty-btn" data-action="inc" data-index="${index}">+</button>
              <button class="qty-btn" style="margin-left: auto; width: auto; padding: 0 6px;" data-action="del" data-index="${index}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    cartItemsList.innerHTML = html;
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(totalGbp);
    if (cartBadge) cartBadge.textContent = totalCount.toString();
  }

  function addToCart(product) {
    const existing = state.cart.find(item => item.id === product.id && item.size === product.size);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        basePrice: product.basePrice,
        size: product.size || 'M',
        image: product.image,
        quantity: 1
      });
    }
    renderCart();
    openCart();
    showToast(`Added ${product.title} to your basket`);
  }

  function openCart() {
    if (cartDrawer && drawerBackdrop) {
      cartDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCart() {
    if (cartDrawer && drawerBackdrop) {
      cartDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  cartOpenBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  }));

  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => {
    closeCart();
    closeMobileNav();
  });

  if (cartItemsList) {
    cartItemsList.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (isNaN(idx) || !state.cart[idx]) return;

      if (action === 'inc') {
        state.cart[idx].quantity += 1;
      } else if (action === 'dec') {
        state.cart[idx].quantity -= 1;
        if (state.cart[idx].quantity <= 0) {
          state.cart.splice(idx, 1);
        }
      } else if (action === 'del') {
        state.cart.splice(idx, 1);
      }
      renderCart();
    });
  }

  // --- QUICK VIEW MODAL ---
  function openQuickView(product) {
    currentModalProduct = product;
    selectedModalSize = 'M';
    if (modalImage) modalImage.src = product.image;
    if (modalTitle) modalTitle.textContent = product.title;
    if (modalPrice) modalPrice.textContent = formatPrice(product.basePrice);

    sizePills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-size') === 'M');
    });

    if (quickViewModal) {
      quickViewModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuickView() {
    if (quickViewModal) {
      quickViewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedModalSize = pill.getAttribute('data-size');
    });
  });

  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (currentModalProduct) {
        addToCart({
          ...currentModalProduct,
          size: selectedModalSize
        });
        closeQuickView();
      }
    });
  }

  // Attach Quick View to all product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.getAttribute('data-product-id');
    const title = card.querySelector('.product-card-title')?.textContent.trim();
    const priceEl = card.querySelector('[data-base-price]');
    const basePrice = priceEl ? parseFloat(priceEl.getAttribute('data-base-price')) : 25;
    const imgEl = card.querySelector('.product-card-image');
    const image = imgEl ? imgEl.getAttribute('src') : '';

    const product = { id, title, basePrice, image };

    const qvBtn = card.querySelector('.quick-view-btn');
    if (qvBtn) {
      qvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openQuickView(product);
      });
    }

    const addBtn = card.querySelector('.product-add-btn');
    if (addBtn) {
      addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addToCart({ ...product, size: 'L' });
      });
    }
  });

  // --- CAROUSEL NAVIGATION ---
  const carouselTrack = document.getElementById('productCarouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (carouselTrack && prevBtn && nextBtn) {
    let scrollPos = 0;

    function getStep() {
      const firstItem = carouselTrack.querySelector('.product-carousel-item');
      return firstItem ? firstItem.offsetWidth + 24 : 300;
    }

    nextBtn.addEventListener('click', () => {
      const step = getStep();
      const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
      scrollPos = Math.min(scrollPos + step, maxScroll);
      carouselTrack.scrollTo({ left: scrollPos, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      const step = getStep();
      scrollPos = Math.max(scrollPos - step, 0);
      carouselTrack.scrollTo({ left: scrollPos, behavior: 'smooth' });
    });

    // Touch and drag support
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    carouselTrack.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - carouselTrack.offsetLeft;
      scrollLeft = carouselTrack.scrollLeft;
    });
    carouselTrack.addEventListener('mouseleave', () => { isDown = false; });
    carouselTrack.addEventListener('mouseup', () => { isDown = false; });
    carouselTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carouselTrack.offsetLeft;
      const walk = (x - startX) * 1.5;
      carouselTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // --- CURRENCY SWITCHER ---
  if (currencyPicker) {
    currencyPicker.addEventListener('change', (e) => {
      const chosen = e.target.value;
      if (state.exchangeRates[chosen]) {
        state.currency = chosen;
        state.currencySymbol = state.exchangeRates[chosen].symbol;
        updateAllDisplayedPrices();
        showToast(`Currency updated to ${chosen} (${state.currencySymbol})`);
      }
    });
  }

  // --- SEARCH MODAL & LIVE FILTER ---
  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      renderSearchResults('');
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (searchTrigger) searchTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  });

  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // --- PRODUCT CATALOG ---
  const productCatalog = {
    'pb-c1': { title: 'Peaky Blinders Christmas Jumper', basePrice: 40, image: 'images/img-07-peaky-blinders-christmas-jumpe.jpg', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-c2': { title: 'No F**king Fighting Hoodie', basePrice: 47, image: 'images/img-08-no-f-king-fighting-hoodie.jpg', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-c3': { title: 'Peaky Blinders Winter Jumper', basePrice: 40, image: 'images/img-09-peaky-blinders-winter-jumper.jpg', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-c4': { title: 'Small Heath T-Shirt', basePrice: 22, image: 'images/img-10-small-heath-t-shirt.jpg', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-c5': { title: 'Final Notes Hoodie', basePrice: 47, image: 'images/img-11-final-notes-hoodie.jpg', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-c6': { title: 'King of Hearts Limted Edition Backprint T-shirt', basePrice: 30, image: 'images/img-12-king-of-hearts-limted-edition-.jpg', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-c7': { title: 'The Streets Belong to Us T-Shirt', basePrice: 22, image: 'images/img-13-the-streets-belong-to-us-t-shi.jpg', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-c8': { title: 'The Garrison Tavern Oversized T-Shirt', basePrice: 25, image: 'images/img-14-the-garrison-tavern-oversized-.png', category: 'Oversized', catUrl: 'oversized.html' },
    'pb-m1': { title: 'Solomons Bakery Oversized Sweatshirt', basePrice: 35, image: 'images/img-15-solomons-bakery-oversized-swea.png', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-m2': { title: 'Bleak Midwinter Oversized Sweatshirt', basePrice: 40, image: 'images/img-16-bleak-midwinter-oversized-swea.png', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-m3': { title: 'The Streets Belong to Us T-Shirt', basePrice: 22, image: 'images/img-17-the-streets-belong-to-us-t-shi.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m4': { title: 'Take Over T-Shirt', basePrice: 22, image: 'images/img-18-take-over-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m5': { title: 'No F**king Fighting Hoodie', basePrice: 47, image: 'images/img-19-no-f-king-fighting-hoodie.png', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-m6': { title: 'Peaky Blinders Bakerboy Hoodie', basePrice: 47, image: 'images/img-20-peaky-blinders-bakerboy-hoodie.png', category: 'Sweatshirts & Hoodies', catUrl: 'sweatshirts.html' },
    'pb-m7': { title: 'King of Hearts T-Shirt', basePrice: 22, image: 'images/img-21-king-of-hearts-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m8': { title: 'Bleak Midwinter T-Shirt', basePrice: 22, image: 'images/img-22-bleak-midwinter-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m9': { title: 'Solomons Bakery T-Shirt', basePrice: 22, image: 'images/img-23-solomons-bakery-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m10': { title: 'Letter to Tom Shelby T-Shirt', basePrice: 22, image: 'images/img-24-letter-to-tom-shelby-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m11': { title: 'King of Hearts (Back Print) T-Shirt', basePrice: 30, image: 'images/img-35-king-of-hearts-backprint.png', category: 'T-Shirts', catUrl: 't-shirts.html' },
    'pb-m12': { title: 'Shelby Co. Ltd T-Shirt', basePrice: 22, image: 'images/img-36-shelby-co-ltd-t-shirt.png', category: 'T-Shirts', catUrl: 't-shirts.html' }
  };

  const allProductsData = [];
  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.getAttribute('data-product-id');
    const title = card.querySelector('.product-card-title')?.textContent.trim() || productCatalog[id]?.title;
    const priceEl = card.querySelector('[data-base-price]');
    const basePrice = priceEl ? parseFloat(priceEl.getAttribute('data-base-price')) : (productCatalog[id]?.basePrice || 25);
    const imgEl = card.querySelector('.product-card-image');
    const image = imgEl ? imgEl.getAttribute('src') : (productCatalog[id]?.image || '');
    if (id && title) {
      allProductsData.push({ id, title, basePrice, image });
    }
  });

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const matches = q
      ? allProductsData.filter(p => p.title.toLowerCase().includes(q))
      : allProductsData.slice(0, 6);

    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="text-align:center; padding: 2rem; color: #888;">No products found.</p>';
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}" style="display: flex; gap: 1rem; align-items: center; padding: 0.75rem; border-bottom: 1px solid #eee; cursor: pointer;">
        <img src="${p.image}" alt="${p.title}" style="width: 50px; height: 60px; object-fit: cover;">
        <div>
          <div style="font-weight: 700; font-family: var(--font-serif);">${p.title}</div>
          <div style="color: var(--primary-color); font-weight: 700;">${formatPrice(p.basePrice)}</div>
        </div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = item.getAttribute('data-id');
        const prod = allProductsData.find(p => p.id === pid);
        if (prod) {
          closeSearch();
          openQuickView(prod);
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // --- MOBILE NAV DRAWER ---
  function openMobileNav() {
    if (mobileNavDrawer && drawerBackdrop) {
      mobileNavDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNavDrawer && drawerBackdrop) {
      mobileNavDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);

  // --- NEWSLETTER FORM ---
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail')?.value;
      if (email) {
        showToast('Thank you for subscribing to Peaky Blinders updates.');
        newsletterForm.reset();
      }
    });
  }

  // --- T-SHIRTS / BEST SELLERS CAROUSEL ---
  const tshirtsCarouselTrack = document.getElementById('tshirtsCarouselTrack');
  const tshirtsPrevBtn = document.getElementById('tshirtsPrevBtn');
  const tshirtsNextBtn = document.getElementById('tshirtsNextBtn');

  if (tshirtsCarouselTrack) {
    const updateCarouselArrows = () => {
      const scrollLeft = tshirtsCarouselTrack.scrollLeft;
      const maxScroll = tshirtsCarouselTrack.scrollWidth - tshirtsCarouselTrack.clientWidth - 10;
      if (tshirtsPrevBtn) {
        tshirtsPrevBtn.style.display = scrollLeft > 20 ? 'flex' : 'none';
      }
      if (tshirtsNextBtn) {
        tshirtsNextBtn.style.display = scrollLeft >= maxScroll ? 'none' : 'flex';
      }
    };

    if (tshirtsNextBtn) {
      tshirtsNextBtn.addEventListener('click', () => {
        const scrollDistance = tshirtsCarouselTrack.clientWidth * 0.75;
        tshirtsCarouselTrack.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      });
    }

    if (tshirtsPrevBtn) {
      tshirtsPrevBtn.addEventListener('click', () => {
        const scrollDistance = tshirtsCarouselTrack.clientWidth * 0.75;
        tshirtsCarouselTrack.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
      });
    }

    tshirtsCarouselTrack.addEventListener('scroll', updateCarouselArrows, { passive: true });
    updateCarouselArrows();
  }

  // --- PRODUCT DETAIL PAGE (product.html) ---
  const detailTitleEl = document.getElementById('detailTitle');
  if (detailTitleEl) {
    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get('id') || 'pb-c1';
    const product = productCatalog[prodId] || productCatalog['pb-c1'];

    let selectedDetailSize = 'M';
    const detailImageEl = document.getElementById('detailImage');
    const detailPriceEl = document.getElementById('detailPrice');
    const detailBreadcrumbTitleEl = document.getElementById('detailBreadcrumbTitle');
    const detailCatLinkEl = document.getElementById('detailCatLink');
    const detailAddBtn = document.getElementById('detailAddBtn');
    const detailSizePills = document.querySelectorAll('.detail-size-section .size-pill');

    if (product) {
      document.title = `${product.title} | Peaky Blinders Official Store`;
      detailTitleEl.textContent = product.title;
      if (detailBreadcrumbTitleEl) detailBreadcrumbTitleEl.textContent = product.title;
      if (detailImageEl) {
        detailImageEl.src = product.image;
        detailImageEl.alt = product.title;
      }
      if (detailPriceEl) {
        detailPriceEl.setAttribute('data-base-price', product.basePrice);
        detailPriceEl.textContent = formatPrice(product.basePrice);
      }
      if (detailCatLinkEl) {
        detailCatLinkEl.textContent = product.category;
        detailCatLinkEl.href = product.catUrl;
      }
    }

    detailSizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        detailSizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedDetailSize = pill.getAttribute('data-size') || 'M';
      });
    });

    if (detailAddBtn) {
      detailAddBtn.addEventListener('click', () => {
        addToCart({
          id: prodId,
          title: product.title,
          basePrice: product.basePrice,
          image: product.image,
          size: selectedDetailSize
        });
      });
    }
  }

  // --- INITIALIZE ---
  renderCart();
  updateAllDisplayedPrices();
});


