// eslint-disable-next-line no-unused-vars
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react/prop-types
const ScrollAnimation = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.fromTo(
        ref1.current,
        { x: 500 },
        {
          x: 50,
          duration: 2,
          scrollTrigger: {
            trigger: ref1.current,
            start: "top 51%",
          },
        }
      ); // <-- automatically reverted
    },
    { scope: ref1 }
  );

  return (
    <div
      ref={ref1}
      className="w-[41.1875rem] shrink-0 h-full hidden lg:block lg:w-[38.1875rem]"
    >
      <div ref={ref} className="cloundHg">
        <div className="clound1"></div>
        <div className="clound2"></div>
        <div className="clound3"></div>
        <div className="clound4"></div>
        <div className="clound5"></div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
