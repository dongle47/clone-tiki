import React from "react";
import "./Header.scss";

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
} from "@mui/material";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [modalLogin, setModalLogin] = React.useState(false);
  const openModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => setModalLogin(false);

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
              Bán hàng cùng Tiki
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <Modal open={modalLogin} onClose={closeModalLogin}>
        <Box className="modal-login" >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Login
            </Typography>
            <IconButton onClick={closeModalLogin}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}

export default Header;
