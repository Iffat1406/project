import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowForward, Speed, Wifi, Tv } from "@mui/icons-material";

const slides = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    title: "Lightning-Fast Internet",
    subtitle: "Experience the Future of Connectivity",
    description: "Get blazing speeds up to 200 Mbps with unlimited data. Perfect for streaming, gaming, and working from home.",
    buttonText: "View Internet Plans",
    buttonColor: "primary",
    icon: <Wifi sx={{ fontSize: 60 }} />,
    route: "/plans/internet-plans",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    title: "Premium Cable TV",
    subtitle: "500+ Channels of Entertainment",
    description: "Enjoy HD quality channels with sports, movies, news, and kids content. Entertainment for the whole family at affordable prices.",
    buttonText: "Explore Cable Plans",
    buttonColor: "error",
    icon: <Tv sx={{ fontSize: 60 }} />,
    route: "/plans/cable-plans",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    title: "Unmatched Reliability",
    subtitle: "99.9% Uptime Guarantee",
    description: "Stay connected with our fiber-optic network. 24/7 customer support and same-day service activation available.",
    buttonText: "Get Started Today",
    buttonColor: "warning",
    icon: <Speed sx={{ fontSize: 60 }} />,
    route: "/contact",
  },
];

const colorMap = {
  primary: "#1976d2",
  error: "#d32f2f",
  warning: "#ed6c02",
  success: "#2e7d32",
  info: "#0288d1",
};

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [nextSlide, setNextSlide] = useState(slides[1]);

  // Preload next image and auto-slide every 4s
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const newIndex = (prev + 1) % slides.length;
          setNextSlide(slides[(newIndex + 1) % slides.length]);
          return newIndex;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const slide = slides[currentSlide];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setNextSlide(slides[(index + 1) % slides.length]);
  };

  const handleButtonClick = () => {
    // Navigate to the specific route
    console.log("Navigate to:", slide.route);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "85vh" },
        overflow: "hidden",
        mb: 8,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image Container - Always shows current slide */}
      <Box
        component="img"
        src={slide.image}
        alt={slide.title}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.6)",
          zIndex: 0,
        }}
      />

      {/* Animated Overlay Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)",
          zIndex: 1,
        }}
      />

      {/* Decorative Animated Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.2) 0%, transparent 70%)",
          animation: "pulse 4s ease-in-out infinite",
          zIndex: 1,
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
            "50%": { transform: "scale(1.3)", opacity: 0.8 },
          },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,152,0,0.2) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
          zIndex: 1,
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />

      {/* Text Content - Left Aligned */}
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: 0,
          left: 60,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: "650px",
              color: "white",
            }}
          >
            {/* Icon Animation */}
            <motion.div
              initial={{ y: -100, opacity: 0, rotate: -180 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: colorMap[slide.buttonColor] || "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  mb: 3,
                  border: "2px solid rgba(255,255,255,0.3)",
                  boxShadow: `0 0 30px ${colorMap[slide.buttonColor]}40`,
                }}
              >
                {slide.icon}
              </Box>
            </motion.div>

            {/* Title Animation */}
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <Typography
                variant="h2"
                fontWeight={900}
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.2,
                  mb: 2,
                  background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {slide.title}
              </Typography>
            </motion.div>

            {/* Subtitle Animation */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.95)",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                }}
              >
                {slide.subtitle}
              </Typography>
            </motion.div>

            {/* Description Animation */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
                  maxWidth: "600px",
                }}
              >
                {slide.description}
              </Typography>
            </motion.div>

            {/* Button Animation */}
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                color={slide.buttonColor}
                size="large"
                endIcon={<ArrowForward />}
                onClick={handleButtonClick}
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                  },
                }}
              >
                {slide.buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
          zIndex: 3,
        }}
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <Box
              onClick={() => handleDotClick(index)}
              sx={{
                width: currentSlide === index ? 40 : 12,
                height: 12,
                borderRadius: 6,
                background:
                  currentSlide === index
                    ? "white"
                    : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow: currentSlide === index ? "0 0 20px rgba(255,255,255,0.8)" : "none",
                "&:hover": {
                  background: "white",
                },
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default BannerCarousel;