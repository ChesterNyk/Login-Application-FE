import React from "react";
import TextField from "../components/TextField";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userLogin } from "../api/LoginAPI";

const Login = () => {
    // Regular expression pattern for a basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loginError, setLoginError] = React.useState(false);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const authenticateLogin = (res) => {
        console.log(">>>> check login ", res);

        if (res.error === false) {
            dispatch({
                type: "auth/loginUser",
                payload: {
                    username: res.data.userInfo.username,
                    displayName: res.data.userInfo.name,
                    role: res.data.userInfo.role,
                    permission: res.data.userInfo.permission,
                },
            });
            navigate("/landingPage");
        } else {
            setIsAuthenticated(false);
            setLoginError(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Information (username): ", formData.username);
        console.log("Login Information (password): ", formData.password);

        // Validation :
        // check if email and password are not empty
        if (formData.username && formData.password) {
            // check email is in email format
            if (emailPattern.test(formData.username)) {
                userLogin(authenticateLogin, formData);
            } else {
                setIsAuthenticated(false);
                setLoginError(true);
            }
        } else {
            setIsAuthenticated(false);
            setLoginError(true);
        }
    };

    return (
        <Box>
            <Box sx={{ flexGrow: "1", px: 1, py: 1 }}>
                <form onSubmit={handleSubmit}>
                    <Typography
                        variant="h5"
                        sx={{ fontSize: "18pt", fontWeight: "bold" }}
                    >
                        Login
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <TextField
                            label={"Username"}
                            name={"username"}
                            value={formData.email}
                            onChange={(e) =>
                                handleInputChange("username", e.target.value)
                            }
                        />
                        <TextField
                            label={"Password"}
                            name={"password"}
                            value={formData.password}
                            onChange={(e) =>
                                handleInputChange("password", e.target.value)
                            }
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                    >
                        Login
                    </Button>
                    {loginError && (
                        <Typography
                            variant="body2"
                            color="error"
                            align="center"
                        >
                            Incorrect username or password.
                        </Typography>
                    )}
                    {isAuthenticated && (
                        <Typography
                            variant="body2"
                            color="success"
                            align="center"
                        >
                            Login successful!
                        </Typography>
                    )}
                </form>
            </Box>
        </Box>
    );
};

export default Login;
