/* eslint-disable react/prop-types */
// import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const BoxItemSell = ({ name, content,isLast }) => {
  return (
    <div className={`flex flex-col gap-1 flex-1 ${!isLast && 'border-r-2' }`}>
      <div className="text-md not-italic font-normal text-[#727272]">
        <span>{name}</span>
      </div>
      <div className="flex justify-between items-center">
        <h4 className="text-lg not-italic font-bold text-[#2E2E2E]">
          {content}
        </h4>
        <div className="flex flex-col items-center mr-10">
          <IoIosArrowUp fontSize={18} className="font-bold cursor-pointer" />
          <IoIosArrowDown fontSize={18} className="font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BoxItemSell;
