import React, { useState } from "react";
import pokeball from "../../assets/PokeballBg.png";
import { motion } from "framer-motion";
import Login from "./Login/Login";
import Signup from "./Sign Up/Signup";
import ForgotPassword from "./Forgot Password/ForgotPassword";
const Authentication = () => {
  const [active, setActive] = useState("login");

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

  const changeAuth = (active) => {
    if (active === "login") {
      setActive("login");
    } else if (active === "signup") {
      setActive("signup");
    } else if (active === "forgot") {
      setActive("forgot");
    }
  };
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
        initial={{ opacity: 0, scale: 0.8}}
        animate={{ opacity: 1, scale: 1}}
        transition={{
          type: "spring",
          stiffness: 200,
        }}
        className="bg-gray-800  flex-col p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto min-h-36 shadow-sm border border-gray-700 rounded-md flex items-center justify-center"
      >
        <div className="flex flex-col w-full px-4 justify-start items-start gap-3">
          {/* Heading */}
          <h1 className="text-yellow-500 md:text-3xl text-2xl text-left font-bold">
            Welcome to Pokédex
          </h1>

          <motion.h2
            key={active} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white text-sm"
          >
            {active === "login"
              ? "Sign in to your account, or continue as a guest"
              : active === "signup"
              ? "Create a new one, or continue as a guest"
              : active === "forgot"
              ? "Reset your password"
              : ""}
          </motion.h2>
        </div>

        {/* Login, SignUp, ResetPassword */}
        <div className=" w-full flex items-center justify-center mt-6">
          <ul className="mx-4 flex items-center justify-center w-full p-1 rounded-md gap-1 text-gray-300 bg-gray-700">
            <li
              onClick={() => changeAuth("login")}
              className={`${
                active === "login"
                  ? "bg-gray-600 font-semibold text-white"
                  : "hover:bg-gray-600 font-semibold hover:text-white"
              } cursor-pointer rounded-sm py-1.5 transition-all duration-300 ease-in-out w-2/6 text-center text-sm`}
            >
              Login
            </li>
            <li
              onClick={() => changeAuth("signup")}
              className={`${
                active === "signup"
                  ? "bg-gray-600 font-semibold text-white"
                  : "hover:bg-gray-600 font-semibold hover:text-white"
              } cursor-pointer rounded-sm py-1.5 transition-all duration-300 ease-in-out w-2/6 text-center text-sm`}
            >
              Signup
            </li>
            <li
              onClick={() => changeAuth("forgot")}
              className={`${
                active === "forgot"
                  ? "bg-gray-600 font-semibold text-white"
                  : "hover:bg-gray-600 font-semibold hover:text-white"
              } cursor-pointer rounded-sm py-1.5 transition-all duration-300 ease-in-out w-2/6 text-center text-sm`}
            >
              Forgot
            </li>
          </ul>
        </div>

        {/* Login, SignUp, ResetPassword Components */}
        <div className="w-full h-full">
          {active === "login" ? (
            <Login />
          ) : active === "signup" ? (
            <Signup />
          ) : active === "forgot" ? (
            <ForgotPassword />
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default Authentication;
