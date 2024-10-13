import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  useTheme,
  TextField,
  MenuItem,
} from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Main = () => {
  return (
    <Box
      sx={{
        mx: 20,
        mt: 2,
        boxShadow: "0 0 20px rgba(0, 0, 0, .2)",
        borderRadius: 5,
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Box>
  );
};

export default Main;
