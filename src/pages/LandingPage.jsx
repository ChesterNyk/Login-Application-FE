import React from "react";
import TopAppBar from "../components/AppBar";
import { Box } from "@mui/material";
import UserDetails from "../features/UserDetails";
import { useSelector } from "react-redux";

const LandingPage = () => {
    const permissionList = useSelector((state) => {
      const permissionCode = state.permission.map((info, index) => {
        return info.code
      })

      return permissionCode
    });

    console.log(">>> state ", permissionList);

    return (
        <Box
            sx={{
                overflow: "hidden",
                height: "100vh",
                backgroundColor: "#E5E5E5",
            }}
        >
            <TopAppBar />
            {permissionList.includes("V01") ? <Box
                sx={{
                    width: "80%",
                    position: "relative",
                    display: "flex",
                    justifySelf: "center",
                    py: 2,
                    mx: 5,
                }}
            >
                <UserDetails permissionList = {permissionList}/>
            </Box> : "You are not authorised to view this page"}
        </Box>
    );
};

export default LandingPage;
