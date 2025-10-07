// routes/blogRoutes.js
import express from "express";
import { addBlog, getBlogs } from "../controllers/blogController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin adds blog
router.post("/", protect, addBlog);

// Anyone can read blogs
router.get("/", getBlogs);

export default router;
