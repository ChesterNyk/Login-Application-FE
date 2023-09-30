import React from "react";
import Login from "../features/Login";
import { Box } from "@mui/material";
import LoginAppBar from "../components/AppBar";

const LoginPage = () => {
    return (
        <Box sx={{ overflow: "hidden", height: "100vh", backgroundColor:"#E5E5E5" }}>
            <LoginAppBar />
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
                <Login />
            </Box>
        </Box>
    );
};

export default LoginPage;
