import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

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
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-[#c5343a] to-[#e3a5a7] bg-opacity-50"
        >
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-4/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-8">
              <img
                src={logo.image}
                alt="logo"
                className="w-[80%] md:w-[40%] rounded-lg"
              />
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Bird does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
