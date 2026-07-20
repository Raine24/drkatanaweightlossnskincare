import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";

const ShippingPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shipping Policy - Dr. Katana Weight Loss & Skincare" />
      <HeaderTwo style_2={true} />
      <section className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                <h2 className="tp-section-title mb-40">Shipping and Delivery Policy</h2>
                
                <p className="mb-20">We are dedicated to ensuring your beauty and wellness packages reach you securely and in a timely manner. Please review our shipping practices below.</p>
                
                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>1. Local Delivery (Kampala & Surrounding Areas)</h4>
                <p className="mb-20">We offer same-day or next-day delivery for orders within Kampala via local courier services (e.g., SafeBoda, local delivery riders). Delivery fees vary depending on your exact location and will be communicated to you before dispatch. Payment upon delivery is available for select locations.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>2. Upcountry Deliveries (Rest of Uganda)</h4>
                <p className="mb-20">For customers outside Kampala, we ship orders via reliable bus/courier transport services. Upcountry deliveries typically take 1 to 3 business days. Customers are required to make full payment before the package is dispatched to the courier station.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>3. International Shipping</h4>
                <p className="mb-20">We currently accept international orders on a case-by-case basis. Shipping times and fees will vary significantly based on the destination country and customs regulations. Please contact us directly via WhatsApp to arrange an international shipment.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>4. Handling of Fragile Items</h4>
                <p className="mb-20">Many of our skincare and liquid products are packed in fragile containers. We ensure secure, bubble-wrapped packaging to prevent breakage. However, we advise you to inspect your package immediately upon receipt before signing off with the courier.</p>

                <h4 className="mb-10 mt-30" style={{ color: '#111' }}>5. Order Tracking</h4>
                <p className="mb-20">Once your order is dispatched, our team will share the courier contact details, receipt, or tracking number with you via WhatsApp or SMS, so you can easily track your delivery.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ShippingPage;

