import React, { useState } from 'react';
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
  ListItemText,
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tab,
  Tabs,
  Badge
} from '@mui/material';
import {
  TvOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  WhatsApp,
  PhoneOutlined,
  ExpandMoreOutlined,
  SportsFootballOutlined,
  MovieOutlined,
  LiveTvOutlined,
  ChildCareOutlined,
  MusicNoteOutlined,
  NewspaperOutlined,
  TranslateOutlined,
  StarOutlined
} from '@mui/icons-material';

const CableTVPlans = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const packages = [
    {
      id: 'hd-package',
      name: 'HD Package',
      channels: 90,
      price: 625,
      period: 'monthly',
      popular: false,
      color: '#2196f3',
      description: 'Perfect for HD entertainment lovers',
      highlights: [
        'FTA + Multiplex Channels',
        'Colors Wala English & Marathi',
        'GEC, News, Sports HD Channels',
        'Sony Happy India Smart HD Plus',
        'Discovery, Cartoon Network',
        'Star Sports, Movies Channels'
      ],
      categories: {
        entertainment: 25,
        news: 15,
        sports: 10,
        movies: 20,
        kids: 8,
        others: 12
      }
    },
    {
      id: 'hd-premium',
      name: 'HD Premium Package',
      channels: 99,
      price: 735,
      period: 'monthly',
      popular: true,
      color: '#ff9800',
      description: 'Most popular choice for families',
      highlights: [
        'All HD Package Channels +',
        'Colors Wala Marathi Value HD',
        'Star Sports Select HD',
        'Star Movies HD',
        'Sony Entertainment Channels',
        'National Geographic HD',
        'Zee All in One Marathi Pack'
      ],
      categories: {
        entertainment: 30,
        news: 18,
        sports: 12,
        movies: 22,
        kids: 10,
        others: 7
      }
    },
    {
      id: 'marathi-package',
      name: 'Marathi Package',
      channels: 90,
      price: 440,
      period: 'monthly',
      popular: false,
      color: '#4caf50',
      description: 'Best Marathi entertainment package',
      highlights: [
        'All Marathi Channels',
        'Zee Family Marathi Pack SD',
        'Colors Marathi Value HD',
        'Star Pravah HD',
        'Sony Marathi Channels',
        'News, Movies, Entertainment'
      ],
      categories: {
        entertainment: 35,
        news: 15,
        movies: 18,
        music: 10,
        kids: 7,
        others: 5
      }
    },
    {
      id: 'tamil-package',
      name: 'Tamil Package',
      channels: 48,
      price: 410,
      period: 'monthly',
      popular: false,
      color: '#9c27b0',
      description: 'Complete Tamil entertainment',
      highlights: [
        'WBD Family SD',
        'Tamil Bouquet Channels',
        'Kalaignar Channels',
        'Zee Prime Tamil Pack SD',
        'Sun TV, KTV, Jaya TV',
        'Movies and Entertainment'
      ],
      categories: {
        entertainment: 20,
        movies: 12,
        news: 8,
        music: 5,
        kids: 2,
        others: 1
      }
    },
    {
      id: 'telugu-package',
      name: 'Telugu Package',
      channels: 58,
      price: 405,
      period: 'monthly',
      popular: false,
      color: '#f44336',
      description: 'Premium Telugu content',
      highlights: [
        'ETV Family Pack 1',
        'Gemini TV, ETV Telugu',
        'Zee Telugu Channels',
        'Star Maa Channels',
        'News and Entertainment',
        'Movies and Music'
      ],
      categories: {
        entertainment: 22,
        movies: 14,
        news: 10,
        music: 6,
        kids: 4,
        others: 2
      }
    },
    {
      id: 'special-package',
      name: 'Special Package',
      channels: 48,
      price: 325,
      period: 'monthly',
      popular: false,
      color: '#00bcd4',
      description: 'Basic entertainment needs',
      highlights: [
        'Sony Happy India Smart HD Plus',
        'English News India Today Pack',
        'Basic Entertainment Channels',
        'News Channels',
        'Zee TV, Star Plus',
        'Ala Carte Channels'
      ],
      categories: {
        entertainment: 18,
        news: 12,
        movies: 8,
        music: 5,
        kids: 3,
        others: 2
      }
    },
    {
      id: 'silver-package',
      name: 'Silver Package',
      channels: 71,
      price: 395,
      period: 'monthly',
      popular: false,
      color: '#607d8b',
      description: 'Mid-range entertainment package',
      highlights: [
        'Colors Wala Marathi Value Plus',
        'WBD Family SD',
        'NDTV Channels',
        'Zee TV in 10 Value Pack',
        'Times Bouquet Channels',
        'Entertainment Mix'
      ],
      categories: {
        entertainment: 25,
        news: 15,
        movies: 15,
        sports: 8,
        kids: 5,
        others: 3
      }
    },
    {
      id: 'gold-package',
      name: 'Gold Package',
      channels: 96,
      price: 415,
      period: 'monthly',
      popular: false,
      color: '#ffc107',
      description: 'Premium entertainment for all',
      highlights: [
        'Colors Wala Gujarati Value HD',
        'Star Sports Channels',
        'Sony Happy India Smart Plus',
        'Zee All in One Pack',
        'English News HD India Today',
        'Comprehensive Entertainment'
      ],
      categories: {
        entertainment: 30,
        news: 18,
        sports: 15,
        movies: 20,
        kids: 8,
        others: 5
      }
    }
  ];

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
    console.log('Order submitted:', { plan: selectedPlan, formData });
    alert('Thank you! Our team will contact you within 24 hours.');
    handleCloseDialog();
  };

  const benefits = [
    { icon: <LiveTvOutlined />, title: 'HD Quality', desc: 'Crystal clear HD channels' },
    { icon: <TvOutlined />, title: '500+ Channels', desc: 'Wide variety of content' },
    { icon: <TranslateOutlined />, title: 'Multi-Language', desc: 'Hindi, Marathi, Tamil, Telugu & more' },
    { icon: <StarOutlined />, title: 'Premium Content', desc: 'Sports, Movies, News & Entertainment' }
  ];

  const channelCategories = [
    { icon: <MovieOutlined />, label: 'Movies', color: '#e91e63' },
    { icon: <SportsFootballOutlined />, label: 'Sports', color: '#4caf50' },
    { icon: <NewspaperOutlined />, label: 'News', color: '#2196f3' },
    { icon: <ChildCareOutlined />, label: 'Kids', color: '#ff9800' },
    { icon: <MusicNoteOutlined />, label: 'Music', color: '#9c27b0' }
  ];

  const faqs = [
    {
      question: 'What equipment is needed for cable TV?',
      answer: 'You need a Set-Top Box (STB) which we provide. Installation includes the STB, cables, and setup. No additional equipment required from your side.'
    },
    {
      question: 'Can I customize my channel selection?',
      answer: 'Yes! Apart from our packages, you can add individual channels or create your own custom pack. Contact us for à la carte options.'
    },
    {
      question: 'Is HD picture quality guaranteed?',
      answer: 'HD quality is available for all HD channels in our packages. Standard channels are in SD quality. Your TV must support HD for best viewing experience.'
    },
    {
      question: 'What is the installation time?',
      answer: 'Installation typically takes 2-4 hours. We provide same-day or next-day installation based on your location and availability.'
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No hidden charges! The price shown is all-inclusive. One-time installation charges may apply for new connections.'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={6}>
            <Chip 
              label="CABLE TV PACKAGES" 
              color="error" 
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
              Entertainment for Everyone
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
            >
              Choose from our wide range of cable TV packages. HD quality, diverse content, and affordable prices!
            </Typography>
          </Box>
        </Fade>

        {/* Benefits Section */}
        <Grid container spacing={3} mb={6}>
          {benefits.map((benefit, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Zoom in timeout={800 + index * 100}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box sx={{ color: 'error.main', mb: 2 }}>
                    {React.cloneElement(benefit.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' } }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.desc}
                  </Typography>
                </Paper>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Channel Categories */}
        <Paper elevation={0} sx={{ p: 4, mb: 6, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h5" fontWeight={600} textAlign="center" mb={3}>
            Channel Categories Available
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {channelCategories.map((cat, index) => (
              <Grid item key={index}>
                <Chip
                  icon={cat.icon}
                  label={cat.label}
                  sx={{
                    px: 2,
                    py: 3,
                    fontSize: '1rem',
                    fontWeight: 600,
                    bgcolor: `${cat.color}20`,
                    color: cat.color,
                    border: '2px solid',
                    borderColor: cat.color,
                    '&:hover': {
                      bgcolor: cat.color,
                      color: 'white'
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Packages Grid */}
        <Grid container spacing={3} mb={6}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pkg.id}>
              <Zoom in timeout={1000 + index * 100}>
                <Card
                  elevation={pkg.popular ? 8 : 0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    border: pkg.popular ? '3px solid' : '1px solid',
                    borderColor: pkg.popular ? pkg.color : 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: 8,
                      borderColor: pkg.color
                    }
                  }}
                >
                  {pkg.popular && (
                    <Chip
                      label="BEST SELLER"
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
                    {/* Icon Badge */}
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        bgcolor: `${pkg.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        border: '3px solid',
                        borderColor: pkg.color
                      }}
                    >
                      <TvOutlined sx={{ fontSize: 35, color: pkg.color }} />
                    </Box>

                    <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom>
                      {pkg.name}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      textAlign="center"
                      sx={{ minHeight: 40, mb: 2 }}
                    >
                      {pkg.description}
                    </Typography>

                    <Box textAlign="center" mb={2}>
                      <Typography variant="h3" fontWeight={700} color="error">
                        ₹{pkg.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        per month
                      </Typography>
                      <Chip
                        label={`${pkg.channels} Channels`}
                        size="small"
                        sx={{ mt: 1, fontWeight: 600 }}
                      />
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Package Highlights:
                    </Typography>
                    <List dense sx={{ mb: 2 }}>
                      {pkg.highlights.slice(0, 4).map((highlight, i) => (
                        <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                          <CheckCircleOutlined 
                            sx={{ 
                              fontSize: 16, 
                              color: pkg.color, 
                              mr: 1 
                            }} 
                          />
                          <ListItemText
                            primary={highlight}
                            primaryTypographyProps={{ 
                              variant: 'caption',
                              sx: { lineHeight: 1.4 }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    {/* Channel Distribution */}
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                        Channel Distribution:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {Object.entries(pkg.categories).map(([key, value]) => (
                          <Chip
                            key={key}
                            label={`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>

                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      fullWidth
                      variant={pkg.popular ? 'contained' : 'outlined'}
                      size="large"
                      onClick={() => handleBuyNow(pkg)}
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        bgcolor: pkg.popular ? pkg.color : 'transparent',
                        borderColor: pkg.color,
                        color: pkg.popular ? 'white' : pkg.color,
                        '&:hover': {
                          bgcolor: pkg.popular ? pkg.color : `${pkg.color}20`,
                          borderColor: pkg.color,
                          transform: 'scale(1.02)'
                        }
                      }}
                    >
                      Subscribe Now
                    </Button>
                  </Box>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Fade in timeout={1400}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 5 }, 
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              mb: 6
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              fontWeight={600} 
              mb={4}
              textAlign="center"
            >
              Frequently Asked Questions
            </Typography>
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
          </Paper>
        </Fade>

        {/* Contact CTA */}
        <Fade in timeout={1500}>
          <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Need a Custom Package?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Contact us to create a personalized channel package that fits your preferences
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<WhatsApp />}
                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}
                href="https://wa.me/918369108915"
                target="_blank"
              >
                WhatsApp Us
              </Button>
              <Button
                variant="contained"
                startIcon={<PhoneOutlined />}
                color="error"
                href="tel:+918369108915"
              >
                Call: +91 8369108915
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* Order Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Subscribe to {selectedPlan?.name}
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
                  {selectedPlan.name} Package
                </Typography>
                <Typography variant="body2">
                  {selectedPlan.channels} Channels - ₹{selectedPlan.price}/month
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
          <Button 
            variant="contained" 
            color="error"
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

export default CableTVPlans;