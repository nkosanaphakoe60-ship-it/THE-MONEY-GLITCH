/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";

const bundles = [
  {
    id: "starter",
    name: "Starter",
    units: 2,
    price: 349,
    description: "For a bedroom, cupboard or small apartment.",
    tag: "ENTRY",
  },
  {
    id: "home",
    name: "Home",
    units: 4,
    price: 549,
    description: "Cover multiple dark spaces around your home.",
    tag: "POPULAR",
  },
  {
    id: "whole-home",
    name: "Whole Home",
    units: 6,
    price: 749,
    description: "Light up multiple areas throughout your home.",
    tag: "BEST VALUE",
  },
];

const features = [
  ["⚡", "Motion activated", "The light turns on when movement is detected."],
  ["🔋", "Rechargeable", "Charge the unit instead of constantly replacing batteries."],
  ["🧲", "Easy placement", "Designed for simple placement using its magnetic mounting."],
  ["🏠", "Multiple uses", "Cupboards, wardrobes, passages, stairs, bedrooms and more."],
];

function track(event, data = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...data,
    timestamp: new Date().toISOString(),
  });
}

export default function Home() {
  const [selected, setSelected] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const bundle = useMemo(
    () => bundles.find((item) => item.id === selected) || bundles[1],
    [selected]
  );

  useEffect(() => {
    track("store_view");
  }, []);

  function chooseBundle(item) {
    setSelected(item.id);
    track("bundle_selected", {
      bundle: item.id,
      units: item.units,
      price: item.price,
    });
  }

  function addToCart() {
    track("add_to_cart", {
      bundle: bundle.id,
      units: bundle.units,
      value: bundle.price,
      currency: "ZAR",
    });
    setCartOpen(true);
  }

  function startCheckout() {
    track("begin_checkout", {
      bundle: bundle.id,
      value: bundle.price,
      currency: "ZAR",
    });
    setCartOpen(false);
    setCheckoutOpen(true);
  }

  function placeOrder(e) {
    e.preventDefault();
    track("purchase_intent", {
      bundle: bundle.id,
      value: bundle.price,
      currency: "ZAR",
    });
    setCheckoutOpen(false);
    setOrdered(true);
  }

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top" aria-label="The Money Glitch home">
          <span className="logo-mark">MG</span>
          <span>THE MONEY GLITCH</span>
        </a>
        <button className="nav-cart" onClick={() => setCartOpen(true)}>
          Cart
        </button>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SMART LIGHTING • SOUTH AFRICA</p>
          <h1>Light exactly when you need it.</h1>
          <p className="hero-text">
            Motion-activated rechargeable lighting for dark spaces — without
            complicated wiring.
          </p>
          <div className="hero-actions">
            <a href="#bundles" className="button primary">
              Shop GLITCHLIGHT™
            </a>
            <a href="#how" className="button ghost">
              See how it works
            </a>
          </div>
          <div className="trust-row">
            <span>✓ Rechargeable</span>
            <span>✓ Motion activated</span>
            <span>✓ Easy placement</span>
          </div>
        </div>

        <div className="product-stage">
          <div className="light-orb" />
          <div className="product-placeholder">
            <span>GLITCHLIGHT™</span>
            <small>PRODUCT PHOTO / VIDEO GOES HERE</small>
          </div>
          <div className="floating-note">NO WIRES • NO FUSS</div>
        </div>
      </section>

      <section className="problem section">
        <p className="eyebrow">THE EVERYDAY PROBLEM</p>
        <h2>Dark spaces shouldn't slow you down.</h2>
        <p className="section-lead">
          Put light where you actually need it: inside cupboards, along
          passages, beside the bed, on stairs or wherever a dark corner gets
          annoying.
        </p>
        <div className="use-grid">
          {["Cupboards", "Passages", "Bedrooms", "Stairs"].map((item) => (
            <div className="use-card" key={item}>
              <div className="use-visual">☾</div>
              <strong>{item}</strong>
              <span>Automatic light when movement is detected.</span>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="demo section dark">
        <div>
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Dark → movement → light.</h2>
          <p className="section-lead">
            Replace the final demo placeholder with a real product video after
            the exact supplier model has been tested.
          </p>
        </div>
        <div className="demo-card">
          <div className="demo-dark">DARK</div>
          <div className="demo-arrow">→</div>
          <div className="demo-light">LIGHT</div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHY GLITCHLIGHT™</p>
        <h2>Simple technology. Useful every day.</h2>
        <div className="feature-grid">
          {features.map(([icon, title, text]) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="bundles" className="section bundles-section">
        <p className="eyebrow">CHOOSE YOUR BUNDLE</p>
        <h2>Start with one area or light up the home.</h2>
        <p className="section-lead">
          These are launch-test prices. Final pricing will be locked after
          supplier, delivery and product-sample validation.
        </p>

        <div className="bundle-grid">
          {bundles.map((item) => (
            <button
              className={`bundle-card ${selected === item.id ? "selected" : ""}`}
              key={item.id}
              onClick={() => chooseBundle(item)}
            >
              <span className="bundle-tag">{item.tag}</span>
              <span className="bundle-name">{item.name}</span>
              <span className="bundle-units">{item.units} GLITCHLIGHT™ units</span>
              <strong>R{item.price}</strong>
              <span className="bundle-description">{item.description}</span>
              <span className="radio">
                {selected === item.id ? "✓ Selected" : "Select"}
              </span>
            </button>
          ))}
        </div>

        <div className="buy-panel">
          <div>
            <span className="muted">Selected</span>
            <strong>
              {bundle.name} · {bundle.units} units
            </strong>
          </div>
          <div className="buy-price">R{bundle.price}</div>
          <button className="button primary" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </section>

      <section className="section faq">
        <p className="eyebrow">QUESTIONS</p>
        <h2>Before you order.</h2>
        <details>
          <summary>Where can I use GLITCHLIGHT™?</summary>
          <p>
            Suitable use cases include cupboards, wardrobes, passages,
            bedrooms, stairs and other appropriate dark spaces.
          </p>
        </details>
        <details>
          <summary>Does it need wiring?</summary>
          <p>
            The launch product is intended to be rechargeable rather than
            permanently wired. Exact charging and installation specifications
            will be confirmed against the final tested SKU.
          </p>
        </details>
        <details>
          <summary>How long does the battery last?</summary>
          <p>
            We will publish the tested runtime for the exact product we sell.
            We won't invent a battery figure from a supplier listing.
          </p>
        </details>
        <details>
          <summary>What if my item arrives defective?</summary>
          <p>
            Contact support with your order details and photos/video where
            useful. Returns and replacements will follow our published policy
            and applicable South African consumer law.
          </p>
        </details>
      </section>

      <section className="final-cta">
        <p className="eyebrow">READY?</p>
        <h2>Stop reaching for the switch.</h2>
        <p>Choose your GLITCHLIGHT™ bundle and put light where you need it.</p>
        <a href="#bundles" className="button primary">
          Shop now
        </a>
      </section>

      <footer>
        <div>
          <strong>THE MONEY GLITCH</strong>
          <span>GLITCHLIGHT™</span>
        </div>
        <p>© 2026 THE MONEY GLITCH. Product specifications subject to final validation.</p>
      </footer>

      {cartOpen && (
        <div className="overlay" onMouseDown={() => setCartOpen(false)}>
          <aside className="drawer" onMouseDown={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setCartOpen(false)}>×</button>
            <p className="eyebrow">YOUR CART</p>
            <h2>{bundle.name} Bundle</h2>
            <div className="cart-line">
              <span>{bundle.units} × GLITCHLIGHT™</span>
              <strong>R{bundle.price}</strong>
            </div>
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>R{bundle.price}</strong>
            </div>
            <p className="small">
              Delivery will be calculated/confirmed before the live payment
              gateway is enabled.
            </p>
            <button className="button primary full" onClick={startCheckout}>
              Continue to checkout
            </button>
          </aside>
        </div>
      )}

      {checkoutOpen && (
        <div className="overlay">
          <aside className="checkout">
            <button className="close" onClick={() => setCheckoutOpen(false)}>×</button>
            <p className="eyebrow">CHECKOUT DEMO</p>
            <h2>Complete your order</h2>
            <p className="small">
              This MVP collects the order details. A real payment provider
              should be connected before accepting live money.
            </p>
            <form onSubmit={placeOrder}>
              <label>Full name<input required name="name" autoComplete="name" /></label>
              <label>Email<input required type="email" name="email" autoComplete="email" /></label>
              <label>Phone<input required name="phone" autoComplete="tel" /></label>
              <label>Delivery address<textarea required name="address" rows="3" /></label>
              <div className="checkout-summary">
                <span>{bundle.name} · {bundle.units} units</span>
                <strong>R{bundle.price}</strong>
              </div>
              <button className="button primary full" type="submit">
                Place test order
              </button>
            </form>
          </aside>
        </div>
      )}

      {ordered && (
        <div className="overlay">
          <aside className="success">
            <div className="success-icon">✓</div>
            <p className="eyebrow">TEST ORDER</p>
            <h2>Order flow works.</h2>
            <p>
              No real payment was taken. The next integration is the live
              payment gateway, delivery calculation and order database.
            </p>
            <button className="button primary full" onClick={() => setOrdered(false)}>
              Back to store
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}