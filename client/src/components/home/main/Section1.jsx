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

const Section1 = () => {
  const [carBrand, setCarBrand] = useState("اختر ماركة");
  const brands = [
    "اختر ماركة",
    "تويوتا",
    "نيسان",
    "هونداي",
    "كيا",
    "فولفو",
    "بورش",
    "مرسيدس",
    "BMW",
    "أودي",
    "فيراري",
    "كاديلاك",
    "فورد",
    "شيفरलية",
    "رينو",
    "بيجو",
    "سيتروين",
    "ألفا روميو",
    "مازدا",
    "ميتسوبيشي",
    "suzuki",
    "هيونداي الكترا",
    "جيلي",
    "جاك",
    "lantana",
    "جينس",
  ];

  const [carModel, setCarModel] = useState("اختر موديل");
  const models = [
    "اختر موديل",
    "كامري",
    "كورولا",
    "سنتينال",
    "سوناتا",
    "أورora",
    "إكسنت",
    "ريو",
    "سبورتاج",
    "جراند تشروكي",
    "كايروكا",
    "911",
    "كلاس ميرسيدسSL",
    "BMW 328",
    "أودي A4",
    "فيراري 488",
    "ني Huracan",
    "كاديلاك скаledi",
    "فورد موستنج",
    "شيفरलية كاپريس",
    "رينو كليو",
    "بيجو 508",
    "سيتروين C4",
    "ألفا روميو جوليا",
    "مازدا 3",
    "ميتسوبيشي أوتلnder",
    "suzuki جراند فيتارا",
    "هيونداي آي30",
    "جيلي جي سي 6",
    "جاك س 5",
    "lantana إم جي",
    "جينس GS",
  ];

  const [carKind, setCarKind] = useState("اختر نوع");
  const kinds = [
    "اختر نوع",
    "سيدان",
    "هاتشباك",
    "كوبية",
    "4x4",
    "ميني فان",
    "SUV",
  ];

  const [city, setCity] = useState("اختر مدينة");
  const citiesList = [
    "اختر مدينة",
    "القاهرة",
    "الاسكندرية",
    "الجيزة",
    "السويس",
    "المنصورة",
    "طنطا",
  ];

  const [startYear, setStartYear] = useState("منذ");
  const [endYear, setEndYear] = useState("قبل");
  const startYearsList = [
    "منذ",
    2025,
    2024,
    2023,
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
  ];
  const endYearsList = [
    "قبل",
    2025,
    2024,
    2023,
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
  ];
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 2,
            direction: "rtl",
            borderBottom: "1px solid #ddd",
            bgcolor: "#fff",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
          }}
        >
          <Typography sx={{ color: "#222", direction: "rtl", fontSize: 23 }}>
            سيارات للبيع : بيع أو شراء سيارة في مصر
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          sx={{ bgcolor: "#fafafa", direction: "rtl" }}
        >
          <Box
            sx={{ width: "50%", borderLeft: "1px solid #ddd", px: 3, pb: 3 }}
          >
            <Box
              sx={{
                direction: "rtl",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Typography
                sx={{
                  py: 1,
                  color: "#3160a6",
                  direction: "rtl",
                  fontSize: 18,
                  display: "flex",
                  justifyContent: "right",
                  gap: 1,
                  alignItems: "center",
                  borderBottom: "1px solid #3160a6",
                  width: "fit-content",
                }}
              >
                ابحث عن سيارة مستعملة{" "}
                <Typography
                  sx={{ color: "#b1b1b1", direction: "rtl", fontSize: 13 }}
                >
                  (38533 سيارة للبيع)
                </Typography>
              </Typography>
            </Box>

            <Stack
              direction={"row"}
              justifyContent={"right"}
              alignItems={"center"}
              gap={1}
            >
              <Stack direction={"column"} gap={1} sx={{ py: 3 }}>
                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={carBrand}
                  onChange={(e) => setCarBrand(e.target.value)}
                >
                  {brands.map((brand, i) => (
                    <MenuItem key={i} value={brand}>
                      {brand}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {citiesList.map((city, i) => (
                    <MenuItem key={i} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                >
                  {startYearsList.map((year, i) => (
                    <MenuItem key={i} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>

                <Box>
                  <Typography>السعر من</Typography>
                  <TextField
                    sx={{
                      "& input": { height: 5, bgcolor: "#fff" },
                      width: "200px",
                    }}
                  />
                </Box>
              </Stack>

              <Stack direction={"column"} gap={1} sx={{ py: 3 }}>
                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                >
                  {models.map((model, i) => (
                    <MenuItem key={i} value={model}>
                      {model}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={carKind}
                  onChange={(e) => setCarKind(e.target.value)}
                >
                  {kinds.map((kind, i) => (
                    <MenuItem key={i} value={kind}>
                      {kind}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 40, // adjust the height value as needed
                      color: "#2229",
                      fontSize: "18px",
                      // border: '1px solid #2225',
                      direction: "rtl",
                      bgcolor: "#fff",
                    },
                    width: "200px",
                    "& .MuiSelect-icon": {
                      right: "auto",
                      left: 10, // adjust the value to move the icon to the left
                    },
                  }}
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                >
                  {endYearsList.map((year, i) => (
                    <MenuItem key={i} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </TextField>

                <Box>
                  <Typography>السعر الي</Typography>
                  <TextField
                    sx={{
                      "& input": { height: 5, bgcolor: "#fff" },
                      width: "200px",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{ width: "100%", bgcolor: "#3160a6", fontSize: 20 }}
            >
              بحث
            </Button>
          </Box>

          <Box sx={{ width: "50%", px: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                gap: 2,
                alignItems: "center",
                direction: "rtl",
                borderBottom: "1px solid #ddd",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  color: "#3160a6",
                  direction: "rtl",
                  fontSize: 18,
                  py: 1,
                  borderBottom: "1px solid #3160a6",
                  width: "fit-content",
                }}
              >
                اشهر الماركات
              </Typography>

              <Typography
                sx={{ color: "#b1b1b1", direction: "rtl", fontSize: 18 }}
              >
                نوع الهيكل
              </Typography>

              <Typography
                sx={{ color: "#b1b1b1", direction: "rtl", fontSize: 18 }}
              >
                بالاسعار
              </Typography>
            </Box>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ flexWrap: "wrap" }}
            >
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/toyota1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/skuda1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/sheforle1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/reno1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/nissan1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/mg1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/metso1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/marcedis1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/kia1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/hyundai1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/fiat1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
              <Box sx={{ width: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.9s', borderRadius: 3, '&:hover': { bgcolor: '#ddd', cursor: 'pointer' } }}>
                <img
                  src={"/uploads/nissan1.png"}
                  alt="logo"
                  width={70}
                  height={70}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Section1;
