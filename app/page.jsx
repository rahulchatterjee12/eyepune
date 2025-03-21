import SliderOne from "@/components/ui/slider";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import WebsiteDesign from "../components/website-design";
import GraphicDesign from "../components/graphic-design";
import Brands from "../components/brands";
import Services from "../components/services";
import FAQS from "../components/faq";
import { InfiniteMovingCardsDemo } from "../components/snippets/infinite-moving-card-snippet";

export default function Home() {
  return (
    <>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Welcome to EyE PunE
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Crafting Exceptional Digital Experiences
        </p>

        <Link
          href={"/contact"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div>
          <WebsiteDesign />
        </div>
        <div>
          <GraphicDesign />
        </div>
        <div>
          <Brands />
        </div>
        <div id="services">
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </>
  );
}
