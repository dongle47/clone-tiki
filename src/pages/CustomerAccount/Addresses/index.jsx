import { Link } from "react-router-dom";
import "./Addresses.scss";
import { address } from "../../../constraints/Profile";

import { Typography, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


function Addresses() {
  const addresses = address.map((item) => {
    return (
      <Stack
        direction="row"
        width="50rem"
        justifyContent="space-between"
        className="items"
      >
        <Stack className="info">
          <Typography className="name">{item.name}</Typography>
          <Typography className="address">Địa chỉ: {item.address}</Typography>
          <Typography className="number">Điện thoại: {item.phone}</Typography>
        </Stack>

        <Stack direction="row" className="action">
          <Button variant="text" color="primary">
            Chỉnh sửa
          </Button>
          <Button variant="text" color="warning">
            Xóa
          </Button>
        </Stack>
      </Stack>
    );
  });

  return (
    <Stack spacing={2} className="addresses">
      <Typography className="heading">Sổ địa chỉ</Typography>
      <Link to="/customer/address/create">
        <Button className="new" variant="outlined" startIcon={<AddIcon />}>
          Thêm địa chỉ mới
        </Button>
      </Link>
      <Stack spacing={5}>{addresses}</Stack>
    </Stack>
  );
}

export default Addresses;
