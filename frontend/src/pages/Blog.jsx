import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  Divider,
  Pagination
} from '@mui/material';
import {
  CloseOutlined,
  PersonOutlined,
  AccessTimeOutlined
} from '@mui/icons-material';

const Blog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Boost Your Home Wi-Fi Speed',
      excerpt: 'Is your internet running slow? Learn these expert tips to maximize your Wi-Fi performance and get the speed you deserve.',
      content: 'Having slow internet can be frustrating, especially when you are working from home or streaming your favorite shows. Here are 10 proven ways to boost your Wi-Fi speed:\n\n1. Position Your Router Strategically - Place your router in a central location, elevated from the floor, away from walls and metal objects.\n\n2. Update Router Firmware - Regularly check for firmware updates from your router manufacturer.\n\n3. Change Wi-Fi Channel - Switch to less congested channels (1, 6, or 11 for 2.4GHz).\n\n4. Use 5GHz Band - For devices that support it, the 5GHz band offers faster speeds with less interference.\n\n5. Secure Your Network - Use WPA3 or WPA2 encryption to prevent unauthorized access.\n\n6. Limit Bandwidth-Heavy Applications - Schedule large downloads during off-peak hours.\n\n7. Upgrade Your Equipment - Modern routers with Wi-Fi 6 technology offer significant improvements.\n\n8. Use Ethernet for Gaming and Streaming - Wired connections provide more stable speeds.\n\n9. Remove Obstructions - Keep the router away from thick walls, aquariums, and mirrors.\n\n10. Contact Your ISP - If issues persist, Radha Cable Net support team can help diagnose and resolve problems.',
      category: 'internet',
      author: 'Rajesh Kumar',
      date: '2025-11-10',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
      tags: ['Wi-Fi', 'Speed', 'Tips', 'Home Network']
    },
    {
      id: 2,
      title: 'Choosing the Right Internet Plan for Your Family',
      excerpt: 'Not sure which internet speed you need? This comprehensive guide helps you select the perfect plan based on your usage.',
      content: 'Selecting the right internet plan can be confusing with so many options available. Here is how to choose:\n\nUnderstanding Your Needs:\n- Light Users (1-2 devices): 50-70 Mbps is sufficient for browsing and email\n- Moderate Users (3-5 devices): 100-150 Mbps for HD streaming and video calls\n- Heavy Users (6+ devices): 200-300 Mbps for 4K streaming, gaming, and large downloads\n- Power Users: 500 Mbps plus for multiple 4K streams, gaming, and smart home devices\n\nConsider These Factors:\n1. Number of connected devices\n2. Types of activities (streaming, gaming, work)\n3. Simultaneous users\n4. Future needs and scalability\n\nRadha Cable Net Recommendation:\nWe suggest starting with our 100 Mbps plan for most families. You can always upgrade if needed, and our team provides free consultation to help you choose.',
      category: 'internet',
      author: 'Priya Sharma',
      date: '2025-11-08',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      tags: ['Plans', 'Guide', 'Family', 'Internet Speed']
    },
    {
      id: 3,
      title: 'Top 10 Cable TV Channels for Indian Families in 2025',
      excerpt: 'Discover the most popular and must-have channels that every Indian household should consider in their cable package.',
      content: 'Looking for the best channels for your family? Here are the top 10 must-have channels in 2025:\n\nEntertainment:\n1. Star Plus - Leading Hindi entertainment\n2. Colors TV - Popular shows and reality TV\n3. Sony Entertainment - Quality drama and comedy\n\nMovies:\n4. Star Movies - Latest Hollywood releases\n5. Sony Max - Bollywood blockbusters\n\nNews:\n6. NDTV 24x7 - Trusted news source\n7. Aaj Tak - Hindi news leader\n\nSports:\n8. Star Sports - Live cricket and sports\n9. Sony Sports - Multiple sports coverage\n\nKids:\n10. Cartoon Network - Quality kids entertainment\n\nPro Tip: Our HD Premium Package includes all these channels and more at an affordable price of Rs 735 per month.',
      category: 'cable',
      author: 'Amit Patel',
      date: '2025-11-05',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      tags: ['Cable TV', 'Channels', 'Entertainment', 'Guide']
    },
    {
      id: 4,
      title: 'Understanding Fiber Optic Internet: Why It Matters',
      excerpt: 'Learn about fiber optic technology and why it is becoming the gold standard for internet connectivity.',
      content: 'Fiber optic internet is revolutionizing how we connect. Here is everything you need to know:\n\nWhat is Fiber Optic?\nFiber optic cables use light signals instead of electrical signals to transmit data, offering several advantages.\n\nBenefits:\n- Speed: Up to 1 Gbps or higher\n- Reliability: Less prone to outages and interference\n- Consistency: Same upload and download speeds\n- Future-proof: Can handle increasing bandwidth demands\n- Low latency: Perfect for gaming and video calls\n\nFiber vs Traditional Cable:\n- Fiber: 1000 Mbps typical\n- Cable: 100-300 Mbps typical\n- DSL: 10-50 Mbps typical\n\nRadha Cable Net Fiber Network:\nWe have invested heavily in fiber infrastructure across Mumbai, bringing cutting-edge technology to your doorstep. Our fiber plans start at just Rs 2,550 for 100 Mbps.\n\nInstallation:\nProfessional installation takes 2-4 hours, and our technicians ensure optimal placement for best performance.',
      category: 'technology',
      author: 'Vikram Singh',
      date: '2025-11-01',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      tags: ['Fiber Optic', 'Technology', 'Speed', 'Infrastructure']
    },
    {
      id: 5,
      title: 'Securing Your Home Network: Essential Steps',
      excerpt: 'Protect your family from cyber threats with these simple but effective home network security measures.',
      content: 'Cybersecurity starts at home. Follow these essential steps to secure your network:\n\n1. Change Default Passwords\nNever use the default router password. Create a strong, unique password with at least 12 characters.\n\n2. Enable WPA3 Encryption\nUse the latest WPA3 security protocol. If your router does not support it, use WPA2 at minimum.\n\n3. Update Firmware Regularly\nKeep your router firmware up to date to patch security vulnerabilities.\n\n4. Create a Guest Network\nSet up a separate network for visitors to keep your main network secure.\n\n5. Disable WPS\nWhile convenient, WPS can be a security risk. Disable it in router settings.\n\n6. Use Strong Wi-Fi Password\nCreate a complex password with uppercase, lowercase, numbers, and symbols.\n\n7. Enable Firewall\nMost routers have built-in firewalls. Make sure it is enabled.\n\n8. Monitor Connected Devices\nRegularly check which devices are connected to your network.\n\n9. Disable Remote Management\nUnless necessary, turn off remote access to your router.\n\n10. Use VPN\nConsider using a VPN for added privacy and security.\n\nRadha Cable Net Support:\nOur technical team can help you implement these security measures during installation or at any time.',
      category: 'security',
      author: 'Neha Deshmukh',
      date: '2025-10-28',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      tags: ['Security', 'Privacy', 'Cybersecurity', 'Protection']
    },
    {
      id: 6,
      title: 'Radha Cable Net Expands to 5 New Areas in Mumbai',
      excerpt: 'We are excited to announce our expansion to Bandra, Worli, Lower Parel, Parel, and Matunga with our high-speed services.',
      content: 'Big news for Mumbai residents! Radha Cable Net is expanding its coverage to serve more communities:\n\nNew Service Areas:\n1. Bandra West and East - Now offering 100-500 Mbps plans\n2. Worli - Full fiber optic coverage available\n3. Lower Parel - Business and residential plans\n4. Parel - High-speed internet and HD cable\n5. Matunga - Complete service portfolio\n\nSpecial Launch Offers:\n- 20 percent discount on annual plans\n- Free installation (worth Rs 1,500)\n- Free router upgrade\n- 1 month free for early subscribers\n\nWhy This Expansion?\nWith over 10,000 satisfied customers in Mahim and Dadar, we have been receiving countless requests to expand our services. We listened!\n\nWhat to Expect:\n- Same reliable 99.9 percent uptime\n- 24/7 customer support\n- Competitive pricing\n- Professional installation\n\nHow to Apply:\nVisit our website or call +91 8369108915 to check availability in your building.\n\nComing Soon:\nWe are planning further expansion to Andheri and Juhu by Q2 2026.',
      category: 'company',
      author: 'Radha Cable Net Team',
      date: '2025-10-25',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      tags: ['Expansion', 'Mumbai', 'News', 'Service Areas']
    },
    {
      id: 7,
      title: 'Work From Home: Optimizing Your Internet Setup',
      excerpt: 'Essential tips for remote workers to ensure stable, fast internet connectivity for video calls and productivity.',
      content: 'Working from home requires reliable internet. Here is how to optimize your setup:\n\nEssential Requirements:\n- Minimum 50 Mbps for basic work\n- 100 Mbps recommended for video calls\n- 150 plus Mbps for multiple users\n\nSetup Tips:\n1. Dedicated Workspace - Position near router or use ethernet\n2. Video Call Optimization - Use wired connection when possible\n3. Background Apps - Close unnecessary applications\n4. Quality Router - Invest in a good quality router\n5. Backup Plan - Have mobile hotspot as backup\n\nRecommended Plans:\n- Solo professional: 100 Mbps\n- Couple WFH: 150 Mbps\n- Family with kids online classes: 200 Mbps\n\nTroubleshooting Common Issues:\n- Buffering during calls? Check bandwidth usage\n- Slow uploads? Consider higher-tier plan\n- Frequent disconnections? Contact our support\n\nRadha Cable Net offers specialized work-from-home plans with priority support.',
      category: 'internet',
      author: 'Suresh Rao',
      date: '2025-10-20',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
      tags: ['Work From Home', 'Productivity', 'Remote Work', 'Tips']
    },
    {
      id: 8,
      title: 'OTT vs Cable TV: Which is Right for You?',
      excerpt: 'Compare streaming services with traditional cable TV to make an informed decision for your entertainment needs.',
      content: 'The entertainment landscape has changed. Let us compare:\n\nCable TV Advantages:\n- No buffering or internet dependency\n- Live sports and news\n- Channel surfing experience\n- Family-friendly packages\n- No multiple subscriptions needed\n- Regional content easily accessible\n\nOTT Advantages:\n- On-demand content\n- Original programming\n- Watch anywhere\n- No ads (mostly)\n- Personalized recommendations\n\nCost Comparison:\n- Cable TV: Rs 325-735 per month (Radha Cable Net)\n- Multiple OTT: Rs 500-1500 per month\n- Combined approach: Best value\n\nOur Recommendation:\nGet basic cable (Rs 325-440) for live content plus 1-2 OTT subscriptions for on-demand. This gives you live sports and news, original shows, regional content, and movie variety.\n\nBest of Both Worlds:\nSubscribe to our internet plus cable bundle and save 15 percent while enjoying unlimited streaming plus traditional TV.',
      category: 'cable',
      author: 'Kavita Joshi',
      date: '2025-10-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800',
      tags: ['OTT', 'Cable TV', 'Comparison', 'Streaming']
    },
    {
      id: 9,
      title: 'Smart Home Devices: Internet Requirements Guide',
      excerpt: 'Planning a smart home? Learn about bandwidth requirements and how to choose the right internet plan.',
      content: 'Smart homes need smart internet planning. Here is what you need to know:\n\nTypical Device Requirements:\n- Smart speakers: 1-2 Mbps\n- Security cameras: 2-4 Mbps each\n- Smart TVs: 5-25 Mbps (depending on quality)\n- Smart thermostats: less than 1 Mbps\n- Smart lights: less than 1 Mbps\n\nSample Smart Home Calculation:\n2 cameras (8 Mbps) plus 2 smart TVs (20 Mbps) plus 4 phones (16 Mbps) plus laptop (10 Mbps) plus smart devices (5 Mbps) equals 59 Mbps minimum\n\nRecommended: 100 Mbps for comfortable smart home operation\n\nRouter Considerations:\n- Dual-band capability\n- Support for 20 plus devices\n- Strong coverage\n- Quality of Service (QoS) features\n\nSecurity Tips:\n- Separate IoT network\n- Regular firmware updates\n- Strong passwords\n- Disable unused features\n\nRadha Cable Net IoT-Ready Plans:\nOur 150 Mbps and higher plans are optimized for smart homes with dedicated support for IoT setup.',
      category: 'technology',
      author: 'Arjun Mehta',
      date: '2025-10-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      tags: ['Smart Home', 'IoT', 'Bandwidth', 'Planning']
    }
  ];

  const handleOpenDialog = (post) => {
    setSelectedPost(post);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPost(null);
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
                  onClick={() => handleOpenDialog(post)}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={post.image}
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

      {/* Dialog for Full Post */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        {selectedPost && (
          <>
            <DialogTitle sx={{ position: 'relative', p: 0 }}>
              <CardMedia
                component="img"
                height="300"
                image={selectedPost.image}
                alt={selectedPost.title}
              />
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  bgcolor: 'white',
                  '&:hover': { bgcolor: 'grey.200' }
                }}
              >
                <CloseOutlined />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                <Chip
                  label={selectedPost.category}
                  size="small"
                  sx={{ bgcolor: '#000', color: 'white' }}
                />
                {selectedPost.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" variant="outlined" />
                ))}
              </Box>

              <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: '#0a1f44' }}>
                {selectedPost.title}
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, mb: 3, color: 'text.secondary', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <PersonOutlined fontSize="small" />
                  <Typography variant="body2">{selectedPost.author}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeOutlined fontSize="small" />
                  <Typography variant="body2">{selectedPost.date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeOutlined fontSize="small" />
                  <Typography variant="body2">{selectedPost.readTime}</Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line'
                }}
              >
                {selectedPost.content}
              </Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3, bgcolor: 'grey.50' }}>
              <Button onClick={handleCloseDialog} variant="contained" sx={{ bgcolor: '#0a1f44' }}>
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Blog;