import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  Fade,
  Zoom,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  WifiOutlined,
  CheckCircleOutlined,
  SpeedOutlined,
  DevicesOutlined,
  SupportAgentOutlined,
  LocalOfferOutlined,
  CloseOutlined,
  WhatsApp,
  PhoneOutlined,
  TrendingUpOutlined,
  SecurityOutlined,
  CloudDownloadOutlined,
  ExpandMore,
  PeopleOutlined,
  EmojiEventsOutlined
} from '@mui/icons-material';

const InternetPlans = () => {
  const [duration, setDuration] = useState('360D');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

   // Stats animation state
    const statsRef = useRef(null);
    const [isStatsVisible, setIsStatsVisible] = useState(false);
    const [animatedStats, setAnimatedStats] = useState({
      customers: 0,
      years: 0,
      uptime: 0,
      support: 0
    });

  const plans = [
    {
      speed: '50',
      name: 'Basic',
      durations: {
        '90D': { price: 1500, monthly: 500 },
        '180D': { price: 3000, monthly: 500 },
        '360D': { price: 5000, monthly: 417, savings: 1000 }
      },
      features: ['Unlimited Data', 'Basic Speed', '1 Device', 'Email Support'],
      color: '#2196f3'
    },
    {
      speed: '70',
      name: 'Standard',
      durations: {
        '90D': { price: 1950, monthly: 650 },
        '180D': { price: 3900, monthly: 650 },
        '360D': { price: 6500, monthly: 542, savings: 1300 }
      },
      features: ['Unlimited Data', 'Good for HD Streaming', '2-3 Devices', 'Priority Support'],
      color: '#4caf50'
    },
    {
      speed: '100',
      name: 'Premium',
      popular: true,
      durations: {
        '90D': { price: 2550, monthly: 850 },
        '180D': { price: 5100, monthly: 850 },
        '360D': { price: 8500, monthly: 708, savings: 1700 }
      },
      features: ['Unlimited Data', 'Full HD Streaming', '4-5 Devices', '24/7 Support', 'Free Router'],
      color: '#ff9800'
    },
    {
      speed: '150',
      name: 'Pro',
      durations: {
        '90D': { price: 3000, monthly: 1000 },
        '180D': { price: 6000, monthly: 1000 },
        '360D': { price: 10000, monthly: 833, savings: 2000 }
      },
      features: ['Unlimited Data', '4K Streaming', '6-8 Devices', '24/7 Support', 'Free Router'],
      color: '#9c27b0'
    },
    {
      speed: '200',
      name: 'Ultra',
      durations: {
        '90D': { price: 3900, monthly: 1300 },
        '180D': { price: 7800, monthly: 1300 },
        '360D': { price: 13000, monthly: 1083, savings: 2600 }
      },
      features: ['Unlimited Data', 'Ultra HD 4K', '10+ Devices', '24/7 Priority Support', 'Free Premium Router'],
      color: '#f44336'
    },
    {
      speed: '300',
      name: 'Gigabit',
      popular: true,
      durations: {
        '90D': { price: 4500, monthly: 1500 },
        '180D': { price: 9000, monthly: 1500 },
        '360D': { price: 15000, monthly: 1250, savings: 3000 }
      },
      features: ['Unlimited Data', '8K Streaming Ready', 'Unlimited Devices', 'Dedicated Support', 'Premium Router', 'Static IP Available'],
      color: '#00bcd4'
    },
    {
      speed: '500',
      name: 'Enterprise',
      durations: {
        '90D': { price: 6000, monthly: 2000 },
        '180D': { price: 12000, monthly: 2000 },
        '360D': { price: 20000, monthly: 1667, savings: 4000 }
      },
      features: ['Unlimited Data', 'Maximum Speed', 'Unlimited Devices', 'VIP Support', 'Enterprise Router', 'Static IP Included', 'Free Installation'],
      color: '#673ab7'
    }
  ];

  // FAQ DATA
  const faqs = [
    {
      question: 'What is the installation process for a new connection?',
      answer: 'Installation is simple and quick! Our technical team will visit your location, set up the fiber connection, configure the router, and test the internet speed. The entire process typically takes 2-3 hours. You can schedule an appointment through our website or by calling our support team.'
    },
    {
      question: 'Do you offer any contract-free plans?',
      answer: 'Yes! All our plans are completely contract-free. You can upgrade, downgrade, or cancel your plan anytime without any penalty or hidden charges. We believe in providing flexibility and transparency to our customers.'
    },
    {
      question: 'What speeds can I expect with each plan?',
      answer: 'Our speeds range from 50 Mbps (Basic) to 500 Mbps (Enterprise). The actual speed you experience depends on your device, network conditions, and usage patterns. We guarantee minimum speeds during peak hours with our priority support plans.'
    },
    {
      question: 'How many devices can I connect simultaneously?',
      answer: 'This depends on your plan. Basic supports 1 device, Standard supports 2-3 devices, Premium supports 4-5 devices, and our higher tier plans support 6+ or unlimited devices. You can also purchase additional device licenses if needed.'
    },
    {
      question: 'Is customer support available 24/7?',
      answer: 'Yes! Premium, Pro, Ultra, Gigabit, and Enterprise plans include 24/7 customer support via phone, email, and chat. Our support team is trained to handle technical issues quickly and efficiently. Basic and Standard plans include email support with response times within 24 hours.'
    },
    {
      question: 'What is your refund or cancellation policy?',
      answer: 'We offer a 7-day money-back guarantee if you are not satisfied with our service. After that, you can cancel anytime without penalties. If you cancel within a month, you get a prorated refund for the unused period. No hidden charges or cancellation fees apply.'
    },
    {
      question: 'Do you provide a modem/router with the connection?',
      answer: 'Yes! Premium and higher plans include a free router. For Basic and Standard plans, you can purchase a router at a discounted price or use your own compatible device. Our technical team will help you set it up during installation.'
    },
    {
      question: 'What should I do if I experience slow speeds?',
      answer: 'First, restart your router by unplugging it for 30 seconds. Check if multiple devices are consuming bandwidth. Our app allows you to monitor real-time speeds and device usage. If speeds are consistently below your plan, contact our support team for a free speed audit and optimization.'
    }
  ];

  const benefits = [
    { 
      icon: <SpeedOutlined />, 
      title: 'Lightning Fast', 
      desc: 'Fiber optic technology for maximum speed',
      color: '#2196f3',
      points: [
        'Speeds up to 500 Mbps',
        'Zero buffering streaming',
        'Low latency connection',
        'Consistent performance'
      ]
    },
    { 
      icon: <SecurityOutlined />, 
      title: 'Secure Connection', 
      desc: 'Protected with latest security protocols',
      color: '#f44336',
      points: [
        'Advanced encryption',
        'Firewall protection',
        'Malware detection',
        'Threat monitoring'
      ]
    },
    { 
      icon: <DevicesOutlined />, 
      title: 'Multiple Devices', 
      desc: 'Connect all your devices simultaneously',
      color: '#4caf50',
      points: [
        '10+ devices support',
        'Simultaneous streaming',
        'Smart home ready',
        'Family sharing'
      ]
    },
    { 
      icon: <SupportAgentOutlined />, 
      title: '24/7 Support', 
      desc: 'Round-the-clock customer assistance',
      color: '#9c27b0',
      points: [
        'Phone support available',
        'WhatsApp assistance',
        'Fast response time',
        'Technical troubleshooting'
      ]
    }
  ];

  const handleDurationChange = (event, newDuration) => {
    if (newDuration !== null) {
      setDuration(newDuration);
    }
  };

  const handleBuyNow = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPlan(null);
    setFormData({ name: '', phone: '', email: '', address: '' });
  };

  const handleSubmit = () => {
    console.log('Order submitted:', { plan: selectedPlan, duration, formData });
    alert('Thank you! Our team will contact you within 24 hours.');
    handleCloseDialog();
  };

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
  
      const duration = 2000;
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
          support: currentStep <= steps / 2 ? 0 : 24
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
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={6}>
            <Chip 
              label="HIGH-SPEED INTERNET" 
              color="primary" 
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#1a237e',
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Choose Your Perfect Plan
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
            >
              Experience blazing-fast fiber optic internet with unlimited data. No contracts, no hidden fees!
            </Typography>
          </Box>
        </Fade>

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Grid 
            container 
            spacing={3}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={5} lg={3} key={index} sx={{ maxWidth: 300 }}>
                <Zoom in timeout={800 + index * 100}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '2px solid',
                      borderColor: '#e8eaf6',
                      borderRadius: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      backgroundColor: '#fff',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${benefit.color}, rgba(${parseInt(benefit.color.slice(1,3),16)}, ${parseInt(benefit.color.slice(3,5),16)}, ${parseInt(benefit.color.slice(5,7),16)}, 0.5))`,
                      },
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.08)',
                        boxShadow: `0 20px 40px ${benefit.color}30`,
                        borderColor: benefit.color,
                        '& .benefit-icon': {
                          transform: 'scale(1.2)',
                          color: benefit.color
                        },
                        '& .benefit-title': {
                          color: benefit.color
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      {/* Icon */}
                      <Box
                        className="benefit-icon"
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '12px',
                          bgcolor: `${benefit.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: benefit.color,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          flexShrink: 0,
                        }}
                      >
                        {React.cloneElement(benefit.icon, { sx: { fontSize: 28 } })}
                      </Box>

                      {/* Title */}
                      <Typography
                        className="benefit-title"
                        variant="h6"
                        fontWeight={700}
                        gutterBottom
                        sx={{ 
                          fontSize: '1.1rem',
                          transition: 'color 0.3s ease',
                          color: '#1a237e'
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{ 
                          mb: 2.5, 
                          lineHeight: 1.6,
                          color: '#666',
                          fontSize: '0.9rem'
                        }}
                      >
                        {benefit.desc}
                      </Typography>

                      {/* Features List */}
                      <List dense sx={{ flexGrow: 1, pb: 0 }}>
                        {benefit.points.map((point, i) => (
                          <ListItem 
                            key={i} 
                            sx={{ 
                              px: 0, 
                              py: 0.5, 
                              alignItems: 'flex-start',
                              '& .MuiListItemText-root': {
                                margin: 0
                              }
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 26, mt: 0.3 }}>
                              <CheckCircleOutlined
                                sx={{ 
                                  fontSize: 18, 
                                  color: benefit.color,
                                  flexShrink: 0 
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{
                                variant: 'body2',
                                sx: { 
                                  fontSize: '0.85rem',
                                  color: '#555'
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Main Card Container with Duration Toggle and Plans */}
        <Fade in timeout={1000}>
          <Card
            elevation={4}
            sx={{
              border: '2px solid',
              borderColor: '#e0e0e0',
              backgroundColor: '#ffffff',
              borderRadius: 2,
              overflow: 'hidden',
              mb: 8
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Duration Toggle Section */}
              <Box
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  pb: 4,
                  borderBottom: '2px solid #f0f0f0'
                }}
              >
                <Typography variant="h6" fontWeight={600} mb={3} color="#1a237e">
                  Select Your Billing Period
                </Typography>
                <ToggleButtonGroup
                  value={duration}
                  exclusive
                  onChange={handleDurationChange}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    '& .MuiToggleButton-root': {
                      px: 3,
                      py: 2,
                      border: '2px solid #e0e0e0',
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    },
                    '& .MuiToggleButton-root.Mui-selected': {
                      backgroundColor: '#1a237e',
                      color: 'white',
                      borderColor: '#1a237e',
                      '&:hover': {
                        backgroundColor: '#0d1758'
                      }
                    }
                  }}
                >
                  <ToggleButton value="90D">
                    <Box textAlign="left">
                      <Typography variant="body1" fontWeight={600}>3 Months</Typography>
                      <Typography variant="caption">Standard Price</Typography>
                    </Box>
                  </ToggleButton>
                  <ToggleButton value="180D">
                    <Box textAlign="left">
                      <Typography variant="body1" fontWeight={600}>6 Months</Typography>
                      <Typography variant="caption" sx={{ color: 'inherit' }}>Save More</Typography>
                    </Box>
                  </ToggleButton>
                  <ToggleButton value="360D">
                    <Box textAlign="left">
                      <Typography variant="body1" fontWeight={600}>1 Year</Typography>
                      <Chip 
                        label="BEST VALUE" 
                        size="small" 
                        sx={{
                          mt: 0.5,
                          fontSize: '0.7rem',
                          height: 24,
                          backgroundColor: '#ff6b6b',
                          color: 'white'
                        }}
                      />
                    </Box>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              {/* Plans Grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: 'repeat(4, 1fr)'
                  },
                  gap: 3
                }}
              >
                {plans.map((plan, index) => {
                  const currentPrice = plan.durations[duration];
                  return (
                    <Box key={index}>
                      <Zoom in timeout={1200 + index * 100}>
                        <Card
                          elevation={plan.popular ? 8 : 0}
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            border: plan.popular ? '3px solid' : '1px solid',
                            borderColor: plan.popular ? plan.color : 'divider',
                            transition: 'all 0.3s',
                            '&:hover': {
                              transform: 'translateY(-12px)',
                              boxShadow: 8,
                              borderColor: plan.color
                            }
                          }}
                        >
                          {plan.popular && (
                            <Chip
                              label="MOST POPULAR"
                              color="error"
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                fontWeight: 700,
                                zIndex: 1
                              }}
                            />
                          )}

                          <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            {/* Speed Badge */}
                            <Box
                              sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: `${plan.color}20`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px',
                                border: '3px solid',
                                borderColor: plan.color
                              }}
                            >
                              <Box textAlign="center">
                                <Typography variant="h5" fontWeight={700} color={plan.color}>
                                  {plan.speed}
                                </Typography>
                                <Typography variant="caption" sx={{ color: plan.color }}>
                                  Mbps
                                </Typography>
                              </Box>
                            </Box>

                            <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom>
                              {plan.name}
                            </Typography>

                            <Box textAlign="center" mb={2}>
                              <Typography variant="h3" fontWeight={700} color="primary">
                                ₹{currentPrice.price}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                ₹{currentPrice.monthly}/month
                              </Typography>
                              {currentPrice.savings && (
                                <Chip
                                  label={`Save ₹${currentPrice.savings}`}
                                  size="small"
                                  color="success"
                                  icon={<LocalOfferOutlined />}
                                  sx={{ mt: 1 }}
                                />
                              )}
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <List dense>
                              {plan.features.map((feature, i) => (
                                <ListItem key={i} sx={{ px: 0 }}>
                                  <ListItemIcon sx={{ minWidth: 36 }}>
                                    <CheckCircleOutlined sx={{ color: plan.color, fontSize: 20 }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={feature}
                                    primaryTypographyProps={{ variant: 'body2' }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </CardContent>

                          <Box sx={{ p: 3, pt: 0 }}>
                            <Button
                              fullWidth
                              variant={plan.popular ? 'contained' : 'outlined'}
                              size="large"
                              onClick={() => handleBuyNow(plan)}
                              sx={{
                                py: 1.5,
                                fontWeight: 600,
                                bgcolor: plan.popular ? plan.color : 'transparent',
                                borderColor: plan.color,
                                color: plan.popular ? 'white' : plan.color,
                                '&:hover': {
                                  bgcolor: plan.popular ? plan.color : `${plan.color}20`,
                                  borderColor: plan.color,
                                  transform: 'scale(1.02)'
                                }
                              }}
                            >
                              Get Started
                            </Button>
                          </Box>
                        </Card>
                      </Zoom>
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>
        </Fade>

        {/* FAQs */}
       <Box mb={10} mt={{ xs: 6, md: 10 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 } }}>
                    {/* Left Side - Ask Us Anything */}
                    <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 40%' } }}>
                      <Fade in timeout={600}>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                            <WifiOutlined sx={{ color: '#f44336', fontSize: 32 }} />
                            <Typography 
                              variant="subtitle1" 
                              sx={{ 
                                color: '#f44336',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontSize: '0.9rem'
                              }}
                            >
                              Asked Questions
                            </Typography>
                          </Box>
        
                          <Typography 
                            variant="h3" 
                            fontWeight={800} 
                            sx={{ 
                              fontSize: { xs: '1.8rem', md: '2.5rem' }, 
                              mb: 4,
                              lineHeight: 1.2,
                              color: '#000'
                            }}
                          >
                            Have Any Questions On Your Minds!
                          </Typography>
        
                          <List sx={{ mb: 4 }}>
                            <ListItem sx={{ px: 0, py: 1.5, alignItems: 'flex-start' }}>
                              <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                <CheckCircleOutlined sx={{ color: '#f44336', fontSize: 22 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary="Pay 12 Months Bill and get a new Connection Free."
                                primaryTypographyProps={{ 
                                  variant: 'body1',
                                  sx: { fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }
                                }}
                              />
                            </ListItem>
                            <ListItem sx={{ px: 0, py: 1.5, alignItems: 'flex-start' }}>
                              <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                <CheckCircleOutlined sx={{ color: '#f44336', fontSize: 22 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary="Pay 3 Months Bill and get 10% Discount on OTC."
                                primaryTypographyProps={{ 
                                  variant: 'body1',
                                  sx: { fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }
                                }}
                              />
                            </ListItem>
                            <ListItem sx={{ px: 0, py: 1.5, alignItems: 'flex-start' }}>
                              <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                <CheckCircleOutlined sx={{ color: '#f44336', fontSize: 22 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary="24/7 Customer Support Available"
                                primaryTypographyProps={{ 
                                  variant: 'body1',
                                  sx: { fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }
                                }}
                              />
                            </ListItem>
                          </List>
                        </Box>
                      </Fade>
                    </Box>
        
                    {/* Right Side - FAQ Accordion */}
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 60%' } }}>
                      <Box>
                        {faqs.slice(0, 4).map((faq, index) => (
                          <Zoom in timeout={800 + index * 100} key={index}>
                            <Accordion
                              elevation={0}
                              sx={{
                                mb: 2,
                                border: '1px solid #e0e0e0',
                                borderRadius: '12px !important',
                                bgcolor: '#fff',
                                transition: 'all 0.3s',
                                '&:hover': {
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                  borderColor: '#d0d0d0'
                                },
                                '&:before': { display: 'none' },
                                '& .MuiAccordionSummary-root': {
                                  minHeight: 64,
                                  '&.Mui-expanded': {
                                    minHeight: 64
                                  }
                                }
                              }}
                            >
                              <AccordionSummary 
                                expandIcon={
                                  <Box
                                    sx={{
                                      width: 28,
                                      height: 28,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      transition: 'all 0.3s'
                                    }}
                                  >
                                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 300, color: '#666' }}>+</Typography>
                                  </Box>
                                }
                                sx={{ 
                                  py: 1.5,
                                  px: 2.5
                                }}
                              >
                                <Typography 
                                  fontWeight={600} 
                                  sx={{ 
                                    fontSize: '0.95rem',
                                    pr: 2,
                                    color: '#000'
                                  }}
                                >
                                  {faq.question}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
                                <Typography 
                                  color="text.secondary" 
                                  sx={{ 
                                    lineHeight: 1.7,
                                    fontSize: '0.9rem'
                                  }}
                                >
                                  {faq.answer}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </Zoom>
                        ))}
                      </Box>
                    </Box>
                  </Box>
        </Box>
      </Container>

      {/* Order Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Get Started with {selectedPlan?.name}
            </Typography>
            <IconButton onClick={handleCloseDialog} size="small">
              <CloseOutlined />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {selectedPlan && (
            <>
              <Alert severity="info" sx={{ mb: 3 }}>
                <Typography variant="body2" fontWeight={600}>
                  {selectedPlan.speed} Mbps - {selectedPlan.name} Plan
                </Typography>
                <Typography variant="body2">
                  ₹{selectedPlan.durations[duration].price} for {duration === '90D' ? '3 months' : duration === '180D' ? '6 months' : '1 year'}
                </Typography>
              </Alert>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Installation Address"
                name="address"  
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                multiline
                rows={3}
                required
              />
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit} disabled={!formData.name || !formData.phone}>
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Stats Section */}
            <Box ref={statsRef} sx={{ width: '100%', bgcolor: '#d32f2f', py: { xs: 6, md: 8 }, mb: 12 }}>
              <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between" alignItems="center">
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
                          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', fontWeight: 500, mt: 1.5 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Zoom>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
    </Box>
  );
};

export default InternetPlans;