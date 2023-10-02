import { Box, Card, Typography, Container, Grid } from "@mui/material";
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
                    <Box sx={{display: "flex"}}>
                        {permissionList.includes("VL01") ? (
                            <Grid container spacing={3} sx={{ px: 1, py: 1 }}>
                                {/* Header : Welcome text */}
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Welcome {userInfo.displayName}
                                    </Typography>
                                </Grid>

                                {/* User details */}
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        alignItems={"center"}
                                        spacing={2}
                                    >
                                        <Grid item xs={8}>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontSize: "12pt" }}
                                            >
                                                <b>UserName</b>:{" "}
                                                {userInfo.username}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                sx={{ fontSize: "12pt" }}
                                            >
                                                <b>Role</b>: {userInfo.role}
                                            </Typography>
                                        </Grid>

                                        {/* View all account: only seen by manager role */}
                                        {permissionList.includes("VL02") ? (
                                            <Grid item xs={4} md={6}>
                                                <Link to="/allAccountPage">
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            fontWeight: "bold",
                                                            fontSize: "12pt",
                                                        }}
                                                    >
                                                        View all accounts
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                        ) : (
                                            ""
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        ) : (
                            "You are not authorised to view this information"
                        )}
                    </Box>
                </Card>
            </Container>
        </>
    );
};

export default UserDetails;
