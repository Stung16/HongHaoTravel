// import React from 'react'
import ArrowRight1 from "@/assets/icons/ArrowRight1";
import CheckIcon from "@/assets/icons/CheckIcon";
import ScrollAnimation from "@/components/ScrollAnimation";
import ScrollMotorRun from "@/components/ScrollMotorRun";
import { Button } from "@/components/ui/button";
const MotoTour = () => {
  return (
    <div>
      <div className="gap-[1.61rem] flex-col items-center mb-[2.34rem] hidden lg:flex">
        <span className="opacity-90 text-center text-white text-md not-italic font-extrabold leading-[120%] tracking-[0.00875rem]">
          EXPLORE YOUR JOURNEY WITH US
        </span>
        <div className="w-[3rem] h-[3rem] relative">
          <ScrollMotorRun />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
            className="w-[2.5rem] h-[2.5rem]"
          >
            <g filter="url(#filter0_i_7807_27319)">
              <circle
                cx="25"
                cy="24.5"
                r="23.5"
                stroke="#E64828"
                strokeWidth="2"
              />
            </g>
            <path
              d="M25.4593 35.75L15.5 14L25.4593 22.75L35.4186 14L25.4593 35.75Z"
              fill="#E64828"
            />
            <defs>
              <filter
                id="filter0_i_7807_27319"
                x="0.5"
                y="0"
                width="69"
                height="53"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="20" dy="4" />
                <feGaussianBlur stdDeviation="50" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_7807_27319"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex justify-evenly">
        {/* Left */}
        <div className="mx-10 w-full h-full flex-1 flex flex-col text-white lg:ml-20 xl:ml-36">
          <h3 className="text-white font-LondrinaSolid text-[2.9rem] font-bold mb-10">
            HONG HAO MOTORBIKE TOUR
          </h3>
          <p className="font-[100] text-[0.8rem] leading-4 max-w-[32rem] mb-4 text-[#C5C5C5]">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
            Explore remote villages.
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            <li className="flex items-center gap-2 text-[#F1F1F1] font-bold text-base leading-6">
              <CheckIcon /> Tours accommodate a maximum of 10 guests
            </li>
            <li className="flex items-center gap-2 text-[#F1F1F1] font-bold text-base leading-6">
              <CheckIcon /> Flexible cancellation policy
            </li>
            <li className="flex items-center gap-2 text-[#F1F1F1] font-bold text-base leading-6">
              <CheckIcon /> Book now, pay later
            </li>
            <li className="flex items-center gap-2 text-[#F1F1F1] font-bold text-base leading-6">
              <CheckIcon /> Fluent English-speaking guides
            </li>
            <li className="flex items-center gap-2 text-[#F1F1F1] font-bold text-base leading-6">
              <CheckIcon /> Creating job opportunities for the Vietnamese
              community
            </li>
          </ul>

          <div className="flex gap-5 w-full">
            <Button
              variant="outline"
              className="bg-main rounded-[8px] w-1/2 h-16 lg:w-fit lg:h-fit  border-none hover:bg-main flex gap-2 text-lg items-center justify-center"
            >
              BOOK NOW
              <ArrowRight1 />
            </Button>
            <Button
              variant="outline"
              className="rounded-[8px] w-1/2 h-16 lg:w-fit lg:h-fit bg-transparent flex gap-2 text-lg lg:text-lg items-center justify-center"
            >
              All TOUR
              <ArrowRight1 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Rigt */}

        <div>
          <ScrollAnimation />
        </div>
      </div>
    </div>
  );
};

export default MotoTour;
