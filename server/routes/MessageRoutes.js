import { Router } from "express";
import multer from "multer";
import {
  addAudioMessage,
  addImageMessage,
  addMessage,
  getInitialContactswithMessages,
  getMessages,
} from "../controllers/MessageController.js";
const router = Router();

const upload = multer({ dest: "uploads/recordings" });
const uploadImage = multer({ dest: "uploads/images" });

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage);
router.post("/add-audio-message", upload.single("audio"), addAudioMessage);
router.get("/get-initial-contacts/:from", getInitialContactswithMessages);

export default router;
