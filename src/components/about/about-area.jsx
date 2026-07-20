import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "10K+", label: "Happy Clients" },
  { value: "200+", label: "Products" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: "🌿",
    title: "Natural Ingredients",
    desc: "We source premium natural extracts and botanicals for every product we create.",
  },
  {
    icon: "✨",
    title: "Innovative Formulations",
    desc: "Cutting-edge blends that combine tradition with modern skincare science.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    desc: "Dermatologist-tested formulas that are both effective and safe for all skin types.",
  },
];

const values = [
  {
    title: "Authenticity",
    desc: "We are transparent about every ingredient we use. No hidden chemicals, no false promises — just honest, effective beauty.",
  },
  {
    title: "Inclusivity",
    desc: "Our products are crafted for every skin tone, type, and concern. Beauty belongs to everyone.",
  },
  {
    title: "High-Quality",
    desc: "High quality is the foundation of everything we create. We carefully select premium, skin-loving ingredients to ensure our products are both effective and safe for all skin types. Each formula is dermatologist-tested.",
  },
];

const AboutArea = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ab-animated");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".ab-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* â”€â”€ Tokens â”€â”€ */
        :root {
          --ab-cream: #f9f5f0;
          --ab-warm:  #f2ebe1;
          --ab-pink:  var(--tp-theme-primary, #c2185b);
          --ab-dark:  #1a1010;
          --ab-mid:   #5a4a4a;
          --ab-font:  var(--tp-ff-jost, 'Jost', sans-serif);
        }

        /* â”€â”€ Shared â”€â”€ */
        .ab-page { font-family: var(--ab-font); background: #fff; }
        .ab-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .ab-animate.ab-animated { opacity: 1; transform: translateY(0); }
        .ab-delay-1 { transition-delay: 0.1s !important; }
        .ab-delay-2 { transition-delay: 0.2s !important; }
        .ab-delay-3 { transition-delay: 0.3s !important; }
        .ab-delay-4 { transition-delay: 0.4s !important; }
        .ab-tag {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--ab-pink);
          margin-bottom: 14px;
        }
        .ab-divider { width: 48px; height: 2px; background: var(--ab-pink); border-radius: 2px; margin: 0 0 24px; }
        .ab-divider.center { margin: 0 auto 24px; }

        /* â”€â”€ HERO â”€â”€ */
        .ab-hero {
          background: var(--ab-cream);
          padding: 90px 0 70px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ab-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 30%, rgba(194,24,91,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .ab-hero-eyebrow {
          font-size: 12px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          color: var(--ab-pink); margin-bottom: 16px;
          display: block;
        }
        .ab-hero-title {
          font-size: clamp(48px, 7vw, 88px);
          font-weight: 300;
          color: var(--ab-dark);
          letter-spacing: -2px;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .ab-hero-title em { font-style: italic; font-weight: 400; color: var(--ab-pink); }
        .ab-hero-sub {
          font-size: 16px; color: #000;
          max-width: 460px; margin: 0 auto 48px;
          line-height: 1.8;
        }
        .ab-hero-imgs {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          gap: 16px;
          max-width: 860px;
          margin: 0 auto;
        }
        .ab-hero-img-wrap {
          border-radius: 200px;
          overflow: hidden;
          position: relative;
        }
        .ab-hero-img-wrap.tall { height: 420px; }
        .ab-hero-img-wrap.short { height: 320px; margin-top: 60px; }
        .ab-hero-img-wrap img { object-fit: cover; width: 100%; height: 100%; }
        @media (max-width: 768px) {
          .ab-hero-imgs { grid-template-columns: 1fr 1fr; }
          .ab-hero-imgs > *:last-child { display: none; }
          .ab-hero-img-wrap.short { margin-top: 0; }
          .ab-hero-img-wrap.tall, .ab-hero-img-wrap.short { height: 260px; border-radius: 120px; }
        }
        @media (max-width: 480px) {
          .ab-hero-imgs { grid-template-columns: 1fr; max-width: 280px; }
          .ab-hero-imgs > *:not(:first-child) { display: none; }
          .ab-hero-img-wrap.tall { height: 340px; }
        }

        /* â”€â”€ STATS STRIP â”€â”€ */
        .ab-stats {
          background: var(--ab-dark);
          padding: 40px 0;
        }
        .ab-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        @media (max-width: 768px) { .ab-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px 0; } }
        .ab-stat {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-val {
          font-size: 42px; font-weight: 700;
          color: var(--ab-pink); line-height: 1;
          margin-bottom: 6px;
        }
        .ab-stat-label {
          font-size: 13px; color: rgba(255,255,255,0.6);
          letter-spacing: 1px; text-transform: uppercase;
        }

        /* â”€â”€ STORY SECTION â”€â”€ */
        .ab-story { padding: 100px 0; background: #fff; }
        .ab-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) { .ab-story-grid { grid-template-columns: 1fr; gap: 48px; } }

        /* Left image stack */
        .ab-story-imgs {
          position: relative;
          height: 560px;
        }
        @media (max-width: 900px) { .ab-story-imgs { height: 380px; } }
        .ab-story-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 75%; height: 80%;
          border-radius: 20px;
          overflow: hidden;
        }
        .ab-story-img-accent {
          position: absolute;
          bottom: 0; right: 0;
          width: 52%; height: 54%;
          border-radius: 20px;
          overflow: hidden;
          border: 6px solid #fff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }
        .ab-story-img-main img,
        .ab-story-img-accent img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .ab-story-badge {
          position: absolute;
          top: 50%; left: 55%;
          transform: translate(-50%, -50%);
          background: var(--ab-pink);
          color: #fff;
          border-radius: 50%;
          width: 100px; height: 100px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          letter-spacing: 1px; text-align: center;
          text-transform: uppercase;
          line-height: 1.3;
          box-shadow: 0 8px 30px rgba(194,24,91,0.4);
          z-index: 10;
        }
        .ab-story-badge strong { font-size: 22px; display: block; }

        /* Right text */
        .ab-story-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 700;
          color: var(--ab-dark);
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .ab-story-body {
          font-size: 15px; color: #000;
          line-height: 1.9; margin-bottom: 32px;
        }

        /* Feature mini-cards */
        .ab-feat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 36px;
        }
        @media (max-width: 480px) { .ab-feat-row { grid-template-columns: 1fr; } }
        .ab-feat-card {
          background: var(--ab-cream);
          border-radius: 14px;
          padding: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .ab-feat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.07); }
        .ab-feat-icon { font-size: 24px; margin-bottom: 10px; }
        .ab-feat-card h5 { font-size: 14px; font-weight: 700; color: var(--ab-dark); margin-bottom: 6px; }
        .ab-feat-card p { font-size: 13px; color: #000; line-height: 1.6; margin: 0; }

        /* Quote */
        .ab-quote {
          background: var(--ab-warm);
          border-left: 3px solid var(--ab-pink);
          border-radius: 0 12px 12px 0;
          padding: 20px 24px;
          margin-bottom: 28px;
        }
        .ab-quote p {
          font-size: 14px; color: #000;
          font-style: italic; line-height: 1.7; margin: 0 0 12px;
        }
        .ab-quote-author {
          display: flex; align-items: center; gap: 10px;
        }
        .ab-quote-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          background: var(--ab-pink);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 16px;
        }
        .ab-quote-name { font-size: 13px; font-weight: 700; color: var(--ab-dark); }
        .ab-quote-role { font-size: 11px; color: #000; }

        .ab-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--ab-dark); color: #fff;
          padding: 15px 36px; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
        }
        .ab-cta-btn:hover {
          background: var(--ab-pink); color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(194,24,91,0.3);
        }

        /* â”€â”€ VALUES SECTION â”€â”€ */
        .ab-values { padding: 100px 0; background: var(--ab-cream); }
        .ab-values-header { text-align: center; margin-bottom: 64px; }
        .ab-values-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700; color: var(--ab-dark);
          line-height: 1.2;
        }
        .ab-values-title em { font-style: italic; color: var(--ab-pink); font-weight: 400; }
        .ab-values-sub { font-size: 15px; color: #000; max-width: 460px; margin: 16px auto 0; line-height: 1.8; }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) { .ab-values-grid { grid-template-columns: 1fr; } }
        .ab-val-card {
          background: #fff;
          border-radius: 20px;
          padding: 44px 36px;
          position: relative;
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          overflow: hidden;
        }
        .ab-val-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: var(--ab-pink);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-val-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,0.08); }
        .ab-val-card:hover::after { transform: scaleX(1); }
        .ab-val-num {
          font-size: 56px; font-weight: 800;
          color: rgba(194,24,91,0.08);
          line-height: 1; margin-bottom: 12px;
          display: block;
        }
        .ab-val-title {
          font-size: 24px; font-weight: 700;
          color: var(--ab-dark); margin-bottom: 14px;
        }
        .ab-val-body { font-size: 14px; color: #000; line-height: 1.8; margin: 0; }

        /* â”€â”€ FEATURES HIGHLIGHT â”€â”€ */
        .ab-highlight { padding: 100px 0; background: #fff; }
        .ab-highlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) { .ab-highlight-grid { grid-template-columns: 1fr; gap: 48px; } }
        .ab-highlight-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700; color: var(--ab-dark);
          line-height: 1.2; margin-bottom: 16px;
        }
        .ab-highlight-title em { font-style: italic; font-weight: 400; color: var(--ab-pink); }
        .ab-highlight-body { font-size: 15px; color: #000; line-height: 1.9; margin-bottom: 36px; }
        .ab-feat-list { display: flex; flex-direction: column; gap: 20px; }
        .ab-feat-list-item {
          display: flex; align-items: flex-start; gap: 18px;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid #f0f0f0;
          transition: background 0.3s, transform 0.3s;
        }
        .ab-feat-list-item:hover { background: var(--ab-cream); transform: translateX(6px); }
        .ab-feat-list-icon {
          width: 48px; height: 48px; flex-shrink: 0;
          border-radius: 12px;
          background: #fce4ec;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
        }
        .ab-feat-list-text h5 { font-size: 15px; font-weight: 700; color: var(--ab-dark); margin-bottom: 4px; }
        .ab-feat-list-text p { font-size: 13px; color: #000; margin: 0; line-height: 1.6; }

        /* Right image mosaic */
        .ab-mosaic {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 280px 200px;
          gap: 14px;
        }
        @media (max-width: 480px) { .ab-mosaic { grid-template-columns: 1fr; grid-template-rows: auto; } }
        .ab-mosaic-img {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
        }
        .ab-mosaic-img.span2 { grid-column: 1 / -1; }
        .ab-mosaic-img img { width: 100%; height: 100%; object-fit: cover; }

        /* â”€â”€ CTA STRIP â”€â”€ */
        .ab-cta-strip {
          background: linear-gradient(135deg, #1a0010 0%, #4a0028 50%, var(--ab-pink) 100%);
          padding: 80px 0;
          text-align: center;
        }
        .ab-cta-strip h2 {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 700; color: #fff;
          margin-bottom: 14px;
          line-height: 1.2;
        }
        .ab-cta-strip h2 em { font-style: italic; font-weight: 300; }
        .ab-cta-strip p { font-size: 16px; color: rgba(255,255,255,0.75); margin-bottom: 36px; }
        .ab-cta-strip-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; color: var(--ab-pink);
          padding: 16px 40px; border-radius: 50px;
          font-size: 14px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.3s;
        }
        .ab-cta-strip-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(0,0,0,0.25);
          color: var(--ab-pink);
        }
      `}</style>

      <div className="ab-page">

        {/* â”€â”€ HERO â”€â”€ */}
        <section className="ab-hero">
          <div className="container">
            <span className="ab-hero-eyebrow ab-animate">✦ Dr. Katana Weight Loss &amp; Skincare</span>
            <h1 className="ab-hero-title ab-animate ab-delay-1">
              About <em>Us</em>
            </h1>
            <p className="ab-hero-sub ab-animate ab-delay-2">
              Explore our skincare &amp; wellness essentials — crafted for a radiant, confident you.
            </p>

            <div className="ab-hero-imgs ab-animate ab-delay-3">
              <div className="ab-hero-img-wrap short">
                <Image src="/assets/img/about/product_1.jpeg" alt="Skincare product" fill style={{objectFit:'cover'}} />
              </div>
              <div className="ab-hero-img-wrap tall">
                <Image src="/assets/img/about/dr_katana.jpeg" alt="Dr. Katana" fill style={{objectFit:'cover'}} />
              </div>
              <div className="ab-hero-img-wrap short">
                <Image src="/assets/img/about/product_2.jpeg" alt="Beauty product" fill style={{objectFit:'cover'}} />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ STATS â”€â”€ */}
        <section className="ab-stats">
          <div className="container">
            <div className="ab-stats-grid">
              {stats.map((s, i) => (
                <div className="ab-stat ab-animate" key={i} style={{transitionDelay: `${i * 0.1}s`}}>
                  <div className="ab-stat-val">{s.value}</div>
                  <div className="ab-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ STORY â”€â”€ */}
        <section className="ab-story">
          <div className="container">
            <div className="ab-story-grid">
              {/* Image Stack */}
              <div className="ab-story-imgs ab-animate">
                <div className="ab-story-img-main">
                  <Image src="/assets/img/about/dr_katana.jpeg" alt="Dr. Katana" fill style={{objectFit:'cover'}} />
                </div>
                <div className="ab-story-img-accent">
                  <Image src="/assets/img/about/before_after.jpeg" alt="Before and after" fill style={{objectFit:'cover'}} />
                </div>
                <div className="ab-story-badge">
                  <strong>8+</strong> Years of Beauty
                </div>
              </div>

              {/* Text */}
              <div className="ab-animate ab-delay-2">
                <span className="ab-tag">✦ Our Story</span>
                <div className="ab-divider"></div>
                <h2 className="ab-story-title">
                  Dr. Katana <em>Beauty Centre</em> &amp; Weight Loss
                </h2>
                <p className="ab-story-body">
                  Dr. Katana Weight Loss &amp; Skincare was born from a passion for helping every woman feel confident, radiant, and powerful in her own skin. Our wide selection of skincare, weight management, and wellness products are expertly made to guarantee you get the glowing appearance you want and deserve.
                </p>

                <div className="ab-feat-row">
                  <div className="ab-feat-card">
                    <div className="ab-feat-icon">🌿</div>
                    <h5>Natural Ingredients</h5>
                    <p>Premium botanicals sourced for optimal skin health and results.</p>
                  </div>
                  <div className="ab-feat-card">
                    <div className="ab-feat-icon">✨</div>
                    <h5>Exceptional Results</h5>
                    <p>Every pampering session brings visible, lasting changes.</p>
                  </div>
                </div>

                <div className="ab-quote">
                  <p>&quot;Indulge in superior skincare and cosmetics designed to enhance your natural beauty through the perfect balance of science and nature.&quot;</p>
                  <div className="ab-quote-author">
                    <div className="ab-quote-avatar">👩</div>
                    <div>
                      <div className="ab-quote-name">Dr. Ritah Katana</div>
                      <div className="ab-quote-role">Founder &amp; Beauty Expert</div>
                    </div>
                  </div>
                </div>

                <Link href="/shop" className="ab-cta-btn">
                  Shop Collection →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ VALUES â”€â”€ */}
        <section className="ab-values">
          <div className="container">
            <div className="ab-values-header ab-animate">
              <span className="ab-tag">✦ What We Stand For</span>
              <h2 className="ab-values-title">
                Refined quality for <em>lasting rejuvenation.</em>
              </h2>
              <p className="ab-values-sub">
                We started with a simple idea: skincare that works in harmony with your body, not against it.
              </p>
            </div>
            <div className="ab-values-grid">
              {values.map((v, i) => (
                <div className="ab-val-card ab-animate" key={i} style={{transitionDelay: `${i * 0.15}s`}}>
                  <span className="ab-val-num">0{i + 1}</span>
                  <h3 className="ab-val-title">{v.title}</h3>
                  <p className="ab-val-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ FEATURES HIGHLIGHT â”€â”€ */}
        <section className="ab-highlight">
          <div className="container">
            <div className="ab-highlight-grid">
              {/* Text side */}
              <div className="ab-animate">
                <span className="ab-tag">✦ Why Choose Us</span>
                <div className="ab-divider"></div>
                <h2 className="ab-highlight-title">
                  Science meets <em>nature</em> in every formula.
                </h2>
                <p className="ab-highlight-body">
                  Our products are developed with care, using only the finest ingredients.
                  We believe true beauty is achieved when what you put on your skin is as
                  clean and effective as what you put in your body.
                </p>
                <div className="ab-feat-list">
                  {features.map((f, i) => (
                    <div className="ab-feat-list-item" key={i}>
                      <div className="ab-feat-list-icon">{f.icon}</div>
                      <div className="ab-feat-list-text">
                        <h5>{f.title}</h5>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mosaic */}
              <div className="ab-mosaic ab-animate ab-delay-2">
                <div className="ab-mosaic-img">
                  <Image src="/assets/img/about/quality.jpeg" alt="Quality" fill style={{objectFit:'cover'}} />
                </div>
                <div className="ab-mosaic-img">
                  <Image src="/assets/img/about/expertise.jpeg" alt="Expertise" fill style={{objectFit:'cover'}} />
                </div>
                <div className="ab-mosaic-img span2" style={{height:'200px'}}>
                  <Image src="/assets/img/about/reviews.jpeg" alt="Reviews" fill style={{objectFit:'cover'}} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ CTA STRIP â”€â”€ */}
        <section className="ab-cta-strip">
          <div className="container">
            <h2 className="ab-animate">
              Ready to <em>Transform</em> Your Skin?
            </h2>
            <p className="ab-animate ab-delay-1">
              Browse our full collection of premium beauty &amp; wellness products.
            </p>
            <Link href="/shop" className="ab-cta-strip-btn ab-animate ab-delay-2">
              Shop Now →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutArea;

