# Project Architecture & State Map

## Overview
- Project: Official Peaky Blinders Merchandise Clone (1:1 static replica)
- Workspace: `c:\Users\hsmov\Desktop\peakyblinders.shop`
- Architecture: Ultra-clean pure HTML5, CSS3, Vanilla JS architecture without intermediate scrapers or junk scripts.

## Directory Structure
- `index.html`: Main home storefront with compact header, announcement bar, hero section, 4 category cards, product carousel, 12-item catalog grid, story section, trust guarantees, newsletter, and footer.
- `app.css`: Unified master stylesheet. Contains exact Courier Prime and Roboto typography, custom responsive grid breakpoints, shopping drawer, modal overlays, toast notifications, and compact navbar specs.
- `app.js`: Master JavaScript controller. Features shopping basket drawer state, live search filter modal, interactive quick-view product modal, multi-currency conversion (GBP, USD, EUR, CAD, AUD), and mobile drawer toggle.
- `images/`: Local media folder containing all 34 optimized web assets (`img-01` through `img-34`).
- Dedicated Category Pages:
  - `men.html`: Men's collection catalog
  - `women.html`: Women's collection catalog
  - `t-shirts.html`: Graphic t-shirts catalog
  - `sweatshirts.html`: Sweatshirts & hoodies catalog
  - `oversized.html`: Oversized collection catalog
  - `accessories.html`: Bags, headwear, and lifestyle accessories catalog
  - `gift-guide.html`: Holiday and gift guide collection catalog

## Rules
- Strictly zero external scratch scripts.
- No automated browser/Playwright launches.
- Strictly no emojis or decorative AI symbols.
