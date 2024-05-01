import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import checkAuth from "../middleware/checkAuth.js";
const router = express.Router();

router.get("/:id", checkAuth, getMessages)
router.post("/send/:id", checkAuth, sendMessage)

export default router;