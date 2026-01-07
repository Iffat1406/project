import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  Avatar,
  Paper,
  IconButton
} from '@mui/material';
import {
  PersonOutlined,
  AccessTimeOutlined,
  SearchOutlined,
  ArrowForwardOutlined,
  ArrowBackOutlined
} from '@mui/icons-material';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      date: '2025-11-15',
      message: 'Great article! Very informative and helpful. I followed these tips and my internet speed improved significantly.',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=0a1f44&color=fff'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      date: '2025-11-12',
      message: 'Thanks for sharing this comprehensive guide. The section about router placement was particularly useful.',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=e91e63&color=fff'
    }
  ]);

  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Boost Your Home Wi-Fi Speed',
      excerpt: 'Is your internet running slow? Learn these expert tips to maximize your Wi-Fi performance and get the speed you deserve.',
      category: 'Internet',
      author: 'Nextbit',
      date: '2025-11-10',
      readTime: '8 min read',
      thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
      images: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200',
        'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=1200',
        'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200',
        'https://images.unsplash.com/photo-1547082661-e6d52188d0d8?w=1200'
      ],
      tags: ['Imports', 'Leader'],
      contentSections: [
        {
          type: 'text',
          content: `Having slow internet can be frustrating, especially when you are working from home or streaming your favorite shows. Here are 10 proven ways to boost your Wi-Fi speed:

When Wi-Fi Lorem Ipsum is simply generated, lorem ipsum is dead pulled to tweaking templates from paragraph generators on the structures of the old old. Copy. Second, use lorem ipsum if you copywriters and designers may be best, however, the drawn become amet, draft copy the is as proven take about your structure a discussion about must.

Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes place under the guidance of educators, but learners may also educate themselves.`
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800'
        },
        {
          type: 'text',
          content: `In primary national education systems, secondary schools may be called colleges or lower college as part of their title.

The Донок формления and flexible for completely reaches. One fellow sunt did triers в web or formulating the minllandbus offered mel quipe coriti. The strength of lorem ipsum is readiness it doesn't communicate. And this a why it What century typewriter might have scrambled to such a degree that only an unabashed for the Latin language and/or intimately familiar with the old pages, the vestibut posuere to see auto to get them.`
        },
        {
          type: 'heading',
          content: 'Mauris sit amet dui au odio fermentum'
        },
        {
          type: 'text',
          content: `In reprehenderit est aed dignissism consequuntur velit id. Lorem ipsum haer nonnuor vestibulum letum. Нуштат dez нелника in acer turss lestibss itleretur sit die vitee, dis a trist moin. ΣΩΩΣ pour qui dectivese MecОcrnack, arior prorectur tuam cordiis ein compesbus synlely Correge in Virginia mamiem.`
        },
        {
          type: 'images-row',
          images: [
            'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400',
            'https://images.unsplash.com/photo-1547082661-e6d52188d0d8?w=400'
          ]
        },
        {
          type: 'text',
          content: `In reprehenderit sit aed dignissism conzequantur velit id. Lorem ipsum haer nonruor arkebusieur letum. Нехнат dez нелника in acer turss lestibss literetur sit die vitee, dis a trist moin 2020 pour qui deshorse MecOcrtact, arior prorectur tuam cordiis ein compesbus synley Correge in Virginia mamiem.`
        },
        {
          type: 'heading',
          content: 'Quisque scelerisque nulla eu risus mollis'
        },
        {
          type: 'text',
          content: `Mauris sit ut ornare moodan voluptatum. Quisque id exercut deserit lavreet dis lerus, vis lacinia leo scelerisque quis ut dolor tincidunt. Aenean arcu mauris, viverra interdum porttitor porta adipiscing velit. Aenean arcu metus, tempor in risus ut, ultrput pellenteraque est. In eu sollicitudin purus, id consectetur sapien liberan sit amet ex. Aliquart lorem quam, fermentus odio et tempus ornare, tempor gravida eu condilis.`
        }
      ]
    },
    {
      id: 2,
      title: 'Choosing the Right Internet Plan for Your Family',
      excerpt: 'Not sure which internet speed you need? This comprehensive guide helps you select the perfect plan.',
      category: 'Internet',
      author: 'Priya Sharma',
      date: '2025-11-08',
      readTime: '9 min read',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      images: [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200'
      ],
      tags: ['Plans', 'Guide'],
      contentSections: [
        {
          type: 'text',
          content: `Selecting the right internet plan can be confusing with so many options available. Here's a comprehensive guide to help you make the best choice for your household.

Understanding your needs is the first step. Light users with 1-2 devices need 50-70 Mbps for browsing and email. Moderate users with 3-5 devices should consider 100-150 Mbps for HD streaming and video calls.

Heavy users with 6+ devices require 200-300 Mbps for 4K streaming, gaming, and large downloads. Power users need 500 Mbps plus for multiple simultaneous 4K streams and smart home integration.`
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
        },
        {
          type: 'heading',
          content: 'Critical Factors to Consider'
        },
        {
          type: 'text',
          content: `When choosing your internet plan, consider the number of connected devices including smartphones, tablets, laptops, smart TVs, gaming consoles, and IoT devices.

Types of activities matter too. Video conferencing and online gaming require consistent speeds and low latency, while general browsing is more forgiving. Think about how many people will be online simultaneously during peak hours.`
        }
      ]
    },
    {
      id: 3,
      title: 'Broadband Connection Gives More Speed',
      excerpt: 'Discover how broadband technology delivers faster speeds for your home and office.',
      category: 'Technology',
      author: 'Amit Patel',
      date: '2025-11-05',
      readTime: '7 min read',
      thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      images: [
        'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200',
        'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1200'
      ],
      tags: ['Broadband', 'Speed'],
      contentSections: [
        {
          type: 'text',
          content: `Broadband internet has revolutionized how we connect to the digital world. Unlike dial-up connections of the past, broadband provides always-on, high-speed internet access that can handle multiple devices and activities simultaneously.

The term "broadband" refers to high-speed internet access that is always on and faster than traditional dial-up access. Broadband includes several high-speed transmission technologies such as Digital Subscriber Line (DSL), Cable Modem, Fiber, Wireless, Satellite, and Broadband over Powerlines (BPL).`
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800'
        },
        {
          type: 'heading',
          content: 'Benefits of Broadband Connection'
        },
        {
          type: 'text',
          content: `Broadband technology offers numerous advantages including faster download and upload speeds, ability to stream high-definition content, support for multiple connected devices, and improved reliability compared to older connection types.

Modern broadband connections can handle bandwidth-intensive applications like video conferencing, online gaming, and cloud computing with ease.`
        }
      ]
    },
    {
      id: 4,
      title: 'How Can Your Agency Change The World',
      excerpt: 'Learn about the impact of connectivity on global communication and development.',
      category: 'Business',
      author: 'Vikram Singh',
      date: '2025-11-01',
      readTime: '10 min read',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200'
      ],
      tags: ['Business', 'Impact'],
      contentSections: [
        {
          type: 'text',
          content: `In today's interconnected world, telecommunications agencies play a crucial role in shaping how people communicate, work, and live. The impact of reliable, high-speed internet extends far beyond mere convenience.

Access to quality internet services enables remote work, online education, telemedicine, and countless other services that improve quality of life. Telecommunications providers have the power to bridge the digital divide and create opportunities for underserved communities.`
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
        },
        {
          type: 'heading',
          content: 'Creating Social Impact'
        },
        {
          type: 'text',
          content: `By providing affordable, reliable internet access, telecommunications companies can transform communities. Students gain access to educational resources, entrepreneurs can build online businesses, and families can stay connected across distances.

The ripple effects of improved connectivity touch every aspect of modern life, from healthcare to education, from business to entertainment.`
        }
      ]
    },
    {
      id: 5,
      title: 'Securing Your Home Network',
      excerpt: 'Protect your family from cyber threats with these essential security measures.',
      category: 'Security',
      author: 'Neha Deshmukh',
      date: '2025-10-28',
      readTime: '12 min read',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      images: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200'
      ],
      tags: ['Security', 'Privacy'],
      contentSections: [
        {
          type: 'text',
          content: `Cybersecurity starts at home. With the average household now having 10+ connected devices, securing your home network has never been more critical. Follow these essential steps to protect your family and data.

Change default passwords immediately. Never use the default router password. Hackers have databases of default credentials for every router model. Create a strong, unique password with at least 16 characters.`
        },
        {
          type: 'image',
          src: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800'
        },
        {
          type: 'heading',
          content: 'Essential Security Measures'
        },
        {
          type: 'text',
          content: `Enable WPA3 encryption for maximum protection. Use the latest security protocol available on your router. Keep your router firmware updated to patch security vulnerabilities.

Create a guest network for visitors to keep your main network secure. Disable WPS as it can be a security risk despite its convenience.`
        }
      ]
    }
  ];

  const allTags = ['Business', 'Creative', 'Education', 'Internet', 'iPhone', 'Leader', 'Nextbit', 'Phone', 'Web Design'];

  const post = blogPosts.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.name && comment.email && comment.message) {
      const newComment = {
        id: comments.length + 1,
        name: comment.name,
        email: comment.email,
        date: new Date().toISOString().split('T')[0],
        message: comment.message,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random&color=fff`
      };
      setComments([newComment, ...comments]);
      setComment({ name: '', email: '', website: '', message: '' });
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Blog post not found</Typography>
        <Button variant="contained" onClick={() => navigate('/blog')} sx={{ mt: 2 }}>
          Back to Blogs
        </Button>
      </Container>
    );
  }

  const recentPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      {/* Breadcrumb Header */}
      <Box
        sx={{
          bgcolor: '#0a1f44',
          color: 'white',
          py: 8,
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(10, 31, 68, 0.85)'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {post.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <Button
              onClick={() => navigate('/blog')}
              sx={{ color: 'white', textTransform: 'none', p: 0, minWidth: 'auto' }}
            >
              HOME
            </Button>
            <Typography>/</Typography>
            <Typography sx={{ opacity: 0.8 }}>UNCATEGORIZED</Typography>
            <Typography>/</Typography>
            <Typography sx={{ opacity: 0.8, textTransform: 'uppercase' }}>
              {post.title.substring(0, 30)}...
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Column - Main Content */}
          <Grid item xs={12} md={8}>
            {/* Featured Image */}
            <Box sx={{ mb: 4 }}>
              <img
                src={post.images[0]}
                alt={post.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </Box>

            {/* Meta Info */}
            <Box sx={{ display: 'flex', gap: 3, mb: 3, color: '#e91e63', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PersonOutlined fontSize="small" />
                <Typography variant="body2">{post.author}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="body2">{comments.length} comments</Typography>
              </Box>
            </Box>

            {/* Article Content with Embedded Images */}
            <Box sx={{ mb: 6 }}>
              {post.contentSections && post.contentSections.map((section, index) => {
                if (section.type === 'text') {
                  return (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: '#666',
                        mb: 3,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {section.content}
                    </Typography>
                  );
                } else if (section.type === 'heading') {
                  return (
                    <Typography
                      key={index}
                      variant="h5"
                      fontWeight={700}
                      sx={{ color: '#0a1f44', mt: 4, mb: 2 }}
                    >
                      {section.content}
                    </Typography>
                  );
                } else if (section.type === 'image') {
                  return (
                    <Box key={index} sx={{ my: 4 }}>
                      <img
                        src={section.src}
                        alt="Content"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px'
                        }}
                      />
                    </Box>
                  );
                } else if (section.type === 'images-row') {
                  return (
                    <Grid container spacing={2} key={index} sx={{ my: 4 }}>
                      {section.images.map((img, imgIndex) => (
                        <Grid item xs={12} sm={6} key={imgIndex}>
                          <img
                            src={img}
                            alt={`Content ${imgIndex + 1}`}
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: '8px'
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  );
                }
                return null;
              })}
            </Box>

            {/* Tags */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>
                Tags:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: '#f5f5f5',
                      '&:hover': { bgcolor: '#e91e63', color: 'white', cursor: 'pointer' }
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Navigation */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 3,
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',
                mb: 6
              }}
            >
              {parseInt(id) > 1 ? (
                <Button
                  startIcon={<ArrowBackOutlined />}
                  onClick={() => navigate(`/blog/${parseInt(id) - 1}`)}
                  sx={{ color: '#666', textTransform: 'none' }}
                >
                  Previous Post
                </Button>
              ) : (
                <Box />
              )}
              {parseInt(id) < blogPosts.length && (
                <Button
                  endIcon={<ArrowForwardOutlined />}
                  onClick={() => navigate(`/blog/${parseInt(id) + 1}`)}
                  sx={{ color: '#666', textTransform: 'none', ml: 'auto' }}
                >
                  Next Post
                </Button>
              )}
            </Box>

            {/* Comments Section */}
            <Box>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 4, color: '#0a1f44' }}>
                Leave a Reply
              </Typography>

              {/* Existing Comments */}
              {comments.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#333' }}>
                    {comments.length} Comment{comments.length !== 1 ? 's' : ''}
                  </Typography>
                  {comments.map((comm) => (
                    <Paper
                      key={comm.id}
                      elevation={0}
                      sx={{
                        p: 3,
                        mb: 3,
                        bgcolor: '#f9f9f9',
                        borderRadius: 2
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Avatar src={comm.avatar} sx={{ width: 50, height: 50 }} />
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {comm.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {new Date(comm.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                            {comm.message}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              )}

              {/* Comment Form */}
              <Box component="form" onSubmit={handleCommentSubmit}>
                <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
                  Your email address will not be published. Required fields are marked *
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  placeholder="Your comment here..."
                  value={comment.message}
                  onChange={(e) => setComment({ ...comment, message: e.target.value })}
                  required
                  sx={{ mb: 3 }}
                />

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      placeholder="Name *"
                      value={comment.name}
                      onChange={(e) => setComment({ ...comment, name: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      type="email"
                      placeholder="Email *"
                      value={comment.email}
                      onChange={(e) => setComment({ ...comment, email: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      placeholder="Website"
                      value={comment.website}
                      onChange={(e) => setComment({ ...comment, website: e.target.value })}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: '#dc0000',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#b30000'
                    }
                  }}
                >
                  Post Comment
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Search */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2, color: '#0a1f44' }}>
                Search Here
              </Typography>
              <TextField
                fullWidth
                placeholder="Search Here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch}>
                        <SearchOutlined />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Paper>

            {/* Our Services */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: '#0a1f44' }}>
                Our Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#666',
                    textTransform: 'none',
                    '&:hover': { color: '#e91e63' }
                  }}
                >
                  High-Speed Internet
                </Button>
                <Button
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#666',
                    textTransform: 'none',
                    '&:hover': { color: '#e91e63' }
                  }}
                >
                  Cable TV Packages
                </Button>
                <Button
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#666',
                    textTransform: 'none',
                    '&:hover': { color: '#e91e63' }
                  }}
                >
                  Fiber Optic Connection
                </Button>
                <Button
                  sx={{
                    justifyContent: 'flex-start',
                    color: '#666',
                    textTransform: 'none',
                    '&:hover': { color: '#e91e63' }
                  }}
                >
                  Business Solutions
                </Button>
              </Box>
            </Paper>

            {/* Latest Posts */}
            <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: '#0a1f44' }}>
                Latest Post
              </Typography>
              {recentPosts.map((recentPost) => (
                <Card
                  key={recentPost.id}
                  elevation={0}
                  sx={{
                    display: 'flex',
                    mb: 3,
                    bgcolor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                      '& .post-title': {
                        color: '#e91e63'
                      }
                    }
                  }}
                  onClick={() => navigate(`/blog/${recentPost.id}`)}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80, borderRadius: 1 }}
                    image={recentPost.thumbnail}
                    alt={recentPost.title}
                  />
                  <CardContent sx={{ flex: 1, p: 1, pl: 2, '&:last-child': { pb: 1 } }}>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      className="post-title"
                      sx={{
                        color: '#0a1f44',
                        mb: 0.5,
                        transition: 'color 0.3s',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {recentPost.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(recentPost.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric'
                      })}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Paper>

            {/* Tags */}
            <Paper elevation={0} sx={{ p: 3, bgcolor: '#f8f9fa', borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: '#0a1f44' }}>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {allTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{
                      bgcolor: 'white',
                      border: '1px solid #e0e0e0',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: '#e91e63',
                        color: 'white',
                        borderColor: '#e91e63'
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetail;