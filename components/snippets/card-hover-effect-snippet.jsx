import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiLock, PiMegaphone, PiMonitor } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description: "Creating captivating and responsive websites.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description: "Building personalized and functional applications.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media Marketing",
    description: "Engaging content and data-driven strategies.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Lead Generation",
    description: "Capturing valuable leads and maximizing ROI.",
  },
];
