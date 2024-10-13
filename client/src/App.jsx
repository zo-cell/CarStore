import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { ColorModeContext, useMode } from './components/Theme';
import CarsStore from './components/CarsStore';
import Homepage from './components/home/Homepage';
import UsedCars from './components/usedCars/UsedCars';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Routes>
          <Route
              path={'/'}
              element={
                <CarsStore

                />
              }
            >
              <Route
                index
                element={
                  <Homepage/>
                }
              />

              <Route
                path="usedcars"
                element={
                  <UsedCars />
                }
              />
              
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
