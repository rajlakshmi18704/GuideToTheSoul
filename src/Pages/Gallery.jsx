import React from 'react'
import { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log(import.meta.env.VITE_UNSPLASH_API_KEY);

        const response = await fetch(
          "https://api.unsplash.com/search/photos?query=Lord%20Krishna&per_page=20",

          {
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "2vmax",
      }}
    >
     
      <Grid container spacing={3} justifyContent="center">
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "15px",
                height: "300px", 
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={image.urls.regular}
                alt={image.alt_description || "Lord Krishna"}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery
