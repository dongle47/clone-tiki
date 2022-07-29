import React, { useEffect, useState } from "react";
import { loginSuccess } from '../../slices/authSlice'
import { useDispatch } from 'react-redux';
import apiMain from '../../apis/apiMain'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
  Typography,
  Input,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function Login(props) {
  const dispatch = useDispatch()

  const [msgError, setMsgError] = useState()
  const [phone, setPhone] = useState("")
  const [pass, setPass] = React.useState({
    password: "",
    showPassword: false,
  });


  const handleLogin = () => {
    let params = {
      phone: phone,
      password: pass.password,
    }

    let user = {
      name:"tnnk",
      image:"https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
    }

    if(phone==="0123456789" && pass.password==="12345678"){
      dispatch(loginSuccess(user))
    }
    else
      setMsgError("Sai mật khẩu hoặc tên đăng nhập")

    apiMain.postLogin(params).then(res => {
      dispatch(loginSuccess(res.data))
    }
    ).catch(error => {
      setMsgError(error.message)
    })
  }

  
  const handleChangePass = (prop) => (event) => {
    setPass({ ...pass, [prop]: event.target.value });
  };

  const handleClickShowPass = () => {
    setPass({
      ...pass,
      showPassword: !pass.showPassword,
    });
  };

  const handleMouseDownPass = (event) => {
    event.preventDefault();
  };

  return (
    <Stack direction="row">
      <Stack direction="column" sx={{ flex: 5 }} spacing={2}>
        <h4 style={{ fontSize: "24px" }}>Xin chào,</h4>
        <p style={{ fontSize: "15px" }}>Đăng nhập hoặc tạo tài khoản</p>
        <TextField
          id="standard-basic"
          label="Số Điện Thoại"
          variant="standard"
          value={phone}
          onChange={(event)=>setPhone(event.target.value)}
        />
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            variant="standard"
            id="password"
            type={pass.showPassword ? 'text' : 'password'}
            value={pass.password}
            onChange={handleChangePass('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPass}
                  onMouseDown={handleMouseDownPass}
                  edge="end"
                >
                  {pass.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Typography>
          {msgError}
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogin}>
          Đăng nhập
        </Button>
        <p style={{ textAlign: "center" }}>Đăng nhập bằng mail</p>
        <p style={{ textAlign: "center" }}>
          Nếu bạn chưa có tài khoản?
          <span
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={props.handleLogin}
          >
            {" "}
            Đăng ký
          </span>
        </p>
        <p style={{ textAlign: "center", marginTop: "3rem" }}>Tiếp tục bằng</p>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <img
            src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"
            alt="facebook"
            width="58px"
            height="58px"
          />
          <img
            src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"
            alt="google"
            width="58px"
            height="58px"
          />
        </Stack>
        <p style={{ textAlign: "center" }}>
          Bằng việc tiếp tục, bạn đã chấp nhận{" "}
          <a href="/">điều khoản sử dụng</a>
        </p>
      </Stack>
      <Box
        sx={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          alt=""
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          width="203"
        />
        <h4>Mua sắm tại Tiki</h4>
        <span>Siêu ưu đãi mỗi ngày</span>
      </Box>
      <span style={{ position: "absolute", top: 0, right: 0 }}>
        <IconButton onClick={props.closeModalLogin}>
          <CloseIcon />
        </IconButton>
      </span>
    </Stack>
  );
}

export default Login