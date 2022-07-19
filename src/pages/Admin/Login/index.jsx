import React from "react";
import "./Login.scss";
import {
    Grid,
    Stack,
    IconButton,
    Button,
    Typography,
    hexToRgb,
    Badge,
    Box,
    Modal,
    TextField,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";


function Login() {
    const [showPass, setShowPass] = useState(false);
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
                <Stack direction="row" sx={{ width: "100%", position:"relative" }}>
                    <TextField id="outlined-basic" label="Nhập mật khẩu" variant="outlined" sx={{ width:"100%" }} />
                    <span className="iconShowPass">
                        <IconButton onClick={() => setShowPass(!showPass)}>
                            {showPass ? (
                                <VisibilityOutlinedIcon />
                            ) : (
                                <VisibilityOffOutlinedIcon />
                            )}
                        </IconButton>
                    </span>
                </Stack>
                <p>Quên mật khẩu ? Nhấn vào <a href="" style={{ color: "#1890ff" }}>đây!</a></p>
                <Button variant="contained" color="warning">Đăng nhập</Button>
            </Stack>
        </Stack>

    )
}

export default Login