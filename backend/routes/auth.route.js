import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Create a route for signup
router.post("/signup", signup); // Fixed the missing leading "/"

export default router;
