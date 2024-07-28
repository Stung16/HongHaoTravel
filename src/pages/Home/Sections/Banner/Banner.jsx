import BoxItemSell from "@/components/BoxItemSell";
import Cta from "@/components/Cta";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
const Banner = () => {
  const ref = useRef(null);
  const mapRef = useRef(null);
  const locationRef = useRef(null);
  const bgrootRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      // onComplete: myFunction,
    });
    tl.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 700,
      },
      {
        delay: 1,
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power1.inOut",
      }
    )
      .to(ref.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        duration: 2,
        ease: "power1.inOut",
      })
      .fromTo(
        mapRef.current,
        {
          x: 300,
          y: 0,
        },
        {
          x: -20,
          y: -60,
          duration: 1,
          ease: "power1.inOut",
        }
      )
      .to(bgrootRef.current, {
        duration: 0.1,
        backgroundImage: "url('./images/banner.png')",
      })
      .fromTo(
        locationRef.current,
        {
          opacity: 0,
          x: 0,
          y: 0,
        },
        {
          opacity: 1,
          x: 40,
          y: -80,
        }
      )
      .fromTo(
        locationRef.current,
        {
          x: 40,
          y: -80,
        },
        {
          delay: 0.4,
          duration: 0.4,
          x: 70,
          y: -70,
        }
      )
      .fromTo(
        locationRef.current,
        {
          x: 70,
          y: -70,
        },
        {
          delay: 0.4,
          duration: 0.4,
          x: 40,
          y: 20,
        }
      )
      .fromTo(
        locationRef.current,
        {
          x: 40,
          y: 20,
        },
        {
          delay: 0.4,
          duration: 0.4,
          x: 40,
          y: -80,
        }
      );
  });
  return (
    <div
      ref={bgrootRef}
      className="bg-[url('/images/Banner1.png')] bg-fixed bg-cover w-screen bg-center max-w-full h-screen flex justify-center items-center"
    >
      <div
        ref={ref}
        className="rounded-[40px] bg-center bg-[url('/images/banner.png')] w-[70vw] h-[70vh] bg-cover bg-no-repeat"
      ></div>
      <div
        ref={mapRef}
        className="bg-[url('/images/map.png')] hidden lg:block absolute bg-transparent right-0 w-[17.5rem] h-[23.625rem] bg-cover bg-no-repeat"
      >
        <img
          ref={locationRef}
          src="/images/location.svg"
          className="absolute top-1/2 left-1/2 hidden lg:block"
          alt=""
        />
      </div>

      {/* Sell alert */}
      <div className="fixed z-[1] w-2/3  bottom-8 right-1/2 translate-x-1/2 overflow-hidden hidden xl:block">
        <div className="bg-white w-full h-full px-8 py-3 rounded-[8px] flex justify-between gap-10">
          <div className="flex-1 flex items-center justify-between gap-8">
            <BoxItemSell name={"DAYS"} content={"5 days 4 night"} />
            <BoxItemSell name={"TYPE OF TOUR"} content={"Best Budget"} />
            <BoxItemSell name={"SELF DRIVING"} content={"5 pax"} />
            <BoxItemSell
              name={"PRIVATE DRIVING"}
              content={"5 pax"}
              isLast={true}
            />
          </div>
          <div className="bg-main rounded-[8px]">
            <button className="flex flex-col items-center px-6 py-1 text-white ">
              <span className="text-white text-center text-[1.75rem] not-italic font-extrabold">
                $299
              </span>
              <span className="text-center text-base not-italic font-bold">
                BOOK NOW
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed z-[1000] lg:z-[1] right-7 bottom-14 flex flex-col gap-5 items-center px-4 ">
        <Cta cta={"book"} />
        <Cta cta={"call"} />
        <Cta cta={"location"} />
      </div>
    </div>
  );
};

export default Banner;
