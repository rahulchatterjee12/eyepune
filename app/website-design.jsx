"use client";

import ProjectCard from "@/components/ui/projects/Card";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
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
            title: "Gov. Tender & Construction E-commerce",
            desc: "I led the creation of our e-commerce supplier portal, streamlining registration, product listing, and management of pricing and stock. I handled all frontend work, utilizing Next.js and technologies like MaterialUI and Tailwind CSS.",
            img: "https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400",
            link: "https://www.runway.org.in",
          }}
        />
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Gov. Tender & Construction E-commerce",
            desc: "I led the creation of our e-commerce supplier portal, streamlining registration, product listing, and management of pricing and stock. I handled all frontend work, utilizing Next.js and technologies like MaterialUI and Tailwind CSS.",
            img: "https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400",
            link: "https://www.runway.org.in",
          }}
        />
      </div>
    </div>
  );
};

export default WebsiteDesign;
