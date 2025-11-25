// Admin/Blog.jsx
import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Button, TextField, Dialog, DialogTitle,
  DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Chip, Switch, FormControlLabel,
  Alert, Snackbar, CircularProgress, Card, CardContent, InputAdornment,
  Select, MenuItem, FormControl, InputLabel, Grid
} from '@mui/material';
import {
  Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon,
  Search as SearchIcon, LockOutlined, ExitToApp
} from '@mui/icons-material';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Update with your backend URL

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [searchTerm, setSearchTerm] = useState('');
  const [adminPassword, setAdminPassword] = useState(localStorage.getItem('adminPassword') || '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('adminPassword'));
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    category: 'internet',
    tags: '',
    published: true,
    featured: false,
    image: null
  });

  const categories = [
    { value: 'internet', label: 'Internet Tips' },
    { value: 'cable', label: 'Cable TV' },
    { value: 'technology', label: 'Technology' },
    { value: 'security', label: 'Security' },
    { value: 'company', label: 'Company News' }
  ];

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/admin/blogs`, {
        headers: { 'admin-password': adminPassword }
      });
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      showSnackbar('Failed to fetch blogs: ' + (error.response?.data?.message || error.message), 'error');
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (adminPassword.trim()) {
      localStorage.setItem('adminPassword', adminPassword);
      setIsAuthenticated(true);
    } else {
      showSnackbar('Please enter admin password', 'error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    setIsAuthenticated(false);
    setAdminPassword('');
    setBlogs([]);
  };

  const handleOpenDialog = (blog = null) => {
    if (blog) {
      if (blog.isHardcoded) {
        showSnackbar('Cannot edit hardcoded blogs', 'warning');
        return;
      }
      setEditMode(true);
      setCurrentBlog(blog);
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        author: blog.author,
        category: blog.category,
        tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags,
        published: blog.published,
        featured: blog.featured || false,
        image: null
      });
      setImagePreview(blog.image);
    } else {
      setEditMode(false);
      setCurrentBlog(null);
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        author: 'Admin',
        category: 'internet',
        tags: '',
        published: true,
        featured: false,
        image: null
      });
      setImagePreview(null);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      category: 'internet',
      tags: '',
      published: true,
      featured: false,
      image: null
    });
    setImagePreview(null);
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      // Validation
      if (!formData.title || !formData.excerpt || !formData.content) {
        showSnackbar('Please fill in all required fields', 'error');
        return;
      }

      if (!editMode && !formData.image) {
        showSnackbar('Please upload a blog image', 'error');
        return;
      }

      const data = new FormData();
      data.append('title', formData.title);
      data.append('excerpt', formData.excerpt);
      data.append('content', formData.content);
      data.append('author', formData.author);
      data.append('category', formData.category);
      data.append('tags', formData.tags);
      data.append('published', formData.published);
      data.append('featured', formData.featured);
      
      if (formData.image) {
        data.append('image', formData.image);
      }

      let response;
      if (editMode) {
        response = await axios.put(`${API_URL}/admin/blogs/${currentBlog._id}`, data, {
          headers: {
            'admin-password': adminPassword,
            'Content-Type': 'multipart/form-data'
          }
        });
        showSnackbar('Blog updated successfully', 'success');
      } else {
        response = await axios.post(`${API_URL}/admin/blogs`, data, {
          headers: {
            'admin-password': adminPassword,
            'Content-Type': 'multipart/form-data'
          }
        });
        showSnackbar('Blog created successfully', 'success');
      }

      handleCloseDialog();
      fetchBlogs();
    } catch (error) {
      showSnackbar(error.response?.data?.message || 'Failed to save blog', 'error');
    }
  };

  const handleDelete = async (id, isHardcoded) => {
    if (isHardcoded) {
      showSnackbar('Cannot delete hardcoded blogs', 'warning');
      return;
    }

    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`${API_URL}/admin/blogs/${id}`, {
          headers: { 'admin-password': adminPassword }
        });
        showSnackbar('Blog deleted successfully', 'success');
        fetchBlogs();
      } catch (error) {
        showSnackbar('Failed to delete blog', 'error');
      }
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Login Screen
  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <Container maxWidth="sm">
          <Card elevation={8}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <LockOutlined sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom fontWeight={700}>
                  Admin Login
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enter admin password to access blog management
                </Typography>
              </Box>
              <TextField
                fullWidth
                type="password"
                label="Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                margin="normal"
                autoFocus
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleLogin}
                sx={{ mt: 3, py: 1.5 }}
              >
                Login to Dashboard
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  // Admin Dashboard
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Blog Management
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage your blog posts and content
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog()}
              size="large"
            >
              New Blog
            </Button>
            <Button
              variant="outlined"
              startIcon={<ExitToApp />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        <Card elevation={0} sx={{ mb: 3 }}>
          <CardContent>
            <TextField
              fullWidth
              placeholder="Search blogs by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Card>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress size={60} />
          </Box>
        ) : (
          <Card elevation={0}>
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: 'grey.100' }}>
                  <TableRow>
                    <TableCell><strong>Title</strong></TableCell>
                    <TableCell><strong>Category</strong></TableCell>
                    <TableCell><strong>Author</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                    <TableCell><strong>Views</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell align="right"><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBlogs.map((blog) => (
                    <TableRow key={blog._id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            component="img"
                            src={blog.image}
                            alt={blog.title}
                            sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1 }}
                          />
                          <Box>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {blog.title}
                              {blog.isHardcoded && (
                                <Chip label="Hardcoded" size="small" color="info" sx={{ ml: 1 }} />
                              )}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" noWrap sx={{ maxWidth: 300, display: 'block' }}>
                              {blog.excerpt}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip label={blog.category} size="small" color="primary" variant="outlined" />
                      </TableCell>
                      <TableCell>{blog.author}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 0.5, flexDirection: 'column' }}>
                          <Chip
                            label={blog.published ? 'Published' : 'Draft'}
                            color={blog.published ? 'success' : 'default'}
                            size="small"
                          />
                          {blog.featured && (
                            <Chip label="Featured" color="warning" size="small" />
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>{blog.views || 0}</TableCell>
                      <TableCell>{new Date(blog.date || blog.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          onClick={() => handleOpenDialog(blog)}
                          disabled={blog.isHardcoded}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(blog._id, blog.isHardcoded)}
                          disabled={blog.isHardcoded}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        )}

        {/* Blog Editor Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
            {editMode ? 'Edit Blog Post' : 'Create New Blog Post'}
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title *"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Excerpt *"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  multiline
                  rows={2}
                  required
                  helperText="Short description (max 500 characters)"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Content *"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  multiline
                  rows={10}
                  required
                  helperText="Full blog content"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    label="Category"
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Wi-Fi, Speed, Tips (comma separated)"
                  helperText="Separate tags with commas"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                >
                  {formData.image ? 'Change Image' : 'Upload Featured Image *'}
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Button>
                {imagePreview && (
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }}
                    />
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.published}
                      onChange={handleInputChange}
                      name="published"
                    />
                  }
                  label="Publish immediately"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.featured}
                      onChange={handleInputChange}
                      name="featured"
                    />
                  }
                  label="Mark as featured"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editMode ? 'Update Blog' : 'Create Blog'}
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', right: 'right' }}
        >
          <Alert severity={snackbar.severity} sx={{ width: '100%' }} variant="filled">
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AdminBlog;