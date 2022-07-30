import * as React from "react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import apiProfile from "../../../../apis/apiProfile"; 

function Password() {
  const [showPass, setShowPass] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [newPassword, setnewPassword] = React.useState("");
  const [oldPassword, setoldPassword] = React.useState("");

  const onChangenewPassword = (event) => {
    setnewPassword(event.target.value)
    
  }
  const onChangeoldPassword = (event) => {
    setoldPassword(event.target.value)
    
  }
  const onChangeconfirmPassword = (event) => {
    setconfirmPassword(event.target.value)
    
  }
  const handleChangePassword = () => {
    const params = {
      "confirmPassword": confirmPassword,
      "newPassword": newPassword,
      "oldPassword": oldPassword
    }
    apiProfile.putChangePassword(params)
      .then(response => {
        setMessage("Thay đổi thành công")
      })
      .catch(error => {
      console.log(error)
      setMessage("Thay đổi không thành công!")
    })
  }

  const passwordInput = (placeHolder, value, onChange) => {
    return (
      <TextField
        value={value}
        onChange = {onChange}
        size="small"
        label={placeHolder }
        type={showPass ? "text" : "password"}
        name="pass"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <IconButton onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };

  return (
    <Stack sx={{ mt: "1rem" }} spacing={1}>
      <Typography variant="h6">Đổi mật khẩu</Typography>

      <Stack
        className="input-container__size"
        alignItems="center"
        justifyContent="center"
      >
        <Stack className="customer-info__input-container" spacing={3}>
          {passwordInput("Nhập mật khẩu hiện tại", oldPassword, onChangeoldPassword)}

          <Stack>
            {passwordInput("Nhập mật khẩu mới", newPassword, onChangenewPassword)}
            <Typography variant="caption">
              
            </Typography>
          </Stack>

          {passwordInput("Nhập lại mật khẩu mới", confirmPassword, onChangeconfirmPassword)}
          <Typography>
              {message}
            </Typography>
          <Button onClick={handleChangePassword} variant="contained">Lưu thay đổi</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Password;
