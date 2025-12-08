import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Container,
  Rating,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const testimonials = [
  {
    name: "Priya Kulkarni",
    role: "Homemaker",
    location: "Mahim, Mumbai",
    rating: 5,
    text: "The internet speed is amazing and the support team is always available. Best service provider in town! My kids can attend online classes without any buffering.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rajesh Patil",
    role: "Business Owner",
    location: "Dadar, Mumbai",
    rating: 5,
    text: "Affordable packages and reliable connection. The installation was professional and quick.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Neha Sharma",
    role: "Software Developer",
    location: "Bandra, Mumbai",
    rating: 5,
    text: "Upload and download speeds are exactly as promised. Perfect for work from home!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };
  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <Box
      sx={{
        width: "100%",
        py: 12,
        position: "relative",
        background: "linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%)",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ textAlign: "center", position: "relative" }}>
        {/* Top Heading */}
        <Typography variant="overline" fontWeight={600} letterSpacing={2} sx={{ mb: 1, color: "#e91e63", fontSize: 14 }}>
          TESTIMONIAL
        </Typography>

        <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
          Your trusted Internet provider since 2015
        </Typography>

        <Typography variant="body1" sx={{ mb: 6, color: "#666", maxWidth: 700, mx: "auto" }}>
          High-speed internet is now available even to remote areas with our satellite internet.
        </Typography>

        {/* Background Opening Quote */}
        <Box
          sx={{
            fontSize: 180,
            color: "#e91e63",
            opacity: 0.8,
            position: "absolute",
            left: "5%",
            top: "60%",
            transform: "translateY(-50%)",
            zIndex: 0,
            userSelect: "none",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          ❝
        </Box>

        {/* Background Closing Quote */}
        <Box
          sx={{
            fontSize: 180,
            color: "#e91e63",
            opacity: 0.8,
            position: "absolute",
            right: "5%",
            top: "60%",
            transform: "translateY(-50%)",
            zIndex: 0,
            userSelect: "none",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          ❞
        </Box>

        {/* Left Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "60%",
            left: 20,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#f2f2f2" },
            zIndex: 3,
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "60%",
            right: 20,
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            boxShadow: 2,
            "&:hover": { backgroundColor: "#f2f2f2" },
            zIndex: 3,
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* Avatar */}
        <Avatar
          src={t.image}
          alt={t.name}
          sx={{
            width: 95,
            height: 95,
            mx: "auto",
            mb: 3,
            border: "3px solid #e91e63",
            zIndex: 2,
            position: "relative",
          }}
        />

        <Rating value={t.rating} readOnly sx={{ mt: 1 }} />

        {/* Text */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: 750,
            mx: "auto",
            mb: 4,
            color: "#444",
            fontSize: 18,
            lineHeight: 1.8,
            zIndex: 2,
            position: "relative",
          }}
        >
          {t.text}
        </Typography>

        {/* Name */}
        <Typography variant="h6" fontWeight={700}>
          {t.name}
        </Typography>

        <Typography variant="body2" color="gray" sx={{ mt: 0.5 }}>
          {t.role} — {t.location}
        </Typography>

        {/* Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 3 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: i === index ? "#e91e63" : "#ccc",
                transition: "0.3s",
              }}
            ></Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerFeedback;