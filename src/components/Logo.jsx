// import React from 'react'

const Logo = () => {
  return (
    <div className=" flex w-[9.625rem] h-[3.1875rem] justify-center items-center shrink-0 relative z-50 pt-5">
      <div className="w-[9.625rem] h-[3.1875rem] shrink-0 relative">
        <img src="./images/logoWhite.png" className="max-w-full" alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 55 9"
          className="w-[4rem]  shrink-0 absolute top-[1rem] right-[1.5rem]"
          fill="#E64827"
        >
          <path
            d="M31.8835 0.765644L19.2642 1.66513C12.7952 2.12623 6.29395 1.56429 0 0C4.09043 1.87891 8.43223 3.15332 12.8893 3.78326L14.1395 3.95996C17.7262 4.4669 21.3542 4.61887 24.9708 4.41366L33.6419 3.92165C40.834 3.51357 48.0451 4.26216 55 6.13889C52.721 3.98649 49.8397 2.58042 46.7407 2.10835L40.0799 1.09372C37.3684 0.680669 34.6193 0.570635 31.8835 0.765644Z"
            fill="#E64827"
          />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
