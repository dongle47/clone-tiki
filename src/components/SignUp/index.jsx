import React from "react";
import { useForm } from "react-hook-form";

import apiAuth from "../../apis/apiAuth";

import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
  Input,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function SignUp(props) {
  const [showPass, setShowPass] = React.useState(false);
  const [showPassConf, setShowPassConf] = React.useState(false);

  const [invalidPhone, setInvalidPhone] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleCheckPhone = () => {
    let param = {
      phone: watch("phoneNumber"),
    };
    apiAuth
      .postCheckPhone(param)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setInvalidPhone(false);

        if (error.response.data.message.includes("exists"))
          setInvalidPhone(true);
      });
  };

  return (
    <Stack direction="row">
      <Stack direction="column" sx={{ flex: 5 }} spacing={2}>
        <Typography variant="h5">Đăng ký</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("name", { required: true })}
            label="Nhập họ tên"
            variant="standard"
          />

          <Stack direction="row" width="100%">
            <TextField
              {...register("phoneNumber", { required: true, minLength: 10 })}
              label="Số điện thoại"
              variant="standard"
              sx={{ flex: 1 }}
            />
            <Button
              onClick={handleCheckPhone}
              variant="outlined"
              sx={{ width: "100px" }}
            >
              Kiểm tra
            </Button>
          </Stack>
          {invalidPhone && <Typography>Số điện thoại đã sử dụng</Typography>}

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="outlined-adornment-password">
              Nhập mật khẩu
            </InputLabel>
            <Input
              {...register("pass", { required: true, minLength: 8 })}
              variant="standard"
              type={showPass ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="outlined-adornment-password">
              Nhập lại mật khẩu
            </InputLabel>
            <Input
              {...register("passConf", { required: true, minLength: 8 })}
              id="password-config"
              type={showPassConf ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassConf(!showPassConf)}
                    edge="end"
                  >
                    {showPassConf ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="error"
          >
            Hoàn Tất
          </Button>
        </form>

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

      <Stack
        sx={{
          flex: 3,
        }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <img
          alt=""
          src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
          width="203"
        />
        <h4>Mua sắm tại Tiki</h4>
        <span>Siêu ưu đãi mỗi ngày</span>
      </Stack>

      <span style={{ position: "absolute", top: 0, right: 0 }}>
        <IconButton onClick={props.closeModalLogin}>
          <CloseIcon />
        </IconButton>
      </span>
    </Stack>
  );
}

export default SignUp;
