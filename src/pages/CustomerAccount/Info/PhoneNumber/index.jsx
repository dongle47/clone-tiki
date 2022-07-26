import { Box, Stack, InputBase, Typography, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

function PhoneNumber() {
  return (
    <Box sx={{ mt: "1rem" }}>
      <Typography variant="h6" >Cập nhật số điện thoại</Typography>

      <Stack
        className="input-container__size"
        alignItems="center"
        justifyContent="center"
      >
        <Stack className="customer-info__input-container">
          <Typography>Số điện thoại</Typography>

          <Stack spacing={4}>
            <Stack
              sx={{ border: "1px solid darkgrey", borderRadius: "4px" }}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <LocalPhoneOutlinedIcon sx={{ ml: "6px" }} color="disabled" />
              <InputBase placeholder="Nhập số điện thoại" />
            </Stack>

            <Button variant="contained">Lưu thay đổi</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default PhoneNumber;
