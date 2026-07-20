import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";

const DisclaimerPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Medical Disclaimer - Dr. Katana Beauty Centre" />
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <h2 className="tp-section-title mb-40">Medical & Results Disclaimer</h2>
                
                <p className="mb-20">At Dr. Katana Beauty Centre & Weight Loss, your health and wellness are our top priorities. Please read the following disclaimer carefully before purchasing or using any of our products.</p>
                
                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>1. Not Medical Advice</h4>
                <p className="mb-20">The information provided on our website, social media pages, product packaging, and through consultations is for educational and informational purposes only. It is not intended to substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>2. Individual Results May Vary</h4>
                <p className="mb-20">Every individual&apos;s body is unique. Results from our weight loss packages, skincare formulations, and other wellness products will vary from person to person depending on factors such as genetics, age, gender, lifestyle, diet, and consistency of use. We do not guarantee specific results.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>3. Product Ingredients and Allergies</h4>
                <p className="mb-20">While we take pride in offering high-quality products, it is the buyer&apos;s responsibility to check the ingredients of any skincare or wellness product for potential allergens. If you experience any adverse reactions, skin irritation, or discomfort, discontinue use immediately and consult a doctor.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>4. FDA/NDA Registration</h4>
                <p className="mb-20">Statements regarding dietary supplements and holistic treatments have not necessarily been evaluated by the National Drug Authority (NDA) of Uganda or the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>5. Use at Your Own Risk</h4>
                <p className="mb-20">By purchasing and using products from Dr. Katana Beauty Centre, you agree that you are doing so voluntarily and at your own risk. We shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default DisclaimerPage;
