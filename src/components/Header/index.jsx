import React from "react";
import "./Header.scss";
import { useState, useCallback } from "react"

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
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [modalLogin, setModalLogin] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const openModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => {
    setModalLogin(false);
    setLoginForm(true)
  }

  const handleLogin = useCallback(() => {
    setLoginForm(false)
  })
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      sx={{ backgroundColor: hexToRgb("#2196f3"), height: "7rem" }}
    >
      <Stack
        onClick={() => (window.location = "/")}
        sx={{ ml: "5rem" }}
        spacing={1.5}
      >
        <img
          style={{ width: "4rem", height: "3rem" }}
          src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
          alt=""
        />

        <img
          style={{ width: "5rem", height: "1rem" }}
          alt=""
          src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
        />
      </Stack>

      <Stack
        sx={{ mr: "3rem", height: "2.5rem" }}
        direction="row"
        justifyContent="flex-end"
        spacing={3}
      >
        <Stack direction="row" alignItems="center" sx={{ padding: "0" }}>
          <input
            style={{}}
            id="input-search"
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
          />
          <Button
            sx={{
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            variant="contained"
            startIcon={<SearchIcon />}
          >
            Tìm kiếm
          </Button>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ color: "white" }}>
          <PersonOutlineOutlinedIcon fontSize="large" />

          <Stack>
            <Typography sx={{ fontSize: "11px" }}>
              Đăng nhập / Đăng ký
            </Typography>
            <Button
              onClick={openModalLogin}
              sx={{ color: "white" }}
              endIcon={<ArrowDropDownOutlinedIcon />}
            >
              <Typography sx={{ fontSize: "13px" }}>Tài khoản</Typography>
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <Stack
            justifyContent="flex-end"
            direction="row"
            spacing={1}
            sx={{ color: "white" }}
          >
            <Badge color="warning" badgeContent={0} showZero>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>

            <Typography sx={{ fontSize: "12px" }}>Giỏ hàng</Typography>
          </Stack>

          <Button
            sx={{
              color: "white",
              borderRadius: "50px",
              padding: "3px auto",
              fontSize: "small",
            }}
            variant="contained"
            startIcon={<StorefrontOutlinedIcon />}
          >
            <Typography sx={{ fontSize: "10px" }}>
              Admin
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <Modal open={modalLogin} onClose={closeModalLogin}>
        <Box className="modal-login" sx={{ width: "800px" }}>
          {
            loginForm ? <Login handleLogin={handleLogin} closeModalLogin={closeModalLogin} /> : <Signin closeModalLogin={closeModalLogin} />
          }</Box>
      </Modal>
    </Stack>
  );
}

function Login(props) {
  return (
    <Stack direction="row">
      <Stack direction='column' sx={{ flex: 5 }} spacing={2}>
        <h4 style={{ fontSize: "24px" }}>Xin chào,</h4>
        <p style={{ fontSize: "15px" }}>Đăng nhập hoặc tạo tài khoản</p>
        <TextField id="standard-basic" label="Số Điện Thoại" variant="standard" />
        <Button variant="contained" onClick={props.handleLogin} color='error' >Tiếp tục</Button>
        <p style={{ textAlign: "center" }}>Đăng nhập bằng mail</p>
        <p style={{ textAlign: "center", marginTop: "3rem" }} >Tiếp tục bằng</p>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} >
          <img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" width="58px" height="58px" />
          <img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" width="58px" height="58px" />
        </Stack>
        <p style={{ textAlign: "center" }}>Bằng việc tiếp tục, bạn đã chấp nhận <a href="">điều khoản sử dụng</a></p>
      </Stack>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" width="203" />
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

function Signin(props) {
  return (
    <Stack direction="row">
      <Stack direction='column' sx={{ flex: 5 }} spacing={2}>
        <h4 style={{ fontSize: "24px" }}>Đăng ký</h4>
        <p style={{ fontSize: "15px" }}>tạo tài khoản</p>
        <TextField id="standard-basic" label="Nhập họ tên" variant="standard" />
        <div style={{width:"100%", display:"flex"}}>
          <TextField id="standard-basic" label="Số điện thoại" variant="standard" sx={{flex:1}} />
          <Button variant="outlined" sx={{width:"100px"}}>Gửi mã</Button>
        </div>
        <div style={{width:"100%", display:"flex"}}>
          <TextField id="standard-basic" label="Nhập mã" variant="standard" sx={{flex:1}}/>
          <Button variant="outlined" sx={{width:"100px"}}>Xác nhận</Button>
        </div>
        <TextField id="standard-basic" label="Nhập mật khẩu" variant="standard" />
        <TextField id="standard-basic" label="Nhập lại mật khẩu" variant="standard" />
        <Button variant="contained" color='error'>Hoàn Tất</Button>
        <p style={{ textAlign: "center" }}>Đăng nhập bằng mail</p>
        <p style={{ textAlign: "center", marginTop: "3rem" }} >Tiếp tục bằng</p>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} >
          <img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" width="58px" height="58px" />
          <img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" width="58px" height="58px" />
        </Stack>
        <p style={{ textAlign: "center" }}>Bằng việc tiếp tục, bạn đã chấp nhận <a href="">điều khoản sử dụng</a></p>
      </Stack>
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" width="203" />
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

export default Header;
