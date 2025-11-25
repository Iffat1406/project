import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Pagination,
  Grid,
  Chip,
  Paper,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  FormatQuoteOutlined,
  VerifiedOutlined
} from '@mui/icons-material';

const CustomerFeedback = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const testimonials = [
    {
      name: 'Priya Kulkarni',
      role: 'Homemaker',
      location: 'Mahim, Mumbai',
      rating: 5,
      text: 'The internet speed is amazing and the support team is always available. Best service provider in town! My kids can attend online classes without any buffering.',
      avatar: 'PK',
      color: '#e91e63',
      verified: true
    },
    {
      name: 'Rajesh Patil',
      role: 'Business Owner',
      location: 'Dadar, Mumbai',
      rating: 5,
      text: 'Affordable packages and reliable connection. My family enjoys both internet and cable without interruptions. The installation was professional and quick.',
      avatar: 'RP',
      color: '#3f51b5',
      verified: true
    },
    {
      name: 'Neha Sharma',
      role: 'Software Developer',
      location: 'Bandra, Mumbai',
      rating: 5,
      text: 'They really care about customers. Installation was quick and hassle-free. The upload and download speeds are exactly as promised. Perfect for work from home!',
      avatar: 'NS',
      color: '#00bcd4',
      verified: true
    },
    {
      name: 'Amit Deshmukh',
      role: 'Student',
      location: 'Worli, Mumbai',
      rating: 5,
      text: 'Great service at an affordable price! The customer support team is very responsive and helped me choose the right plan for my studies and entertainment needs.',
      avatar: 'AD',
      color: '#4caf50',
      verified: true
    },
    {
      name: 'Sunita Joshi',
      role: 'Teacher',
      location: 'Andheri, Mumbai',
      rating: 5,
      text: 'Excellent service and very reliable. I conduct online classes daily and never face any connectivity issues. The customer care team is extremely helpful.',
      avatar: 'SJ',
      color: '#ff9800',
      verified: true
    },
    {
      name: 'Vikram Mehta',
      role: 'Entrepreneur',
      location: 'Powai, Mumbai',
      rating: 5,
      text: 'Best decision to switch to Radha Cable Net. The fiber optic connection is super fast and stable. Perfect for video conferences and large file transfers.',
      avatar: 'VM',
      color: '#9c27b0',
      verified: true
    },
    {
      name: 'Kavita Nair',
      role: 'Content Creator',
      location: 'Malad, Mumbai',
      rating: 5,
      text: 'As a content creator, I need fast upload speeds and Radha Cable Net delivers perfectly. No lag during live streaming and uploads are lightning fast!',
      avatar: 'KN',
      color: '#f44336',
      verified: true
    },
    {
      name: 'Suresh Kumar',
      role: 'Retired Professional',
      location: 'Borivali, Mumbai',
      rating: 4,
      text: 'Very satisfied with the cable TV channels and internet service. The staff is courteous and installation was done professionally. Good value for money.',
      avatar: 'SK',
      color: '#795548',
      verified: true
    },
    {
      name: 'Anjali Kapoor',
      role: 'Graphic Designer',
      location: 'Juhu, Mumbai',
      rating: 5,
      text: 'Amazing service! I work with large design files and the internet speed never disappoints. Customer support resolves queries quickly. Highly recommend!',
      avatar: 'AK',
      color: '#673ab7',
      verified: true
    },
    {
      name: 'Manoj Rao',
      role: 'IT Professional',
      location: 'Goregaon, Mumbai',
      rating: 5,
      text: 'Switched from another provider and the difference is night and day. Consistent speeds, minimal downtime, and great pricing. Excellent service overall!',
      avatar: 'MR',
      color: '#009688',
      verified: true
    },
    {
      name: 'Deepa Iyer',
      role: 'Yoga Instructor',
      location: 'Chembur, Mumbai',
      rating: 5,
      text: 'I conduct online yoga sessions and need reliable internet. Radha Cable Net has never let me down. The connection is stable even during peak hours.',
      avatar: 'DI',
      color: '#cddc39',
      verified: true
    },
    {
      name: 'Aditya Singh',
      role: 'Gamer',
      location: 'Kandivali, Mumbai',
      rating: 5,
      text: 'Low ping, high speeds, and no packet loss. Perfect for gaming! Finally found an ISP that understands what gamers need. Simply the best!',
      avatar: 'AS',
      color: '#ff5722',
      verified: true
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate average rating
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Fade in timeout={600}>
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                color: 'primary.main'
              }}
            >
              Customer Feedback
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}
            >
              Real stories from real customers who trust Radha Cable Net for their connectivity needs
            </Typography>

            {/* Rating Summary */}
            <Paper
              elevation={0}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Box textAlign="center">
                <Typography variant="h3" fontWeight={700} color="primary">
                  {averageRating}
                </Typography>
                <Rating value={parseFloat(averageRating)} readOnly precision={0.1} />
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Based on {testimonials.length} reviews
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Fade>

        {/* Testimonials Grid */}
        <Grid container spacing={3} mb={5}>
          {currentTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                      borderColor: testimonial.color
                    }
                  }}
                >
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 20,
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      bgcolor: testimonial.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 3
                    }}
                  >
                    <FormatQuoteOutlined sx={{ color: 'white', fontSize: 28 }} />
                  </Box>

                  <CardContent sx={{ p: 4, pt: 5 }}>
                    {/* Customer Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: testimonial.color,
                          mr: 2,
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          boxShadow: 2
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box flex={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography variant="h6" fontWeight={600}>
                            {testimonial.name}
                          </Typography>
                          {testimonial.verified && (
                            <VerifiedOutlined
                              sx={{ fontSize: 18, color: 'primary.main' }}
                            />
                          )}
                        </Box>
                        <Typography variant="caption" color="text.secondary" display="block">
                          {testimonial.role}
                        </Typography>
                        <Chip
                          label={testimonial.location}
                          size="small"
                          sx={{
                            mt: 0.5,
                            height: 20,
                            fontSize: '0.7rem',
                            bgcolor: 'grey.100'
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        size="medium"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: testimonial.color
                          }
                        }}
                      />
                    </Box>

                    {/* Feedback Text */}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        position: 'relative',
                        pl: 2,
                        borderLeft: '3px solid',
                        borderColor: testimonial.color
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Fade in timeout={1200}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size={isMobile ? 'medium' : 'large'}
              sx={{
                '& .MuiPaginationItem-root': {
                  fontWeight: 600
                }
              }}
            />
          </Box>
        </Fade>

        {/* Call to Action */}
        <Fade in timeout={1400}>
          <Paper
            elevation={0}
            sx={{
              mt: 8,
              p: 5,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              borderRadius: 3
            }}
          >
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Join Our Happy Customers
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
              Experience the same great service that our customers love. Get connected today!
            </Typography>
            <Chip
              label="📞 Call: +91 8369108915"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '1rem',
                px: 2,
                py: 3,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)'
                }
              }}
              onClick={() => window.location.href = 'tel:+918369108915'}
            />
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default CustomerFeedback;