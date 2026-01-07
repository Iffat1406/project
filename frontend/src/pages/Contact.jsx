import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
  Fade,
  Zoom,
  InputAdornment,
  MenuItem,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Grid } from "@mui/material";
import {
  LocationOnOutlined,
  EmailOutlined,
  PhoneOutlined,
  AccessTimeOutlined,
  SendOutlined,
  PersonOutline,
  SubjectOutlined,
  SupportAgentOutlined,
  ExpandMoreOutlined,
  WhatsApp,
  Facebook,
  Twitter,
  Instagram
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [touched, setTouched] = useState({});

  const inquiryTypes = [
    { value: 'new_connection', label: 'New Connection' },
    { value: 'technical_support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Issue' },
    { value: 'upgrade', label: 'Plan Upgrade' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const faqs = [
    {
      question: 'What are your internet speeds?',
      answer: 'We offer various plans ranging from 50 Mbps to 1 Gbps. Our fiber optic network ensures stable and high-speed connectivity for all your needs.'
    },
    {
      question: 'How quickly can I get a new connection?',
      answer: 'New connections are typically installed within 24-48 hours of approval. Our technical team will contact you to schedule the installation at your convenience.'
    },
    {
      question: 'Do you offer 24/7 customer support?',
      answer: 'Yes! Our customer support team is available 24/7 via phone, email, and WhatsApp. For emergencies, we also have a dedicated helpline.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept online payments, bank transfers, UPI, credit/debit cards, and cash payments at our office. Auto-debit facilities are also available.'
    },
    {
      question: 'Is there a contract period?',
      answer: 'We offer both contract and no-contract plans. Our flexible plans allow you to choose what works best for you without long-term commitments.'
    }
  ];

  // Validation
  const validateField = (name, value) => {
    switch (name) {
      case 'firstname':
        return value.trim() ? '' : 'First name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[6-9]\d{9}$/.test(value.replace(/\s/g, ''))) {
          return 'Please enter a valid 10-digit mobile number';
        }
        return '';
      case 'inquiryType':
        return value ? '' : 'Please select inquiry type';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    ['firstname', 'email', 'phone', 'inquiryType', 'message'].forEach((key) => {
      const error = validateField(key, exchangeData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log('Form Submitted!', formData);
      
      setSnackbar({
        open: true,
        message: 'Thank you! Our team will contact you within 24 hours.',
        severity: 'success'
      });
      
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
      setLoading(false);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationOnOutlined sx={{ fontSize: 40 }} />,
      title: 'Visit our place',
      content: [
        'New Dinkar Co Operative Housing Society',
        'New Girgaonkar Wadi, Sitladevi Temple Road',
        'Mahim, Mumbai'
      ],
      color: '#1976d2',
      bgColor: '#e3f2fd'
    },
    {
      icon: <EmailOutlined sx={{ fontSize: 40 }} />,
      title: 'Contact us',
      content: ['radhacablenet1@gmail.com', '+(91) 8369108915'],
      color: '#2e7d32',
      bgColor: '#e8f5e9'
    },
    {
      icon: <AccessTimeOutlined sx={{ fontSize: 40 }} />,
      title: 'Office time',
      content: ['Five days 10am To 8pm', 'Friday is closed'],
      color: '#ed6c02',
      bgColor: '#fff3e0'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={800}>
          <Box textAlign="center" mb={8}>
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
              Get In Touch With Us
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                mb: 3,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Experience reliable internet and cable services. We're here to help 24/7!
            </Typography>
          </Box>
        </Fade>

        {/* Contact Info Cards - Fixed for Grid v2 */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Zoom in timeout={1000 + index * 200}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      borderColor: info.color
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: info.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        color: info.color,
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)'
                        }
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      fontWeight={600}
                      sx={{ mb: 2 }}
                    >
                      {info.title}
                    </Typography>
                    {info.content.map((line, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5, lineHeight: 1.8 }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form - Fixed for Grid v2 */}
        <Fade in timeout={1200}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              mb: 8
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight={600}
              mb={1}
              sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}
            >
              Send Your Message
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={4}>
              Fill out the form below and our team will get back to you within 24 hours
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              {/* LINE 1: First Name & Last Name (50% each) */}
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={touched.firstname && !!errors.firstname}
                    helperText={touched.firstname && errors.firstname}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutline color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutline color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* LINE 2: Email, Phone & Inquiry Type (33.33% each) */}
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlined color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="10-digit mobile number"
                    error={touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlined color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <TextField
                    fullWidth
                    select
                    label="Inquiry Type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    error={touched.inquiryType && !!errors.inquiryType}
                    helperText={touched.inquiryType && errors.inquiryType}
                    variant="outlined"
                  >
                    {inquiryTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              {/* LINE 3: Subject (100% full width) */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Subject (Optional)"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SubjectOutlined color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* LINE 4: Message (100% full width) */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  multiline
                  rows={5}
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                  variant="outlined"
                  placeholder="Tell us more about your requirements..."
                />
              </Box>

              {/* LINE 5: Submit Button (centered) */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  endIcon={loading ? null : <SendOutlined />}
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: '#d32f2f',
                    boxShadow: '0 4px 12px rgba(211, 47, 47, 0.3)',
                    '&:hover': {
                      bgcolor: '#c62828',
                      boxShadow: '0 6px 16px rgba(211, 47, 47, 0.4)',
                    },
                  }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Fade>

        {/* FAQ Section */}
        <Fade in timeout={1400}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 6 }, 
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              mb: 8
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

        {/* Social Media & Emergency Contact - Fixed for Grid v2 */}
        {/* <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                height: '100%'
              }}
            >
              <Typography variant="h5" fontWeight={600} mb={3}>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: '#1877f2', cursor: 'pointer', '&:hover': { transform: 'scale(1.1)' }, transition: 'all 0.3s' }}>
                  <Facebook />
                </Avatar>
                <Avatar sx={{ bgcolor: '#25D366', cursor: 'pointer', '&:hover': { transform: 'scale(1.1)' }, transition: 'all 0.3s' }}>
                  <WhatsApp />
                </Avatar>
                <Avatar sx={{ bgcolor: '#1DA1F2', cursor: 'pointer', '&:hover': { transform: 'scale(1.1)' }, transition: 'all 0.3s' }}>
                  <Twitter />
                </Avatar>
                <Avatar sx={{ bgcolor: '#E4405F', cursor: 'pointer', '&:hover': { transform: 'scale(1.1)' }, transition: 'all 0.3s' }}>
                  <Instagram />
                </Avatar>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Follow us on social media for updates, offers, and service announcements.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'error.main',
                bgcolor: '#ffebee',
                height: '100%'
              }}
            >
              <Typography variant="h5" fontWeight={600} mb={2} color="error">
                Emergency Support
              </Typography>
              <Typography variant="body1" fontWeight={600} mb={1}>
                24/7 Helpline: 1800-XXX-XXXX
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For urgent technical issues or service disruptions, call our emergency helpline available round the clock.
              </Typography>
            </Paper>
          </Grid>
        </Grid> */}

        {/* Map Section */}
        <Fade in timeout={1600}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 3, md: 6 }, 
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              fontWeight={600} 
              mb={4}
              sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}
            >
              Visit Our Office
            </Typography>
            <Box
              sx={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: 2,
                bgcolor: '#f5f5f5'
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=Mahim,Mumbai,India&output=embed"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                title="Company Location"
              />
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;