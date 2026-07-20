import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import AboutArea from "@/components/about/about-area";

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About Us - Dr. Katana Beauty Centre" />
      <HeaderTwo style_2={true} />
      <AboutArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default AboutPage;
