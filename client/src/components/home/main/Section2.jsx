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
import { useNavigate } from "react-router-dom";
import "./main.css";

const Section2 = () => {
  const navigate = useNavigate();
  const cars = [
    {
      image: "/uploads/cardTest.jpg",
      carBrand: "بي ام دبليو X1",
      price: "1,550,000 جنية",
    },
    {
      image: "/uploads/carTest2.jpg",
      carBrand: "هافال جوليان",
      price: "925,000 جنيه",
    },
    {
      image: "/uploads/carTest3.jpg",
      carBrand: "هيونداي توسان 2022",
      price: "1,570,000 جنيه",
    },
    {
      image: "/uploads/carTest4.jpg",
      carBrand: "هيونداي I20",
      price: "800,000 جنيه",
    },
    {
      image: "/uploads/carTest5.jpg",
      carBrand: "بي ام دبليو 523 Sedan",
      price: "750,000 جنيه",
    },
    {
      image: "/uploads/carTest6.jpg",
      carBrand: "هيونداي اكسنت 1998",
      price: "215,000 جنيه",
    },
    {
      image: "/uploads/carTest7.jpg",
      carBrand: "مرسيدس C 300 2020",
      price: "4,000,000 جنيه",
    },
    {
      image: "/uploads/carTest8.jpg",
      carBrand: "هوندا سيفك 2010",
      price: "590,000 جنيه",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#fff", direction: "rtl", pt: 5, px: 2 }}>
      {/* Header */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ borderBottom: "1px solid #ddd" }}
      >
        <Typography
          sx={{
            color: "#f2a23d",
            fontWeight: "bold",
            fontSize: 18,
            borderBottom: "1px solid #f2a23d",
            pb: 1,
          }}
        >
          سيارات مستعملة للبيع
        </Typography>
        <Typography
          sx={{
            color: "#3160a6",
            direction: "rtl",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            pb: 1,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/usedcars')}
        >
          شاهد كل السيارات المستعملة للبيع{" "}
          <Typography sx={{ fontSize: 12 }}>{">"}</Typography>
        </Typography>
      </Stack>

      {/* Cards Stack */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ flexWrap: "wrap", mt: 3 }}
      >
        {/* Card */}
        {cars.map((car, i) => (
            <Box
            key={i}
            className="cardBox"
            sx={{
              width: "calc(25% - 15px)",
              height: 220,
              boxShadow: "0 2px 8px 0 rgba(0, 0, 0, .15)",
              borderRadius: 1,
              overflow: "hidden",
              mb: 2,
              cursor: "pointer",
            }}
          >
            <img
              src={car.image}
              alt="car image"
              style={{
                width: "100%",
                borderTopRightRadius: 1,
                borderTopLeftRadius: 1,
              }}
            />
            <Box
              sx={{
                py: 1,
                direction: "rtl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ color: "#3160a6", fontWeight: "bold", fontSize: 15 }}
              >
                {car.carBrand}
              </Typography>
              <Typography
                sx={{ color: "#4a4a4a", fontSize: 20, fontWeight: "bold" }}
              >
                {car.price}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Section2;
