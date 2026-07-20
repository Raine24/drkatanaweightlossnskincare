import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";

const PrivacyPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Privacy Policy - Dr. Katana Weight Loss & Skincare" />
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <h2 className="tp-section-title mb-40">Privacy Policy</h2>
                
                <p className="mb-20">At Dr. Katana Weight Loss &amp; Skincare, accessible from our website and Kampala store, one of our main priorities is the privacy of our visitors and customers. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
                
                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>1. Information We Collect</h4>
                <p className="mb-20">We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products, or when you contact us via WhatsApp, phone, or email. The personal information we collect may include your name, phone number, email address, delivery address, and payment information.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>2. How We Use Your Information</h4>
                <p className="mb-20">We use the information we collect to process your orders, arrange delivery within Uganda and internationally, provide customer support, and communicate with you about your beauty and wellness journey. With your consent, we may also send you promotional messages about new weight loss packages or skincare products.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>3. Data Protection</h4>
                <p className="mb-20">We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice, except for trusted third parties who assist us in operating our website or delivering your orders.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>4. Cookies</h4>
                <p className="mb-20">Like any other website, we use &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>5. Contact Us</h4>
                <p className="mb-20">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at Katanaritah256@gmail.com or visit us at Rm F9, Annet Plaza, Opp. Old Taxi Park, Kampala, Uganda.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default PrivacyPage;

