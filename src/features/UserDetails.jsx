import { Box, Card, Typography, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
    const userInfo = useSelector((state) => {
        console.log(">>> state ", state);
        console.log(">>> state.userDetails ", state.userDetails);

        return state.userDetails;
    });

    const { permissionList } = props;

    console.log(permissionList);

    return (
        <>
            <Container
                sx={{
                    height: "100vh", // Adjust the height for centering vertically
                }}
            >
                <Card style={{ width: "100%" }}>
                    <Box>
                        {permissionList.includes("VL01") ? (
                            <Box p={2}>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Welcome {userInfo.displayName}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: "12pt" }}
                                >
                                    UserName : {userInfo.username}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: "12pt" }}
                                >
                                    Role: {userInfo.role}
                                </Typography>
                            </Box>
                        ) : (
                            "You are not authorised to view this information"
                        )}
                        {permissionList.includes("VL02") ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Link to="/allAccountPage">
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "12pt",
                                            px: 1,
                                        }}
                                    >
                                        View all accounts
                                    </Typography>
                                </Link>
                            </Box>
                        ) : (
                            ""
                        )}
                    </Box>
                </Card>
            </Container>
        </>
    );
};

export default UserDetails;
