import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const review_images = [
  '/assets/img/testimonial/real-reviews/472666548_1259192505190844_5458100885101488334_n.jpg',
  '/assets/img/testimonial/real-reviews/481120088_1224508289076220_962300917374567606_n.jpg',
  '/assets/img/testimonial/real-reviews/481142510_1221984962661886_378587740164008572_n.jpg',
  '/assets/img/testimonial/real-reviews/482321147_1231244511735931_6726189393635454557_n.jpg',
  '/assets/img/testimonial/real-reviews/484566519_1238938480966534_2427543922455722656_n.jpg',
  '/assets/img/testimonial/real-reviews/486802567_1247558110104571_2017159971582299191_n.jpg',
  '/assets/img/testimonial/real-reviews/486897037_1249825733211142_3940129810166338196_n.jpg',
  '/assets/img/testimonial/real-reviews/487200934_1252119696315079_3730005039315248389_n.jpg',
  '/assets/img/testimonial/real-reviews/487311473_1251053129755069_8695168250990029169_n.jpg',
  '/assets/img/testimonial/real-reviews/487436478_1249813996545649_3410112326208051248_n.jpg',
  '/assets/img/testimonial/real-reviews/641555807_1533416111518768_3134977037769593579_n.jpg'
];

// slider setting 
const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    '1200': { slidesPerView: 4 },
    '992': { slidesPerView: 3 },
    '768': { slidesPerView: 2 },
    '0': { slidesPerView: 1 },
  }
}

const BeautyTestimonial = () => {
  return (
    <>
      <section className="tp-testimonial-area pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-3 mb-45 text-center">
                <span className="tp-section-title-pre-3">Customers Review</span>
                <h3 className="tp-section-title-3">What our Clients say</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider-3">
                <Swiper 
                  {...slider_setting} 
                  modules={[Autoplay]} 
                  className="tp-testimoinal-slider-active-3 swiper-container"
                >
                  {review_images.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '10%', overflow: 'hidden', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}>
                        <Image 
                          src={imgUrl} 
                          alt={`Customer Review ${index + 1}`} 
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BeautyTestimonial), { ssr: false });
