import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/mongoConnect.js";
import router from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cookieParser());
const authRoutes = router;
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
const port = process.env.PORT;
app.use(express.json());

app.listen(port, () => {
  connectDB();
  console.log(`App is listening to ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/auth", authRoutes);
