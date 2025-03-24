import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative overflow-hidden  text-white py-16">
        <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#9c3034] to-[#e6171e]">
              EyePune - Digital Marketing
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Data-Driven Digital Marketing for Growth
            </h1>
            <p className="mt-5 text-lg text-gray-300">
              At <span className="font-semibold text-white">EyePune</span>, we
              specialize in SEO, PPC, social media marketing, and email
              campaigns to drive real engagement and sales. Our team crafts
              data-driven strategies to elevate your brand’s digital presence.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a
              className="py-3 px-6 inline-block rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
