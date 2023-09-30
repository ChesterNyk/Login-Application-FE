import React from "react";
import TextField from "../components/TextField";
import { Box, Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    // Regular expression pattern for a basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loginError, setLoginError] = React.useState(false);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Information (email): ", formData.email);
        console.log("Login Information (password): ", formData.password);

        // Validation :
        // check if email and password are not empty
        if (formData.email && formData.password) {
            // check email is in email format
            if (emailPattern.test(formData.email)) {
              setIsAuthenticated(true);
              navigate("/landingPage")
              setLoginError(false);
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
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <Box sx={{ flexGrow: "1", px: 1, py: 1 }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" align="center" gutterBottom>
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
                            label={"Email"}
                            name={"email"}
                            value={formData.email}
                            onChange={(e) =>
                                handleInputChange("email", e.target.value)
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
                            Incorrect email or password.
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
        </Card>
    );
};

export default Login;