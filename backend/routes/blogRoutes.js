// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const blogController = require('../controllers/blogController');

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'uploads', 'blogs');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, gif, webp) are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter
});

// Middleware to verify admin
const verifyAdmin = (req, res, next) => {
  const adminPassword = req.headers['admin-password'];
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123'; // Change this!
  
  if (adminPassword === correctPassword) {
    next();
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid admin password'
    });
  }
};

// ============ PUBLIC ROUTES ============

// GET all published blogs (with pagination, search, filter)
router.get('/blogs', blogController.getAllBlogs);

// GET single blog by slug
router.get('/blogs/:slug', blogController.getBlogBySlug);

// GET featured blogs
router.get('/blogs/featured/list', blogController.getFeaturedBlogs);

// GET recent blogs
router.get('/blogs/recent/list', blogController.getRecentBlogs);

// ============ ADMIN ROUTES ============

// GET all blogs (including unpublished) - Admin only
router.get('/admin/blogs', verifyAdmin, blogController.getAdminBlogs);

// POST create new blog - Admin only
router.post('/admin/blogs', verifyAdmin, upload.single('image'), blogController.createBlog);

// PUT update blog - Admin only
router.put('/admin/blogs/:id', verifyAdmin, upload.single('image'), blogController.updateBlog);

// DELETE blog - Admin only
router.delete('/admin/blogs/:id', verifyAdmin, blogController.deleteBlog);

module.exports = router;