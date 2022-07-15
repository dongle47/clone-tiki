import { Typography, Button, Stack } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { address } from "../../../constraints/Profile";

function Addresses() {
  const addresses = address.map((item) => {
    return (
      <Stack
        sx={{ width: "50rem" }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack>
          <Typography>{item.name}</Typography>
          <Typography>Địa chỉ: {item.address}</Typography>
          <Typography>Điện thoại: {item.phone}</Typography>
        </Stack>

        <Stack direction="row">
          <Button>Chỉnh sửa</Button>
          <Button>Xóa</Button>
        </Stack>
      </Stack>
    );
  });

  return (
    <Stack spacing={2} >
      <Typography>Sổ địa chỉ</Typography>

      <Button variant="outlined" startIcon={<AddIcon />}>
        Thêm địa chỉ
      </Button>

      <Stack spacing={5} >{addresses}</Stack>
    </Stack>
  );
}

export default Addresses;
