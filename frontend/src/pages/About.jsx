import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Paper,
  Avatar,
  Button,
  Divider,
  Fade,
  Zoom,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  RocketLaunchOutlined,
  TvOutlined,
  HandshakeOutlined,
  PublicOutlined,
  PeopleOutlined,
  SentimentSatisfiedAltOutlined,
  SpeedOutlined,
  SecurityOutlined,
  SupportAgentOutlined,
  EmojiEventsOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  EmailOutlined,
  TrendingUpOutlined,
  DevicesOutlined,
  TimerOutlined,
  StarOutlined,
  VerifiedOutlined,
  LocalOfferOutlined
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);

  const whyChooseUs = [
    {
      icon: <RocketLaunchOutlined />,
      title: 'High-Speed Internet',
      description: 'Perfect for streaming, gaming, and remote work with fiber optic technology.',
      color: '#2196f3',
      bgColor: '#e3f2fd'
    },
    {
      icon: <TvOutlined />,
      title: 'Affordable Cable',
      description: 'Entertainment for the whole family at fair prices with 500+ channels.',
      color: '#4caf50',
      bgColor: '#e8f5e9'
    },
    {
      icon: <HandshakeOutlined />,
      title: 'Customer First',
      description: '24/7 support to keep you connected without worries or interruptions.',
      color: '#ff9800',
      bgColor: '#fff3e0'
    },
    {
      icon: <PublicOutlined />,
      title: 'Trusted Service',
      description: 'Reliable connectivity with 99.9% uptime guarantee and consistent quality.',
      color: '#9c27b0',
      bgColor: '#f3e5f5'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Kulkarni',
      role: 'Homemaker',
      location: 'Mahim, Mumbai',
      rating: 5,
      text: 'The internet speed is amazing and the support team is always available. Best service provider in town! My kids can attend online classes without any buffering.',
      avatar: 'PK',
      color: '#e91e63'
    },
    {
      name: 'Rajesh Patil',
      role: 'Business Owner',
      location: 'Dadar, Mumbai',
      rating: 5,
      text: 'Affordable packages and reliable connection. My family enjoys both internet and cable without interruptions. The installation was professional and quick.',
      avatar: 'RP',
      color: '#3f51b5'
    },
    {
      name: 'Neha Sharma',
      role: 'Software Developer',
      location: 'Bandra, Mumbai',
      rating: 5,
      text: 'They really care about customers. Installation was quick and hassle-free. The upload and download speeds are exactly as promised. Perfect for work from home!',
      avatar: 'NS',
      color: '#00bcd4'
    },
    {
      name: 'Amit Deshmukh',
      role: 'Student',
      location: 'Worli, Mumbai',
      rating: 5,
      text: 'Great service at an affordable price! The customer support team is very responsive and helped me choose the right plan for my studies and entertainment needs.',
      avatar: 'AD',
      color: '#4caf50'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Customers', icon: <PeopleOutlined /> },
    { value: '15+', label: 'Years of Service', icon: <EmojiEventsOutlined /> },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <SecurityOutlined /> },
    { value: '24/7', label: 'Customer Support', icon: <SupportAgentOutlined /> }
  ];

  const coreValues = [
    {
      title: 'Reliability',
      description: 'Consistent service you can count on every day',
      icon: <VerifiedOutlined />,
      color: '#2196f3'
    },
    {
      title: 'Affordability',
      description: 'Quality service at competitive prices',
      icon: <LocalOfferOutlined />,
      color: '#4caf50'
    },
    {
      title: 'Innovation',
      description: 'Latest technology for the best experience',
      icon: <TrendingUpOutlined />,
      color: '#ff9800'
    },
    {
      title: 'Customer Care',
      description: 'Your satisfaction is our top priority',
      icon: <HandshakeOutlined />,
      color: '#e91e63'
    }
  ];

  const achievements = [
    { label: 'Internet Speed', value: 95, color: '#2196f3' },
    { label: 'Customer Satisfaction', value: 98, color: '#4caf50' },
    { label: 'Service Reliability', value: 99, color: '#ff9800' },
    { label: 'Support Response', value: 96, color: '#9c27b0' }
  ];

  const timeline = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to connect Mahim community' },
    { year: '2012', title: 'Fiber Optic Launch', description: 'Introduced high-speed fiber internet' },
    { year: '2016', title: '5000+ Customers', description: 'Reached milestone of serving 5000 homes' },
    { year: '2020', title: 'HD Cable Services', description: 'Launched premium HD cable packages' },
    { year: '2025', title: '10,000+ Customers', description: 'Serving over 10,000 satisfied customers' }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Chip 
                label="ESTABLISHED 2008" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 600,
                  mb: 2
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  mb: 2
                }}
              >
                About Radha Cable Net
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  maxWidth: 800, 
                  mx: 'auto',
                  fontWeight: 400,
                  opacity: 0.95,
                  fontSize: { xs: '1.1rem', md: '1.5rem' }
                }}
              >
                Your trusted partner in fast, reliable, and affordable connectivity
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Stats Section */}
        <Zoom in timeout={1000}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              mb: 8, 
              mt: -6,
              position: 'relative',
              zIndex: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box textAlign="center">
                    <Box sx={{ color: 'primary.main', mb: 1 }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: 40 } })}
                    </Box>
                    <Typography variant="h4" fontWeight={700} color="primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Zoom>

        {/* Our Story Section */}
        <Fade in timeout={1200}>
          <Grid container spacing={6} mb={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 400,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <Box textAlign="center" sx={{ color: 'white', p: 4 }}>
                  <PublicOutlined sx={{ fontSize: 100, mb: 2, opacity: 0.9 }} />
                  <Typography variant="h4" fontWeight={600}>
                    Our Story
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
                    Connecting Communities Since 2008
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={700} gutterBottom color="primary">
                Our Story
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Established with a vision to connect our community, Radha Cable Net has been 
                providing high-speed internet and affordable cable TV services to households 
                and businesses across Mumbai since 2008.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
                From humble beginnings in Mahim, we have grown to become a trusted name in 
                digital connectivity, serving over 10,000 satisfied customers. Our commitment 
                to quality service and customer satisfaction has made us the preferred choice 
                for internet and cable services in the region.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  icon={<CheckCircleOutlined />} 
                  label="ISO Certified" 
                  sx={{ mr: 1, mb: 1 }}
                  color="primary"
                  variant="outlined"
                />
                <Chip 
                  icon={<CheckCircleOutlined />} 
                  label="Award Winning Service" 
                  sx={{ mr: 1, mb: 1 }}
                  color="success"
                  variant="outlined"
                />
                <Chip 
                  icon={<CheckCircleOutlined />} 
                  label="Community Trusted" 
                  sx={{ mb: 1 }}
                  color="info"
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </Fade>

        {/* Mission & Vision */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Zoom in timeout={1400}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    <EmojiEventsOutlined sx={{ fontSize: 35, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    To deliver seamless connectivity through internet and cable services that 
                    empower families, students, and businesses to thrive in today's digital 
                    world. We strive to make quality connectivity accessible and affordable 
                    for everyone.
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
          <Grid item xs={12} md={6}>
            <Zoom in timeout={1600}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'success.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      bgcolor: 'success.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    <StarOutlined sx={{ fontSize: 35, color: 'success.main' }} />
                  </Box>
                  <Typography variant="h4" fontWeight={700} gutterBottom color="success.main">
                    Our Vision
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    To be recognized as the most reliable and customer-focused internet and 
                    cable provider in Mumbai, expanding access to high-speed connectivity for 
                    everyone while maintaining our commitment to exceptional service and 
                    community engagement.
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        </Grid>

        {/* Why Choose Us */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            Why Choose Radha Cable Net?
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={5}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            We're more than just an internet and cable provider. We're your partner in staying connected.
          </Typography>
          <Grid container spacing={3}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Zoom in timeout={1800 + index * 100}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: 6,
                        borderColor: item.color
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          bgcolor: item.bgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px',
                          color: item.color,
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'rotate(360deg)'
                          }
                        }}
                      >
                        {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
                      </Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Core Values */}
        <Paper elevation={0} sx={{ p: 5, mb: 8, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={5}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box textAlign="center">
                  <Box sx={{ mb: 2 }}>
                    {React.cloneElement(value.icon, { 
                      sx: { 
                        fontSize: 50,
                        color: 'white',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                      } 
                    })}
                  </Box>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Performance Metrics */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={5}>
            Our Performance
          </Typography>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Fade in timeout={2000 + index * 200}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight={600}>
                        {achievement.label}
                      </Typography>
                      <Typography variant="body1" fontWeight={700} color={achievement.color}>
                        {achievement.value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={achievement.value}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: achievement.color,
                          borderRadius: 5
                        }
                      }}
                    />
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={5}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {timeline.map((item, index) => (
              <Fade in timeout={2200 + index * 200} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    mb: 4,
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ flex: 1 }} />
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: 3,
                      zIndex: 1
                    }}
                  >
                    {item.year}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        ml: index % 2 === 0 ? 3 : 0,
                        mr: index % 2 === 0 ? 0 : 3,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Fade>
            ))}
          </Box>
        </Box>

        {/* Testimonials */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            What Our Customers Say
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={5}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Don't just take our word for it. Here's what our satisfied customers have to say about us.
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Zoom in timeout={2400 + index * 100}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                        borderColor: testimonial.color
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            bgcolor: testimonial.color,
                            mr: 2,
                            fontSize: '1.5rem',
                            fontWeight: 700
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {testimonial.role} • {testimonial.location}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        "{testimonial.text}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Fade in timeout={2800}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: 3
            }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Get Connected With Us Today
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.95 }}>
              Ready to experience seamless connectivity? Reach out to Radha Cable Net today.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneOutlined />}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
                href="tel:+918369108915"
              >
                Call: +91 8369108915
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailOutlined />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }
                }}
                href="mailto:radhacablenet1@gmail.com"
              >
                Email Us
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;