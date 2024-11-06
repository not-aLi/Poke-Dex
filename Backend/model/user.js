import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema({
  pokemonId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  spriteUrl: {
    type: String,
  },
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    favorites: [favoritesSchema],
    resetPasswordToken: String,
    verificationToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
