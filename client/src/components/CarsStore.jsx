
import {useState, useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import TopBar from './topBar/TopBar';
import Footer from './footer/Footer';
import '../index.css';

const CarsStore = () => {
  return (
    <Box sx={{bgcolor: '#eee'}}>
      <TopBar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default CarsStore;
