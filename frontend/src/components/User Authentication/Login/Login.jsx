import React, { useContext, useState } from "react";
import LoginLayout from "./LoginLayout";
import { PokemonContext } from "../../States/StateContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const { login, authLoading, GuestAccount } = useContext(PokemonContext);

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      toast.success(response?.data?.message);
      navigate("/pokedex");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <LoginLayout
        email={email}
        authLoading={authLoading}
        handleLogin={handleLogin}
        password={password}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        isShowing={isShowing}
        isFocused={isFocused}
        GuestAccount={GuestAccount}
        setIsFocused={setIsFocused}
        handleShowPassword={handleShowPassword}
      />
    </div>
  );
};

export default Login;
