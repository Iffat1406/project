// controllers/blogController.js
import Blog from "../models/Blog.js";

// Add new blog
export const addBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const blog = new Blog({ title, content, image });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: "Failed to create blog" });
  }
};

// Get all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};
