import React from "react";
import fire from "../../../assets/charmander.gif";
import ghost from "../../../assets/gastly.gif";
import Button from "../Button";
import Loader from "../Loader";
import pikachu from "../../../assets/pikachuRunning.gif"

const ForgotPasswordLayout = ({
  email,
  handleEmail,
  handleReset,
  authLoading,
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
          className="w-full outline-none focus:bg-red-100 focus:ring-2 focus:ring-red-400 focus:text-black focus:font-medium p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
          placeholder="pokemon.master@example.com"
        />
        {/* Reset Password Button */}
        <div className="w-full flex flex-col gap-6 items-center justify-center my-6 ">
          {authLoading ? (
            <div className="w-full">
              <Button color={"red"} img={fire} loading={<Loader img={pikachu}/>} />
            </div>
          ) : (
            <div onClick={handleReset} className="w-full">
              <Button color={"red"} img={fire} text={"Reset Password"} />
            </div>
          )}

          {/* Guest Button */}
          <Button color={"purple"} img={ghost} text={"Continue as Guest"} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordLayout;
