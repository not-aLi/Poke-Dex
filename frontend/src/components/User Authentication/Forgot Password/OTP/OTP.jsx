import React, { useContext, useEffect, useRef, useState } from "react";
import OTPLayout from "./OTPLayout";
import { PokemonContext } from "../../../States/StateContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const { verifyEmail, resendVerificationEmail, user, authLoading } =
    useContext(PokemonContext);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [isResetDisabled, setResetDisabled] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setResetDisabled(false);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const remainingSecs = seconds % 60;

    return `${min}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else {
      handleChange("", index);
    }
  };

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

  const handleConfirm = async (e) => {
    e.preventDefault();
    const code = otp.join("");

    try {
      const response = await verifyEmail(code);
      toast.success(response?.data?.message);
      navigate("/pokedex");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "Error verifying email");
      return;
    }
  };

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      setResetDisabled(true);
      setTimer(120);
      const response = await resendVerificationEmail(user.email);
        toast.success(response?.data?.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "Error resending email");
    }
  };
  return (
    <div>
      <OTPLayout
        RotoatingImage={RotoatingImage}
        otp={otp}
        inputRefs={inputRefs}
        handleConfirm={handleConfirm}
        handleChange={handleChange}
        handleBackspace={handleBackspace}
        handleResend={handleResend}
        isResetDisabled={isResetDisabled}
        timer={timer}
        formatTime={formatTime}
        authLoading={authLoading}
      />
    </div>
  );
};

export default OTP;
