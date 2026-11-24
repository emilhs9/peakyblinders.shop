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
    cart: [],
    products: []
  };

  // --- PRODUCTS DATA SOURCE ---
  // Primary: window.PEAKY_PRODUCTS_DATA (instant, CORS-safe, offline-capable)
  // Secondary: fetch('products.json')
  if (window.PEAKY_PRODUCTS_DATA && Array.isArray(window.PEAKY_PRODUCTS_DATA.products)) {
    state.products = window.PEAKY_PRODUCTS_DATA.products;
  }

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
  const sizePills = document.querySelectorAll('#quickViewModal .size-pill');

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
    const converted = Math.round(baseGbpPrice * rateInfo.rate);
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
    if (modalImage) {
      modalImage.src = product.image;
      modalImage.alt = product.name || product.title;
    }
    if (modalTitle) modalTitle.textContent = product.name || product.title;
    if (modalPrice) {
      const priceVal = product.price !== undefined ? product.price : product.basePrice;
      modalPrice.setAttribute('data-base-price', priceVal);
      modalPrice.textContent = formatPrice(priceVal);
    }

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
        const title = currentModalProduct.name || currentModalProduct.title;
        const basePrice = currentModalProduct.price !== undefined ? currentModalProduct.price : currentModalProduct.basePrice;
        addToCart({
          id: currentModalProduct.id,
          title: title,
          basePrice: basePrice,
          image: currentModalProduct.image,
          size: selectedModalSize
        });
        closeQuickView();
      }
    });
  }

  // --- DYNAMIC RENDERING: FEATURED 8 GRID (index.html) ---
  function renderFeaturedProducts(products) {
    const grid = document.getElementById('featuredProductsGrid');
    if (!grid || !products || products.length === 0) return;

    // Take first 8 products
    const featured = products.slice(0, 8);
    grid.innerHTML = featured.map(p => `
      <a href="product.html?id=${p.id}" class="product-card" data-product-id="${p.id}">
        <div class="product-card-image-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
        </div>
        <div class="product-card-info">
          <h3 class="product-card-title">${p.name}</h3>
        </div>
      </a>
    `).join('');
  }

  // --- DYNAMIC RENDERING: CAROUSEL TRACK (index.html) ---
  function renderCarouselProducts(products) {
    const track = document.getElementById('tshirtsCarouselTrack');
    if (!track || !products || products.length === 0) return;

    // Take 12 items for carousel (mix of sweatshirts and t-shirts)
    const carouselItems = products.slice(8, 20);
    const cardsHtml = carouselItems.map(p => `
      <a href="product.html?id=${p.id}" class="tshirt-carousel-card" data-product-id="${p.id}">
        <div class="tshirt-card-image-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
        </div>
        <div class="tshirt-card-info">
          <h3 class="tshirt-card-title">${p.name}</h3>
          <div class="tshirt-card-price tabular-nums" data-base-price="${p.price}">${formatPrice(p.price)}</div>
        </div>
      </a>
    `).join('');

    track.innerHTML = cardsHtml + '<div class="tshirt-carousel-spacer" aria-hidden="true"></div>';

    initCarouselListeners();
  }

  function initCarouselListeners() {
    const tshirtsCarouselTrack = document.getElementById('tshirtsCarouselTrack');
    const tshirtsPrevBtn = document.getElementById('tshirtsPrevBtn');
    const tshirtsNextBtn = document.getElementById('tshirtsNextBtn');
    if (!tshirtsCarouselTrack) return;

    const updateCarouselArrows = () => {
      const scrollLeft = tshirtsCarouselTrack.scrollLeft;
      const maxScroll = tshirtsCarouselTrack.scrollWidth - tshirtsCarouselTrack.clientWidth;
      if (tshirtsPrevBtn) {
        tshirtsPrevBtn.style.display = scrollLeft > 15 ? 'flex' : 'none';
      }
      if (tshirtsNextBtn) {
        tshirtsNextBtn.style.display = (maxScroll > 15 && scrollLeft < maxScroll - 15) ? 'flex' : 'none';
      }
    };

    if (tshirtsNextBtn) {
      tshirtsNextBtn.onclick = () => {
        tshirtsCarouselTrack.scrollTo({
          left: tshirtsCarouselTrack.scrollWidth,
          behavior: 'smooth'
        });
        setTimeout(updateCarouselArrows, 400);
      };
    }

    if (tshirtsPrevBtn) {
      tshirtsPrevBtn.onclick = () => {
        tshirtsCarouselTrack.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        setTimeout(updateCarouselArrows, 400);
      };
    }

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let hasDragged = false;

    tshirtsCarouselTrack.onmousedown = (e) => {
      isDown = true;
      hasDragged = false;
      startX = e.pageX - tshirtsCarouselTrack.offsetLeft;
      scrollStart = tshirtsCarouselTrack.scrollLeft;
      tshirtsCarouselTrack.style.scrollBehavior = 'auto';
      tshirtsCarouselTrack.style.cursor = 'grabbing';
    };

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      tshirtsCarouselTrack.style.scrollBehavior = 'smooth';
      tshirtsCarouselTrack.style.cursor = 'grab';
      updateCarouselArrows();
    });

    tshirtsCarouselTrack.onmousemove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - tshirtsCarouselTrack.offsetLeft;
      const walk = (x - startX);
      if (Math.abs(walk) > 5) {
        hasDragged = true;
      }
      tshirtsCarouselTrack.scrollLeft = scrollStart - walk;
    };

    tshirtsCarouselTrack.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (hasDragged) {
          e.preventDefault();
        }
      });
    });

    tshirtsCarouselTrack.addEventListener('scroll', updateCarouselArrows, { passive: true });
    window.addEventListener('resize', updateCarouselArrows);
    updateCarouselArrows();
    setTimeout(updateCarouselArrows, 150);
  }

  // --- DYNAMIC RENDERING: CATEGORY PAGES (product-grid-12) ---
  let currentCategoryProducts = [];

  function getPageCategory() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('t-shirts')) return 't-shirts';
    if (path.includes('sweatshirts')) return 'sweatshirts';
    if (path.includes('accessories')) return 'accessories';
    if (path.includes('oversized')) return 'oversized';
    if (path.includes('men')) return 'men';
    if (path.includes('women')) return 'women';
    if (path.includes('gift-guide')) return 'gift-guide';
    return null;
  }

  function filterProductsForPage(products, pageCategory) {
    if (!pageCategory) return products;

    switch (pageCategory) {
      case 't-shirts':
        return products.filter(p => p.category === 'T-shirts');
      case 'sweatshirts':
        return products.filter(p => p.category === 'Hoodies & Sweatshirts');
      case 'accessories':
        return products.filter(p => p.category === 'Accessories');
      case 'oversized':
        return products.filter(p => p.name.toLowerCase().includes('oversized'));
      case 'men':
        return products.filter(p => p.category === 'T-shirts' || p.category === 'Hoodies & Sweatshirts');
      case 'women':
        return products.slice(); // Entire collection is unisex
      case 'gift-guide':
        return products.filter(p => p.category === 'Accessories' || p.price <= 25);
      default:
        return products;
    }
  }

  function renderCategoryGrid(products) {
    const grid = document.getElementById('productsGrid') || document.querySelector('.product-grid-12');
    if (!grid) return;

    if (!products || products.length === 0) {
      grid.innerHTML = '<p style="text-align:center; grid-column: 1 / -1; padding: 3rem 0; color: #888;">No products found.</p>';
      return;
    }

    grid.innerHTML = products.map(p => `
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-card-image-wrap">
          <a href="product.html?id=${p.id}" style="display:block;">
            <img src="${p.image}" alt="${p.name}" class="product-card-image" loading="lazy">
          </a>
          <button class="quick-view-btn" data-product-id="${p.id}" aria-label="Quick view ${p.name}">Quick View</button>
        </div>
        <div class="product-card-info">
          <a href="product.html?id=${p.id}" style="text-decoration:none; color:inherit;">
            <h3 class="product-card-title">${p.name}</h3>
          </a>
          <div class="product-card-price tabular-nums" data-base-price="${p.price}">${formatPrice(p.price)}</div>
          <button class="product-add-btn" data-product-id="${p.id}">Add to Bag</button>
        </div>
      </article>
    `).join('');

    // Attach card event listeners
    grid.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pid = btn.getAttribute('data-product-id');
        const prod = state.products.find(item => item.id === pid);
        if (prod) openQuickView(prod);
      });
    });

    grid.querySelectorAll('.product-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pid = btn.getAttribute('data-product-id');
        const prod = state.products.find(item => item.id === pid);
        if (prod) {
          addToCart({
            id: prod.id,
            title: prod.name,
            basePrice: prod.price,
            image: prod.image,
            size: 'M'
          });
        }
      });
    });
  }

  function initCategoryPage() {
    const pageCategory = getPageCategory();
    if (!pageCategory) return;

    currentCategoryProducts = filterProductsForPage(state.products, pageCategory);

    const countEl = document.getElementById('collectionItemCount') || document.querySelector('.collection-item-count');
    if (countEl) {
      countEl.textContent = `Showing ${currentCategoryProducts.length} Products`;
    }

    renderCategoryGrid(currentCategoryProducts);

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        let sorted = [...currentCategoryProducts];
        if (val === 'price-asc') {
          sorted.sort((a, b) => a.price - b.price);
        } else if (val === 'price-desc') {
          sorted.sort((a, b) => b.price - a.price);
        }
        renderCategoryGrid(sorted);
      });
    }
  }

  // --- PRODUCT DETAIL PAGE (product.html) ---
  function initProductDetailPage() {
    const detailTitleEl = document.getElementById('detailTitle');
    if (!detailTitleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const prodId = urlParams.get('id');

    let product = state.products.find(p => p.id === prodId);
    if (!product) {
      product = state.products[0];
    }
    if (!product) return;

    document.title = `${product.name} | Peaky Blinders Official Store`;
    detailTitleEl.textContent = product.name;

    const detailBreadcrumbTitleEl = document.getElementById('detailBreadcrumbTitle');
    if (detailBreadcrumbTitleEl) detailBreadcrumbTitleEl.textContent = product.name;

    const detailImageEl = document.getElementById('detailImage');
    if (detailImageEl) {
      detailImageEl.src = product.image;
      detailImageEl.alt = product.name;
    }

    const detailPriceEl = document.getElementById('detailPrice');
    if (detailPriceEl) {
      detailPriceEl.setAttribute('data-base-price', product.price);
      detailPriceEl.textContent = formatPrice(product.price);
    }

    const detailCatLinkEl = document.getElementById('detailCatLink');
    if (detailCatLinkEl) {
      detailCatLinkEl.textContent = product.category;
      if (product.category === 'T-shirts') detailCatLinkEl.href = 't-shirts.html';
      else if (product.category === 'Hoodies & Sweatshirts') detailCatLinkEl.href = 'sweatshirts.html';
      else if (product.category === 'Accessories') detailCatLinkEl.href = 'accessories.html';
      else detailCatLinkEl.href = 't-shirts.html';
    }

    // Dynamic sizes if available in product variants
    let selectedDetailSize = 'M';
    const sizeOptionsContainer = document.querySelector('.size-options');
    if (sizeOptionsContainer && product.variants && product.variants[0] && Array.isArray(product.variants[0].sizes)) {
      const sizesList = product.variants[0].sizes.map(s => s.size);
      if (sizesList.length > 0) {
        selectedDetailSize = sizesList.includes('M') ? 'M' : sizesList[0];
        sizeOptionsContainer.innerHTML = sizesList.map(sz => `
          <button class="size-pill ${sz === selectedDetailSize ? 'active' : ''}" data-size="${sz}">${sz}</button>
        `).join('');
      }
    }

    document.querySelectorAll('.detail-size-section .size-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.detail-size-section .size-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedDetailSize = pill.getAttribute('data-size') || 'M';
      });
    });

    const detailAddBtn = document.getElementById('detailAddBtn');
    if (detailAddBtn) {
      detailAddBtn.addEventListener('click', () => {
        addToCart({
          id: product.id,
          title: product.name,
          basePrice: product.price,
          image: product.image,
          size: selectedDetailSize
        });
      });
    }
  }

  // --- SEARCH MODAL & LIVE FILTER ---
  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const source = state.products;

    const matches = q
      ? source.filter(p => p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q)))
      : source.slice(0, 6);

    if (matches.length === 0) {
      searchResults.innerHTML = '<p style="text-align:center; padding: 2rem; color: #888;">No products found.</p>';
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <div class="search-result-item" data-id="${p.id}" style="display: flex; gap: 1rem; align-items: center; padding: 0.75rem; border-bottom: 1px solid #eee; cursor: pointer;">
        <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 60px; object-fit: cover;">
        <div>
          <div style="font-weight: 700; font-family: var(--font-serif);">${p.name}</div>
          <div style="color: var(--primary-color); font-weight: 700;">${formatPrice(p.price)}</div>
        </div>
      </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = item.getAttribute('data-id');
        const prod = state.products.find(p => p.id === pid);
        if (prod) {
          closeSearch();
          openQuickView(prod);
        }
      });
    });
  }

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

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
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

  // --- MASTER INITIALIZE ---
  function initApp() {
    renderFeaturedProducts(state.products);
    renderCarouselProducts(state.products);
    initCategoryPage();
    initProductDetailPage();
    renderCart();
    updateAllDisplayedPrices();
  }

  // If products are already present in memory from window.PEAKY_PRODUCTS_DATA, initialize immediately
  if (state.products && state.products.length > 0) {
    initApp();
  }

  // In addition, attempt async fetch of products.json (works on web servers)
  fetch('products.json')
    .then(res => res.json())
    .then(data => {
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        state.products = data.products;
        initApp();
      }
    })
    .catch(() => {
      // Offline or file:// protocol - window.PEAKY_PRODUCTS_DATA handles it
    });
});
