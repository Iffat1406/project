import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Fade,
  Pagination
} from '@mui/material';

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Boost Your Home Wi-Fi Speed',
      excerpt: 'Is your internet running slow? Learn these expert tips to maximize your Wi-Fi performance and get the speed you deserve.',
      category: 'internet',
      author: 'Rajesh Kumar',
      date: '2025-11-10',
      readTime: '8 min read',
      thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
      tags: ['Wi-Fi', 'Speed', 'Tips', 'Home Network']
    },
    {
      id: 2,
      title: 'Choosing the Right Internet Plan for Your Family',
      excerpt: 'Not sure which internet speed you need? This comprehensive guide helps you select the perfect plan based on your usage.',
      category: 'internet',
      author: 'Priya Sharma',
      date: '2025-11-08',
      readTime: '9 min read',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      tags: ['Plans', 'Guide', 'Family', 'Internet Speed']
    },
    {
      id: 3,
      title: 'Top 10 Cable TV Channels for Indian Families in 2025',
      excerpt: 'Discover the most popular and must-have channels that every Indian household should consider in their cable package.',
      category: 'cable',
      author: 'Amit Patel',
      date: '2025-11-05',
      readTime: '7 min read',
      thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      tags: ['Cable TV', 'Channels', 'Entertainment', 'Guide']
    },
    {
      id: 4,
      title: 'Understanding Fiber Optic Internet: Why It Matters',
      excerpt: 'Learn about fiber optic technology and why it is becoming the gold standard for internet connectivity.',
      category: 'technology',
      author: 'Vikram Singh',
      date: '2025-11-01',
      readTime: '10 min read',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      tags: ['Fiber Optic', 'Technology', 'Speed', 'Infrastructure']
    },
    {
      id: 5,
      title: 'Securing Your Home Network: Essential Steps',
      excerpt: 'Protect your family from cyber threats with these simple but effective home network security measures.',
      category: 'security',
      author: 'Neha Deshmukh',
      date: '2025-10-28',
      readTime: '12 min read',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      tags: ['Security', 'Privacy', 'Cybersecurity', 'Protection']
    },
    {
      id: 6,
      title: 'Radha Cable Net Expands to 5 New Areas in Mumbai',
      excerpt: 'We are excited to announce our expansion to Bandra, Worli, Lower Parel, Parel, and Matunga with our high-speed services.',
      category: 'company',
      author: 'Radha Cable Net Team',
      date: '2025-10-25',
      readTime: '6 min read',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      tags: ['Expansion', 'Mumbai', 'News', 'Service Areas']
    },
    {
      id: 7,
      title: 'Work From Home: Optimizing Your Internet Setup',
      excerpt: 'Essential tips for remote workers to ensure stable, fast internet connectivity for video calls and productivity.',
      category: 'internet',
      author: 'Suresh Rao',
      date: '2025-10-20',
      readTime: '11 min read',
      thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
      tags: ['Work From Home', 'Productivity', 'Remote Work', 'Tips']
    },
    {
      id: 8,
      title: 'OTT vs Cable TV: Which is Right for You?',
      excerpt: 'Compare streaming services with traditional cable TV to make an informed decision for your entertainment needs.',
      category: 'cable',
      author: 'Kavita Joshi',
      date: '2025-10-15',
      readTime: '10 min read',
      thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      tags: ['OTT', 'Cable TV', 'Comparison', 'Streaming']
    },
    {
      id: 9,
      title: 'Smart Home Devices: Internet Requirements Guide',
      excerpt: 'Planning a smart home? Learn about bandwidth requirements and how to choose the right internet plan.',
      category: 'technology',
      author: 'Arjun Mehta',
      date: '2025-10-10',
      readTime: '14 min read',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      tags: ['Smart Home', 'IoT', 'Bandwidth', 'Planning']
    },
    {
      id: 10,
      title: 'The Complete Guide to 4K and 8K Streaming',
      excerpt: 'Everything you need to know about ultra-high-definition streaming, from bandwidth requirements to the best content sources.',
      category: 'technology',
      author: 'Rohit Kulkarni',
      date: '2025-10-05',
      readTime: '13 min read',
      thumbnail: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800',
      tags: ['4K', '8K', 'Streaming', 'UHD', 'Technology']
    },
    {
      id: 11,
      title: 'Online Gaming: Choosing the Right Internet Connection',
      excerpt: 'Lag, ping, and bandwidth explained. Learn how to optimize your connection for competitive gaming.',
      category: 'gaming',
      author: 'Aditya Iyer',
      date: '2025-09-30',
      readTime: '15 min read',
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
      tags: ['Gaming', 'Internet', 'Latency', 'Optimization', 'Tips']
    },
    {
      id: 12,
      title: 'Setting Up Your Home Office: Complete Connectivity Guide',
      excerpt: 'Transform any room into a productive workspace with our comprehensive home office internet setup guide.',
      category: 'work',
      author: 'Meera Nair',
      date: '2025-09-25',
      readTime: '16 min read',
      thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
      tags: ['Home Office', 'Productivity', 'Setup', 'Work From Home', 'Business']
    }
  ];

  const handleBlogClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: 'white',
          color: '#0a1f44',
          py: 6,
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 0,
                  color: '#0a1f44',
                  letterSpacing: '-0.02em'
                }}
              >
                News & Blogs
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Blog Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {currentPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Fade in timeout={1000 + index * 100}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor: '#f8f9fa',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
                    }
                  }}
                  onClick={() => handleBlogClick(post.id)}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={post.thumbnail}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3, pb: 3 }}>
                    <Box
                      sx={{
                        bgcolor: '#000',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 3,
                        display: 'inline-block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        mb: 2
                      }}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: '2-digit' 
                      })}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      fontWeight={700}
                      sx={{
                        mb: 3,
                        color: '#0a1f44',
                        lineHeight: 1.3,
                        minHeight: '64px'
                      }}
                    >
                      {post.title}
                    </Typography>
                    
                    <Button
                      sx={{
                        color: '#000',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textTransform: 'none',
                        p: 0,
                        '&:hover': {
                          bgcolor: 'transparent',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, page) => setCurrentPage(page)}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  fontSize: '1rem',
                  fontWeight: 600
                }
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Blog;