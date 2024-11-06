import express from "express";
import {
  signUp,
  emailVerification,
  login,
  logout,
  forgotPassword,
  resetPassword,
  checkAuth,
  checkAuth2,
  resendEmailVerification,
  addToFavorite,
  removeFromFavorite
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/pokedex", verifyToken, checkAuth);

router.post("/favorite/add", verifyToken, checkAuth2,addToFavorite);

router.delete("/favorite/remove", verifyToken, checkAuth2,removeFromFavorite);

router.post("/signup", signUp);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", emailVerification);

router.post("/resend-verification", resendEmailVerification);

router.post("/forgot-password", forgotPassword);

router.post("/resetpassword/:token", resetPassword);

export default router;
