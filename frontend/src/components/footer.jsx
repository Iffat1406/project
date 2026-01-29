// Footer.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        py: 7,
        mt: 10,
      }}
    >
      {/* ✅ Full width footer */}
      <Container maxWidth="xl" height= "200px">
        <Grid container spacing={5}>
          {/* ✅ Logo + Company Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                component="img"
                src="/images/logo3.png"
                alt="CableNet Logo"
                sx={{ height: 120 }}
              />
              <Typography variant="h5" fontWeight={800}>
                CableNet
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}
            >
              Providing ultra-fast broadband internet <br />
              and crystal-clear cable TV services. <br />
              Stay connected with reliable, affordable, <br />
              and modern connectivity solutions.
            </Typography>

          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>

            {['Home', 'Services', 'Contact'].map((text) => (
              <Link
                key={text}
                href={`/${text.toLowerCase()}`}
                underline="none"
                sx={footerLinkStyle}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Spacer */}
          <Grid item xs={12} md={1} />

          {/* Contact */}
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>

            <Typography sx={footerText}>Email: support@cablenet.com</Typography>
            <Typography sx={footerText}>Phone: +1-800-123-4567</Typography>
            <Typography sx={footerText}>
              Address: 123 Fiber St, Net City, India
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <IconButton
                href="https://instagram.com"
                sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'rgba(255,255,255,0.6)' }}
        >
          © {new Date().getFullYear()} CableNet. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

const footerLinkStyle = {
  display: 'block',
  color: 'rgba(255,255,255,0.8)',
  mb: 1,
  '&:hover': { color: '#FF124F', pl: 1 },
};

const footerText = {
  color: 'rgba(255,255,255,0.8)',
  mb: 1,
};

export default Footer;
