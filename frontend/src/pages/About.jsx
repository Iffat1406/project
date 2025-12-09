import React, { useState, useEffect, useRef } from 'react';
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
import rdne from "../../public/images/rdne.jpg";
import CustomerFeedback from "../components/CustomerFeedback";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  
  // Stats animation state
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    years: 0,
    uptime: 0,
    support: 0
  });

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

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible]);

  // Animate numbers when stats become visible
  useEffect(() => {
    if (!isStatsVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        customers: Math.floor(10000 * progress),
        years: Math.floor(15 * progress),
        uptime: (99.9 * progress).toFixed(1),
        support: currentStep <= steps / 2 ? 0 : 24 // Show 24/7 halfway through
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          customers: 10000,
          years: 15,
          uptime: 99.9,
          support: 24
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

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

        {/* Our Story, Mission & Vision - Tabbed Section */}
        <Fade in timeout={1200}>
          <Grid container spacing={6} mb={12} alignItems="center">
            {/* Right Side - Tabbed Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Box 
                  sx={{ 
                    height: 4, 
                    width: 60, 
                    bgcolor: 'primary.main', 
                    mb: 3 
                  }} 
                />
                <Typography 
                  variant="h3" 
                  fontWeight={700} 
                  gutterBottom
                  sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
                >
                  Leading Internet & Cable Provider in Mumbai
                </Typography>
              </Box>

              {/* Tab Buttons */}
              <Box sx={{ display: 'flex', gap: 0, mb: 3, borderBottom: '2px solid #e0e0e0' }}>
                <Button
                  onClick={() => setActiveTab(0)}
                  sx={{
                    bgcolor: activeTab === 0 ? 'transparent' : 'transparent',
                    color: activeTab === 0 ? '#e91e63' : '#666',
                    px: 3,
                    py: 1.5,
                    borderRadius: '8px 8px 0 0',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderBottom: activeTab === 0 ? '3px solid #e91e63' : 'none',
                    '&:hover': {
                      bgcolor: '#f5f5f5'
                    }
                  }}
                >
                  Who We Are
                </Button>
                <Button
                  onClick={() => setActiveTab(1)}
                  sx={{
                    bgcolor: activeTab === 1 ? 'transparent' : 'transparent',
                    color: activeTab === 1 ? '#e91e63' : '#666',
                    px: 3,
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderBottom: activeTab === 1 ? '3px solid #e91e63' : 'none',
                    '&:hover': {
                      bgcolor: '#f5f5f5'
                    }
                  }}
                >
                  Our Mission
                </Button>
                <Button
                  onClick={() => setActiveTab(2)}
                  sx={{
                    bgcolor: activeTab === 2 ? 'transparent' : 'transparent',
                    color: activeTab === 2 ? '#e91e63' : '#666',
                    px: 3,
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderBottom: activeTab === 2 ? '3px solid #e91e63' : 'none',
                    '&:hover': {
                      bgcolor: '#f5f5f5'
                    }
                  }}
                >
                  Our Vision
                </Button>
              </Box>

              {/* Tab Content */}
              <Box sx={{ minHeight: 250 }}>
                {activeTab === 0 && (
                  <Fade in timeout={400}>
                    <Box>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        Radha Cable Net was established in 2008 with a vision to connect communities across Mumbai with reliable, high-speed internet and affordable cable TV services.
                      </Typography>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        Starting from Mahim, we've grown into one of Mumbai's most trusted connectivity providers, serving over 10,000 satisfied customers. Our commitment to quality service, customer satisfaction, and community engagement has made us the preferred choice for digital connectivity in the region.
                      </Typography>
                    </Box>
                  </Fade>
                )}

                {activeTab === 1 && (
                  <Fade in timeout={400}>
                    <Box>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        To deliver seamless connectivity through internet and cable services that empower families, students, and businesses to thrive in today's digital world.
                      </Typography>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        We strive to make quality connectivity accessible and affordable for everyone, ensuring that our customers have the tools they need to stay connected, entertained, and productive. Our mission is built on innovation, reliability, and exceptional customer service.
                      </Typography>
                    </Box>
                  </Fade>
                )}

                {activeTab === 2 && (
                  <Fade in timeout={400}>
                    <Box>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        To be recognized as the most reliable and customer-focused internet and cable provider in Mumbai, setting the standard for quality connectivity across the region.
                      </Typography>
                      <Typography 
                        variant="body1" 
                        paragraph 
                        color="text.secondary" 
                        sx={{ lineHeight: 1.9, fontSize: '1.05rem' }}
                      >
                        We aim to expand access to high-speed connectivity for everyone while maintaining our commitment to exceptional service, community engagement, and technological innovation. Our vision is to be the first choice for families and businesses seeking dependable digital solutions.
                      </Typography>
                    </Box>
                  </Fade>
                )}
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>

      {/* Stats Section - Full Width Red Background with Animation */}
      <Box 
        ref={statsRef}
        sx={{ 
          width: '100%',
          bgcolor: '#d32f2f',
          py: { xs: 6, md: 8 },
          mb: 12
        }}
      >
        <Container maxWidth="lg">
          
          <Grid 
            container 
            spacing={4} 
            justifyContent="space-between"
            alignItems="center"
          >
            {[
              { value: `${animatedStats.customers.toLocaleString()}+`, label: 'Happy Customers', icon: <PeopleOutlined /> },
              { value: `${animatedStats.years}+`, label: 'Years of Service', icon: <EmojiEventsOutlined /> },
              { value: `${animatedStats.uptime}%`, label: 'Uptime Guarantee', icon: <SecurityOutlined /> },
              { value: animatedStats.support > 0 ? '24/7' : '0', label: 'Customer Support', icon: <SupportAgentOutlined /> }
            ].map((stat, index) => (
              
              <Grid item xs={6} md={3} key={index}>
                <Zoom in={isStatsVisible} timeout={500 + index * 200}>
                  <Box textAlign="center" sx={{ pb: 2 }}>
                    
                    <Box sx={{ color: 'white', mb: 2 }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: { xs: 40, md: 50 } } })}
                    </Box>

                    <Typography variant="h3" fontWeight={700} sx={{ color: 'white', mb: 1 }}>
                      {stat.value}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255,255,255,0.95)', 
                        fontWeight: 500,
                        mt: 1.5
                      }}
                    >
                      {stat.label}
                    </Typography>

                  </Box>
                </Zoom>
              </Grid>

            ))}
          </Grid>

        </Container>
      </Box>

      {/* Why Choose Us - Full Width Section with Background */}
      <Box 
        sx={{ 
          width: '100%',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
          position: 'relative',
          py: 10,
          mb: 12,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(233, 30, 99, 0.08) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box mb={6}>
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

            {/* Horizontal Scroll Row */}
            <Box
              sx={{
                display: "flex",
                gap: 7,
                overflowX: "auto",
                pb: 2,
                "&::-webkit-scrollbar": { height: 8 },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#bdbdbd", borderRadius: 4 }
              }}
            >
            {whyChooseUs.map((item, index) => (
              <Zoom in timeout={1800 + index * 100} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    minWidth: 260,
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    bgcolor: 'white',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: 8,
                      borderColor: item.color,
                      bgcolor: 'white'
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
            ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>

        {/* Core Values */}
        <Box mb={12}>
          <Grid container spacing={4} alignItems="center">
            
            {/* LEFT SIDE – VALUES LIST */}
            <Grid item xs={12} md={6}>
              <Box>
                {coreValues.map((value, index) => (
                  <Card
                    key={index}
                    elevation={3}
                    sx={{
                      mb: 3,
                      p: 3,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 2
                    }}
                  >
                    {React.cloneElement(value.icon, { 
                      sx: { fontSize: 40, color: "primary.main" } 
                    })}

                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* RIGHT SIDE – IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={rdne}
                alt="Core Values Visual"
                sx={{
                  width: "100%",
                  maxWidth: 380,
                  height: "auto",
                  borderRadius: 3,
                  boxShadow: 4,
                  mx: "auto",
                  display: "block"
                }}
              />
            </Grid>

          </Grid>
        </Box>  

      </Container>

      {/* Customer Feedback - Now Full Width Outside Container */}
      <CustomerFeedback />
    </Box>
  );
};

export default About;