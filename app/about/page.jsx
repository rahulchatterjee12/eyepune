import React from "react";
import { Meteors } from "@/components/ui/projects/meteors";
import { PiCheckCircleDuotone } from "react-icons/pi";

const items = new Array(6).fill(0);

const story = [
  {
    date: "2023 - Present",
    title: "Web Designer & Web Developer",
    description:
      "The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.",
    details: [
      "Designed template UIs and design systems in Figma.",
      "Converted UIs into responsive HTML and CSS with a mobile-first approach.",
      "Created custom illustrations and item description banners.",
      "Provided detailed documentation and customer support on GitHub.",
      "Engaged with users to address setup inquiries, bug issues, and feedback.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer",
    description:
      "Worked on developing interactive and dynamic web applications using React and Next.js.",
    details: [
      "Developed reusable React components.",
      "Implemented performance optimizations and SEO improvements.",
      "Integrated third-party APIs and services.",
      "Collaborated with designers to ensure UI/UX consistency.",
      "Wrote unit tests to maintain code reliability.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer",
    description:
      "Worked on developing interactive and dynamic web applications using React and Next.js.",
    details: [
      "Developed reusable React components.",
      "Implemented performance optimizations and SEO improvements.",
      "Integrated third-party APIs and services.",
      "Collaborated with designers to ensure UI/UX consistency.",
      "Wrote unit tests to maintain code reliability.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer",
    description:
      "Worked on developing interactive and dynamic web applications using React and Next.js.",
    details: [
      "Developed reusable React components.",
      "Implemented performance optimizations and SEO improvements.",
      "Integrated third-party APIs and services.",
      "Collaborated with designers to ensure UI/UX consistency.",
      "Wrote unit tests to maintain code reliability.",
    ],
  },
];

const page = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="relative overflow-hidden  text-white py-16">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#9c3034] to-[#e6171e]">
                About EyePune - Digital Excellence Redefined
              </p>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-300">
                  At <span className="font-semibold text-white">EyePune</span>,
                  we transform ideas into reality with innovative web
                  development, lead generation, and UI/UX solutions. Our
                  expertise in digital marketing and application development
                  ensures businesses scale to new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 mb-10 lg:mb-14 rounded-xl p-6 lg:p-8">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      2,000+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      Preline partners
                    </p>
                  </div>
                </div>
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <img
                      className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7"
                      src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      85%
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      Happy customers
                    </p>
                  </div>
                </div>
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      $55M+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      Ads managed yearly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {story.map((item, index) => (
          <div key={index} className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 ">
              <div className="relative z-10 size-6 flex justify-center items-center">
                <PiCheckCircleDuotone color="#691215" size={30} />
              </div>
            </div>

            {/* Right Content */}
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-white">{item.date}</h3>
              <p className="font-semibold text-sm text-gray-500">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>

              {item.details && (
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {item.details.map((detail, i) => (
                    <li key={i} className="ps-1 text-sm text-gray-400">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Our Team
        </h2>
        <p className="mt-1 text-gray-600">Creative people</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex flex-col rounded-xl p-4 md:p-6 bg-gray-900 border border-gray-800"
          >
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full size-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-300">David Forren</h3>
                <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>

            <div className="mt-3 space-x-1"></div>
            <Meteors number={15} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
