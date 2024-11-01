import React, { useState } from "react";
import ResetPasswordLayout from "./ResetPasswordLayout";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewShowing, setNewShowing] = useState(false);
  const [isConfirmShowing, setConfirmShowing] = useState(false);

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
      />
    </div>
  );
};

export default ResetPassword;
