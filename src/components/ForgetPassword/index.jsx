/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorInput, ErrorAfterSubmit } from "../ErrorHelper";

import apiAuth from "../../apis/apiAuth";

import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ForgetPassword(props) {
  //const dispatch = useDispatch();
  const [isNoAccount, setIsNoAccount] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCheckPhone = async () => {
    let param = {
      phone: watch("phoneNumber"),
    };
    await apiAuth
      .postCheckPhone(param)
      .then((res) => {
        console.log(res)
        setIsNoAccount(true);
      })
      .catch((error) => {
        setIsNoAccount(false);
      });
  };

  return (
    <Stack sx={{padding:"0px"}} direction="row">
      <Stack sx={{ flex: 5 }} spacing={2}>
        <Box>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <h4 style={{ fontSize: "24px" }}>Quên mật khẩu ?</h4>
        <p style={{ fontSize: "15px" }}>
          Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
        </p>

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
                label="Số Điện Thoại/ Email"
                variant="standard"
              />
              {errors.phoneNumber && (
                <ErrorInput message={errors.phoneNumber.message} />
              )}
            </Stack>

            {isNoAccount && (
              <ErrorAfterSubmit message="Số điện thoại chưa được đằng ký" />
            )}

            <Button
              variant="contained"
              color="error"
              onClick={handleCheckPhone}
            >
              Lấy lại mật khẩu
            </Button>
          </Stack>
        </form>
      </Stack>

      <Stack
        sx={{
          width: "300px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          width="203"
        />
        <Typography sx={{color:"#0b74e5", fontSize:"17px", fontWeight:"500"}}>Mua sắm tại Tiki</Typography>
        <Typography sx={{color:"#0b74e5", fontSize:"13px", fontWeight:"500"}}>Siêu ưu đãi mỗi ngày</Typography>
      </Stack>
    </Stack>
  );
}

export default ForgetPassword;
