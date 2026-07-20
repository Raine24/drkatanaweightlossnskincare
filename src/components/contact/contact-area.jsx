import React, { useState } from "react";

const ContactArea = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        /* â”€â”€â”€ Contact Page Wrapper â”€â”€â”€ */
        .kc-page {
          background: #f7f7f7;
          padding: 80px 0 100px;
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
        }

        /* â”€â”€â”€ Page Header â”€â”€â”€ */
        .kc-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .kc-header-title {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: #000;
          letter-spacing: -1.5px;
          line-height: 1;
          text-transform: uppercase;
          margin: 0;
        }
        .kc-header-desc {
          max-width: 380px;
          padding-top: 10px;
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 15px;
          color: #111;
          line-height: 1.8;
        }

        /* â”€â”€â”€ Two-column layout â”€â”€â”€ */
        .kc-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        @media (max-width: 900px) {
          .kc-body { grid-template-columns: 1fr; }
          .kc-header { flex-direction: column; gap: 16px; }
        }

        /* â”€â”€â”€ Shared Panel â”€â”€â”€ */
        .kc-panel {
          background: #fff;
          border-radius: 16px;
          padding: 40px 44px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.04);
        }
        .kc-panel-label {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #111;
          margin-bottom: 28px;
        }

        /* â”€â”€â”€ Form â”€â”€â”€ */
        .kc-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 560px) { .kc-form-row { grid-template-columns: 1fr; } }
        .kc-field { display: flex; flex-direction: column; gap: 8px; }
        .kc-field label {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #111;
        }
        .kc-field input,
        .kc-field textarea {
          border: 1.5px solid #ebebeb;
          border-radius: 8px;
          padding: 13px 16px;
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 14px;
          color: #000;
          background: #fafafa;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
          resize: none;
          width: 100%;
        }
        .kc-field input:focus,
        .kc-field textarea:focus {
          border-color: var(--tp-theme-primary, #c2185b);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(194,24,91,0.07);
        }
        .kc-field input::placeholder,
        .kc-field textarea::placeholder { color: #c5c5c5; font-size: 13px; }
        .kc-field-full { grid-column: 1 / -1; }
        .kc-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 22px;
          padding: 14px 36px;
          background: var(--tp-theme-primary, #c2185b);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .kc-submit-btn:hover {
          background: var(--tp-heading-secondary, #1a1a2e);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .kc-success {
          margin-top: 18px;
          padding: 14px 18px;
          background: #fce4ec;
          border: 1px solid #f48fb1;
          border-radius: 8px;
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 14px;
          color: #880e4f;
          font-weight: 500;
          animation: kcFadeUp 0.35s ease;
        }
        @keyframes kcFadeUp {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* â”€â”€â”€ Right Column â”€â”€â”€ */
        .kc-right { display: flex; flex-direction: column; gap: 24px; }

        /* Contact Info panel */
        .kc-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 560px) { .kc-info-grid { grid-template-columns: 1fr; } }
        .kc-info-item { display: flex; align-items: flex-start; gap: 14px; }
        .kc-info-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          border-radius: 50%;
          background: #fce4ec;
          display: flex; align-items: center; justify-content: center;
          color: var(--tp-theme-primary, #c2185b);
          font-size: 15px;
          margin-top: 2px;
        }
        .kc-info-text-label {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          margin-bottom: 4px;
          display: block;
        }
        .kc-info-text-val {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #000;
          text-decoration: none;
          line-height: 1.5;
        }
        .kc-info-text-val:hover { color: var(--tp-theme-primary, #c2185b); }
        .kc-info-email { grid-column: 1 / -1; }

        /* Hours panel */
        .kc-hours-divider {
          height: 1px; background: #f0f0f0; margin: 20px 0;
        }
        .kc-hours-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 500px) { .kc-hours-grid { grid-template-columns: 1fr; } }
        .kc-hours-slot-day {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          margin-bottom: 6px;
        }
        .kc-hours-slot-time {
          font-family: var(--tp-ff-jost, 'Jost', sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #000;
        }

        /* Social icons */
        .kc-socials { display: flex; gap: 10px; margin-top: 4px; }
        .kc-social-a {
          width: 36px; height: 36px;
          border: 1.5px solid #ebebeb;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #555; font-size: 13px;
          text-decoration: none;
          transition: all 0.25s;
        }
        .kc-social-a:hover {
          background: var(--tp-theme-primary, #c2185b);
          border-color: var(--tp-theme-primary, #c2185b);
          color: #fff;
          transform: translateY(-2px);
        }

        /* â”€â”€â”€ Map â”€â”€â”€ */
        .kc-map {
          border-radius: 16px;
          overflow: hidden;
          height: 380px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .kc-map iframe { width:100%; height:100%; border:0; display:block; }
      `}</style>

      <div className="kc-page">
        <div className="container">

          {/* â”€â”€ Page Header â”€â”€ */}
          <div className="kc-header">
            <h1 className="kc-header-title">Contact Us</h1>
            <p className="kc-header-desc">
              If you have any questions, please feel free to get in touch with us via
              phone, WhatsApp, email, the form below, or even on social media!
            </p>
          </div>

          {/* â”€â”€ Body: Form + Info â”€â”€ */}
          <div className="kc-body">

            {/* LEFT â€” Contact Form */}
            <div className="kc-panel">
              <p className="kc-panel-label">Get In Touch</p>
              <form onSubmit={handleSubmit}>
                <div className="kc-form-row">
                  <div className="kc-field">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name*" required />
                  </div>
                  <div className="kc-field">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number*" />
                  </div>
                  <div className="kc-field kc-field-full">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email*" required />
                  </div>
                  <div className="kc-field kc-field-full">
                    <label>Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Write your message hereâ€¦" required></textarea>
                  </div>
                </div>
                <button type="submit" className="kc-submit-btn">
                  Send Message &rarr;
                </button>
                {submitted && (
                  <div className="kc-success">
                    ✅ Thank you! Your message has been received. We&apos;ll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT â€” Contact Info + Hours */}
            <div className="kc-right">

              {/* Contact Information */}
              <div className="kc-panel">
                <p className="kc-panel-label">Contact Information</p>
                <div className="kc-info-grid">
                  <div className="kc-info-item">
                    <div className="kc-info-icon"><i className="fa-solid fa-phone"></i></div>
                    <div>
                      <span className="kc-info-text-label">Phone</span>
                      <a href="tel:+256782682878" className="kc-info-text-val">+256 782 682878</a>
                    </div>
                  </div>
                  <div className="kc-info-item">
                    <div className="kc-info-icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div>
                      <span className="kc-info-text-label">Address</span>
                      <a href="https://www.google.com/maps/search/Rm+F9,+Annet+Plaza,+Opp.+Old+Taxi+Park,+Kampala,+Uganda" target="_blank" rel="noreferrer" className="kc-info-text-val">
                        Rm F9, Annet Plaza,<br />Opp. Old Taxi Park,<br />Kampala, Uganda
                      </a>
                    </div>
                  </div>
                  <div className="kc-info-item kc-info-email">
                    <div className="kc-info-icon"><i className="fa-solid fa-envelope"></i></div>
                    <div>
                      <span className="kc-info-text-label">Email</span>
                      <a href="mailto:Katanaritah256@gmail.com" className="kc-info-text-val">Katanaritah256@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours + Socials */}
              <div className="kc-panel">
                <p className="kc-panel-label">Business Hours</p>
                <div className="kc-hours-divider"></div>
                <div className="kc-hours-grid">
                  <div>
                    <p className="kc-hours-slot-day">Monday â€“ Friday</p>
                    <p className="kc-hours-slot-time">9:00 am â€“ 8:00 pm</p>
                  </div>
                  <div>
                    <p className="kc-hours-slot-day">Saturday</p>
                    <p className="kc-hours-slot-time">9:00 am â€“ 6:00 pm</p>
                  </div>
                  <div>
                    <p className="kc-hours-slot-day">Sunday</p>
                    <p className="kc-hours-slot-time">10:00 am â€“ 5:00 pm</p>
                  </div>
                </div>
                <div className="kc-hours-divider"></div>
                <p className="kc-panel-label" style={{marginBottom: '14px'}}>Find Us On</p>
                <div className="kc-socials">
                  <a href="https://www.facebook.com/profile.php?id=100045511818141" target="_blank" rel="noreferrer" className="kc-social-a"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/ritah_katana_beauty_centre/" target="_blank" rel="noreferrer" className="kc-social-a"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.youtube.com/@ritahkatanabeautycentre" target="_blank" rel="noreferrer" className="kc-social-a"><i className="fa-brands fa-youtube"></i></a>
                  <a href="https://www.tiktok.com/@drkatanabeautycentre" target="_blank" rel="noreferrer" className="kc-social-a"><i className="fa-brands fa-tiktok"></i></a>
                  <a href="https://wa.me/256782682878" target="_blank" rel="noreferrer" className="kc-social-a"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>

            </div>
          </div>

          {/* â”€â”€ Map â”€â”€ */}
          <div className="kc-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7547508386484!2d32.57525731529975!3d0.31375006406854095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb1203f1afab%3A0x3f0b84d1e1cd6fcf!2sAnnet%20Plaza%2C%20Kampala!5e0!3m2!1sen!2sug!4v1689800000000!5m2!1sen!2sug"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Katana Beauty Centre â€“ Annet Plaza, Kampala"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactArea;

