// controllers/blogController.js
const Blog = require('../models/blogModel');
const fs = require('fs');
const path = require('path');

// Hardcoded blogs (always returned first)
const hardcodedBlogs = [
  {
    _id: 'hardcoded-1',
    title: '10 Ways to Boost Your Home Wi-Fi Speed',
    slug: '10-ways-to-boost-your-home-wi-fi-speed',
    excerpt: 'Is your internet running slow? Learn these expert tips to maximize your Wi-Fi performance and get the speed you deserve.',
    content: `Having slow internet can be frustrating, especially when you are working from home or streaming your favorite shows. Here are 10 proven ways to boost your Wi-Fi speed:

1. Position Your Router Strategically - Place your router in a central location, elevated from the floor, away from walls and metal objects.

2. Update Router Firmware - Regularly check for firmware updates from your router manufacturer.

3. Change Wi-Fi Channel - Switch to less congested channels (1, 6, or 11 for 2.4GHz).

4. Use 5GHz Band - For devices that support it, the 5GHz band offers faster speeds with less interference.

5. Secure Your Network - Use WPA3 or WPA2 encryption to prevent unauthorized access.

6. Limit Bandwidth-Heavy Applications - Schedule large downloads during off-peak hours.

7. Upgrade Your Equipment - Modern routers with Wi-Fi 6 technology offer significant improvements.

8. Use Ethernet for Gaming and Streaming - Wired connections provide more stable speeds.

9. Remove Obstructions - Keep the router away from thick walls, aquariums, and mirrors.

10. Contact Your ISP - If issues persist, Radha Cable Net support team can help diagnose and resolve problems.`,
    category: 'internet',
    author: 'Rajesh Kumar',
    date: '2025-11-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    tags: ['Wi-Fi', 'Speed', 'Tips', 'Home Network'],
    featured: true,
    published: true,
    views: 1523,
    createdAt: new Date('2025-11-10'),
    isHardcoded: true
  },
  {
    _id: 'hardcoded-2',
    title: 'Choosing the Right Internet Plan for Your Family',
    slug: 'choosing-the-right-internet-plan-for-your-family',
    excerpt: 'Not sure which internet speed you need? This comprehensive guide helps you select the perfect plan based on your usage.',
    content: `Selecting the right internet plan can be confusing with so many options available. Here is how to choose:

Understanding Your Needs:
- Light Users (1-2 devices): 50-70 Mbps is sufficient for browsing and email
- Moderate Users (3-5 devices): 100-150 Mbps for HD streaming and video calls
- Heavy Users (6+ devices): 200-300 Mbps for 4K streaming, gaming, and large downloads
- Power Users: 500 Mbps plus for multiple 4K streams, gaming, and smart home devices

Consider These Factors:
1. Number of connected devices
2. Types of activities (streaming, gaming, work)
3. Simultaneous users
4. Future needs and scalability

Radha Cable Net Recommendation:
We suggest starting with our 100 Mbps plan for most families. You can always upgrade if needed, and our team provides free consultation to help you choose.`,
    category: 'internet',
    author: 'Priya Sharma',
    date: '2025-11-08',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    tags: ['Plans', 'Guide', 'Family', 'Internet Speed'],
    featured: false,
    published: true,
    views: 987,
    createdAt: new Date('2025-11-08'),
    isHardcoded: true
  }
];

// GET all blogs (public - includes hardcoded + database blogs)
exports.getAllBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    
    // Build query for database blogs
    const query = { published: true };
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    // Get database blogs
    const dbBlogs = await Blog.find(query)
      .sort({ date: -1 })
      .lean();

    // Filter hardcoded blogs based on search and category
    let filteredHardcodedBlogs = [...hardcodedBlogs];
    
    if (category && category !== 'all') {
      filteredHardcodedBlogs = filteredHardcodedBlogs.filter(blog => blog.category === category);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredHardcodedBlogs = filteredHardcodedBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower) ||
        blog.content.toLowerCase().includes(searchLower)
      );
    }

    // Combine blogs (hardcoded first, then database)
    const allBlogs = [...filteredHardcodedBlogs, ...dbBlogs];
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedBlogs = allBlogs.slice(startIndex, endIndex);
    
    const totalBlogs = allBlogs.length;
    const totalPages = Math.ceil(totalBlogs / limit);

    res.json({
      success: true,
      blogs: paginatedBlogs,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalBlogs,
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    console.error('Get all blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message
    });
  }
};

// GET single blog by slug (public)
exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    // Check hardcoded blogs first
    const hardcodedBlog = hardcodedBlogs.find(blog => blog.slug === slug);
    
    if (hardcodedBlog) {
      return res.json({
        success: true,
        blog: hardcodedBlog
      });
    }
    
    // If not hardcoded, check database
    const blog = await Blog.findOne({ slug, published: true });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    // Increment views
    blog.views += 1;
    await blog.save();
    
    res.json({
      success: true,
      blog
    });
  } catch (error) {
    console.error('Get blog by slug error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog',
      error: error.message
    });
  }
};

// GET all blogs for admin (includes unpublished + hardcoded)
exports.getAdminBlogs = async (req, res) => {
  try {
    const dbBlogs = await Blog.find().sort({ createdAt: -1 }).lean();
    
    // Combine hardcoded (marked) + database blogs
    const allBlogs = [
      ...hardcodedBlogs.map(blog => ({ ...blog, isHardcoded: true })),
      ...dbBlogs
    ];
    
    res.json({
      success: true,
      blogs: allBlogs
    });
  } catch (error) {
    console.error('Get admin blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message
    });
  }
};

// POST create new blog (admin)
exports.createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, author, category, tags, published, featured } = req.body;
    
    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Blog image is required'
      });
    }
    
    // Parse tags if string
    let parsedTags = tags;
    if (typeof tags === 'string') {
      parsedTags = tags.split(',').map(tag => tag.trim()).filter(Boolean);
    }
    
    // Create blog
    const blog = new Blog({
      title,
      excerpt,
      content,
      author: author || 'Admin',
      category,
      tags: parsedTags || [],
      published: published === 'true' || published === true,
      featured: featured === 'true' || featured === true,
      image: `/uploads/blogs/${req.file.filename}`
    });
    
    await blog.save();
    
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    
    // Delete uploaded file if blog creation fails
    if (req.file) {
      const filePath = path.join(__dirname, '..', 'uploads', 'blogs', req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to create blog',
      error: error.message
    });
  }
};

// PUT update blog (admin)
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, excerpt, content, author, category, tags, published, featured } = req.body;
    
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    // Parse tags if string
    let parsedTags = tags;
    if (typeof tags === 'string') {
      parsedTags = tags.split(',').map(tag => tag.trim()).filter(Boolean);
    }
    
    // Update fields
    blog.title = title || blog.title;
    blog.excerpt = excerpt || blog.excerpt;
    blog.content = content || blog.content;
    blog.author = author || blog.author;
    blog.category = category || blog.category;
    blog.tags = parsedTags || blog.tags;
    blog.published = published === 'true' || published === true;
    blog.featured = featured === 'true' || featured === true;
    
    // Update image if new one uploaded
    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, '..', blog.image.substring(1));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      blog.image = `/uploads/blogs/${req.file.filename}`;
    }
    
    await blog.save();
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    console.error('Update blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update blog',
      error: error.message
    });
  }
};

// DELETE blog (admin)
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findById(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    // Delete image file
    const imagePath = path.join(__dirname, '..', blog.image.substring(1));
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    await Blog.findByIdAndDelete(id);
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog',
      error: error.message
    });
  }
};

// GET featured blogs
exports.getFeaturedBlogs = async (req, res) => {
  try {
    const dbBlogs = await Blog.find({ published: true, featured: true })
      .sort({ date: -1 })
      .limit(3)
      .lean();
    
    const featuredHardcoded = hardcodedBlogs.filter(blog => blog.featured);
    
    const allFeatured = [...featuredHardcoded, ...dbBlogs].slice(0, 3);
    
    res.json({
      success: true,
      blogs: allFeatured
    });
  } catch (error) {
    console.error('Get featured blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured blogs',
      error: error.message
    });
  }
};

// GET recent blogs
exports.getRecentBlogs = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    
    const dbBlogs = await Blog.find({ published: true })
      .sort({ date: -1 })
      .limit(parseInt(limit))
      .lean();
    
    const allBlogs = [...hardcodedBlogs, ...dbBlogs]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, parseInt(limit));
    
    res.json({
      success: true,
      blogs: allBlogs
    });
  } catch (error) {
    console.error('Get recent blogs error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recent blogs',
      error: error.message
    });
  }
};

module.exports = exports;