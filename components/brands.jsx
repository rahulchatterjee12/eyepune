"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  {
    image:
      "https://static.wixstatic.com/media/3e1e91_cc87b2c7b5074aa7bf0b588281463438~mv2.jpg/v1/crop/x_18,y_18,w_627,h_464/fill/w_346,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7_20240119_153049_0006_edited_edited.jpg",
  },
  {
    image:
      "https://static.wixstatic.com/media/3e1e91_2acb7dfbf6a44a21839fb94485658a5e~mv2.jpg/v1/fill/w_356,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(11)_edited.jpg",
  },
  {
    image:
      "https://static.wixstatic.com/media/3e1e91_3d2865ae41724d36807ee7d6d8cd65fb~mv2.png/v1/fill/w_355,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(Logo)%20(5)%20(1).png",
  },
  {
    image:
      "https://static.wixstatic.com/media/3e1e91_c74587e304724b28a8c6133bac6dbab5~mv2.jpg/v1/crop/x_0,y_61,w_500,h_367/fill/w_356,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3e1e91_c74587e304724b28a8c6133bac6dbab5~mv2.jpg",
  },
];

const Brands = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
  return (
    <div>
      <div className="p-4 mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-[#c5343a] to-[#691215] bg-opacity-50"
        >
          The best Brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto mb-12">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>
        <Slider {...settings}>
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-8">
              <img src={logo.image} alt="logo" className=" rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
