/* eslint-disable react/prop-types */
// import React from 'react'

const ChangeText = ({ text }) => {
  return (
    <div className="button-icon flex">
      {text !== "" && (
        <div className="cube">
          <span className="side front text-white text-center text-md not-italic font-extrabold leading-[120%] uppercase ">
            {text}
          </span>
          <span className="side top text-white text-center text-md not-italic font-extrabold leading-[120%] uppercase ">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChangeText;
