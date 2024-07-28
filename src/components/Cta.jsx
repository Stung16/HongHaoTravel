// import React from 'react'

// eslint-disable-next-line react/prop-types
const Cta = ({ cta }) => {
  return (
    <div className="cursor-pointer">
      {cta === "book" && (
        <div className="w-[50px] h-[50px] bg-main rounded-full flex justify-center items-center">
          <span className="text-white text-center text-[0.7rem] not-italic font-black leading-[0.8125rem] tracking-[0.03125rem] "> Book Now</span>
        </div>
      )}
      {cta === "call" && (
        <div className="loader relative">
          <img
            src="./images/iconPhone.png"
            className="absolute -right-[0.3rem] z-[1] bottom-[0.1rem] w-30 h-30"
          />
          <div className="circle">
            <div className="outline"></div>
          </div>
        </div>
      )}
      {cta === "location" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 70 70"
          className="ml-3"
          fill="none"
        >
          <g clipPath="url(#clip0_3405_1329)">
            <circle cx="27" cy="27" r="25.5" stroke="#E64827" strokeWidth="3" />
            <path
              d="M27 16L37 32L27 27L17 32L27 16Z"
              fill="#E64827"
              className="flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4  rounded-full transition transform  animate-bounce"
            />
          </g>
          <defs>
            <clipPath id="clip0_3405_1329">
              <rect width="54" height="54" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default Cta;
/*

<div className="loader relative">
        <img src="./images/iconPhone.png" alt="" className="absolute -right-[0.3rem] z-[1] bottom-[0.1rem]" />
        <div className="circle">
            <div className="outline"></div>
    </div>
*/
