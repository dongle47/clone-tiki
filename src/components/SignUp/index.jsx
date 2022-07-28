import React from "react";

import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
  Input
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function SignUp(props) {

    const [pass, setPass] = React.useState({
      password: '',
      showPassword: false,
    });
  
    const [passConf, setPassConf] = React.useState({
      passwordConf: '',
      showPasswordConf: false,
    });
  
    const handleChangePass = (prop) => (event) => {
      setPass({ ...pass, [prop]: event.target.value });
    };
  
    const handleChangePassConf = (prop) => (event) => {
      setPassConf({ ...passConf, [prop]: event.target.value });
    };
  
    const handleClickShowPass = () => {
      setPass({
        ...pass,
        showPassword: !pass.showPassword,
      });
    };
  
    const handleClickShowPassConf = () => {
      setPassConf({
        ...passConf,
        showPasswordConf: !passConf.showPasswordConf,
      });
    };
  
    const handleMouseDownPass = (event) => {
      event.preventDefault();
    };
  
    const handleMouseDownPassConf = (event) => {
      event.preventDefault();
    };
    return (
      <Stack direction="row">
        <Stack direction="column" sx={{ flex: 5 }} spacing={2}>
          <h4 style={{ fontSize: "24px" }}>Đăng ký</h4>
  
          <p style={{ fontSize: "15px" }}>tạo tài khoản</p>
          <TextField id="standard-basic" label="Nhập họ tên" variant="standard" />
          <div style={{ width: "100%", display: "flex" }}>
            <TextField
              id="standard-basic"
              label="Số điện thoại"
              variant="standard"
              sx={{ flex: 1 }}
            />
            <Button variant="outlined" sx={{ width: "100px" }}>
              Gửi mã
            </Button>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <TextField
              id="standard-basic"
              label="Nhập mã"
              variant="standard"
              sx={{ flex: 1 }}
            />
            <Button variant="outlined" sx={{ width: "100px" }}>
              Xác nhận
            </Button>
          </div>
          {/* <TextField id="standard-basic" label="Nhập mật khẩu" variant="standard" /> */}
  
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
          {/* <TextField id="standard-basic" label="Nhập lại mật khẩu" variant="standard" /> */}
  
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="outlined-adornment-password">Nhập lại mật khẩu</InputLabel>
            <Input
              id="password-config"
              type={passConf.showPasswordConf ? 'text' : 'password'}
              value={passConf.password}
              onChange={handleChangePassConf('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassConf}
                    onMouseDown={handleMouseDownPassConf}
                    edge="end"
                  >
                    {passConf.showPasswordConf ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant="contained" color='error'>Hoàn Tất</Button>
          <p style={{ textAlign: "center" }}>Đăng nhập bằng mail</p>
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
    )
  }
  
  export default SignUp