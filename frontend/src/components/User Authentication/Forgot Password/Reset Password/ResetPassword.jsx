import React, { useContext, useState } from "react";
import ResetPasswordLayout from "./ResetPasswordLayout";
import { useNavigate, useParams } from "react-router-dom";
import { PokemonContext } from "../../../States/StateContext";
import { toast } from "sonner";

const ResetPassword = () => {
  const { resetPassword, authLoading } = useContext(PokemonContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewShowing, setNewShowing] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [isConfirmShowing, setConfirmShowing] = useState(false);
  const [isNewPasswordValid, setNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowNewPassword = () => {
    setNewShowing(!isNewShowing);
  };

  const handleShowConfirmPassword = () => {
    setConfirmShowing(!isConfirmShowing);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    let isValid = false;

    try {
      if (!newPassword || !confirmPassword) {
        return;
      }
      if (newPassword.length <= 6) {
        toast.error("Password must be at least 6 characters long");
        isValid = false;
        setNewPasswordValid(false);
      } else {
        isValid = true;
        setNewPasswordValid(true);
      }

      if (confirmPassword !== newPassword) {
        toast.error("Passwords do not match");
        isValid = false;
        setConfirmPasswordValid(false);
      } else {
        isValid = true;
        setConfirmPasswordValid(true);
      }
      if (isValid && isNewPasswordValid && isConfirmPasswordValid) {
        const response = await resetPassword(token, confirmPassword);
        toast.success(response?.data?.message);
        setNewPassword("");
        setConfirmPassword("");

        const timer = setTimeout(() => {
          navigate("/");
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || "Error resetting password");
      return;
    }
  };

  return (
    <div>
      <ResetPasswordLayout
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        isNewShowing={isNewShowing}
        isConfirmShowing={isConfirmShowing}
        handleNewPassword={handleNewPassword}
        handleConfirmPassword={handleConfirmPassword}
        handleShowNewPassword={handleShowNewPassword}
        handleShowConfirmPassword={handleShowConfirmPassword}
        handleResetPassword={handleResetPassword}
        isNewPasswordValid={isNewPasswordValid}
        authLoading={authLoading}
        isFocused={isFocused}
        setFocused={setFocused}
        isConfirmPasswordValid={isConfirmPasswordValid}
      />
    </div>
  );
};

export default ResetPassword;
