import { Box, Stack, InputBase, Typography, Button } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Email(){
    return (
        <Box sx={{ mt: "5rem" }}>
        <Typography>Cập nhật email</Typography>
        
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
    )
}

export default Email;