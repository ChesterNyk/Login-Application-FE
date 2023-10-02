import React from "react";
import { TextField } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

const TextFieldComponent = (props) => {
    const { name, label, value, onChange, placeholder } = props;
    const inputType = name === "password" ? "password" : "text";

    const fieldIcons =
        name === "password" ? (
            <Lock color="primary" fontSize="small" />
        ) : (
            <AccountCircle color="primary" fontSize="small" />
        );

    return (
        <TextField
            label={label}
            name={name}
            type={inputType}
            variant="outlined"
            margin="normal"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={{
                startAdornment: fieldIcons,
            }}
            sx={{px:1 , py:1 }}
        />
    );
};

export default TextFieldComponent;
