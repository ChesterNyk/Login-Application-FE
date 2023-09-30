import React from 'react';
import TopAppBar from '../components/AppBar';
import { Box } from '@mui/material';

const LandingPage = () => {
  return (
    <Box sx={{ overflow: "hidden", height: "100vh", backgroundColor:"#E5E5E5" }}>
    <TopAppBar />
    <Box
        sx={{
            width: "80%",
            position: "relative",
            display: "flex",
            justifySelf: "center",
            py: 2,
            mx:5
        }}
    >
    </Box>
</Box>
  );
};

export default LandingPage;