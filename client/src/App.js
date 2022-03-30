import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import EditPlayer from './pages/EditPlayer';
import PencarianPlayer from './pages/PencarianPlayer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/player/edit" element={<EditPlayer />} />
            <Route path="/player/cari" element={<PencarianPlayer />} />
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
