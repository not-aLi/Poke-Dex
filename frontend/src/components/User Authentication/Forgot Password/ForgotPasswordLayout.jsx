import React from "react";
import fire from "../../../assets/charmander.gif";
import ghost from "../../../assets/gastly.gif";
import Button from "../Button";

const ForgotPasswordLayout = ({ email, handleEmail }) => {
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
          className="w-full outline-none p-2 text-white border border-gray-600 rounded-md bg-gray-700  placeholder:text-zinc-500"
          placeholder="pokemon.master@example.com"
        />
        {/* Reset Password Button */}
        <div className="w-full flex flex-col gap-6 items-center justify-center my-6 ">
          <Button color={"red"} img={fire} text={"Reset Password"} />

          {/* Guest Button */}
          <Button color={"purple"} img={ghost} text={"Continue as Guest"} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordLayout;
