import React, { useContext, useState } from "react";
import SignupLayout from "./SignupLayout";
import validator from "validator";
import { PokemonContext } from "../../States/StateContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup, GuestAccount } = useContext(PokemonContext);
  const [isShowing, setIsShowing] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showValidation, setShowValidation] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      setShowValidation(false);
      setPasswordValid(false);
      return;
    }

    let isValidForm = true;
    if (password.length <= 6) {
      toast.error("Password must be at least 6 characters long");
      setPasswordValid(false);
      isValidForm = false;
    } else {
      setPasswordValid(true);
    }
    if (!isValid) {
      toast.error("Please enter a valid email");
      setShowValidation(false);
      isValidForm = false;
    } else {
      setShowValidation(true);
    }

    if (!isValidForm) return;
    try {
      await signup(name, email, password);

      toast.success("Email verification code has been sent successfully");
      navigate("/verifyemail");
    } catch (error) {
      toast.error(error.message || "Error signing up");
      console.log(error.message);
      return;
    }
  };
  return (
    <div>
      <SignupLayout
        isShowing={isShowing}
        email={email}
        password={password}
        name={name}
        isValid={isValid}
        showValidation={showValidation}
        isPasswordValid={isPasswordValid}
        isFocused={isFocused}
        GuestAccount={GuestAccount}
        setIsFocused={setIsFocused}
        handleSignUp={handleSignUp}
        handleEmail={handleEmail}
        handleName={handleName}
        handlePassword={handlePassword}
        handleShowPassword={handleShowPassword}
      />
    </div>
  );
};

export default Signup;
