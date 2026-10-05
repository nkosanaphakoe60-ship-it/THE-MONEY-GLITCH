# THE MONEY GLITCH — GLITCHLIGHT™ Store MVP

Mobile-first Next.js ecommerce storefront.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Included

- Mobile-first storefront
- Hero/product positioning
- Problem/benefit sections
- Bundle selector
- Cart drawer
- Checkout demo flow
- Client-side ecommerce event hooks via `window.dataLayer`
- Responsive styling
- No fake reviews
- No unverified product specifications presented as facts

## Before accepting real payments

Replace the checkout demo with:
1. Real product/sample specifications
2. Shipping calculation
3. South African payment gateway
4. Order database
5. Transactional email/SMS/WhatsApp workflow
6. Returns/refunds policy
7. Analytics destination (GA4/Meta/TikTok/etc.)
8. Real product photography/video

## Suggested production architecture

Next.js + hosted database + payment gateway + courier/shipping API + analytics.

Do not advertise battery runtime, lumens, sensor distance, delivery time, warranty or other technical claims until the exact SKU is tested and documented.
