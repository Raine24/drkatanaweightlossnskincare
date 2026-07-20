import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const QualityIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ExpertiseIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ReputationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const whyCards = [
  {
    num: '01',
    icon: <QualityIcon />,
    title: 'Quality Products',
    text: 'At Dr. Katana, we take pride in offering only the finest skincare and wellness products — carefully formulated using natural and organic ingredients that truly deliver results.',
  },
  {
    num: '02',
    icon: <ExpertiseIcon />,
    title: 'Professional Expertise',
    text: 'Our team of trained beauty experts is passionate about helping every client achieve their personal goals through personalised recommendations and science-backed solutions.',
  },
  {
    num: '03',
    icon: <ReputationIcon />,
    title: 'Positive Reputation',
    text: 'Known and trusted across Kampala and beyond — Dr. Katana Weight Loss & Skincare is celebrated for excellent service, authentic products, and real, visible transformations.',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Clients' },
  { value: '200+', label: 'Products' },
  { value: '8+',   label: 'Years Experience' },
  { value: '98%',  label: 'Satisfaction Rate' },
];

const BeautyOfferBanner = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('hpab-visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.hpab-anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* â”€â”€ Tokens â”€â”€ */
        .hpab-section {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          background: #fff;
          overflow: hidden;
        }

        /* â”€â”€ Animation â”€â”€ */
        .hpab-anim {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .hpab-anim.hpab-visible { opacity: 1; transform: translateY(0); }
        .hpab-d1 { transition-delay: 0.1s !important; }
        .hpab-d2 { transition-delay: 0.22s !important; }
        .hpab-d3 { transition-delay: 0.34s !important; }
        .hpab-d4 { transition-delay: 0.46s !important; }

        /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
           ABOUT / STORY SECTION
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
        .hpab-story { padding: 110px 0 120px; }

        .hpab-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .hpab-story-grid { grid-template-columns: 1fr; gap: 54px; }
        }

        /* Image stack */
        .hpab-img-stack { position: relative; height: 580px; }
        @media (max-width: 991px) { .hpab-img-stack { height: 420px; } }
        @media (max-width: 576px)  { .hpab-img-stack { height: 300px; } }

        .hpab-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 72%; height: 82%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.12);
        }
        .hpab-img-accent {
          position: absolute;
          bottom: 0; right: 0;
          width: 50%; height: 52%;
          border-radius: 20px;
          overflow: hidden;
          border: 6px solid #fff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.14);
        }
        .hpab-img-main img,
        .hpab-img-accent img { width: 100%; height: 100%; object-fit: cover; }

        .hpab-badge {
          position: absolute;
          top: 50%; left: 58%;
          transform: translate(-50%, -50%);
          width: 108px; height: 108px;
          border-radius: 50%;
          background: var(--tp-theme-primary, #c2185b);
          color: #fff;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.5px; text-align: center;
          text-transform: uppercase; line-height: 1.35;
          box-shadow: 0 8px 32px rgba(194,24,91,0.45);
          z-index: 10;
        }
        .hpab-badge strong { font-size: 24px; display: block; line-height: 1; margin-bottom: 3px; }

        /* Text side */
        .hpab-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--tp-theme-primary, #c2185b);
          margin-bottom: 18px;
        }
        .hpab-tag::before {
          content: ''; display: block;
          width: 36px; height: 1.5px;
          background: var(--tp-theme-primary, #c2185b);
        }
        .hpab-story-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: #000;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 22px;
        }
        .hpab-story-title em { font-style: italic; font-weight: 400; color: var(--tp-theme-primary, #c2185b); }
        .hpab-story-body {
          font-size: 15px; color: #000;
          line-height: 1.9; margin-bottom: 32px;
        }

        /* Mini feature pills */
        .hpab-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 36px; }
        .hpab-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fce4ec;
          border-radius: 50px;
          padding: 10px 20px;
          font-size: 13px; font-weight: 600;
          color: #880e4f;
        }
        .hpab-pill-icon { font-size: 16px; }

        /* Quote block */
        .hpab-quote {
          background: #f9f5f0;
          border-left: 3px solid var(--tp-theme-primary, #c2185b);
          border-radius: 0 16px 16px 0;
          padding: 22px 26px;
          margin-bottom: 36px;
        }
        .hpab-quote p {
          font-size: 14px; color: #000;
          font-style: italic; line-height: 1.75; margin: 0 0 14px;
        }
        .hpab-quote-author { display: flex; align-items: center; gap: 12px; }
        .hpab-quote-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          background: var(--tp-theme-primary, #c2185b);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 18px;
        }
        .hpab-quote-name { font-size: 13px; font-weight: 700; color: #000; }
        .hpab-quote-role { font-size: 11px; color: #555; }

        .hpab-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--tp-theme-primary, #c2185b);
          color: #fff; text-decoration: none;
          padding: 16px 40px; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
          box-shadow: 0 8px 28px rgba(194,24,91,0.28);
        }
        .hpab-cta:hover {
          background: #000; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        }

        /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
           STATS STRIP
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
        .hpab-stats {
          background: #1a0010;
          padding: 48px 0;
        }
        .hpab-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 768px) { .hpab-stats-grid { grid-template-columns: repeat(2,1fr); gap: 32px 0; } }
        .hpab-stat {
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .hpab-stat:last-child { border-right: none; }
        .hpab-stat-val {
          font-size: 44px; font-weight: 800; line-height: 1;
          color: var(--tp-theme-primary, #c2185b);
          margin-bottom: 6px;
        }
        .hpab-stat-label {
          font-size: 12px; color: rgba(255,255,255,0.55);
          letter-spacing: 2px; text-transform: uppercase;
        }

        /* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
           WHY CHOOSE US
        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
        .hpab-why { padding: 110px 0 120px; background: #f9f5f0; }

        .hpab-why-header { text-align: center; margin-bottom: 70px; }
        .hpab-why-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--tp-theme-primary, #c2185b);
          margin-bottom: 18px;
        }
        .hpab-why-title {
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700; color: #000;
          line-height: 1.15; letter-spacing: -1px;
        }
        .hpab-why-title em { font-style: italic; font-weight: 400; color: var(--tp-theme-primary,#c2185b); }
        .hpab-why-sub {
          font-size: 15px; color: #000;
          max-width: 480px; margin: 16px auto 0; line-height: 1.8;
        }
        .hpab-divider { width: 48px; height: 2px; background: var(--tp-theme-primary,#c2185b); border-radius: 2px; margin: 20px auto 0; }

        /* Cards grid */
        .hpab-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 991px) { .hpab-why-grid { grid-template-columns: 1fr; } }

        .hpab-why-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px 40px;
          position: relative;
          border: 1px solid rgba(0,0,0,0.05);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s;
        }
        .hpab-why-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--tp-theme-primary, #c2185b);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .hpab-why-card:hover { transform: translateY(-10px); box-shadow: 0 28px 60px rgba(194,24,91,0.1); }
        .hpab-why-card:hover::after { transform: scaleX(1); }

        .hpab-why-num {
          position: absolute; top: 24px; right: 28px;
          font-size: 80px; font-weight: 800; line-height: 1;
          color: rgba(194,24,91,0.05);
          pointer-events: none;
          transition: color 0.4s;
        }
        .hpab-why-card:hover .hpab-why-num { color: rgba(194,24,91,0.09); }

        .hpab-why-icon {
          width: 64px; height: 64px;
          border-radius: 16px;
          background: #fce4ec;
          display: flex; align-items: center; justify-content: center;
          color: var(--tp-theme-primary, #c2185b);
          margin-bottom: 30px;
          transition: background 0.4s, color 0.4s;
        }
        .hpab-why-card:hover .hpab-why-icon {
          background: var(--tp-theme-primary, #c2185b);
          color: #fff;
        }

        .hpab-why-card h3 {
          font-size: 22px; font-weight: 700;
          color: #000; margin-bottom: 14px;
          position: relative; display: inline-block;
        }
        .hpab-why-card h3::after {
          content: ''; position: absolute;
          left: 0; bottom: -5px; height: 2px; width: 24px;
          background: var(--tp-theme-primary,#c2185b);
          transition: width 0.4s ease;
        }
        .hpab-why-card:hover h3::after { width: 100%; }

        .hpab-why-card p {
          font-size: 14px; color: #000;
          line-height: 1.8; margin: 12px 0 0;
        }
      `}</style>

      {/* â”€â”€ ABOUT / STORY SECTION â”€â”€ */}
      <section className="hpab-section hpab-story">
        <div className="container">
          <div className="hpab-story-grid">

            {/* Image Stack */}
            <div className="hpab-img-stack hpab-anim">
              <div className="hpab-img-main">
                <Image src="/assets/img/about/dr_katana.jpeg" alt="Dr. Katana" fill style={{objectFit:'cover'}} />
              </div>
              <div className="hpab-img-accent">
                <Image src="/assets/img/about/before_after.jpeg" alt="Before & After" fill style={{objectFit:'cover'}} />
              </div>
              <div className="hpab-badge">
                <strong>8+</strong>
                Years of Beauty
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="hpab-tag hpab-anim">About The Brand</div>
              <h2 className="hpab-story-title hpab-anim hpab-d1">
                Dr. Katana <em>Beauty Centre</em><br />
                &amp; Weight Loss
              </h2>
              <p className="hpab-story-body hpab-anim hpab-d2">
                Dr. Katana Weight Loss &amp; Skincare is a leading beauty store offering a curated range of women&apos;s beauty products, wellness solutions, and good luck miracle products. Our team of experts is dedicated to providing high-quality products that deliver real, visible results.
                <br /><br />
                Our mission is to help every customer look and feel their best with our carefully selected and well-manufactured herbal products — from skincare and weight loss to sexual enhancers and beyond.
              </p>

              <div className="hpab-pills hpab-anim hpab-d2">
                <span className="hpab-pill"><span className="hpab-pill-icon">🌿</span>Natural Ingredients</span>
                <span className="hpab-pill"><span className="hpab-pill-icon">✨</span>Real Results</span>
                <span className="hpab-pill"><span className="hpab-pill-icon">💎</span>Premium Quality</span>
              </div>

              <div className="hpab-quote hpab-anim hpab-d3">
                <p>&quot;Indulge in superior skincare and cosmetics designed to enhance your natural beauty through the perfect balance of science and nature.&quot;</p>
                <div className="hpab-quote-author">
                  <div className="hpab-quote-avatar">👩</div>
                  <div>
                    <div className="hpab-quote-name">Dr. Ritah Katana</div>
                    <div className="hpab-quote-role">Founder &amp; Beauty Expert</div>
                  </div>
                </div>
              </div>

              <div className="hpab-anim hpab-d3">
                <Link href="/shop" className="hpab-cta">
                  Shop Collection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ STATS STRIP â”€â”€ */}
      <div className="hpab-stats">
        <div className="container">
          <div className="hpab-stats-grid">
            {stats.map((s, i) => (
              <div className="hpab-stat hpab-anim" key={i} style={{transitionDelay:`${i*0.1}s`}}>
                <div className="hpab-stat-val">{s.value}</div>
                <div className="hpab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* â”€â”€ WHY CHOOSE US â”€â”€ */}
      <section className="hpab-section hpab-why">
        <div className="container">
          <div className="hpab-why-header hpab-anim">
            <div className="hpab-why-tag">✦ Why Choose Us</div>
            <h2 className="hpab-why-title">
              Our commitment to your<br /><em>beauty &amp; wellness</em>
            </h2>
            <p className="hpab-why-sub">
              We go beyond products — we deliver confidence, transformation, and care with every order.
            </p>
            <div className="hpab-divider"></div>
          </div>

          <div className="hpab-why-grid">
            {whyCards.map((card, i) => (
              <div className={`hpab-why-card hpab-anim hpab-d${i+1}`} key={i}>
                <span className="hpab-why-num">{card.num}</span>
                <div className="hpab-why-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeautyOfferBanner;

