import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  useTheme,
} from '@mui/material';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

const Hero = () => {
  const theme = useTheme();
  const mySlider = [
    { text: 'MEN', link: '/uploads/car_cover1.jfif' },
    { text: 'Special prices', link: '/uploads/car_cover2.avif' },
    { text: 'WOMEN', link: '/uploads/car_cover3.jpg' },
  ];
  return (
    <Box sx={{ border: '1px solid #ddd', mx: 20, mt: 3, height: '250px', borderTopRightRadius: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 5, overflow: 'hidden', boxShadow: '0 10px 10px #2226' }}>
      <Swiper
        loop="true"
        spaceBetween={0}
        speed={1800}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        className="mySwiper"
        style={{borderTopRightRadius: 50, borderBottomLeftRadius: 50}}
      >
        {mySlider.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={item.link} alt="slider-image" style={{maxWidth: '100%', borderTopRightRadius: 50, borderBottomLeftRadius: 50}} />
              {i === 1 && (
                <Box
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    position: 'absolute',
                    right: '5%',
                  },
                  [theme.breakpoints.down('sm')]: { py: 2 },
                }}
              >
                <Typography variant="h5" sx={{ color: '#2227' }}>
                  This is the best cars community
                </Typography>
                <Typography
                  sx={{ color: '#fff', fontWeight: 400, my: 1 }}
                  variant="h3"
                >
                  {item.text}
                </Typography>

                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography
                    color={'#333'}
                    mr={1}
                    variant="h4"
                    fontSize={'20px'}
                  >
                    SALE UP TO
                  </Typography>
                  <Typography color={'#D23F57'} variant="h4" fontSize={'20px'}>
                    30% OFF
                  </Typography>
                </Stack>

                <Typography
                  sx={{ color: '#000', fontWeight: 300, my: 1 }}
                  variant="body1"
                >
                  Get Free Shipping on orders over $100,000.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: '#222',
                    boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                    color: '#fff',
                    borderRadius: '1px',
                    '&:hover': {
                      bgcolor: '#151515',
                      boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                    },
                  }}
                  variant="contained"
                >
                  shop now
                </Button>
              </Box>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Hero;
