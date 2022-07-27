import React, { useEffect } from "react";
import "./Header.scss";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Stack,
  IconButton,
  Button,
  Typography,
  Badge,
  Box,
  Modal,
  TextField,
  Popover,
  Input
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Header() {
  const [modalLogin, setModalLogin] = useState(false);

  const [loginForm, setLoginForm] = useState(true);

  const [focusSearch, setFocusSearch] = useState(false);

  const openModalLogin = () => setModalLogin(true);

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
            />
            {focusSearch && (
              <Box
                id="input-search-result"
                sx={{ width: "calc(100% - 8rem)" }}
                px={2}
                className="header__search__result"
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ height: "44px" }}
                >
                  <Typography>Deal Hot Từ Abbott</Typography>
                  <img
                    alt=""
                    src="https://salt.tikicdn.com/cache/140x28/ts/banner/76/dc/6e/cdf1d2ce2de591e94dabf818db15261a.jpg.webp"
                    width="140px"
                    height="28px"
                  ></img>
                </Stack>

                <Stack sx={{ height: "36px" }} direction="row" spacing={1}>
                  <SearchIcon sx={{ fontSize: "25px" }} />
                  <Typography
                    sx={{ fontSize: "13px", fontweight: 500, flex: 1 }}
                  >
                    tai nghe Bluetooth
                  </Typography>
                  <ClearIcon></ClearIcon>
                </Stack>

                <Stack sx={{ height: "36px" }} direction="row" spacing={1}>
                  <SearchIcon sx={{ fontSize: "25px" }} />
                  <Typography
                    sx={{ fontSize: "13px", fontweight: 500, flex: 1 }}
                  >
                    Iphone 13
                  </Typography>
                  <ClearIcon></ClearIcon>
                </Stack>

                <Stack
                  sx={{ height: "36px" }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: "16px", color: "#0D5CB6" }}>
                    Xem thêm
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Stack>

                <Box pt={1} pb={1.5}>
                  <Stack sx={{ height: "24px" }} direction="row" mb={1}>
                    <img
                      alt=""
                      src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
                      width="24px"
                      height="24px"
                    ></img>
                    <Typography>Tìm kiếm phổ biến</Typography>
                  </Stack>
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <Grid key={number} item xs={4}>
                        <Stack direction="row">
                          <img
                            alt=""
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg"
                            width="38px"
                            height="38px"
                          ></img>
                          <Typography my={0.5} sx={{ fontSize: "12px" }}>
                            Người đua diều
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box pt={1} pb={1.5}>
                  <Typography sx={{ height: "24px" }} mb={1}>
                    Danh Mục Nổi Bật
                  </Typography>
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                      <Grid key={number} item xs={3}>
                        <Stack justifyContent="center" alignItems="center">
                          <img
                            alt=""
                            src="https://salt.tikicdn.com/cache/280x280/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg"
                            width="64,5px"
                            height="64,5px"
                          ></img>
                          <Typography
                            my={0.5}
                            sx={{ textAlign: "center", fontSize: "12px" }}
                          >
                            Tai nghe Bluetooth nhét tai
                          </Typography>
                        </Stack>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
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
                <Link to={"/sale/order/history"}>Đơn hàng của tôi</Link>
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
                <Badge color="warning" badgeContent={0} showZero>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "32px" }} />
                </Badge>
                <Typography sx={{ fontSize: "12px" }}>Giỏ hàng</Typography>
              </Stack>
            </Link>

              <Button
                sx={{
                  color: "white",
                  borderRadius: "50px",
                  padding: "0.1rem ",
                  fontSize: "small",
                }}
                variant="contained"
                startIcon={<StorefrontOutlinedIcon />}
              >
                <Typography sx={{ fontSize: "10px" }}>Admin</Typography>
              </Button>
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

function Login(props) {
  return (
    <Stack direction="row">
      <Stack direction="column" sx={{ flex: 5 }} spacing={2}>
        <h4 style={{ fontSize: "24px" }}>Xin chào,</h4>
        <p style={{ fontSize: "15px" }}>Đăng nhập hoặc tạo tài khoản</p>
        <TextField
          id="standard-basic"
          label="Số Điện Thoại"
          variant="standard"
        />
        <Button variant="contained" color="error">
          Tiếp tục
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

function Signin(props) {

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

export default Header;
