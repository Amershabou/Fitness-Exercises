import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        {" "}
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h4" pb="40px" mt="20px">
          Made with ❤️ by Amer Shabou{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
