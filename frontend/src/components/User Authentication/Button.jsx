import React from "react";
import ImageLoader from "../helpers/ImageLoader";

const Button = ({ color, img, text, txtColor }) => {
  const bgColorClass =
    color === "blue"
      ? "bg-blue-500"
      : color === "green"
      ? "bg-green-500"
      : color === "red"
      ? "bg-red-500"
      : color === "purple"
      ? "bg-purple-500"
      : color === "yellow"
      ? "bg-yellow-500"
      : color === "pink"
      ? "bg-pink-500"
      : "bg-gray-500";
  const textColorClass = txtColor === "black" ? "text-black" : "text-white";

  return (
    <div
      className={`${bgColorClass}  hover:opacity-75 transition-all cursor-pointer px-2 w-full h-10 flex justify-center items-center p-1 rounded-md text-white`}
    >
      <p className={`flex-grow text-center font-semibold ${textColorClass}`}>
        {text}
      </p>
      <span className="flex-shrink-0">
        <ImageLoader Height={22} Width={22} src={img} h={35} w={35} />
      </span>
    </div>
  );
};

export default Button;
