import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";

const RefundPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Refund Policy - Dr. Katana Beauty Centre" />
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <h2 className="tp-section-title mb-40">Refund and Return Policy</h2>
                
                <p className="mb-20">At Dr. Katana Beauty Centre, we are committed to providing you with premium quality health, beauty, and wellness products. Please read our policy regarding returns and refunds carefully.</p>
                
                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>1. Non-Returnable Items</h4>
                <p className="mb-20">Due to hygiene and safety reasons, we do not accept returns or offer refunds on any skincare, cosmetics, or wellness/weight loss supplements once the packaging has been opened or the seal broken. Intimate products, including bedroom enhancement packages, are strictly non-returnable.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>2. Damaged or Defective Goods</h4>
                <p className="mb-20">If you receive a product that is damaged during transit or defective, please contact us within 24 hours of receiving your delivery. We will require photographic evidence of the damage. Once verified, we will arrange for a replacement to be sent to you at no additional cost.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>3. Order Cancellations</h4>
                <p className="mb-20">Orders can only be cancelled before they are dispatched for delivery. Once an order has left our facility in Kampala, it cannot be cancelled, and you will be responsible for receiving the package.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>4. Efficacy and Individual Results</h4>
                <p className="mb-20">We do not offer refunds based on dissatisfaction with product efficacy. Skincare and weight loss results vary significantly from person to person depending on body type, consistency of use, and lifestyle. We encourage you to consult with us before purchasing to ensure you select the best package for your needs.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>5. Contact for Returns</h4>
                <p className="mb-20">To initiate a report regarding a damaged item, please contact our support team at +256 782 682878 or visit our physical location at Rm F9, Annet Plaza, Opp. Old Taxi Park, Kampala, Uganda.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default RefundPage;
