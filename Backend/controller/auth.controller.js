import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateTokenAndSetCookie } from "../util/generateTokenAndSetCookie.js";
import {
  sendResetPasswordEmail,
  sendResetPasswordSuccessEmail,
  sendVerificationEmail,
} from "../Nodemailer/emails.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(1000 + Math.random() * 9000);

    const user = new User({
      name,
      password: hashedPassword,
      email,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 15 * 60 * 1000,
    });

    await user.save();
    sendVerificationEmail(email, verificationToken);

    generateTokenAndSetCookie(user._id, res);

    return res.status(201).json({
      success: true,
      message: "User Created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const emailVerification = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired credentials" });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error verifying email" });
  }
};

export const resendEmailVerification = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (user.isVerified) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already verified" });
    }
    const verificationToken = Math.floor(1000 + Math.random() * 9000);
    user.verificationToken = verificationToken;
    user.verificationTokenExpiresAt = Date.now() + 15 * 60 * 1000;

    await user.save();
    sendVerificationEmail(email, verificationToken);
    return res
      .status(200)
      .json({ success: true, message: "Verification code resent" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Error resending verification code" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);
    user.lastLogin = new Date();

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token", {
    http: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  return res
    .status(200)
    .json({ success: true, message: "Logout successfully" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiration = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresAt = resetTokenExpiration;

    await user.save();

    await sendResetPasswordEmail(
      email,
      `${process.env.CLIENT_URL}/resetpassword/${resetToken}`
    );

    return res.status(200).json({
      success: true,
      message: "Please check your email for the password reset link.",
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Error sending email" });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;

    await user.save();

    sendResetPasswordSuccessEmail(user.email);

    return res
      .status(200)
      .json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Error changing password" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user_id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in check auth", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const checkAuth2 = async (req, res, next) => {
  try {
    const user = await User.findById(req.user_id).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in check auth", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const addToFavorite = async (req, res) => {
  const { pokemonId, name, spriteUrl } = req.body;
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isAlreadyFavorite = user.favorites.some(
      (fav) => fav.pokemonId === Number(pokemonId)
    );
    if (isAlreadyFavorite) {
      return res
        .status(400)
        .json({ success: false, message: `${name} is already in favorites` });
    }
    user.favorites.push({ pokemonId, name, spriteUrl });

    await user.save();

    return res.status(200).json({
      success: true,
      message: `${name} has been successfully added to your favorites!`,
      user: {
        ...user._doc,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error adding pokemon" });
  }
};

export const removeFromFavorite = async (req, res) => {
  const { id } = req.body;

  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isFavorite = user.favorites.find(
      (poke) => poke._id.toString() === id
    );
    if (isFavorite) {
      user.favorites = user.favorites.filter(
        (fav) => fav._id.toString() !== id
      );

      await user.save();

      return res.status(200).json({
        success: true,
        message: `${isFavorite.name} has been removed from your favorites!`,
        user: {
          ...user._doc,
        },
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Pokémon not found in favorites." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
