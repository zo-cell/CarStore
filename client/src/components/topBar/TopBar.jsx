import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  Menu,
  MenuItem,
} from '@mui/material';

const TopBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('مصر - كل المدن');
  const locationList = [
    'مصر - كل المدن',
    'القاهرة',
    'الاسكندرية',
    'الجيزة',
    'السويس',
    'المنصورة',
    'طنطا',
  ];

  const [anchorUS, setAnchorUS] = useState(null);
  const openUS = Boolean(anchorUS);

  const handleClick = (event) => {
    setAnchorUS(event.currentTarget);
  };

  const handleCloseUS = () => {
    setAnchorUS(null);
  };
  return (
    <Stack direction={'column'} sx={{ width: '100%', direction: 'rtl', boxShadow: '0 10px 12px #000' }}>
      {/* First row in the Navbar */}
      <Box
        sx={{
          display: 'flex',
          pl: 20,
          bgcolor: '#f2f2f7',
          py: 1,
          direction: 'ltr',
        }}
      >
        <Typography
          sx={{ pr: 1, borderRight: '1px solid #2223', fontWeight: 'bold' }}
        >
          English
        </Typography>
        <Typography component="div" sx={{ px: 1, fontWeight: 'bold' }}>
          اتصل بنا
        </Typography>
      </Box>

      {/* Second Row */}
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ px: 20, py: 3, bgcolor: '#fff' }}
      >
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={3}
        >
          {/* Logo */}
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <Typography
              variant="h4"
              sx={{ color: 'green', fontWeight: 'bold', display: 'flex' }}
            >
              شعار
              <Typography
                variant="h4"
                sx={{ color: 'blue', fontWeight: 'bold' }}
              >
                الموقع
              </Typography>
            </Typography>
          </Box>

          {/* Locations */}
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
          >
            <img
              src="/uploads/location2.png"
              alt="location"
              style={{ width: '25px' }}
            />
            <TextField
              select
              sx={{
                '& .MuiInputBase-root': {
                  height: 40, // adjust the height value as needed
                  color: '#2229',
                  fontSize: '18px',
                  // border: '1px solid #2225',
                },
                
              }}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locationList.map((l, i) => (
                <MenuItem key={i} value={l} sx={{direction: 'rtl'}}>
                  {l}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>

        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={1}
        >
          <Button
            variant={'outlined'}
            sx={{
              display: 'flex',
              gap: 1,
              direction: 'rtl',
              fontWeight: 'bold',
              fontSize: '18px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/uploads/user3.png" style={{ width: '25px' }} />{' '}
            تسجيل الدخول
          </Button>
          <Button
            variant={'contained'}
            sx={{
              display: 'flex',
              gap: 1,
              direction: 'rtl',
              bgcolor: 'orange',
              fontWeight: 'bold',
              fontSize: '18px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="/uploads/camera.png" style={{ width: '35px' }} />{' '}
            أضف إعلانك الان
          </Button>
        </Stack>
      </Stack>

      {/* Third row (Nivigation Menue Bar) */}
      <Stack
        direction={'row'}
        justifyContent={'right'}
        alignItems={'center'}
        gap={3}
        sx={{ direction: 'rtl', px: 20, bgcolor: '#222', color: '#fff' }}
      >
        <Typography onClick={handleClick} sx={{fontWeight: 'bold', display: 'flex', gap: 0.5, direction: 'rtl', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>معارض سيارات <img src='/uploads/arrowDown2.png' style={{width: '17px', height: '17px', color: '#fff'}} /></Typography>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorUS}
          open={openUS}
          onClose={handleCloseUS}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{ mt: 3, direction: 'rtl' }}
        >
          {/* <MenuItem onClick={handleCloseUS}>Profile</MenuItem> */}
          <MenuItem sx={{fontWeight: 'bold'}}>معارض السيارات المستعملة </MenuItem>
          <MenuItem sx={{fontWeight: 'bold'}}>معارض السيارات الجديدة</MenuItem>
          <MenuItem sx={{fontWeight: 'bold'}}>معارض السيارات المعتمدون</MenuItem>
        </Menu>

        <Typography sx={{fontWeight: 'bold'}}>تأمين سيارات</Typography>
        <Typography sx={{fontWeight: 'bold'}}>سيارات كسر زيرو</Typography>
        <Typography sx={{fontWeight: 'bold'}}>ونش انقاذ</Typography>
      </Stack>
    </Stack>
  );
};

export default TopBar;
