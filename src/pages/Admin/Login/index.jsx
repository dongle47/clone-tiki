import React from "react";
import "./Login.scss";
import {
    Stack,
    IconButton,
    Button,
    TextField,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";


function Login() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Stack sx={{ width: "100%", height: "100vh", backgroundColor: "#b9ecfe" }}
            justifyContent="center"
            alignItems="center">
            <Stack direction="column" sx={{ width: "600px", backgroundColor: "#fff", padding: "32px", borderRadius: "8px" }} spacing="2rem" >
                <Stack direction="row" alignItems="center" spacing="16px">
                    <AccountCircleIcon sx={{ fontSize: "45px" }} />
                    <h4 style={{ fontSize: "24px" }}> ĐĂNG NHẬP </h4>
                </Stack>
                <TextField id="outlined-basic" label="Nhập email hoặc sđt" variant="outlined" />
                <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
                    <FormControl sx={{ width:"100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Stack>
                <p>Quên mật khẩu ? Nhấn vào <a href="" style={{ color: "#1890ff" }}>đây!</a></p>
                <Button variant="contained" color="warning">Đăng nhập</Button>
            </Stack>
        </Stack>

    )
}

export default Login