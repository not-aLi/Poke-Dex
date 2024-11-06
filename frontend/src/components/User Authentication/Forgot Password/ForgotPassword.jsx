import React, { useContext, useState } from "react";
import ForgotPasswordLayout from "./ForgotPasswordLayout";
import { PokemonContext } from "../../States/StateContext";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword, authLoading, GuestAccount, isGuest } =
    useContext(PokemonContext);

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleReset = async (e) => {
    e.preventDefault;

    try {
      const response = await forgotPassword(email);
      toast.success(response?.data?.message);
      setEmail("");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "Error sending reset password email");
      return;
    }
  };
  return (
    <div>
      <ForgotPasswordLayout
        email={email}
        handleEmail={handleEmail}
        handleReset={handleReset}
        authLoading={authLoading}
        GuestAccount={GuestAccount}
        isGuest={isGuest}
      />
    </div>
  );
};

export default ForgotPassword;
