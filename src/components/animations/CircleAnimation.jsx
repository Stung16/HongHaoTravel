/* eslint-disable react/prop-types */
// import React from "react";
import ChangeText from "@/components/animations/ChangeText";

const CircleAnimation = ({ text }) => {
  return (
    <div>
      <div className="flex justify-center items-center relative boxx">
        <div className="spinner"></div>
        <ChangeText text={text} />
      </div>
    </div>
  );
};

export default CircleAnimation;
