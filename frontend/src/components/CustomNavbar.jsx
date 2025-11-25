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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePlansClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePlansClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Plans', path: null, hasDropdown: true },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box component="img" src="/images/logo3.png" alt="CableNet Logo" sx={{ height: 40 }} />
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

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box component="img" src="/images/logo3.png" alt="CableNet Logo" sx={{ height: 50 }} />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Button
                  color="inherit"
                  href="/"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                  }}
                >
                  Home
                </Button>

                {/* Plans Dropdown */}
                <Box>
                  <Button
                    color="inherit"
                    onClick={handlePlansClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                    }}
                  >
                    Plans
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handlePlansClose}
                    MenuListProps={{
                      onMouseLeave: handlePlansClose,
                    }}
                    PaperProps={{
                      sx: { mt: 1 },
                    }}
                  >
                    <MenuItem 
                      component="a" 
                      href="/plans/internet" 
                      onClick={handlePlansClose}
                      sx={{ minWidth: 180 }}
                    >
                      Internet Plans
                    </MenuItem>
                    <MenuItem 
                      component="a" 
                      href="/plans/cable" 
                      onClick={handlePlansClose}
                    >
                      Cable Plans
                    </MenuItem>
                  </Menu>
                </Box>

                <Button
                  color="inherit"
                  href="/services"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                  }}
                >
                  Services
                </Button>

                <Button
                  color="inherit"
                  href="/blog"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                  }}
                >
                  Blog
                </Button>

                <Button
                  color="inherit"
                  href="/about"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                  }}
                >
                  About Us
                </Button>

                <Button
                  color="inherit"
                  href="/contact"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: '#FF124F', bgcolor: 'transparent' },
                  }}
                >
                  Contact
                </Button>

                <Button
                  variant="contained"
                  href="/contact"
                  sx={{
                    bgcolor: '#FF124F',
                    '&:hover': { 
                      bgcolor: '#E01046',
                      transform: 'translateY(-2px)',
                      boxShadow: 3,
                    },
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer - FIXED: Removed elevation prop */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            boxShadow: 3, // Use valid elevation value
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default CustomNavbar;