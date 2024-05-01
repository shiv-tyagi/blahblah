import express from "express";
const router = express.Router();
import {loginUser, signup, logout} from '../controllers/auth.controller.js'

router.post("/signup", signup);

router.post("/login", loginUser);

router.post("/logout", logout);

export default router;