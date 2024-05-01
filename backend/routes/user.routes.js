import express from "express";
import { getUsers } from "../controllers/user.controller.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, getUsers)

export default router;