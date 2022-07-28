import React, { useEffect } from "react";
import "./Header.scss";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  Stack,
  Button,
  Typography,
  Badge,
  Box,
  Modal,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useSelector } from "react-redux";
import Login from "../Login"
import SignUp from "../SignUp"
import Search from "../Search";

function Header() {
  const [modalLogin, setModalLogin] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [focusSearch, setFocusSearch] = useState(false);
  const openModalLogin = () => setModalLogin(true);
  const cart = useSelector(state => state.cart.items)

  const closeModalLogin = () => {
    setModalLogin(false);
    setLoginForm(true);
  };

  const handleLogin = useCallback(() => {
    setLoginForm(false);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const searchResultElement = document.getElementById(
        "input-search-result"
      );
      if (searchResultElement) {
        const isClickInsideElement = searchResultElement.contains(event.target);
        if (!isClickInsideElement && event.target.id !== "input-search") {
          setFocusSearch(false);
        }
      }
    });
    return () => document.removeEventListener("click", () => { });
  }, []);

  return (
    <header style={{ backgroundColor: "#2196f3" }}>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{
          height: "100px",
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        <Link to={"/"}>
          <Stack sx={{ width: "190px" }} spacing={1.5} pt={2}>
            <img
              alt=""
              style={{ width: "60px", height: "40px" }}
              src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
            />
            <img
              style={{ width: "83px", height: "12px" }}
              alt=""
              src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
            />
          </Stack>
        </Link>

        <Box sx={{ flex: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ padding: "0", height: "40px", flex: 1, position: "relative" }}
          >
            <input
              style={{ height: "100%", flex: 1 }}
              id="input-search"
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              onFocus={() => setFocusSearch(true)}
            />
            {focusSearch && <Search />}
            <Button
              sx={{
                height: "100%",
                width: "8rem",
                backgroundColor: "#0D5CB6",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
              variant="contained"
              startIcon={<SearchIcon />}
            >
              Tìm kiếm
            </Button>
          </Stack>
        </Box>

        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={3}
          py={2}
        >
          <Stack
            className="header__account"
            direction="row"
            alignItems="center"
            sx={{ color: "white", width: "160px", maxWidth: "160px" }}
          >
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

              <div className="header__dropdown">
                <Link to={"/customer/order/history"}>Đơn hàng của tôi</Link>
                <Link to={"/customer/wishlist"}>Sản phẩm yêu thích</Link>
                <Link to={"/customer/notification"}>Thông báo của tôi</Link>
                <Link to={"/customer/account/edit"}>Tài khoản của tôi</Link>
                <Link to="/">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://salt.tikicdn.com/ts/ta/06/60/57/811aae78f04f81a6e00ba2681e02291f.png"
                    />
                    <Stack>
                      <div>SEP 0</div>
                      <div>
                        Bạn đang có <b>0 Astra</b>
                      </div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/account/insurance.png"
                    />
                    <Stack>
                      <div>Hợp đồng bảo hiểm</div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://salt.tikicdn.com/ts/upload/5b/70/af/ac0eacaa8ec6738ac474f7bbe767bd75.png"
                    />
                    <Stack>
                      <div>TikiNOW</div>
                      <div>Thông tin Gói hội viên</div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/customer/coupons">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_code.svg"
                    />
                    <Stack>
                      <div>Mã giảm giá </div>
                      <div>
                        Bạn đang có <b>2</b> mã giảm giá
                      </div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/xu-icon.svg"
                    />
                    <Stack>
                      <div>Thông tin Tiki xu</div>
                      <div>
                        Bạn đang có <b>0</b> Tiki xu
                      </div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      className="header__dropdown__img"
                      alt=""
                      src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bookcare.svg"
                    />
                    <Stack>
                      <div>Thông tin BookCare</div>
                      <div>
                        Bạn đang có <b>0</b> BookCare
                      </div>
                    </Stack>
                  </Stack>
                </Link>
                <Link to="/">Đổi trả dễ dàng</Link>
                <Link to="/">Thoát tài khoản</Link>
              </div>
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Link to="/cart">
              <Stack
                justifyContent="flex-end"
                alignItems="flex-end"
                direction="row"
                spacing={1}
                sx={{ color: "white", width: "110px", maxWidth: "110px" }}
              >
                <Badge color="warning" badgeContent={cart.length} showZero>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "32px" }} />
                </Badge>
                <Typography fontSize="12px">Giỏ hàng</Typography>
              </Stack>
            </Link>
            <a href="/admin"><Button
              sx={{
                color: "white",
                borderRadius: "50px",
                padding: "0.25rem 1rem ",
                fontSize: "small",
              }}
              variant="contained"
              startIcon={<StorefrontOutlinedIcon />}
            >
              <Typography fontSize="10px">Admin</Typography>
            </Button>
            </a>
          </Stack>
        </Stack>

        <Modal
          sx={{ overflowY: "scroll" }}
          open={modalLogin}
          onClose={closeModalLogin}
        >
          <Box className="modal-login" sx={{ width: "800px" }}>
            {loginForm ? (
              <Login
                handleLogin={handleLogin}
                closeModalLogin={closeModalLogin}
              />
            ) : (
              <SignUp closeModalLogin={closeModalLogin} />
            )}
          </Box>
        </Modal>
      </Stack>
    </header>
  );
}

export default Header;
