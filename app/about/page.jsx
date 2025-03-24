import React from "react";
import { Meteors } from "@/components/ui/projects/meteors";

const items = new Array(6).fill(0);

const page = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="bg-gray-900 border border-gray-800 mb-10 lg:mb-14 rounded-xl p-6 lg:p-8">
        <div class="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div class="border border-neutral-800 rounded-xl">
            <div class="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    class="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                  <div class="mt-3 sm:mt-5">
                    <h3 class="text-lg sm:text-3xl font-semibold text-white">
                      2,000+
                    </h3>
                    <p class="mt-1 text-sm sm:text-base text-neutral-400">
                      Preline partners
                    </p>
                  </div>
                </div>
                <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div class="flex justify-center items-center -space-x-5">
                    <img
                      class="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      class="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7"
                      src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      class="relative shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div class="mt-3 sm:mt-5">
                    <h3 class="text-lg sm:text-3xl font-semibold text-white">
                      85%
                    </h3>
                    <p class="mt-1 text-sm sm:text-base text-neutral-400">
                      Happy customers
                    </p>
                  </div>
                </div>
                <div class="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    class="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                  <div class="mt-3 sm:mt-5">
                    <h3 class="text-lg sm:text-3xl font-semibold text-white">
                      $55M+
                    </h3>
                    <p class="mt-1 text-sm sm:text-base text-neutral-400">
                      Ads managed yearly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Our Team
        </h2>
        <p class="mt-1 text-gray-600">Creative people</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(() => (
          <div class="relative overflow-hidden flex flex-col rounded-xl p-4 md:p-6 bg-gray-900 border border-gray-800">
            <div class="flex items-center gap-x-4">
              <img
                class="rounded-full size-20"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div class="grow">
                <h3 class="font-medium text-gray-300">David Forren</h3>
                <p class="text-xs uppercase text-gray-500">Founder / CEO</p>
              </div>
            </div>

            <p class="mt-3 text-gray-500">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>

            <div class="mt-3 space-x-1"></div>
            <Meteors number={15} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
