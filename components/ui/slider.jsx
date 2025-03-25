"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 1.67 : 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  const images = Array.from(
    { length: 10 },
    (_, i) => `/images/slider/${i + 1}.jpg`
  );

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="rounded-md px-2 md:p-10">
            <Image
              priority
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
