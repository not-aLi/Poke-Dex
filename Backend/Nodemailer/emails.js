import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { sender, transport } from "./nodemailer.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = email;

  try {
    const res = await transport.sendMail({
      sender: `"${sender.name}" <${sender.email}>`,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });
    console.log("Email sent successfully", res);
  } catch (error) {
    console.log(error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendResetPasswordEmail = async (email, resetPasswordUrl) => {
  const recipient = email;

  try {
    const res = await transport.sendMail({
      sender: `"${sender.name}" <${sender.email}>`,
      to: recipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        resetPasswordUrl
      ),
    });
    console.log("Email sent successfully", res);
  } catch (error) {
    throw new Error(`Error sending reset password email ${error}`);
  }
};

export const sendResetPasswordSuccessEmail = async (email) => {
  const recipient = email;

  try {
    const res = await transport.sendMail({
      sender: `"${sender.name}" <${sender.email}>`,
      to: recipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Email sent successfully", res);
  } catch (error) {
    throw new Error(`Error sending email ${error}`);
  }
};
