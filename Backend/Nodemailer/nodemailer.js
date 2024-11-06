import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
export const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

export const sender = {
  email: process.env.USER_EMAIL,
  name: "Poke Dex",
};
