import React from "react";
import pokeball from "../../../../assets/PokeballBg.png";
import { motion } from "framer-motion";
import Button from "../../Button";
import pikachu from "../../../../assets/Pikachu.gif";
import pikachuRun from "../../../../assets/pikachuRunning.gif";
import Loader from "../../Loader";

const OTPLayout = ({
  RotoatingImage,
  otp,
  inputRefs,
  handleChange,
  handleConfirm,
  handleBackspace,
  authLoading,
  handleResend,
  isResetDisabled,
  timer,
  formatTime,
}) => {

   useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [inputRefs]);
  
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
        className="bg-gray-800 flex-col p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto min-h-36 shadow-sm border border-gray-700 rounded-md flex items-center justify-center"
      >
        <div className="flex flex-col w-full px-4 justify-center items-center gap-3">
          {/* Heading */}
          <h1 className="text-yellow-500 md:text-3xl text-2xl text-left font-bold">
            Verify OTP
          </h1>

          <h2 className="text-white text-sm">
            Enter the 4-digit code sent to your device
          </h2>
        </div>

        {/* Input */}
        <div className="flex gap-5 my-8 justify-between">
          {otp.map((value, index) => (
            <input
              type="numeric"
              key={index}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              autoFocus={index === 0}
              ref={(e) => (inputRefs.current[index] = e)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") handleBackspace(index);
              }}
              className="w-12 h-12 rounded-md font-semibold text-center text-2xl outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-yellow-100"
            />
          ))}
        </div>

        <div
          onClick={handleConfirm}
          className="flex w-full items-center justify-center px-8 pb-6"
        >
          {authLoading ? (
            <Button color={"yellow"} img={pikachu} loading={<Loader img={pikachuRun}/>} />
          ) : (
            <Button
              color={"yellow"}
              img={pikachu}
              text={"Confirm"}
              txtColor={"black"}
            />
          )}
        </div>

        {/* Resend  */}
        <div className="flex text-white items-center justify-center gap-1 text-sm mb-4">
          Didn't receive the code?{" "}
          <button
            onClick={handleResend}
            disabled={isResetDisabled}
            className={`text-yellow-400 border-b border-transparent ${
              isResetDisabled ? "" : "hover:border-yellow-400"
            } transition-all`}
          >
            {isResetDisabled ? formatTime(timer) : " Resend OTP"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OTPLayout;
