import React from "react";
import grass from "../../../assets/grass.gif";
import ghost from "../../../assets/gastly.gif";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../Button";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const SignupLayout = ({
  isShowing,
  isValid,
  handleEmail,
  handlePassword,
  handleShowPassword,
  handleName,
  email,
  password,
  name,
}) => {
  return (
    <div className="mt-2 mb-2">
      {/* Input Fields */}
      <div className="flex flex-col gap-2 justify-start items-start mx-4">
        {/* Name */}
        <h2 className="text-gray-200">Name</h2>

        <input
          type="text"
          value={name}
          onChange={handleName}
          className="w-full outline-none p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
          placeholder="Ash"
        />

        {/* Email */}
        <h2 className="text-gray-200">Email</h2>

        <div className="w-full relative">
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            className="w-full outline-none p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
            placeholder="pokemon.master@example.com"
          />

          {/* Validation */}
          <button
            onClick={handleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300 cursor-pointer hover:text-zinc-400 transition"
          >
            {isValid && <GiCheckMark size={20} className="text-green-500" />}
          </button>
        </div>

        {/* Password */}
        <h2 className="text-gray-200">Password</h2>
        <div className="relative w-full">
          <input
            type={isShowing ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            className="w-full outline-none p-2 pr-10 text-white border border-gray-600 rounded-md bg-gray-700 placeholder:text-zinc-500"
            placeholder="Must have at least 6 characters"
          />

          {/* Eye Icon */}
          <button
            onClick={handleShowPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300 cursor-pointer hover:text-zinc-400 transition"
          >
            {isShowing ? <RiEyeCloseLine size={20} /> : <RiEyeLine size={20} />}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <div className="flex flex-col gap-6 items-center justify-center my-6 mx-4">
        <Button color={"green"} img={grass} text={"Signup"} />

        {/* Guest Button */}
        <Button color={"purple"} img={ghost} text={"Continue as Guest"} />
      </div>
    </div>
  );
};

export default SignupLayout;
