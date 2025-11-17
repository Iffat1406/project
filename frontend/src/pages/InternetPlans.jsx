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
  Tooltip
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
  CloudDownloadOutlined
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

  const benefits = [
    { icon: <SpeedOutlined />, title: 'Lightning Fast', desc: 'Fiber optic technology for maximum speed' },
    { icon: <SecurityOutlined />, title: 'Secure Connection', desc: 'Protected with latest security protocols' },
    { icon: <DevicesOutlined />, title: 'Multiple Devices', desc: 'Connect all your devices simultaneously' },
    { icon: <SupportAgentOutlined />, title: '24/7 Support', desc: 'Round-the-clock customer assistance' }
  ];

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

            {/* Duration Toggle */}
            <ToggleButtonGroup
              value={duration}
              exclusive
              onChange={handleDurationChange}
              sx={{ mb: 2 }}
            >
              <ToggleButton value="90D" sx={{ px: 4 }}>
                <Box>
                  <Typography variant="body1" fontWeight={600}>3 Months</Typography>
                  <Typography variant="caption">Standard Price</Typography>
                </Box>
              </ToggleButton>
              <ToggleButton value="180D" sx={{ px: 4 }}>
                <Box>
                  <Typography variant="body1" fontWeight={600}>6 Months</Typography>
                  <Typography variant="caption" color="success.main">Save More</Typography>
                </Box>
              </ToggleButton>
              <ToggleButton value="360D" sx={{ px: 4 }}>
                <Box>
                  <Typography variant="body1" fontWeight={600}>1 Year</Typography>
                  <Chip label="BEST VALUE" size="small" color="error" sx={{ mt: 0.5 }} />
                </Box>
              </ToggleButton>
            </ToggleButtonGroup>
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
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
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

        {/* Plans Grid */}
        <Grid container spacing={3}>
          {plans.map((plan, index) => {
            const currentPrice = plan.durations[duration];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Zoom in timeout={1000 + index * 100}>
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
              </Grid>
            );
          })}
        </Grid>

        {/* Additional Info */}
        <Fade in timeout={1500}>
          <Paper elevation={0} sx={{ mt: 6, p: 4, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Need Help Choosing a Plan?
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Our experts are available 24/7 to help you find the perfect internet plan
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
                color="primary"
                href="tel:+918369108915"
              >
                Call: +91 8369108915
              </Button>
            </Box>
          </Paper>
        </Fade>

        {/* Features Grid */}
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
              <CloudDownloadOutlined sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Unlimited Downloads
              </Typography>
              <Typography variant="body2" color="text.secondary">
                No data caps or FUP limits. Download as much as you want!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
              <TrendingUpOutlined sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                99.9% Uptime
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reliable connection you can count on, day and night
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
              <WifiOutlined sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Free Wi-Fi Router
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premium router included with select plans at no extra cost
              </Typography>
            </Paper>
          </Grid>
        </Grid>
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
    </Box>
  );
};

export default InternetPlans;