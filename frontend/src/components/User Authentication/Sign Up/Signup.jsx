import React, { useState } from "react";
import SignupLayout from "./SignupLayout";
import validator from "validator"

const Signup = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setIsShowing(!isShowing);
  };

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValid(validator.isEmail(inputValue));
  };

  const handlePassword = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };
  const handleName = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };
  return (
    <div>
      <SignupLayout
        isShowing={isShowing}
        email={email}
        password={password}
        name={name}
        isValid={isValid}
        handleEmail={handleEmail}
        handleName={handleName}
        handlePassword={handlePassword}
        handleShowPassword={handleShowPassword}
      />
    </div>
  );
};

export default Signup;
