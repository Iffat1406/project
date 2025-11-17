import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    title: "Welcome to Our Site",
    subtitle: "Discover amazing deals today!",
    
    buttonText: "Shop Now",
    buttonColor: "primary",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    title: "New Arrivals",
    subtitle: "Check out the latest collection",
    buttonText: "Explore",
    buttonColor: "success",
  },
  {
    id: 3,
    image: "/images/vite.svg",
    title: "Fast & Modern",
    subtitle: "Built with Vite + React",
    buttonText: "Learn More",
    buttonColor: "warning",
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setShowText(false);
      setTimeout(() => setShowText(true), 2000); // delay text 2s
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initial text reveal after 1s
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        borderRadius: 2,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={slide.image}
        alt={slide.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.8)",
          transition: "transform 0.8s ease-in-out",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Text Overlay */}
      <AnimatePresence>
        {(showText || hovered) && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
            >
              {slide.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              {slide.subtitle}
            </Typography>
            <Button
              variant="contained"
              color={slide.buttonColor}
              size="large"
              sx={{ borderRadius: "50px" }}
            >
              {slide.buttonText}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default BannerCarousel;
