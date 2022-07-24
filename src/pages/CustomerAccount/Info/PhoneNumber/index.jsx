import { Box, Stack, InputBase, Typography, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

function PhoneNumber() {
  return (
    <Box sx={{ mt: "5rem" }}>
      <Typography>Cập nhật số điện thoại</Typography>
      
      <Stack
        sx={{ width: "60rem", height: "15rem"  }}
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
        >
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
