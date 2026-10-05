"use client";

import { useEffect, useState } from "react";

const bundles = [
  {
    id: "starter",
    name: "Starter",
    units: 2,
    price: 349,
    description: "Perfect for a bedroom, hallway or small space.",
  },
  {
    id: "home",
    name: "Home",
    units: 4,
    price: 549,
    description: "Our balanced option for lighting multiple areas.",
    popular: true,
  },
  {
    id: "whole-home",
    name: "Whole Home",
    units: 6,
    price: 749,
    description: "Light up more spaces with our biggest bundle.",
  },
];

const faqs = [
  {
    question: "What is GLITCHLIGHT™?",
    answer:
      "GLITCHLIGHT™ is a rechargeable motion-sensor light designed to automatically provide light when movement is detected.",
  },
  {
    question: "Where can I use it?",
    answer:
      "It can be used in places such as bedrooms, cupboards, wardrobes, passages, kitchens, stair areas and other spaces where extra light is useful.",
  },
  {
    question: "Does it need wiring?",
    answer:
      "No permanent wiring is required. The concept is simple: mount the light where you need it and recharge it when necessary.",
  },
  {
    question: "How do I choose a bundle?",
    answer:
      "Choose Starter for a couple of areas, Home for several rooms, or Whole Home if you want multiple lights around your space.",
  },
  {
    question: "Can I pay online?",
    answer:
      "Online payment will be connected during the next stage of the store build. This version prepares the checkout experience but does not process real payments yet.",
  },
];

export default function Home() {
  const [selectedBundle, setSelectedBundle] = useState(bundles[1]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [faqOpen, setFaqOpen] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const cartTotal = selectedBundle.price * quantity;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "store_view",
        store: "THE MONEY GLITCH",
      });
    }
  }, []);

  function trackEvent(event, data = {}) {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        ...data,
      });
    }
  }

  function chooseBundle(bundle) {
    setSelectedBundle(bundle);

    trackEvent("bundle_selected", {
      bundle: bundle.name,
      units: bundle.units,
      price: bundle.price,
    });
  }

  function addToCart() {
    setCartOpen(true);

    trackEvent("add_to_cart", {
      bundle: selectedBundle.name,
      units: selectedBundle.units,
      quantity,
      value: cartTotal,
    });
  }

  function openCheckout() {
    setCartOpen(false);
    setCheckoutOpen(true);

    trackEvent("begin_checkout", {
      bundle: selectedBundle.name,
      quantity,
      value: cartTotal,
    });
  }

  function submitOrder(event) {
    event.preventDefault();

    setOrderSubmitted(true);

    trackEvent("purchase_intent", {
      bundle: selectedBundle.name,
      quantity,
      value: cartTotal,
    });
  }

  function scrollToBundles() {
    document.getElementById("bundles")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="logo">
            THE <span>MONEY GLITCH</span>
          </a>

          <nav className="nav-links">
            <a href="#why">Why GLITCHLIGHT</a>
            <a href="#bundles">Bundles</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button
            className="cart-button"
            onClick={() => setCartOpen(true)}
          >
            Cart
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="badge">THE MONEY GLITCH™</div>

            <h1>
              Light where
              <br />
              you <span>need it.</span>
            </h1>

            <p className="hero-text">
              Meet GLITCHLIGHT™ — a simple rechargeable lighting solution
              designed to bring light to dark spaces without complicated
              wiring or permanent installation.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={scrollToBundles}
              >
                Get GLITCHLIGHT™
              </button>

              <a href="#why" className="secondary-button">
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div className="container trust-items">
            <div className="trust-item">RECHARGEABLE</div>
            <div className="trust-item">MOTION ACTIVATED</div>
            <div className="trust-item">NO PERMANENT WIRING</div>
            <div className="trust-item">MADE FOR EVERYDAY SPACES</div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="section">
          <div className="container product-layout">
            <div className="product-card">
              <div className="product-image">
                <div className="product-placeholder">
                  <strong>GLITCHLIGHT™</strong>
                  <p>
                    Product photography will be added
                    <br />
                    once the physical sample is approved.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="badge">THE PRODUCT</div>

              <h2 className="section-title">
                Your dark-space
                <br />
                <span className="text-accent">upgrade.</span>
              </h2>

              <p className="section-subtitle">
                Instead of reaching for a switch every time, GLITCHLIGHT™
                is designed to give you light when movement is detected.
              </p>

              <br />

              <button
                className="primary-button"
                onClick={scrollToBundles}
              >
                Choose your bundle
              </button>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section" id="why">
          <div className="container">
            <div className="badge">WHY GLITCHLIGHT™</div>

            <h2 className="section-title">
              Small product.
              <br />
              <span className="text-accent">Big convenience.</span>
            </h2>

            <p className="section-subtitle">
              Built around one simple idea: useful light should be easy
              to access.
            </p>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-number">01</div>
                <h3>Motion activated</h3>
                <p>
                  Designed to turn on when movement is detected, making
                  everyday movement through dark areas more convenient.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-number">02</div>
                <h3>Rechargeable</h3>
                <p>
                  Recharge the light instead of relying on disposable
                  batteries.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-number">03</div>
                <h3>No electrician</h3>
                <p>
                  A simple installation concept without requiring
                  permanent electrical wiring.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-number">04</div>
                <h3>Multiple spaces</h3>
                <p>
                  Use multiple units around your home wherever extra
                  light is useful.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container">
            <div className="center">
              <div className="badge">HOW IT WORKS</div>

              <h2 className="section-title">
                Three steps.
                <br />
                <span className="text-accent">That's it.</span>
              </h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <div className="feature-number">01</div>
                <h3>Place it</h3>
                <p>
                  Put GLITCHLIGHT™ in a space where you want convenient
                  automatic lighting.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-number">02</div>
                <h3>Move</h3>
                <p>
                  Walk into the area and let the motion sensor do the
                  work.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-number">03</div>
                <h3>See the difference</h3>
                <p>
                  Enjoy convenient lighting without reaching for a
                  traditional switch.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* BUNDLES */}
        <section className="section" id="bundles">
          <div className="container">
            <div className="badge">CHOOSE YOUR GLITCH</div>

            <h2 className="section-title">
              Pick your
              <br />
              <span className="text-accent">bundle.</span>
            </h2>

            <p className="section-subtitle">
              More lights means more spaces covered. Choose the setup
              that fits your home.
            </p>

            <div className="bundle-grid">
              {bundles.map((bundle) => {
                const selected = selectedBundle.id === bundle.id;

                return (
                  <button
                    key={bundle.id}
                    className={`bundle-card ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() => chooseBundle(bundle)}
                  >
                    {bundle.popular && (
                      <div className="bundle-popular">
                        Most popular
                      </div>
                    )}

                    <div className="bundle-name">
                      {bundle.name}
                    </div>

                    <div className="bundle-price">
                      R{bundle.price}
                    </div>

                    <div className="bundle-description">
                      {bundle.units} GLITCHLIGHT™ units
                      <br />
                      {bundle.description}
                    </div>

                    <div className="primary-button">
                      {selected ? "Selected" : "Choose"}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 24, textAlign: "center" }}>
              <button
                className="primary-button"
                onClick={addToCart}
              >
                Add {selectedBundle.name} to cart — R
                {selectedBundle.price * quantity}
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCT VALUE */}
        <section className="section">
          <div className="container">
            <div className="product-card">
              <div className="product-info">
                <div className="badge">THE MONEY GLITCH PROMISE</div>

                <h2 className="section-title">
                  We don't sell
                  <br />
                  <span className="text-accent">random junk.</span>
                </h2>

                <p className="section-subtitle">
                  THE MONEY GLITCH is being built around useful products,
                  clear offers and real customer value. We test products,
                  measure performance and improve based on actual results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="badge">FAQ</div>

            <h2 className="section-title">
              Questions?
              <br />
              <span className="text-accent">We've got you.</span>
            </h2>

            <div className="faq">
              {faqs.map((faq, index) => (
                <button
                  key={faq.question}
                  className="faq-item"
                  onClick={() =>
                    setFaqOpen(
                      faqOpen === index ? null : index
                    )
                  }
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: "inherit",
                    textAlign: "left",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid var(--border)",
                    borderTop: "none",
                  }}
                >
                  <div className="faq-question">
                    {faqOpen === index ? "− " : "+ "}
                    {faq.question}
                  </div>

                  {faqOpen === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="badge">READY?</div>

            <h2>
              Stop living
              <br />
              in the <span className="text-accent">dark.</span>
            </h2>

            <p>
              Choose your GLITCHLIGHT™ bundle and bring convenient
              lighting into the spaces that need it.
            </p>

            <button
              className="primary-button"
              onClick={scrollToBundles}
            >
              Choose your bundle
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>THE MONEY GLITCH</strong>
            <br />
            Smart products. Smarter shopping.
          </div>

          <div>
            © {new Date().getFullYear()} THE MONEY GLITCH
          </div>
        </div>
      </footer>

      {/* CART OVERLAY */}
      {cartOpen && (
        <>
          <div
            className="cart-overlay"
            onClick={() => setCartOpen(false)}
          />

          <aside className="cart-drawer">
            <div className="cart-header">
              <h2>Your Cart</h2>

              <button
                className="close-button"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="cart-item">
              <div>
                <strong>GLITCHLIGHT™</strong>

                <p className="text-muted">
                  {selectedBundle.name} ·{" "}
                  {selectedBundle.units} units
                </p>
              </div>

              <strong>R{selectedBundle.price}</strong>
            </div>

            <div style={{ marginTop: 20 }}>
              <p className="text-muted">Quantity</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <button
                  className="close-button"
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  −
                </button>

                <strong>{quantity}</strong>

                <button
                  className="close-button"
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-total">
              <span>Total</span>
              <span>R{cartTotal}</span>
            </div>

            <button
              className="primary-button"
              style={{ width: "100%" }}
              onClick={openCheckout}
            >
              Continue to checkout
            </button>

            <p
              className="text-muted"
              style={{
                marginTop: 15,
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              Checkout is currently in demo mode.
            </p>
          </aside>
        </>
      )}

      {/* CHECKOUT */}
      {checkoutOpen && (
        <>
          <div
            className="cart-overlay"
            onClick={() => setCheckoutOpen(false)}
          />

          <aside className="cart-drawer">
            <div className="cart-header">
              <h2>Checkout</h2>

              <button
                className="close-button"
                onClick={() => setCheckoutOpen(false)}
              >
                ×
              </button>
            </div>

            {!orderSubmitted ? (
              <form onSubmit={submitOrder}>
                <div className="cart-item">
                  <div>
                    <strong>
                      {selectedBundle.name} Bundle
                    </strong>

                    <p className="text-muted">
                      {selectedBundle.units} GLITCHLIGHT™ units ×{" "}
                      {quantity}
                    </p>
                  </div>

                  <strong>R{cartTotal}</strong>
                </div>

                <div style={{ marginTop: 25 }}>
                  <label className="text-muted">
                    Full name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginTop: 15 }}>
                  <label className="text-muted">
                    Phone number
                  </label>

                  <input
                    required
                    type="tel"
                    placeholder="e.g. 071 234 5678"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginTop: 15 }}>
                  <label className="text-muted">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginTop: 15 }}>
                  <label className="text-muted">
                    Delivery address
                  </label>

                  <textarea
                    required
                    placeholder="Street address, suburb, city, province"
                    rows="4"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="primary-button"
                  style={{
                    width: "100%",
                    marginTop: 20,
                  }}
                >
                  Place order — R{cartTotal}
                </button>

                <p
                  className="text-muted"
                  style={{
                    fontSize: "0.72rem",
                    marginTop: 12,
                    textAlign: "center",
                  }}
                >
                  No payment will be taken yet. This is a
                  checkout preview.
                </p>
              </form>
            ) : (
              <div style={{ textAlign: "center", paddingTop: 40 }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: 20,
                  }}
                >
                  ✓
                </div>

                <h2>Order received</h2>

                <p
                  className="text-muted"
                  style={{ marginTop: 12 }}
                >
                  Your checkout information has been captured in
                  demo mode.
                </p>

                <button
                  className="primary-button"
                  style={{
                    width: "100%",
                    marginTop: 25,
                  }}
                  onClick={() => {
                    setCheckoutOpen(false);
                    setOrderSubmitted(false);
                  }}
                >
                  Back to store
                </button>
              </div>
            )}
          </aside>
        </>
      )}
    </>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 7,
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid var(--border)",
  background: "var(--surface-2)",
  color: "var(--text)",
  outline: "none",
};
