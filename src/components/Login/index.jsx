import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorInput, ErrorAfterSubmit } from "../ErrorHelper";

import { GgLogin } from "../GoogleLogin";
import { FbLogin } from "../FacebookLogin";

import { loginSuccess, logoutSuccess } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import apiAuth from "../../apis/apiAuth";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
  Typography,
  Input,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../Loading";
import { toast } from "react-toastify";

function Login(props) {
  const dispatch = useDispatch();
  const client_url = "http://localhost:3000/"

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPass, setIsShowPass] = React.useState(false);

  const [isNoAccount, setIsNoAccount] = useState(false);

  const [wrongPass, setWrongPass] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    if (loading) {
      toast.warning(
        "Thao tác đang thực hiện. Vui lòng không thao tác quá nhanh"
      );
      return;
    }
    setLoading(true);
    let params = {
      password: data.pass,
      phone: data.phoneNumber,
    };

    apiAuth
      .postLogin(params)
      .then((res) => {
        let { accessToken, refreshToken, user } = res.data;
        dispatch(loginSuccess({ accessToken, refreshToken, ...user }));
        props.closeModalLogin();
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (error.response.data.message === "No account found") {
          setIsNoAccount(true);
          setWrongPass(false);
        } else {
          setIsNoAccount(false);
          setWrongPass(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

 

  return (
    <Stack direction="row">
      <Stack direction="column" sx={{ flex: 5 }} spacing={2}>
        <h4 style={{ fontSize: "24px" }}>Xin chào,</h4>
        <p style={{ fontSize: "15px" }}>Đăng nhập hoặc tạo tài khoản</p>

        <form>
          <Stack spacing={2}>
            <Stack>
              <TextField
                {...register("phoneNumber", {
                  required: "Hãy nhập số điện thoại",
                  pattern: {
                    value: /\d+/,
                    message: "Số điện thoại không hợp lệ",
                  },
                  minLength: {
                    value: 10,
                    message: "Số điện thoại phải có ít nhất 10 chữ số",
                  },
                })}
                label="Số Điện Thoại"
                variant="standard"
              />
              {errors.phoneNumber && (
                <ErrorInput message={errors.phoneNumber.message} />
              )}
            </Stack>

            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel>Mật khẩu</InputLabel>

              <Input
                {...register("pass", {
                  required: "Hãy nhập mật khẩu",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu phải có ít nhất 8 ký tự",
                  },
                })}
                variant="standard"
                type={isShowPass ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setIsShowPass(!isShowPass)}
                      edge="end"
                    >
                      {isShowPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.pass && <ErrorInput message={errors.pass.message} />}
            </FormControl>

            {isNoAccount && (
              <ErrorAfterSubmit message="Số điện thoại chưa được đăng ký" />
            )}

            {wrongPass && (
              <ErrorAfterSubmit message="Mật khẩu đăng nhập không chính xác" />
            )}

            <Button
              variant="contained"
              color="error"
              onClick={handleSubmit(onSubmit)}
            >
              {loading && <Loading color="#fff" />}
              Đăng nhập
            </Button>
          </Stack>
        </form>

        <p style={{ textAlign: "center" }}>Đăng nhập bằng mail</p>
        <Stack alignItems="center">
          <span
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={props.handleOpenForgetPwd}
          >
            {" "}
            Quên mật khẩu
          </span>
        </Stack>
        <p style={{ textAlign: "center" }}>
          Nếu bạn chưa có tài khoản?
          <span
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={props.handleOpenSignup}
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
          {/* <FbLogin /> */}
          <a href={`https://nhom3-tiki.herokuapp.com/oauth2/authorization/google?redirect_uri=${client_url}oauth2/redirect`} className="hre">
            <FacebookRoundedIcon 
          sx={{
            cursor:'pointer',
             color: "#4267b2", 
             fontSize: "3rem" }} />
          </a>
          

          <GgLogin />
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

export default Login;
