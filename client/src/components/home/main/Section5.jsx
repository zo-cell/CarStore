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

const Section5 = () => {
  const cars = [
    {
      image: "/uploads/cardTest.jpg",
      carBrand: "اوبل أسترا اوبل استرا كوزمو ٢٠١٤ اعلى فئه للبيع البحر الأحمر",
      price: "1,550,000 جنية",
    },
    {
      image: "/uploads/carTest2.jpg",
      carBrand: "كيا سيراتو طنطا",
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
      carBrand: "رينو كليو كل صياناتها معموله ف معادها الفتيش تمام المكنه تمام فيهاش اي مشكله العربيه بتسافر مرتاحه ف حجات بسيطه جدا فيهاش اي لحمات كل حاجه ف الطابلوه شغال مجهزه تكيف البحر الأحمر",
      price: "4,000,000 جنيه",
    },
    {
      image: "/uploads/carTest8.jpg",
      carBrand: "هوندا سيفك 2010",
      price: "590,000 جنيه",
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ bgcolor: "#fff" }}
    >
      <Box
        sx={{ bgcolor: "#fff", direction: "rtl", pt: 10, px: 2, width: "80%" }}
      >
        {/* Header */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          //   alignItems={"center"}
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
            أخر السيارات المضافة
          </Typography>
          <Typography
            sx={{
              color: "#222",
              direction: "rtl",
              fontWeight: "bold",
              pb: 1,
              cursor: "pointer",
              borderBottom: "1px solid #222",
            }}
          >
            أكثر الموديلات بحثاً
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          //   alignItems={"center"}
          
        >
          <Typography
            sx={{
              color: "#f2a23d",
              fontWeight: "bold",
              fontSize: 18,
              
            }}
          >
            
          </Typography>
          <Typography
            sx={{
              color: "#3160a6",
              direction: "rtl",
              fontWeight: "bold",
            fontSize: 14,
              pt: 2,
              cursor: "pointer",
              borderBottom: "1px solid #3160a6",
            }}
          >
            استعرض كافة الموديلات
          </Typography>
        </Stack>

        {/* Cards Stack */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
        //   alignItems={"center"}
          sx={{ flexWrap: "wrap", mt: 2 }}
        >
          {/* Card */}
          {cars.map((car, i) => (
            <Box
              key={i}
              className="cardBox"
              sx={{
                width: "calc(51% - 15px)",
                minHeight: 80,
                boxShadow: "0 2px 8px 0 rgba(0, 0, 0, .15)",
                borderRadius: 1,
                overflow: "hidden",
                mb: 2,
                cursor: "pointer",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                flexDirection: "row",
                px: 1,
                gap: 2,
              }}
            >
              <img
                src={car.image}
                alt="car image"
                style={{
                  width: "100px",
                  borderTopRightRadius: 1,
                  borderTopLeftRadius: 1,
                }}
              />
              <Box
                sx={{
                  py: 1,
                  pl: 1,
                  direction: "rtl",
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ color: "#3160a6", fontWeight: "bold", fontSize: 15 }}
                >
                  {car.carBrand}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                    bgcolor: "#5cb95c",
                    py: 0.5,
                    px: 1,
                    borderRadius: 3,
                  }}
                >
                  {car.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Section5;
