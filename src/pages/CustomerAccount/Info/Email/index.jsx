import { Box, Stack, InputBase, Typography, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Email() {
  return (
    <Box sx={{ mt: "1rem" }}>
      <Typography variant="h6">Cập nhật email</Typography>

      <Stack
        className="input-container__size"
        alignItems="center"
        justifyContent="center"
      >
        <Stack className="customer-info__input-container">
          <Typography>Địa chỉ email</Typography>

          <Stack spacing={4}>
            <Stack
              sx={{ border: "1px solid darkgrey", borderRadius: "4px" }}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <EmailOutlinedIcon sx={{ ml: "6px" }} color="disabled" />
              <InputBase placeholder="Nhập email" />
            </Stack>

            <Button variant="contained">Lưu thay đổi</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Email;
