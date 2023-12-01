import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Welcome to KFC – where flavor meets satisfaction in every bite! At our KFC restaurant, we pride ourselves on delivering the ultimate fried chicken experience that's crispy on the outside, tender on the inside, and bursting with our signature blend of 11 herbs and spices. From our iconic Original Recipe Chicken to mouthwatering Zinger sandwiches, we offer a diverse menu to tantalize your taste buds.
      Our commitment to quality extends beyond our chicken. Indulge in our delicious sides like mashed potatoes, coleslaw, and mac 'n' cheese, all crafted with care to complement your meal. At KFC, we understand the importance of variety, catering to every palate with our array of flavorful options.
      Dine-in with family and friends in our warm, inviting atmosphere, or opt for the convenience of takeout and delivery – either way, we're here to satisfy your cravings. Experience the joy of sharing a bucket of chicken, creating memories over a shared meal that brings people together.
      At KFC, we're not just about food; we're about creating moments of happiness through the irresistible taste of our world-famous chicken. Join us and savor the satisfaction that comes with every bite – because at KFC, it's finger-lickin' good!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
