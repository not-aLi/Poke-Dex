import React from "react";
import ImageLoader from "../helpers/ImageLoader";

const Button = ({ color, img, text, txtColor }) => {
  return (
    <div
      className={`bg-${color}-500 hover:opacity-75 transition-all cursor-pointer px-2 w-full h-10 flex justify-center items-center p-1 rounded-md text-white`}
    >
      <p className={`flex-grow text-center font-semibold text-${txtColor}`}>{text}</p>
      <span className="flex-shrink-0">
        <ImageLoader Height={22} Width={22} src={img} h={35} w={35} />
      </span>
    </div>
  );
};

export default Button;
