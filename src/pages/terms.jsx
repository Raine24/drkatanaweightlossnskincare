import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";

const TermsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Terms & Conditions - Dr. Katana Beauty Centre" />
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <h2 className="tp-section-title mb-40">Terms and Conditions</h2>
                
                <p className="mb-20">Welcome to Dr. Katana Beauty Centre & Weight Loss. These terms and conditions outline the rules and regulations for the use of our website and the purchase of our products.</p>
                
                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>1. General Use</h4>
                <p className="mb-20">By accessing this website, we assume you accept these terms and conditions. Do not continue to use Dr. Katana Beauty Centre if you do not agree to take all of the terms and conditions stated on this page. All products, including weight loss supplements and skincare formulations, are subject to availability.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>2. Product Information</h4>
                <p className="mb-20">We strive to display as accurately as possible the colors, features, specifications, and details of the products available on the site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>3. Pricing and Payments</h4>
                <p className="mb-20">All prices are subject to change without notice. We reserve the right to modify or discontinue any product or service at any time. We are not liable to you or to any third party for any modification, price change, suspension, or discontinuance of the products.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>4. Health and Wellness Products</h4>
                <p className="mb-20">The beauty and weight loss products sold on this website are for cosmetic and wellness purposes. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new diet or using new skin treatments, especially if you have sensitive skin or existing medical conditions.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>5. User Accounts</h4>
                <p className="mb-20">If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. You must immediately notify us of any unauthorized uses of your information, your account, or any other breaches of security.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default TermsPage;
