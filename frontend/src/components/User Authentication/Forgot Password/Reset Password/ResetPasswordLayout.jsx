import React, { useState } from "react";
import pokeball from "../../../../assets/PokeballBg.png";
import { motion } from "framer-motion";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import fairy from "../../../../assets/clefairy.gif";
import Button from "../../Button";

const ResetPasswordLayout = ({
  isNewShowing,
  isConfirmShowing,
  newPassword,
  confirmPassword,
  handleNewPassword,
  handleConfirmPassword,
  handleShowNewPassword,
  handleShowConfirmPassword,
}) => {
  const RotoatingImage = () => ({
    inital: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  });

  return (
    <div className="mx-auto px-6 bg-gradient-to-t from-gray-900/80 via-gray-900 to-gray-950/80 h-screen w-screen flex items-center justify-center">
      {/* Top Image */}

      <span className="relative">
        <motion.img
          variants={RotoatingImage()}
          initial="initial"
          animate="animate"
          src={pokeball}
          alt="pokeball"
          className="size-48 fixed -left-24 -top-24 "
        />
      </span>

      {/* Bottom Image */}
      <span>
        <motion.img
          variants={RotoatingImage()}
          initial="initial"
          animate="animate"
          src={pokeball}
          alt="pokeball"
          className="size-48 fixed -right-24 -bottom-24"
        />
      </span>

      {/* Auth Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="bg-gray-800  flex-col p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto min-h-36 shadow-sm border border-gray-700 rounded-md flex items-center justify-center"
      >
        <div className="flex mt-4 flex-col w-full px-4 justify-start items-start gap-3">
          {/* Heading */}
          <h1 className="text-yellow-500 md:text-3xl text-2xl text-left font-bold">
            Reset Password
          </h1>

          <h2 className="text-white text-sm">
            Enter your new password to regain access to your Pokédex
          </h2>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col w-full gap-2 justify-start items-start px-4 mt-6">
          {/* New Password */}
          <h2 className="text-gray-200">New Password</h2>
          <div className="relative w-full mb-3">
            <input
              type={isNewShowing ? "text" : "password"}
              value={newPassword}
              onChange={handleNewPassword}
              className="w-full outline-none p-2 pr-10 text-white border border-gray-600 rounded-md bg-gray-700 placeholder:text-zinc-500"
              placeholder="Must have at least 6 characters"
            />

            {/* Eye Icon */}
            <button
              onClick={handleShowNewPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300 cursor-pointer hover:text-zinc-400 transition"
            >
              {isNewShowing ? (
                <RiEyeCloseLine size={20} />
              ) : (
                <RiEyeLine size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <h2 className="text-gray-200">Confirm Password</h2>
          <div className="relative w-full">
            <input
              type={isConfirmShowing ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="w-full outline-none p-2 pr-10 text-white border border-gray-600 rounded-md bg-gray-700 placeholder:text-zinc-500"
              placeholder="Must have at least 6 characters"
            />

            {/* Eye Icon */}
            <button
              onClick={handleShowConfirmPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-300 cursor-pointer hover:text-zinc-400 transition"
            >
              {isConfirmShowing ? (
                <RiEyeCloseLine size={20} />
              ) : (
                <RiEyeLine size={20} />
              )}
            </button>
          </div>
        </div>
        {/* Login Button */}
        <div className="w-full flex items-center justify-center my-6 px-4">
          <Button color={"pink"} img={fairy} text={"Reset Password"} />
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordLayout;
