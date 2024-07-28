import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const NatureHg = () => {
  const hgRef = useRef(null);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        timeout = null;
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (!timeout) func.apply(this, args);
    };
  }
  let isScaledUp = false;
  function handleMouseEnter() {
    if (!isScaledUp) {
      isScaledUp = true;
      gsap.to(ref.current, {
        width: "100vw",
        height: "100vh",
        ease: "sine.out",
        duration: 1.5,
      });
      gsap.fromTo(
        ref1.current,
        {
          y: 0,
        },
        {
          y: 30,
          ease: "sine.out",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ref2.current,
        {
          y: 0,
        },
        {
          y: 30,
          ease: "sine.out",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ref3.current,
        {
          y: 0,
        },
        {
          y: 10,
          ease: "sine.out",
          duration: 1.5,
        }
      );
    }
  }

  // Hàm xử lý khi rời khỏi phần tử
  function handleMouseLeave() {
    if (isScaledUp) {
      isScaledUp = false;
      gsap.to(ref.current, {
        width: "50vw",
        height: "40vh",
        ease: "sine.out",
        duration: 1.5,
      });

      gsap.fromTo(
        ref1.current,
        {
          y: 30,
          duration: 1.5,
        },
        {
          y: 0,
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ref2.current,
        {
          y: 30,
          duration: 1.5,
        },
        {
          y: 0,
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ref3.current,
        {
          y: 10,
          duration: 1.5,
        },
        {
          y: 0,
          duration: 1.5,
        }
      );
    }
  }
  const debouncedHandleMouseEnter = debounce(handleMouseEnter, 100);
  const debouncedHandleMouseLeave = debounce(handleMouseLeave, 100);
  return (
    <div
      ref={hgRef}
      className="w-full h-[100vh] sm:pointer-events-none  sm:[80vh] lg:pointer-events-auto flex  items-center mt-[3rem] flex-col  relative z-10 "
    >
      {/* video slide */}
      <div
        className={`bg-Hgbeauty sm:pointer-events-none lg:pointer-events-auto h-[26vh] w-[80vw] sm:h-[30vh] sm:w-[70vw] md:h-[40vh] md:w-[50vw] `}
        ref={ref}
        onMouseEnter={() => {
          debouncedHandleMouseEnter();
        }}
        onMouseLeave={() => {
          debouncedHandleMouseLeave();
        }}
      ></div>
      {/* content */}

      <div className="flex gap-3 flex-col items-center">
        <h4
          ref={ref1}
          className="text-white text-[1.125rem] font-[800] leading-5 opacity-40"
        >
          WELCOME TO
        </h4>
        <span
          ref={ref2}
          className="font-LondrinaSolid text-[#E9F1ED] text-6xl opacity-95 font-semibold leading-[3.5rem]"
        >
          HA GIANG NATURALLY
        </span>
      </div>
      <span
        ref={ref3}
        className="font-Neumartha font-normal mx-auto block text-[#E9F1ED] text-center text-[10.625rem] opacity-95  leading-[10.75rem]"
      >
        Beautiful
      </span>
    </div>
  );
};

export default NatureHg;
