import React, { useState } from "react";
import ResetPasswordLayout from "./ResetPasswordLayout";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };
  return (
    <div>
      <ResetPasswordLayout email={email} handleEmail={handleEmail} />
    </div>
  );
};

export default ResetPassword;
