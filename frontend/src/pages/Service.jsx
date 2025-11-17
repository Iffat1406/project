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
  Tab,
  Tabs
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
  SchoolOutlined,
  CableOutlined
} from '@mui/icons-material';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
      description: 'Professional installation by certified technicians',
      color: '#ff9800'
    },
    {
      icon: <SupportAgentOutlined />,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance for all your queries',
      color: '#9c27b0'
    },
    {
      icon: <SettingsOutlined />,
      title: 'Maintenance & Repairs',
      description: 'Quick response time for any technical issues',
      color: '#00bcd4'
    },
    {
      icon: <SecurityOutlined />,
      title: 'Network Security',
      description: 'Secure connections with latest encryption',
      color: '#f44336'
    },
    {
      icon: <RouterOutlined />,
      title: 'Router Upgrades',
      description: 'Latest Wi-Fi 6 routers available for upgrade',
      color: '#3f51b5'
    },
    {
      icon: <DevicesOutlined />,
      title: 'Multiple Device Support',
      description: 'Connect unlimited devices simultaneously',
      color: '#4caf50'
    }
  ];

  const serviceCategories = [
    {
      icon: <HomeOutlined />,
      title: 'Residential Services',
      description: 'Perfect solutions for homes and apartments',
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

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
    console.log('Inquiry submitted:', formData);
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    handleCloseDialog();
  };

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
                label="PREMIUM SERVICES" 
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
                Our Services
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  maxWidth: 800, 
                  mx: 'auto',
                  opacity: 0.95,
                  fontSize: { xs: '1.1rem', md: '1.5rem' }
                }}
              >
                Complete connectivity solutions for homes, businesses, and institutions
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Main Services */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            Our Core Services
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={6}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Choose from our range of high-quality internet and cable TV services
          </Typography>

          <Grid container spacing={4}>
            {mainServices.map((service, index) => (
              <Grid item xs={12} md={4} key={service.id}>
                <Zoom in timeout={1000 + index * 200}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: '2px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: 8,
                        borderColor: service.color
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          bgcolor: service.bgColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 24px',
                          color: service.color
                        }}
                      >
                        {React.cloneElement(service.icon, { sx: { fontSize: 40 } })}
                      </Box>

                      <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
                        {service.title}
                      </Typography>

                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        textAlign="center"
                        paragraph
                        sx={{ minHeight: 48 }}
                      >
                        {service.description}
                      </Typography>

                      <Divider sx={{ my: 3 }} />

                      <List dense>
                        {service.features.map((feature, i) => (
                          <ListItem key={i} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleOutlined sx={{ color: service.color, fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                          Popular Plans:
                        </Typography>
                        {service.plans.map((plan, i) => (
                          <Paper
                            key={i}
                            elevation={0}
                            sx={{
                              p: 2,
                              mb: 1,
                              border: '1px solid',
                              borderColor: plan.popular ? service.color : 'divider',
                              bgcolor: plan.popular ? `${service.color}10` : 'transparent'
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box>
                                <Typography variant="body2" fontWeight={600}>
                                  {plan.speed || plan.name || plan.combo}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {plan.duration || `${plan.channels} channels`}
                                </Typography>
                              </Box>
                              <Typography variant="h6" fontWeight={700} color={service.color}>
                                Rs {plan.price}
                              </Typography>
                            </Box>
                            {plan.popular && (
                              <Chip 
                                label="POPULAR" 
                                size="small" 
                                sx={{ 
                                  mt: 1, 
                                  bgcolor: service.color, 
                                  color: 'white',
                                  fontSize: '0.65rem',
                                  height: 20
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
                          mt: 3,
                          bgcolor: service.color,
                          '&:hover': {
                            bgcolor: service.color,
                            opacity: 0.9
                          }
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Services */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            Additional Services
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={6}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Comprehensive support services to ensure the best experience
          </Typography>

          <Grid container spacing={3}>
            {additionalServices.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Fade in timeout={1400 + index * 100}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 4,
                        borderColor: service.color
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: `${service.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: service.color
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 30 } })}
                    </Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Service Categories */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            Services by Category
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={6}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Tailored solutions for different customer segments
          </Typography>

          <Grid container spacing={4}>
            {serviceCategories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in timeout={1600 + index * 200}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          color: 'white'
                        }}
                      >
                        {React.cloneElement(category.icon, { sx: { fontSize: 35 } })}
                      </Box>
                      <Typography variant="h5" fontWeight={600} gutterBottom>
                        {category.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {category.description}
                      </Typography>
                      <List dense>
                        {category.features.map((feature, i) => (
                          <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <CheckCircleOutlined sx={{ fontSize: 16, color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{ variant: 'body2' }}
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

        {/* Why Choose Us */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 5, 
            mb: 8,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
          }}
        >
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={5}>
            Why Choose Radha Cable Net?
          </Typography>
          <Grid container spacing={3}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {React.cloneElement(item.icon, { sx: { fontSize: 28 } })}
                  </Box>
                  <Typography variant="body1" fontWeight={600}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* FAQs */}
        <Box mb={8}>
          <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
            Frequently Asked Questions
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="text.secondary" 
            mb={6}
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Got questions? We have got answers
          </Typography>

          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                elevation={0}
                sx={{
                  mb: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:before': { display: 'none' },
                  borderRadius: '8px !important'
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                  <Typography fontWeight={600}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Fade in timeout={2200}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: 3
            }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom color="primary">
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Contact us today for a free consultation and get connected in 24 hours
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneOutlined />}
                sx={{ px: 4, py: 1.5 }}
                href="tel:+918369108915"
              >
                Call: +91 8369108915
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailOutlined />}
                sx={{ px: 4, py: 1.5 }}
                href="mailto:radhacablenet1@gmail.com"
              >
                Email Us
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* Inquiry Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Request Service
            </Typography>
            <IconButton onClick={handleCloseDialog} size="small">
              <CloseOutlined />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {selectedService && (
            <Box sx={{ mb: 3, p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
              <Typography variant="body2" fontWeight={600} color="primary.main">
                Selected Service: {selectedService.title}
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
            label="Additional Requirements"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            multiline
            rows={3}
            placeholder="Tell us about your specific needs..."
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleSubmit} 
            disabled={!formData.name || !formData.phone}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Services