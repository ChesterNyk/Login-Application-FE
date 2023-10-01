import React from "react";
import TopAppBar from "../components/AppBar";
import { Box } from "@mui/material";
import UserList from "../features/UserList";

const AllAccountsPage = () => {
    return (
        <Box
            sx={{
                overflow: "hidden",
                height: "100vh",
                backgroundColor: "#E5E5E5",
            }}
        >
            <TopAppBar />
            <Box sx={{py:1, px:1 , display: "flex", justifyContent: "center"}}>
                <UserList />
            </Box>
        </Box>
    );
};

export default AllAccountsPage;
