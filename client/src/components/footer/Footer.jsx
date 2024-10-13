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

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#2a3034",
        marginTop: 30,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%", height: "95%", px: 20, direction: "rtl" }}
      >
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={6}
        >
          <Box>
            <Typography
              sx={{ color: "#697580", fontSize: 20, cursor: "pointer" }}
            >
              الرئيسية
            </Typography>
            <Typography
              sx={{ color: "#697580", fontSize: 20, cursor: "pointer" }}
            >
              اتصل بنا
            </Typography>
            <Typography
              sx={{ color: "#697580", fontSize: 20, cursor: "pointer" }}
            >
              شروط عامة
            </Typography>
            <Typography
              sx={{ color: "#697580", fontSize: 20, cursor: "pointer" }}
            >
              الخصوصية
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{ color: "#697580", fontSize: 20, cursor: "pointer" }}
            >
              كُن على تواصل معنا
            </Typography>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{ flexDirection: "row", direction: "rtl" }}
            >
              <Button variant="contained" sx={{ bgcolor: "#55595d" }}>
                <img src="/uploads/fbIcon.png" alt="fb" style={{ width: 10 }} />
              </Button>

              <Button variant="contained" sx={{ bgcolor: "#55595d" }}>
                <img
                  src="/uploads/twitterIcon.png"
                  alt="fb"
                  style={{ width: 24 }}
                />
              </Button>
            </Stack>
          </Box>
        </Stack>

        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "green", fontWeight: "bold", display: "flex" }}
            >
              شعار
              <Typography
                variant="h3"
                sx={{ color: "blue", fontWeight: "bold" }}
              >
                الموقع
              </Typography>
            </Typography>
          </Box>

          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            
              <img src="/uploads/google_play.png" alt="google_play" style={{ width: "150px" }} />
            
            
              <img src="/uploads/App_Store.svg" alt="apple_store" style={{ width: "130px", marginBottom: 6 }} />
            
            
              <img src="/uploads/huawei_icon.png" alt="huawie_store" style={{ width: "130px" }} />
            
          </Stack>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "100%",
          pl: 20,
          py: 1.5,
          textAlign: "left",
          bgcolor: "#1e2427",
        }}
      >
        <Typography
          sx={{
            color: "#697580",
            fontSize: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
            width: "fit-content",
          }}
        >
          Ahmed hamado
          <Typography sx={{ color: "#fff", fontSize: 12 }}>2024 ©</Typography>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
