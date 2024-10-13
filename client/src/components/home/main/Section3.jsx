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
import "./main.css";

const Section3 = () => {
  const cars = [
    {
      image: "/uploads/newCar1.png",
      carBrand: "ام جى ار اكس 5 بلس 2024",
      deposit: "444,000 جنيه",
      from: "1,450,000 جنيه",
      to: "1,500,000 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar2.png",
      carBrand: "جيتور X70 2024",
      deposit: "383,000 جنيه",
      from: "1,184,000 جنيه",
      to: "1,254,000 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar3.jpg",
      carBrand: "اوبل كورسا 2024 الشكل الجديد",
      deposit: "325,000 جنية",
      from: "1,000,000 جنيه",
      to: "1,249,990 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar4.jpg",
      carBrand: "نيسان قشقاي 2025",
      deposit: "260,000 جنية",
      from: "1,341,500 جنيه",
      to: "1,482,500 جنيه",
      storeIcon: "/uploads/smallIcon2.jpg",
    },
    {
      image: "/uploads/newCar5.jpg",
      carBrand: "سوزوكى سويفت ديزاير 2024",
      deposit: "219,000 جنيه",
      from: "500,000 جنيه",
      to: "669,000 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar6.png",
      carBrand: "شيرى اريزو 5 2025",
      deposit: "242,000 جنيه",
      from: "630,000 جنيه",
      to: "700,000 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar7.jpg",
      carBrand: "شيرى تيجو 3 2024",
      deposit: "252,000 جنيه",
      from: "600,000 جنيه",
      to: "780,000 جنيه",
      storeIcon: "/uploads/smallIcon.png",
    },
    {
      image: "/uploads/newCar8.jpg",
      carBrand: "شيرى تيجو 7 2025",
      deposit: "306,000 جنيه",
      from: "950,000 جنيه",
      to: "1,025,000 جنيه",
      storeIcon: "/uploads/smallIcon3.jpg",
    },
  ];
  return (
    <Box sx={{ bgcolor: "#fff", direction: "rtl", pt: 10, px: 2 }}>
      {/* Header */}
      <Stack
        direction={"row"}
        justifyContent={"right"}
        alignItems={"center"}
        sx={{ borderBottom: "1px solid #ddd" }}
      >
        <Typography
          sx={{
            color: "#3160a6",
            fontWeight: "bold",
            fontSize: 18,
            borderBottom: "1px solid #f2a23d",
            pb: 1,
          }}
        >
          سيارات جديدة للبيع و بالتقسيط
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
              height: 360,
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
                px: 1,
                direction: "rtl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid #ddd5",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  pb: 0.5,
                }}
              >
                <Typography
                  sx={{ color: "#3160a6", fontWeight: "bold", fontSize: 15 }}
                >
                  {car.carBrand}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  pt: 1,
                  pb: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  borderBottom: '1px solid #ddd5'
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Typography sx={{ color: "#222", fontSize: 15 }}>
                    أقل مقدم
                  </Typography>
                  <Typography
                    sx={{ color: "#4a4a4a", fontSize: 15, fontWeight: "bold" }}
                  >
                    {car.deposit}
                  </Typography>
                </Box>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ width: "100%" }}
                >
                  <Box>
                    <Typography sx={{ color: "#222", fontSize: 15 }}>
                      من
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4a4a4a",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {car.from}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#222", fontSize: 15 }}>
                      الي
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4a4a4a",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {car.to}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box sx={{ width: '100%', py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={car.storeIcon} alt="icon" style={{ width: 40, height: 40, borderRadius: '50%' }}/>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Section3;
