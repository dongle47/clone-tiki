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

function Password() {
  const [showPass, setShowPass] = useState(false);

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
    <Stack sx={{ mt: "1rem" }} spacing={1}>
      <Typography variant="h6">Đổi mật khẩu</Typography>

      <Stack
        className="input-container__size"
        alignItems="center"
        justifyContent="center"
      >
        <Stack className="customer-info__input-container" spacing={3}>
          {passwordInput("Nhập mật khẩu hiện tại")}

          <Stack>
            {passwordInput("Nhập mật khẩu mới")}
            <Typography variant="caption">
              Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số
            </Typography>
          </Stack>

          {passwordInput("Nhập lại mật khẩu mới")}

          <Button variant="contained">Lưu thay đổi</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Password;
