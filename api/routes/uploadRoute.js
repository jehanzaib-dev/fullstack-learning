import express from "express";

import multer from "multer";

const uploadRouter = express.Router();

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "public/images");

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + file.originalname
    );

  },

});
const upload = multer({
  storage,
});
uploadRouter.post(
  "/",
  upload.single("file"),
  (req, res) => {

    try {

      res.status(200).json({
        filename: req.file.filename,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Upload failed",
      });

    }

  }
);

export default uploadRouter;