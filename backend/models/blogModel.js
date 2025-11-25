// models/blogModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  image: {
    type: String,
    required: [true, 'Image is required']
  },
  author: {
    type: String,
    default: 'Admin',
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['internet', 'cable', 'technology', 'security', 'company', 'all'],
    default: 'all'
  },
  tags: [{
    type: String,
    trim: true
  }],
  readTime: {
    type: String,
    default: '5 min read'
  },
  published: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Generate slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Calculate read time based on content length
blogSchema.pre('save', function(next) {
  if (this.isModified('content')) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    this.readTime = `${minutes} min read`;
  }
  next();
});

// Index for better search performance
blogSchema.index({ title: 'text', excerpt: 'text', content: 'text' });
blogSchema.index({ slug: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ published: 1 });
blogSchema.index({ date: -1 });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;