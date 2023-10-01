import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopAppBar = (props) => {
    const { name } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({
            type: "auth/logoutUser"
        });
        navigate("/login")
    }

    return (
        <>
            <AppBar title="Login Application" position="static">
                <Toolbar title="Login">
                    {name !== "login" ? (
                        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end"}}>
                            <Button color="inherit" variant="outlined" onClick={handleLogout}>Logout</Button>
                        </Box>
                    ) : (
                        ""
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default TopAppBar;
