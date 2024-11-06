import React, { useContext } from "react";
import grass from "../../../assets/grass.gif";
import ghost from "../../../assets/gastly.gif";
import pikachu from "../../../assets/pikachuRunning.gif";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../Button";
import { GiCheckMark } from "react-icons/gi";
import { PokemonContext } from "../../States/StateContext";
import Loader from "../Loader";

const SignupLayout = ({
  isShowing,
  isValid,
  showValidation,
  isPasswordValid,
  handleEmail,
  handlePassword,
  handleShowPassword,
  handleName,
  email,
  password,
  name,
  isFocused,
  setIsFocused,
  handleSignUp,
}) => {
  const { authLoading } = useContext(PokemonContext);
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
          className="w-full focus:bg-green-100 focus:font-medium focus:ring-2 focus:text-black focus:ring-green-500 outline-none  p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
          placeholder="Ash"
        />

        {/* Email */}
        <h2 className="text-gray-200">Email</h2>

        <div className="w-full relative">
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            className={`w-full outline-none ${
              !showValidation
                ? "bg-red-100 border-2 border-red-500 text-black"
                : "focus:bg-green-100 focus:ring-2 focus:ring-green-500 focus:text-black"
            } outline-none p-2 border border-gray-600 rounded-md ${
              !showValidation ? "" : "text-white"
            } bg-gray-700 placeholder:text-zinc-500 focus:font-medium`}
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
            className={`w-full outline-none ${
              !isPasswordValid
                ? "bg-red-100 border-2 border-red-500 text-black"
                : "focus:bg-green-100 focus:ring-2 focus:ring-green-500 focus:text-black"
            } outline-none p-2 border border-gray-600 rounded-md ${
              !isPasswordValid ? "" : "text-white"
            } bg-gray-700 placeholder:text-zinc-500 focus:font-medium`}
            placeholder="Must have at least 6 characters"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Eye Icon */}
          <button
            onClick={handleShowPassword}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              isFocused
                ? "text-zinc-500 hover:text-zinc-600"
                : "text-zinc-300 hover:text-zinc-400"
            }  cursor-pointer transition`}
          >
            {isShowing ? <RiEyeCloseLine size={20} /> : <RiEyeLine size={20} />}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <div className="flex flex-col gap-6 items-center justify-center my-6 mx-4">
        {authLoading ? (
          <div className="w-full">
            <Button color={"green"} img={grass} loading={<Loader img={pikachu}/>} />
          </div>
        ) : (
          <div className="w-full" onClick={handleSignUp}>
            <Button color={"green"} img={grass} text={"Signup"} />
          </div>
        )}

        {/* Guest Button */}
        <Button color={"purple"} img={ghost} text={"Continue as Guest"} />
      </div>
    </div>
  );
};

export default SignupLayout;
