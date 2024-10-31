import React, { useState } from "react";
import LoginLayout from "./LoginLayout";

const Login = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setIsShowing(!isShowing);
  };

  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handlePassword = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };
  return (
    <div>
      <LoginLayout
        email={email}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        isShowing={isShowing}
        handleShowPassword={handleShowPassword}
      />
    </div>
  );
};

export default Login;
