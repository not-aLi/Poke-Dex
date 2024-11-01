import React, { useState } from "react";
import ForgotPasswordLayout from "./ForgotPasswordLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };
  return (
    <div>
      <ForgotPasswordLayout email={email} handleEmail={handleEmail} />
    </div>
  );
};

export default ForgotPassword;
