import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  Fade,
  Zoom,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  RocketLaunchOutlined,
  TvOutlined,
  HandshakeOutlined,
  PublicOutlined,
  PeopleOutlined,
  ExpandMoreOutlined,
  ArrowForwardOutlined,
  SpeedOutlined,
  SecurityOutlined,
  SupportAgentOutlined,
  EmojiEventsOutlined,
  CheckCircleOutlined,
} from '@mui/icons-material';
import CustomerFeedback from "../components/CustomerFeedback";
import BannerCarousel from '../components/BannerCarousel';
import { motion } from "framer-motion";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState(0);
  
  // Stats animation state
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    years: 0,
    uptime: 0,
    support: 0
  });

  const whatWeProvide = [
    {
      icon: <RocketLaunchOutlined />,
      title: 'Lightning-Fast Internet',
      description: 'Fiber-optic technology delivering speeds up to 200 Mbps with unlimited data for streaming, gaming, and remote work.',
      color: '#2196f3',
      bgColor: '#e3f2fd'
    },
    {
      icon: <TvOutlined />,
      title: 'Premium Cable TV',
      description: '500+ HD and SD channels including entertainment, sports, news, movies, and regional content for the entire family.',
      color: '#4caf50',
      bgColor: '#e8f5e9'
    },
    {
      icon: <SupportAgentOutlined />,
      title: '24/7 Customer Support',
      description: 'Round-the-clock technical support to resolve issues quickly and keep you connected without interruptions.',
      color: '#ff9800',
      bgColor: '#fff3e0'
    },
    {
          icon: <PublicOutlined />,
          title: 'Trusted Service',
          description: 'Reliable connectivity with 99.9% uptime guarantee and consistent quality.',
          color: '#9c27b0',
          bgColor: '#f3e5f5'
        }
  ];

  const whyChooseUs = [
    {
      icon: <RocketLaunchOutlined />,
      title: 'High-Speed Internet',
      description: 'Perfect for streaming, gaming, and remote work with fiber optic technology.',
      color: '#2196f3',
      bgColor: '#e3f2fd'
    },
    {
      icon: <TvOutlined />,
      title: 'Affordable Cable',
      description: 'Entertainment for the whole family at fair prices with 500+ channels.',
      color: '#4caf50',
      bgColor: '#e8f5e9'
    },
    {
      icon: <HandshakeOutlined />,
      title: 'Customer First',
      description: '24/7 support to keep you connected without worries or interruptions.',
      color: '#ff9800',
      bgColor: '#fff3e0'
    },
    {
      icon: <PublicOutlined />,
      title: 'Trusted Service',
      description: 'Reliable connectivity with 99.9% uptime guarantee and consistent quality.',
      color: '#9c27b0',
      bgColor: '#f3e5f5'
    }
  ];

  const internetPlans = [
    {
      speed: '50',
      name: 'Basic',
      price: 500,
      features: ['Unlimited Data', 'Basic Speed', '1 Device', 'Email Support'],
      color: '#2196f3'
    },
    {
      speed: '100',
      name: 'Premium',
      price: 850,
      popular: true,
      features: ['Unlimited Data', 'Full HD Streaming', '4-5 Devices', '24/7 Support', 'Free Router'],
      color: '#ff9800'
    },
    {
      speed: '200',
      name: 'Ultra',
      price: 1300,
      features: ['Unlimited Data', 'Ultra HD 4K', '10+ Devices', '24/7 Priority Support', 'Free Premium Router'],
      color: '#f44336'
    }
  ];

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


  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible]);

  // Animate numbers when stats become visible
  useEffect(() => {
    if (!isStatsVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedStats({
        customers: Math.floor(10000 * progress),
        years: Math.floor(15 * progress),
        uptime: (99.9 * progress).toFixed(1),
        support: currentStep <= steps / 2 ? 0 : 24
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({
          customers: 10000,
          years: 15,
          uptime: 99.9,
          support: 24
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isStatsVisible]);

  const handleBuyNow = (plan, type) => {
    console.log(`Selected ${type} plan:`, plan);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <BannerCarousel />

      {/* ========== WHAT WE PROVIDE SECTION ========== */}
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: 'white',
          py: { xs: 8, md: 12 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box mb={6}>
            <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
              What We Provide
            </Typography>

            <Typography 
              variant="body1" 
              textAlign="center" 
              color="text.secondary" 
              mb={5}
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              We offer comprehensive connectivity solutions tailored to meet your entertainment and connectivity needs.
            </Typography>

      <Box
  sx={{
    display: "flex",
    gap: 4,
    justifyContent: "center",
    flexWrap: "nowrap",
  }}
>
  {whatWeProvide.map((item, index) => (
    <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }} key={index}>
      <Zoom in timeout={1800 + index * 100}>
        <Card
          elevation={3}
          sx={{
            height: "100%",
            textAlign: "center",
            border: "1px solid",
            borderColor: "divider",
            transition: "all 0.3s",
            bgcolor: "white",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: '0 18px 36px rgba(0,0,0,0.25)',
              borderColor: item.color,
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: item.bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: item.color,
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(360deg)" },
              }}
            >
              {React.cloneElement(item.icon, { sx: { fontSize: 40 } })}
            </Box>

            <Typography variant="h6" fontWeight={600} gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Zoom>
    </Box>
  ))}
</Box>


          </Box>
        </Container>
      </Box>

      {/* ========== ABOUT US SECTION - FIXED ========== */}
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: '#f5f5f5',
          py: { xs: 8, md: 12 },
          mb: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Side - Image */}
            <Grid item xs={12} md={5} sx={{ pr: { md: 9 } }}>
           <Zoom in timeout={800}>
                <Box
                  sx={{
                    perspective: '1200px', // Important for 3D effect
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 300, md: 400 },
                      borderRadius: '30px 30px 30px 80px',
                      overflow: 'hidden',
                      border: '8px solid #d32f2f',
                      boxShadow: '0 20px 60px rgba(211, 47, 47, 0.3)',
                      transition: 'transform 0.4s ease',
                      transformStyle: 'preserve-3d',

                      "&:hover": {
                        transform:
                          "rotateX(10deg) rotateY(-10deg) rotateZ(2deg) scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/hillaryfox.jpg"
                      alt="Family watching TV"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Zoom>
            </Grid>

            {/* Right Side - Content */}
            <Grid item xs={12} md={7}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: '#d32f2f',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: 2,
                      display: 'block',
                      mb: 1
                    }}
                  >
                    WHO WE ARE
                  </Typography>
                  
                  <Typography 
                    variant="h3" 
                    fontWeight={900} 
                    mb={3}
                    sx={{ 
                      color: '#000',
                      lineHeight: 1.3,
                      fontSize: { xs: '1.8rem', md: '2.5rem' }
                    }}
                  >
                    Get TV service with your<br />internet service
                  </Typography>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, 
                      lineHeight: 1.8, 
                      color: '#333', 
                      fontSize: '1rem',
                      textAlign: 'justify'
                    }}
                  >
                    Radha Cable Net is a leading internet and cable television <br />service provider serving thousands of households and businesses <br />in Maharashtra. Since our establishment in 2009, we have <br />been committed to delivering high-speed internet connectivity<br /> and premium entertainment options at affordable prices.
                  </Typography>


                  <Box sx={{ mt: 4 }}>
                    <Button 
                      variant="contained" 
                      size="large"
                      onClick={() => navigate('/about')}
                      sx={{ 
                        bgcolor: '#d32f2f',
                        color: 'white',
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        transition: 'all 0.3s',
                        '&:hover': {
                          bgcolor: '#b71c1c',
                          transform: 'translateX(5px)',
                        }
                      }}
                      endIcon={<ArrowForwardOutlined />}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

{/* WHY CHOOSE US - FULL WIDTH SECTION */}
<Box
  sx={{
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    overflow: "hidden",
  }}
>
  <Grid
    container
    spacing={0}
    sx={{
      flexWrap: "nowrap",   // ⭐ FIX: prevents content from dropping down
      height: { md: 600, xs: "auto" },
    }}
  >

    {/* LEFT IMAGE */}
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src="/images/shvetsa.jpg"
        alt="Why Choose Us"
        sx={{
           width: "100%",
          height: "100%",
          maxHeight: { md: "600px", xs: "350px" },  // ⭐ prevents image cutting
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </Grid>

    {/* RIGHT CONTENT */}
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          bgcolor: "#030322ff",
          height: "600px",          // ⭐ FIX: makes both sides equal height
          p: { xs: 4, md: 7 },
           pl: { xs: 4, md: 40 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#f61818ff",
            fontWeight: 700,
            letterSpacing: 2,
            mb: 2,
          }}
        >
          WHY CHOOSE US
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          We're Connecting You To <br /> Everything That Matters
        </Typography>

        <Typography
          sx={{
            mb: 5,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "85%",
            lineHeight: 1.6,
          }}
        >
          Experience seamless connectivity with our
          cutting-edge internet and cable services<br /> 
          designed to keep you connected to what matters most.
        </Typography>

        {/* FEATURES */}
        <Grid container spacing={4}>
          {[
            {
              icon: <SpeedOutlined />,
              title: "Fast Connected",
              description: "Lightning-fast fiber optic internet <br />for seamless streaming and browsing",
            },
            {
              icon: <TvOutlined />,
              title: "Satellite TV",
              description: "500+ premium channels with HD<br /> qualityentertainment options",
            },
            {
              icon: <HandshakeOutlined />,
              title: "Free Installation",
              description: "Professional installation at no <br />extra cost with expert setup",
            },
            {
              icon: <SecurityOutlined />,
              title: "Home Security",
              description: "Secure and reliable connection with<br /> 99.9% uptime guarantee",
            },
            {
              icon: <SupportAgentOutlined />,
              title: "Support 24/7",
              description: "Round-the-clock customer support for<br /> all your connectivity needs",
            },
            {
              icon: <EmojiEventsOutlined />,
              title: "Best Pricing",
              description: "Affordable plans with  transparent<br /> pricing and  no hidden charges",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2.5 }}>
                <Box 
                  sx={{ 
                    mt: 0.5, 
                    color: "#f42121ff", 
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                  }}
                >
                  {React.cloneElement(item.icon, { sx: { fontSize: 28 } })}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{ 
                      color: "white", 
                      fontWeight: 700, 
                      mb: 0.8, 
                      fontSize: "1rem" 
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      "& br": {
                        display: "block",
                        content: '""',
                      }
                    }}
                  >
                    {item.description.split("<br />").map((text, idx, arr) => (
                      <span key={idx}>
                        {text}
                        {idx < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>

  </Grid>
</Box>



      {/* Internet Plans Section */}
      <Box sx={{ py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Chip
              label="HIGH-SPEED INTERNET"
              color="primary"
              sx={{ mb: 2, fontWeight: 600 }}
            />
            <Typography variant="h4" fontWeight={700} mb={2}>
              Internet Plans for Every Need
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', mb: 1 }}
            >
              Choose the perfect internet plan tailored to your needs. Whether you're a light user or a power user, we have an option for everyone.
            </Typography>
          </Box>

          <Grid container spacing={4} mb={4} justifyContent="center">
            {internetPlans.map((plan, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: plan.popular ? `3px solid ${plan.color}` : '1px solid #e0e0e0',
                    transition: 'all 0.3s',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bgcolor: plan.color,
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 700,
                        fontSize: '0.85rem'
                      }}
                    >
                      MOST POPULAR
                    </Box>
                  )}

                  <CardContent sx={{ flexGrow: 1, p: 4, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight={700} mb={2}>
                      {plan.name}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h3" fontWeight={700} color="primary">
                        {plan.speed}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Mbps
                      </Typography>
                    </Box>

                    <Typography variant="h4" fontWeight={700} color={plan.color} mb={3}>
                      ₹{plan.price}/month
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <List dense sx={{ textAlign: 'left' }}>
                      {plan.features.map((feature, i) => (
                        <ListItem key={i}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlined sx={{ color: plan.color }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  <Box sx={{ p: 2 }}>
                    <Button
                      fullWidth
                      variant={plan.popular ? 'contained' : 'outlined'}
                      sx={{
                        fontWeight: 600,
                        bgcolor: plan.popular ? plan.color : 'transparent',
                        borderColor: plan.color,
                        color: plan.popular ? 'white' : plan.color,
                      }}
                      onClick={() => handleBuyNow(plan, 'internet')}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Cable Plans Section */}
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


      <CustomerFeedback />

      {/* Stats Section */}
      <Box ref={statsRef} sx={{ width: '100%', bgcolor: '#d32f2f', py: { xs: 6, md: 8 }, mb: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between" alignItems="center">
            {[
              { value: `${animatedStats.customers.toLocaleString()}+`, label: 'Happy Customers', icon: <PeopleOutlined /> },
              { value: `${animatedStats.years}+`, label: 'Years of Service', icon: <EmojiEventsOutlined /> },
              { value: `${animatedStats.uptime}%`, label: 'Uptime Guarantee', icon: <SecurityOutlined /> },
              { value: animatedStats.support > 0 ? '24/7' : '0', label: 'Customer Support', icon: <SupportAgentOutlined /> }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Zoom in={isStatsVisible} timeout={500 + index * 200}>
                  <Box textAlign="center" sx={{ pb: 2 }}>
                    <Box sx={{ color: 'white', mb: 2 }}>
                      {React.cloneElement(stat.icon, { sx: { fontSize: { xs: 40, md: 50 } } })}
                    </Box>
                    <Typography variant="h3" fontWeight={700} sx={{ color: 'white', mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', fontWeight: 500, mt: 1.5 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;