import express from "express";
import { generatePost } from "../controllers/aiController.js";

const AIRouter = express.Router();

AIRouter.route("/generate-post").post(generatePost);

export default AIRouter;