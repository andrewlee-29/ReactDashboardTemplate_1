import { Box, useTheme, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={theme.palette.netural.light}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary.main}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
