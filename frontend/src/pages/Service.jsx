import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
  Zoom,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia
} from '@mui/material';
import {
  WifiOutlined,
  TvOutlined,
  RouterOutlined,
  SpeedOutlined,
  SupportAgentOutlined,
  BuildOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  ExpandMoreOutlined,
  PhoneOutlined,
  EmailOutlined,
  SecurityOutlined,
  DevicesOutlined,
  CloudDownloadOutlined,
  SettingsOutlined,
  VerifiedOutlined,
  LocalOfferOutlined,
  StarOutlined,
  HomeOutlined,
  BusinessOutlined,
  SchoolOutlined
} from '@mui/icons-material';
import { motion } from "framer-motion";
import CustomerFeedback from "../components/CustomerFeedback";

const Services = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const mainServices = [
    {
      id: 'broadband',
      icon: <WifiOutlined />,
      title: 'High-Speed Broadband',
      description: 'Lightning-fast fiber optic internet for homes and businesses',
      color: '#2196f3',
      bgColor: '#e3f2fd',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      features: [
        'Speeds from 50 Mbps to 500 Mbps',
        'Unlimited data usage',
        'Fiber optic technology',
        '99.9% uptime guarantee',
        'Free Wi-Fi router included',
        'Same day installation available'
      ],
      plans: [
        { speed: '50 Mbps', price: '1,500', duration: '3 months' },
        { speed: '100 Mbps', price: '8,500', duration: '1 year', popular: true },
        { speed: '300 Mbps', price: '15,000', duration: '1 year' }
      ]
    },
    {
      id: 'cable-tv',
      icon: <TvOutlined />,
      title: 'Cable TV Packages',
      description: 'Entertainment for the whole family with 500+ channels',
      color: '#f44336',
      bgColor: '#ffebee',
      image: 'https://images.unsplash.com/photo-1522869635100-ce75fb8cc25d?w=500&h=300&fit=crop',
      features: [
        '500+ channels available',
        'HD and SD quality options',
        'Regional language packages',
        'Sports, movies, news, and kids',
        'Set-top box included',
        'Multiple package options'
      ],
      plans: [
        { name: 'Basic Package', price: '325', channels: '48' },
        { name: 'HD Premium', price: '735', channels: '99', popular: true },
        { name: 'Family Pack', price: '625', channels: '90' }
      ]
    },
    {
      id: 'combo',
      icon: <RouterOutlined />,
      title: 'Internet + Cable Combo',
      description: 'Save more with bundled services for complete home entertainment',
      color: '#4caf50',
      bgColor: '#e8f5e9',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      features: [
        'Save up to 20% on bundles',
        'Single billing for convenience',
        'Priority customer support',
        'Free installation for both',
        'Customizable packages',
        'Flexible upgrade options'
      ],
      plans: [
        { combo: '100 Mbps + Basic Cable', price: '7,500', duration: '1 year' },
        { combo: '150 Mbps + HD Premium', price: '12,000', duration: '1 year', popular: true },
        { combo: '300 Mbps + Family Pack', price: '18,000', duration: '1 year' }
      ]
    }
  ];

  const additionalServices = [
  {
    icon: <BuildOutlined />,
    title: 'Installation & Setup',
    description: 'Professional installation by certified technicians.',
    points: [
      'Same-day installation',
      'Clean & secure wiring',
      'Router & device setup',
      'Performance testing'
    ],
    color: '#ff9800',
  },
  {
    icon: <SupportAgentOutlined />,
    title: '24/7 Customer Support',
    description: 'Always-on support whenever you need help.',
    points: [
      'Phone & WhatsApp support',
      'Remote troubleshooting',
      'Quick response time',
      'Dedicated helpdesk'
    ],
    color: '#9c27b0',
  },
  {
    icon: <SettingsOutlined />,
    title: 'Maintenance & Repairs',
    description: 'Fast issue resolution with expert technicians.',
    points: [
      'Preventive maintenance',
      'On-site repair',
      'Minimal downtime',
      'Priority service'
    ],
    color: '#00bcd4',
  },
  {
    icon: <SecurityOutlined />,
    title: 'Network Security',
    description: 'Safe and encrypted internet connections.',
    points: [
      'Firewall protection',
      'Secure Wi-Fi setup',
      'Parental controls',
      'Threat monitoring'
    ],
    color: '#f44336',
  },
];


  const serviceCategories = [
    {
      icon: <HomeOutlined />,
      title: 'Residential Services',
      description: 'Perfect solutions for homes and apartments',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=350&fit=crop',
      features: [
        'Family entertainment packages',
        'Work from home plans',
        'Online learning support',
        'Smart home ready',
        'Flexible billing options'
      ]
    },
    {
      icon: <BusinessOutlined />,
      title: 'Business Services',
      description: 'Reliable connectivity for your business needs',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
      features: [
        'Dedicated bandwidth',
        'Static IP addresses',
        'Priority support',
        'Custom packages',
        'Multiple location support'
      ]
    },
    {
      icon: <SchoolOutlined />,
      title: 'Educational Institutions',
      description: 'Special packages for schools and colleges',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop',
      features: [
        'High-capacity networks',
        'Content filtering options',
        'Bulk discount pricing',
        'Dedicated support team',
        'Flexible contracts'
      ]
    }
  ];

  const whyChooseUs = [
    { icon: <SpeedOutlined />, text: 'Fastest speeds in the area' },
    { icon: <VerifiedOutlined />, text: 'ISO certified company' },
    { icon: <LocalOfferOutlined />, text: 'Competitive pricing' },
    { icon: <StarOutlined />, text: '10,000+ satisfied customers' },
    { icon: <SupportAgentOutlined />, text: '24/7 customer support' },
    { icon: <CloudDownloadOutlined />, text: 'Unlimited data usage' }
  ];

  const faqs = [
    {
      question: 'What is the installation process?',
      answer: 'Our professional technicians will visit your location, assess the requirements, install the necessary equipment (router, cables, set-top box), configure the connection, and ensure everything is working perfectly. Installation typically takes 2-4 hours.'
    },
    {
      question: 'Is there a contract period?',
      answer: 'We offer both contract and no-contract plans. Our annual plans come with significant discounts, while monthly plans offer more flexibility. You can choose what works best for you.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your internet speed or cable package at any time. Simply contact our customer support team, and we will arrange the upgrade. Pro-rated charges will apply based on your current plan.'
    },
    {
      question: 'What if I face technical issues?',
      answer: 'Our 24/7 customer support team is always available to help. You can reach us via phone, email, or WhatsApp. For urgent issues, our technicians can visit your location within 24 hours.'
    },
    {
      question: 'Do you provide a free trial?',
      answer: 'We offer a 7-day satisfaction guarantee. If you are not satisfied with our service within the first week, we will provide a full refund, no questions asked.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept online payments, bank transfers, UPI, credit and debit cards, and cash payments at our office. Auto-debit facilities are also available for your convenience.'
    }
  ];

  const handleOpenDialog = (service) => {
    setSelectedService(service);
    setFormData({ ...formData, service: service.title });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleSubmit = () => {
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    handleCloseDialog();
  };

  const leftImageVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightContentVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Add global keyframes for SVG animation */}
      <style>
        {`
          @keyframes drawLine {
            0% {
              stroke-dashoffset: 200;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -200;
            }
          }
        `}
      </style>
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
          backgroundAttachment: 'fixed',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={800}>
            <Box textAlign="center">
              <Chip 
                label="⭐ PREMIUM SERVICES" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.25)', 
                  color: 'white',
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 3
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                Our Services
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  maxWidth: 800, 
                  mx: 'auto',
                  opacity: 0.95,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                Complete connectivity solutions for homes, businesses, and institutions
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>

        {/* Additional Services */}
        <Box mb={10}>
          <Fade in timeout={600}>
            <Box textAlign="center" mb={6}>
              <Typography 
                variant="h3" 
                fontWeight={800} 
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 2 }}
              >
                Additional Services
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                Comprehensive support services to enhance your experience
              </Typography>
            </Box>
          </Fade>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 3,
              width: '100%'
            }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                style={{ height: '100%', display: 'flex' }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid #e0e0e0',
                    borderRadius: '14px',
                    p: 3,
                    transition: 'all 0.4s ease',
                    backgroundColor: '#fff',
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',

                    '&:hover': {
                      // backgroundColor: '#000',
                      // color: '#fff',
                      transform: 'translateY(-10px)',
                      boxShadow: '0 18px 36px rgba(0,0,0,0.25)',
                      borderColor: service.color,
                    },


                    '&:hover .service-text': {
                      color: '#000000ff',
                    }
                  }}
                >
                  <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Icon */}
                    <Box
                      className="service-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '12px',
                        bgcolor: `${service.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: service.color,
                        transition: 'all 0.3s',
                        flexShrink: 0,
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 28 } })}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ 
                        wordWrap: 'break-word', 
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      className="service-text"
                      sx={{ 
                        mb: 2, 
                        lineHeight: 1.6, 
                        wordWrap: 'break-word', 
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Extra Content */}
                    <List dense sx={{ flexGrow: 1, pb: 0 }}>
                      {service.points.map((point, i) => (
                        <ListItem 
                          key={i} 
                          sx={{ 
                            px: 0, 
                            py: 0.3, 
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
                                color: 'inherit', 
                                flexShrink: 0 
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={point}
                            primaryTypographyProps={{
                              variant: 'body2',
                              sx: { 
                                fontSize: '0.9rem',
                                wordWrap: 'break-word', 
                                overflowWrap: 'break-word',
                                hyphens: 'auto'
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
   
        {/* Unlimited Network Section */}
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box
                  component="img"
                  src="/images/shvetsa.jpg"
                  alt="Internet Network"
                  sx={{
                    width: '100%',
                    maxWidth: 550,
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </motion.div>
            </Grid>

            {/* Right Side - Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: { xs: 0, md: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: '#fff5f5',
                      border: '2px solid #f44336',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <WifiOutlined sx={{ color: '#f44336', fontSize: 20 }} />
                  </Box>
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
                    About Our Internet
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2.8rem' },
                    mb: 3,
                    lineHeight: 1.2
                  }}
                >
                  We Provide{' '}
                  <Box
                    component="span"
                    sx={{
                      color: '#f44336',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 5,
                        left: 0,
                        right: 0,
                        height: 12,
                        bgcolor: '#f4433620',
                        zIndex: -1,
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Unlimited
                  </Box>{' '}
                  Network For You.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.8, fontSize: '1rem' }}
                >
                  Experience blazing-fast internet speeds with unlimited data for all your streaming, gaming, and browsing needs.
                </Typography>

                <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start' }}>
                  {/* Secure Internet */}
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '12px',
                        bgcolor: '#fff5f5',
                        border: '2px solid #f44336',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1.5
                      }}
                    >
                      <SecurityOutlined sx={{ fontSize: 28, color: '#f44336' }} />
                    </Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1.1rem' }}>
                      Secure Internet
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                      Protected connections with advanced encryption
                    </Typography>
                  </Box>

                  {/* Speed Circle */}
                  <Box sx={{ textAlign: 'center', flexShrink: 0 }}>
                    <Box
                      sx={{
                        width: { xs: 110, md: 130 },
                        height: { xs: 110, md: 130 },
                        borderRadius: '50%',
                        border: '8px solid #f44336',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        mb: 1
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={800}
                        sx={{ color: '#f44336', fontSize: { xs: '2.2rem', md: '2.8rem' }, lineHeight: 1 }}
                      >
                        50
                      </Typography>
                      <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.95rem' }}>
                        Mbps
                      </Typography>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -15,
                          right: -25,
                          fontSize: { xs: '3rem', md: '3.5rem' },
                          color: '#f44336',
                          fontWeight: 300
                        }}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* 4K & 8K Streaming */}
                <Box sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '12px',
                      bgcolor: '#fff5f5',
                      border: '2px solid #f44336',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5
                    }}
                  >
                    <TvOutlined sx={{ fontSize: 28, color: '#f44336' }} />
                  </Box>
                  <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1.1rem' }}>
                    4K & 8K streaming
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                    Ultra-high definition streaming without buffering
                  </Typography>
                </Box>

                {/* Checkmarks */}
                <Box sx={{ pl: 3, borderLeft: '3px solid #f44336' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <CheckCircleOutlined sx={{ color: '#f44336', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                      99.9% uptime guarantee
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleOutlined sx={{ color: '#f44336', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                      Free installation & setup
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      

      {/* Cable TV Subscription Section - UPDATED WITH WHITE BACKGROUND AND ANIMATED UNDERLINE */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', width: '100%', mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 6, md: 12 }}
            alignItems="center"
          >
            {/* LEFT SIDE - IMAGE */}
            <Grid item xs={12} md={6}>
  <motion.div
    variants={leftImageVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <Box sx={{ position: "relative", textAlign: "center" }}>
      
      {/* 40% OFF Badge */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: -20,
          width: 110,
          height: 110,
          borderRadius: "50%",
          bgcolor: "#ff1744",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          boxShadow: "0 10px 30px rgba(255,23,68,0.45)",
          zIndex: 2,
        }}
      >
        <Typography variant="h4" fontWeight={800}>40%</Typography>
        <Typography fontSize="0.9rem">OFF</Typography>
      </Box>

      {/* TV Image */}
      <Box
        component="img"
        src="/images/tv.jpg"
        alt="TV Subscription"
        sx={{
          width: "100%",
          maxWidth: 700,
          borderRadius: "18px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",

           transition: "transform 0.4s ease",
    "&:hover": {
      transform: "rotate(0deg) scale(1.05)",
    },
        }}
      />

      {/* Set-top Box Image BELOW TV */}
      <Box
        component="img"
        src="/images/setupbox.png"
        alt="Set Top Box"
        sx={{
    position: "absolute",
    bottom: { xs: -30, md: -40 },
      right: { xs: -200, md: -300 }, // 👉 MORE towards right

    width: { xs: 500, md: 450 },   // 🔥 Bigger size
    zIndex: 3,

    filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.45))",
    transform: "rotate(-6deg)",

    transition: "transform 0.4s ease",
    "&:hover": {
      transform: "rotate(0deg) scale(1.05)",
    },
  }}
      />
    </Box>
  </motion.div>
</Grid>


            {/* RIGHT SIDE - CONTENT */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={rightContentVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                {/* Tag */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2.5,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "8px",
                      bgcolor: "#fff5f5",
                      border: "2px solid #ff1744",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TvOutlined sx={{ color: "#ff1744" }} />
                  </Box>

                  <Typography
                    sx={{
                      color: "#ff1744",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                    }}
                  >
                    Subscribe Cable 
                  </Typography>
                </Box>

                {/* Heading */}
                <Typography
                  variant="h3"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: "1.9rem", md: "2.8rem" },
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Enjoy Sports{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#ff1744",
                      position: "relative",
                      display: "inline-block",
                      pb: 1.5,
                    }}
                  >
                    Movies
                    <Box
                      component="svg"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "12px",
                        overflow: "visible",
                      }}
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 6 Q 50 2, 100 6 T 200 6"
                        fill="none"
                        stroke="#ff1744"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: "200",
                          strokeDashoffset: "200",
                          animation: "drawLine 2.5s ease-in-out infinite",
                        }}
                      />
                    </Box>
                  </Box>
                  ,<br />
                  TV Shows & More.
                </Typography>

                {/* Description */}
                <Typography
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem' }}
                >
                  Stream unlimited entertainment with premium channels featuring sports,
                  <br /> blockbuster movies, trending TV shows, and exclusive content for the entire family.
                </Typography>

                {/* Price */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 2,
                    mb: 4,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Typography sx={{ fontSize: "1.2rem", color: "#666" }}>
                    $
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{ color: "#ff1744", lineHeight: 1 }}
                  >
                    25
                  </Typography>
                  <Typography sx={{ color: "#666" }}>/ 1 month</Typography>
                </Box>

                {/* Button */}
                <Button
                  variant="contained"
                  size="large"
                  endIcon={
                    <ExpandMoreOutlined sx={{ transform: "rotate(-90deg)" }} />
                  }
                  sx={{
                    bgcolor: "#ff1744",
                    px: 5,
                    py: 1.8,
                    borderRadius: "50px",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 12px 30px rgba(255,23,68,0.45)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#e6003c",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Check Availibility
                </Button>
              </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          {/* Main Services */}
        <Box mb={10}>
          <Fade in timeout={600}>
            <Box textAlign="center" mb={6}>
              <Typography 
                variant="h3" 
                fontWeight={800} 
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 2 }}
              >
                Our Core Services
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.8 }}
              >
                Choose from our range of high-quality internet and cable TV services tailored to your needs
              </Typography>
            </Box>
          </Fade>

          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',    
              overflowX: 'auto',     
              scrollBehavior: 'smooth',
              pb: 2
            }}
          >
            {mainServices.map((service, index) => (
              <Grid item sx={{ minWidth: { xs: '85%', sm: '60%', md: '33%', lg: '28%' } }} key={service.id}>
                <Zoom in timeout={900 + index * 150}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: '1px solid #e0e0e0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-16px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        borderColor: service.color
                      }
                    }}
                  >
                  
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: service.bgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: service.color
                        }}
                      >
                        {React.cloneElement(service.icon, { sx: { fontSize: 32 } })}
                      </Box>

                      <Typography 
                        variant="h5" 
                        fontWeight={700} 
                        gutterBottom
                        sx={{ fontSize: '1.4rem' }}
                      >
                        {service.title}
                      </Typography>

                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        paragraph
                        sx={{ minHeight: 48, lineHeight: 1.6, mb: 2 }}
                      >
                        {service.description}
                      </Typography>

                      <Divider sx={{ my: 2.5 }} />

                      <Box mb={2.5}>
                        <Typography 
                          variant="caption" 
                          fontWeight={700}
                          sx={{ color: service.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                          Key Features
                        </Typography>
                        <List dense sx={{ mt: 1 }}>
                          {service.features.slice(0, 3).map((feature, i) => (
                            <ListItem key={i} sx={{ px: 0, py: 0.4 }}>
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckCircleOutlined sx={{ color: service.color, fontSize: 18 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                primaryTypographyProps={{ variant: 'body2', sx: { fontSize: '0.9rem' } }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="caption" 
                          fontWeight={700}
                          sx={{ color: service.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}
                        >
                          Popular Plans
                        </Typography>
                        {service.plans.map((plan, i) => (
                          <Paper
                            key={i}
                            elevation={0}
                            sx={{
                              p: 1.5,
                              mt: i === 0 ? 1 : 0.75,
                              mb: 0.75,
                              border: '2px solid',
                              borderColor: plan.popular ? service.color : '#e0e0e0',
                              bgcolor: plan.popular ? `${service.color}08` : 'transparent',
                              borderRadius: '8px',
                              transition: 'all 0.3s'
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box>
                                <Typography variant="body2" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                                  {plan.speed || plan.name || plan.combo}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                                  {plan.duration || `${plan.channels} channels`}
                                </Typography>
                              </Box>
                              <Typography variant="h6" fontWeight={800} color={service.color} sx={{ fontSize: '1.1rem' }}>
                                ₹{plan.price}
                              </Typography>
                            </Box>
                            {plan.popular && (
                              <Chip 
                                label="MOST POPULAR" 
                                size="small" 
                                sx={{ 
                                  mt: 1, 
                                  bgcolor: service.color, 
                                  color: 'white',
                                  fontSize: '0.7rem',
                                  fontWeight: 700,
                                  height: 22
                                }} 
                              />
                            )}
                          </Paper>
                        ))}
                      </Box>

                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={() => handleOpenDialog(service)}
                        sx={{
                          bgcolor: service.color,
                          fontWeight: 700,
                          py: 1.2,
                          borderRadius: '8px',
                          transition: 'all 0.3s',
                          '&:hover': {
                            bgcolor: service.color,
                            opacity: 0.85,
                            transform: 'scale(1.02)'
                          }
                        }}
                      >
                        Get Started Now
                      </Button>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

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

      <CustomerFeedback />

      {/* Inquiry Dialog */}
      {/* <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={700}>
              Request Service
            </Typography>
            <IconButton 
              onClick={handleCloseDialog} 
              size="small"
              sx={{
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.05)',
                  transform: 'rotate(90deg)'
                }
              }}
            >
              <CloseOutlined />
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent dividers sx={{ py: 3 }}>
          {selectedService && (
            <Box sx={{ 
              mb: 3, 
              p: 2.5, 
              bgcolor: '#e3f2fd', 
              borderRadius: '10px',
              borderLeft: '4px solid #1565c0'
            }}>
              <Typography variant="body2" fontWeight={700} color="#1565c0">
                ✓ Selected Service: {selectedService.title}
              </Typography>
            </Box>
          )}
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            sx={{ 
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px'
              }
            }}
            placeholder="Enter your full name"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            sx={{ 
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px'
              }
            }}
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            sx={{ 
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px'
              }
            }}
            placeholder="Enter your email address"
          />
          <TextField
            fullWidth
            label="Additional Requirements"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            multiline
            rows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px'
              }
            }}
            placeholder="Tell us about your specific needs..."
          />
        </DialogContent>
        <DialogActions sx={{ p: 2.5, gap: 1 }}>
          <Button 
            onClick={handleCloseDialog}
            sx={{
              color: '#666',
              fontWeight: 600,
              borderRadius: '8px',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.05)'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            disabled={!formData.name || !formData.phone}
            sx={{
              bgcolor: '#1565c0',
              fontWeight: 700,
              borderRadius: '8px',
              px: 3,
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: '#0d47a1',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(21, 101, 192, 0.3)'
              },
              '&:disabled': {
                bgcolor: '#bdbdbd',
                cursor: 'not-allowed'
              }
            }}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
};

export default Services;