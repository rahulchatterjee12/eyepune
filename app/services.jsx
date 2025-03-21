"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-[#c5343a] to-[#e3a5a7] bg-opacity-50 mt-20"
      >
        Empowering Brands in the Digital Landscape
      </div>
      <p
        className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
      >
        EyE PunE is a remote digital agency specializing in website design, app
        development, and social media marketing. With a dedicated team of
        creative professionals, we focus on delivering high-quality designs,
        engaging content, and data-driven marketing strategies to connect brands
        with their audience in innovative ways. Our mission is to redefine
        digital experiences through creativity, passion, and strategic thinking.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
