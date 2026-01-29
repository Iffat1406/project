// CustomNavbar.jsx
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
  Divider,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const CustomNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Plans', path: null, hasDropdown: true },
    { label: 'Services', path: '/services' },
    // { label: 'Blog', path: '/blog' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 300 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src="/images/logo3.png"
            alt="CableNet Logo"
            sx={{ height: 45 }}
          />
          <Typography fontWeight={700} fontSize="1.2rem">
            Radha
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.hasDropdown ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/plans/internet">
                    <ListItemText primary="Internet Plans" sx={{ pl: 2 }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/plans/cable">
                    <ListItemText primary="Cable Plans" sx={{ pl: 2 }} />
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component="a" href={item.path}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}

        <ListItem sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href="/contact"
            sx={{
              bgcolor: '#FF124F',
              '&:hover': { bgcolor: '#E01046' },
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Get Started
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  function handlePlansClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handlePlansClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        {/* ✅ Full width navbar */}
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: 'space-between', py: 1.5 }}
          >
            {/* ✅ Bigger clear logo + company name */}
            <Box
              component="a"
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/images/logo3.png"
                alt="CableNet Logo"
                sx={{ height: 60 }}
              />
              <Typography
                fontWeight={800}
                fontSize="1.4rem"
                color="text.primary"
              >
                CableNet
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Button href="/" sx={navBtnStyle}>Home</Button>

                <Box>
                  <Button
                    onClick={handlePlansClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={navBtnStyle}
                  >
                    Plans
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handlePlansClose}
                  >
                    <MenuItem href="/plans/internet" component="a">
                      Internet Plans
                    </MenuItem>
                    <MenuItem href="/plans/cable" component="a">
                      Cable Plans
                    </MenuItem>
                  </Menu>
                </Box>

                {['services', 'about', 'contact'].map((path) => (
                  <Button key={path} href={`/${path}`} sx={navBtnStyle}>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Button>
                ))}

                <Button
                  variant="contained"
                  href="/contact"
                  sx={{
                    bgcolor: '#FF124F',
                    '&:hover': { bgcolor: '#E01046' },
                    px: 3,
                    fontWeight: 600,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

const navBtnStyle = {
  color: 'text.primary',
  fontWeight: 500,
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
};

export default CustomNavbar;
