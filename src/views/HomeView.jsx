import React from "react";
import Typography from "@mui/material//Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material//Container";
import Box from "@mui/material/Box";

const HomeView = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        component="h1"
        variant="h1"
        sx={{ mt: 30, mb: 5, display: "flex", justifyContent: "center" }}
      >
        Welcome to the PhoneBook!
      </Typography>
      <Box
        component="span"
        sx={{ p: 2, display: "flex", justifyContent: "center" }}
      >
        <Button variant="outlined" size="large" href="/login">
          Let's get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomeView;
