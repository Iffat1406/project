// routes/adminRoutes.js
import express from "express";
import { adminLogin } from "../controllers/adminController.js";

const router = express.Router();

// Login
router.post("/login", adminLogin);

export default router;
