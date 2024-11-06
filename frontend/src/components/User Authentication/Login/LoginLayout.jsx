import React from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Button from "../Button";
import water from "../../../assets/todo.gif";
import ghost from "../../../assets/gastly.gif";
import pikachu from "../../../assets/pikachuRunning.gif";
import Loader from "../Loader";

const LoginLayout = ({
  isShowing,
  handleShowPassword,
  email,
  password,
  handleEmail,
  handlePassword,
  authLoading,
  handleLogin,
  isFocused,
  setIsFocused,
  GuestAccount
}) => {
  return (
    <div className="mt-2 mb-2">
      {/* Input Fields */}
      <div className="flex flex-col gap-2 justify-start items-start mx-4">
        {/* Email */}

        <h2 className="text-gray-200">Email</h2>

        <input
          type="text"
          value={email}
          onChange={handleEmail}
          className="w-full outline-none focus:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:text-black focus:font-medium p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
          placeholder="pokemon.master@example.com"
        />

        {/* Password */}
        <h2 className="text-gray-200">Password</h2>
        <div className="relative w-full focus-within:text-zinc-900">
          <input
            type={isShowing ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full outline-none focus:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:text-black focus:font-medium p-2 pr-10 text-white border border-gray-600 rounded-md bg-gray-700"
          />

          {/* Eye Icon */}
          <button
            onClick={handleShowPassword}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              isFocused ? "text-zinc-500 hover:text-zinc-600" : "text-zinc-300 hover:text-zinc-400"
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
            <Button color={"blue"} img={water} loading={<Loader img={pikachu}/>} />
          </div>
        ) : (
          <div onClick={handleLogin} className="w-full">
            <Button color={"blue"} img={water} text={"Login"} />
          </div>
        )}

        {/* Guest Button */}
        <div onClick={GuestAccount} className="w-full">
        <Button color={"purple"} img={ghost} text={"Continue as Guest"} />
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
