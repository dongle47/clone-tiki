import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import "./Header.scss";
import { useState, useCallback } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { Stack, Button, Typography, Badge, Box, Modal } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useSelector } from "react-redux";
import { logoutSuccess } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import Login from "../Login";
import SignUp from "../SignUp";
import Search from "../Search";
import ForgetPassword from "../ForgetPassword";
import { addItem } from "../../slices/searchSlice";
import apiProduct from "../../apis/apiProduct";
import apiHome from "../../apis/apiHome";

const publicPath = ["/product/", "/filter/", "/payment/"];

function Header() {
  const [CategorySpecify, setCategorySpecify] = useState([]);

  const [suggestions, setSuggestions] = useState([]);

  const [trendingSearch, setTrendingSearch] = useState([]);

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const searchedItems = useSelector((state) => state.search.items);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      apiProduct.getProducts().then((res) => {
        const names = res.map((item) => item.name);
        setSuggestions(names);
      });
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      apiProduct.getProducts().then((res) => {
        const products = res.map((item) => ({
          id: item.id,
          name: item.name,
          imgUrl: item.image,
        }));

        var randomIndex = [];
        let i = 0;
        while (i < 6) {
          const number = Math.floor(Math.random() * 188);
          if (randomIndex.includes(number) === false) {
            randomIndex.push(number);

            setTrendingSearch((prev) => [...prev, products[number]]);
            i++;
          }
        }
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const abc = suggestions
      .map((item) => item.toLowerCase())
      .filter((item) => item.includes(searchText));
    setFilteredSuggestions(abc);
  }, [searchText]);

  useEffect(() => {
    const getDataCategorySpecify = async () => {
      let param = {};
      const response = await apiHome.getCategorySpecify(param);
      if (response) {
        setCategorySpecify(response);
      }
    };
    getDataCategorySpecify();
  },[]);

  const [modalLogin, setModalLogin] = useState(false);
  const openModalLogin = () => setModalLogin(true);

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [isForgetPwd, setIsForgetPwd] = useState(false);
  const [focusSearch, setFocusSearch] = useState(false);

  const cart = useSelector((state) => state.cart.items);

  const user = useSelector((state) => state.auth.user); //lấy user từ store

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(addItem(searchText));
  };

  const onChangeSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    const isPublic =
      publicPath.findIndex((e) => location.pathname.includes(e)) >= 0
        ? true
        : false;
    if (!isPublic) navigate("/");
  };

  const closeModalLogin = () => {
    setModalLogin(false);
    setIsLoginForm(true);
    setIsRegister(false);
    setIsForgetPwd(false);
  };

  const handleOpenSignup = useCallback(() => {
    setIsRegister(true);
    setIsForgetPwd(false);
    setIsLoginForm(false);
  }, []);

  const handleOpenLogin = useCallback(() => {
    setIsLoginForm(true);
    setIsRegister(false);
    setIsForgetPwd(false);
  }, []);

  const handleOpenForgetPwd = useCallback(() => {
    setIsForgetPwd(true);
    setIsRegister(false);
    setIsLoginForm(false);
  });

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
    return () => document.removeEventListener("click", () => {});
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
              onChange={onChangeSearch}
              value={searchText}
            />
            {focusSearch && (
              <Search
                trendingCategory={CategorySpecify}
                trendingSearch={trendingSearch}
                setSearchText={setSearchText}
                suggestions={filteredSuggestions}
                searchedItems={searchedItems}
                searchText={searchText}
              />
            )}
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
              onClick={handleSearch}
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
            spacing="10px"
            sx={{ color: "white", width: "160px", maxWidth: "160px" }}
          >
            {user ? (
              <>
                <img alt="" src={user.img} />

                <Stack>
                  <Typography sx={{ fontSize: "11px" }}>Tài khoản</Typography>

                  <Button
                    sx={{ color: "white", padding: "6px 0" }}
                    endIcon={<ArrowDropDownOutlinedIcon />}
                  >
                    <Typography
                      className="text-overflow-1-lines"
                      sx={{ fontSize: "13px", textAlign: "start" }}
                    >
                      {user.fullName}
                    </Typography>
                  </Button>
                </Stack>

                <Box className="header__dropdown">
                  <Link to={"/customer/order/history"}>Đơn hàng của tôi</Link>

                  <Link to={"/customer/wishlist"}>Sản phẩm yêu thích</Link>

                  <Link to={"/customer/notification"}>Thông báo của tôi</Link>

                  <Link to={"/customer/account/edit"}>Tài khoản của tôi</Link>

                  <Link to="/">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://salt.tikicdn.com/ts/ta/06/60/57/811aae78f04f81a6e00ba2681e02291f.png"
                      />
                      <Stack>
                        <Box>SEP 0</Box>

                        <Box>
                          Bạn đang có <b>0 Astra</b>
                        </Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/insurance.png"
                      />

                      <Stack>
                        <Box>Hợp đồng bảo hiểm</Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://salt.tikicdn.com/ts/upload/5b/70/af/ac0eacaa8ec6738ac474f7bbe767bd75.png"
                      />
                      <Stack>
                        <Box>TikiNOW</Box>

                        <Box>Thông tin Gói hội viên</Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/customer/coupons">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_code.svg"
                      />
                      <Stack>
                        <Box>Mã giảm giá </Box>
                        <Box>
                          Bạn đang có <b>2</b> mã giảm giá
                        </Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/TopUpXu/xu-icon.svg"
                      />
                      <Stack>
                        <Box>Thông tin Tiki xu</Box>
                        <Box>
                          Bạn đang có <b>0</b> Tiki xu
                        </Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/">
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img
                        className="header__dropdown-img"
                        alt=""
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/bookcare.svg"
                      />
                      <Stack>
                        <Box>Thông tin BookCare</Box>
                        <Box>
                          Bạn đang có <b>0</b> BookCare
                        </Box>
                      </Stack>
                    </Stack>
                  </Link>

                  <Link to="/">Đổi trả dễ dàng</Link>

                  <a onClick={handleLogout}>Thoát tài khoản</a>
                </Box>
              </>
            ) : (
              <>
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
              </>
            )}
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
          <a href="/admin">
            <Button
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
          {/* {isLoginForm ? (
            <Login
            handleOpenSignup={handleOpenSignup}
              closeModalLogin={closeModalLogin}
            />
          ) : (
            <SignUp
            handleOpenLogin={handleOpenLogin}
              closeModalLogin={closeModalLogin}
            />
          )} */}
          {isLoginForm && (
            <Login
              handleOpenSignup={handleOpenSignup}
              closeModalLogin={closeModalLogin}
              handleOpenForgetPwd={handleOpenForgetPwd}
            />
          )}
          {isRegister && (
            <SignUp
              handleOpenLogin={handleOpenLogin}
              closeModalLogin={closeModalLogin}
            />
          )}
          {isForgetPwd && <ForgetPassword closeModalLogin={closeModalLogin} />}
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
