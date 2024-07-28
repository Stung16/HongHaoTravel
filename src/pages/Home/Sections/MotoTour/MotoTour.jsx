import ArrowRight1 from "@/assets/icons/ArrowRight1";
import CheckIcon from "@/assets/icons/CheckIcon";
import ScrollAnimation from "@/components/ScrollAnimation";
import ScrollMotorRun from "@/components/ScrollMotorRun";
import { Button } from "@/components/ui/button";
const MotoTour = () => {
  return (
    <div>
      <div className="gap-[1.61rem] flex-col items-center mb-[2.34rem] hidden lg:flex">
        <ScrollMotorRun />
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
