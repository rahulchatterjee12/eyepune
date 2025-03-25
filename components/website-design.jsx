"use client";

import ProjectCard from "@/components/ui/projects/Card";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#c5343a] to-[#691215] bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing and developing websites that work for your
          business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Beyond Borders E-commerce",
            desc: "We created this e-commerce plarfom for our client, Beyond Borders. We designed and developed the website.",
            img: "https://i.ibb.co/Y7XgrDc3/image.png",
            link: "https://www.beyondborders.shop/",
          }}
        />
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Lalithya E-commerce",
            desc: "We created this e-commerce plarfom for our client, Lalithya. We designed and developed the website. This is a brand for women's clothing.",
            img: "https://i.ibb.co/0jm3qtvk/image.png",
            link: "https://www.lalithya.com",
          }}
        />
      </div>
    </div>
  );
};

export default WebsiteDesign;
