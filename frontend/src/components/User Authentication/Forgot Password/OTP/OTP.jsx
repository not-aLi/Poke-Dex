import React, { useRef, useState } from "react";
import OTPLayout from "./OTPLayout";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

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

  return (
    <div>
      <OTPLayout
        RotoatingImage={RotoatingImage}
        otp={otp}
        inputRefs={inputRefs}
        handleChange={handleChange}
        handleBackspace={handleBackspace}
      />
    </div>
  );
};

export default OTP;
