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

const Section4 = () => {
  const news = [
    {
      image: "/uploads/news1.jpg",
      news: "استمرار العمل على مشروع يازاكي لضفائر السيارات بالفيوم",
    },
    {
      image: "/uploads/news2.jpg",
      news: "هيونداي تتصدر سوق السيارات في مصر خلال يونيو الماضي",
    },
    {
      image: "/uploads/news3.jpg",
      news: "59 سيارة تدخل سوق السيارات في بني سويف ورسم الدخول 30 جنيه",
    },
    {
      image: "/uploads/news4.jpg",
      news: "وصول هوندا ZR-V الجديدة لمصر بفئة وحيدة",
    },
    {
      image: "/uploads/news5.jpg",
      news: "4 سيارات مرسيدس في مزاد جديد لأحد البنوك",
    },
    {
      image: "/uploads/news6.jpg",
      news: "بحث توطين وتنمية صناعة السيارات والصناعات المغذية لها في مصر ",
    },
    {
      image: "/uploads/news7.jpg",
      news: "انطلاق مزاد سيارات جديد في 22 يوليو",
    },
    {
      image: "/uploads/news8.jpg",
      news: "75 ألف جنيه كاش باك على شانجان UNI-T",
    },
    {
      image: "/uploads/news9.jpg",
      news: " المصرية التجارية وأوتوموتيف تطرح الطراز الجديد كليًّا من أودي Q7 في مصر",
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
            اخر اخبار السيارات
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
              cursor: "pointer",
            }}
          >
            منتدي السيارات{" "}
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
          {news.map((car, i) => (
            <Box
              key={i}
              className="cardBox"
              sx={{
                width: "calc(34% - 15px)",
                height: 230,
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
                  px: 1,
                }}
              >
                <Typography
                  sx={{ color: "#3160a6", fontWeight: "bold", fontSize: 15 }}
                >
                  {car.news}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Section4;
