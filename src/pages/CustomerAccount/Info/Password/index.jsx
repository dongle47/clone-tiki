import {
  Box,
  Stack,
  InputBase,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { useState } from "react";

function Password() {
  const [showPass, setShowPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const passwordInput = (placeHolder) => {
    return (
      <TextField
        size="small"
        label={placeHolder}
        type={showPass ? "text" : "password"}
        name="pass"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
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
    <Stack sx={{ mt: "5rem" }} spacing={1} >
      <Typography variant="h5">Đổi mật khẩu</Typography>

      <Stack
        sx={{ width: "60rem", height: "25rem", backgroundColor: "white" }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          sx={{
            border: "0.5px solid #e0dfde",
            borderRadius: "4px",
            padding: "1rem",
            width: "40%",
          }}
          spacing={3}
        >
          {passwordInput("Nhập mật khẩu hiện tại")}

          <Stack>
            {passwordInput("Nhập mật khẩu mới")}
            <Typography variant="caption">
              Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số
            </Typography>
          </Stack>

          {passwordInput("Nhập lại mật khẩu hiện mới")}

          <Button variant="contained">Lưu thay đổi</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Password;
