import Router from "express";
import upload from "../middleware/multer.js";
import { uploadImage } from "../controllers/uploadController.js";

const router = Router();

router.post("/", upload.single("file"), uploadImage);

export default router;