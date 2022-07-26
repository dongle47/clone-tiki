import React from "react";
import "./Login.scss";
import {
    Stack,
    IconButton,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";


function Login() {
    const [showPass, setShowPass] = useState(false);
    return (
        <Stack className="loginAdmin">
            <Stack className="loginAdmin__wrap" spacing={4}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <AccountCircleIcon sx={{ fontSize: "45px" }} />
                    <Typography conponent="h4" fontSize="24px"> ĐĂNG NHẬP </Typography>
                </Stack>
                <TextField id="outlined-basic" label="Nhập email hoặc sđt" variant="outlined" />
                <Stack direction="row" width="100%" position="relative">
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
                <Typography fontSize="14px">Quên mật khẩu ? Nhấn vào <a href="/" style={{ color: "#1890ff",fontSize:"14px" }}>đây!</a></Typography>
                <Button variant="contained" color="warning">Đăng nhập</Button>
            </Stack>
        </Stack>

    )
}

export default Login