import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Grid,
  Link,
  Divider,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';


// Footer Component
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
              Your trusted cable and internet service provider. Fast, reliable, and affordable.
            </Typography>
            <Typography variant="subtitle2" gutterBottom fontWeight={600}>
              Follow Us On
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    bgcolor: '#FF124F',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      color: '#FF124F',
                      pl: 1,
                      transition: 'all 0.3s',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                <strong>Email:</strong> support@cablenet.com
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                <strong>Phone:</strong> +1-800-123-4567
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                <strong>Address:</strong> 123 Fiber St, Net City, IN 12345
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.6)' }}>
          &copy; {new Date().getFullYear()} CableNet. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

// // Demo App
// export default function App() {
//   return (
//     <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <CustomNavbar />
      
//       {/* Demo Content */}
//       <Container maxWidth="lg" sx={{ flex: 1, py: 8 }}>
//         <Typography variant="h3" gutterBottom fontWeight={700}>
//           Welcome to CableNet
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Experience lightning-fast internet and crystal-clear cable TV with our premium services.
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Scroll down to see the footer or use the navigation menu above.
//         </Typography>
//       </Container>

//       <Footer />
//     </Box>
//   );
// }