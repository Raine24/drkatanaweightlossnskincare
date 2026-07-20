import React, { useState } from "react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
// internal
import slider_img_1 from "@assets/img/slider/Gemini_Generated_Image_dpqfrddpqfrddpqf.png";
import slider_img_2 from "@assets/img/slider/Gemini_Generated_Image_ffummcffummcffum.png";
import slider_img_3 from "@assets/img/slider/Gemini_Generated_Image_kgzevakgzevakgze.png";
import slider_img_4 from "@assets/img/slider/Gemini_Generated_Image_nso0ipnso0ipnso0.png";
import slider_img_5 from "@assets/img/slider/Gemini_Generated_Image_q766atq766atq766.png";

// slider data
const sliderData = [
  {
    id: 1,
    pre_title: "THE NEW STANDARD",
    title: "Radiant, Glass Skin",
    subtitle: "Experience the ultimate hydration and natural glow with our signature formulations.",
    img: slider_img_1,
    link: "/shop",
    btn_text: "Shop Now"
  },
  {
    id: 2,
    pre_title: "CURATED CARE",
    title: "Your Daily Ritual",
    subtitle: "Transform your skincare routine into a moment of pure luxury and self-care.",
    img: slider_img_2,
    link: "/shop",
    btn_text: "Discover Collection"
  },
  {
    id: 3,
    pre_title: "TARGETED RESULTS",
    title: "Science Meets Nature",
    subtitle: "Potent, active ingredients designed to restore, protect, and illuminate.",
    img: slider_img_3,
    link: "/shop",
    btn_text: "Learn More"
  },
  {
    id: 4,
    pre_title: "SPIRITUAL WELLNESS",
    title: "Attract Positivity",
    subtitle: "Discover our exclusive range of spiritual healing and good luck essentials.",
    img: slider_img_4,
    link: "/shop?category=goodluck",
    btn_text: "Explore Miracles"
  },
  {
    id: 5,
    pre_title: "EXCLUSIVE PACKAGES",
    title: "The Bridal Glow",
    subtitle: "Carefully curated sets to prepare your skin for your most important moments.",
    img: slider_img_5,
    link: "/shop?category=packages",
    btn_text: "View Packages"
  },
];

const HomeHeroSlider = () => {
  return (
    <>
      <section className="tp-luxury-hero-area p-relative z-index-1">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoHeight={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ el: ".tp-luxury-slider-dot", clickable: true }}
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          className="tp-luxury-slider-active swiper-container"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="tp-luxury-slider-item"
            >
              {({ isActive }) => (
                <>
                  <div className={`tp-luxury-slider-bg-wrapper ${isActive ? 'is-active' : ''}`}>
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill
                      style={{objectFit: 'cover', objectPosition: 'center 20%'}}
                      priority={index === 0}
                      className="tp-luxury-slider-bg"
                    />
                    <div className="tp-luxury-slider-overlay"></div>
                  </div>

                  <div className="tp-luxury-slider-container container">
                    <div className={`tp-luxury-slider-content ${isActive ? 'is-active' : ''}`}>
                      <span className="tp-luxury-slider-pre-title">{item.pre_title}</span>
                      <h1 className="tp-luxury-slider-title">{item.title}</h1>
                      <p className="tp-luxury-slider-subtitle">{item.subtitle}</p>
                      
                      <div className="tp-luxury-slider-btn-wrapper">
                        <Link href={item.link} className="tp-luxury-btn">
                          {item.btn_text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
          
          <div className="tp-luxury-slider-controls">
            <div className="tp-luxury-slider-dot"></div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default HomeHeroSlider;
