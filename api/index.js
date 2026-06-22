import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";


import AuthRouter from "./routes/authRoutes.js";
import PostRouter from "./routes/postRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import uploadRouter from "./routes/uploadRoute.js";
import AIRouter from "./routes/aiRoutes.js";



console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(
  "/images",
  express.static("public/images")
);

app.use("/api/v1/upload", uploadRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/posts", PostRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/ai", AIRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
