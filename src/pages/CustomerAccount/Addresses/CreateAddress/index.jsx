import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
  Button,
  InputLabel,
} from "@mui/material";
import "./CreateAddress.scss";
function CreateAddress() {
  const [tinh, setTinh] = React.useState("");
  const handleChange1 = (event) => {
    setTinh(event.target.value);
  };

  const [huyen, setHuyen] = React.useState("");
  const handleChange2 = (event) => {
    setHuyen(event.target.value);
  };

  const [xa, setXa] = React.useState("");
  const handleChange3 = (event) => {
    setXa(event.target.value);
  };

  return (
    <Box className="create-address" px={0} m={0}>
      <Typography variant="h6">Tạo sổ địa chỉ</Typography>

      <Stack bgcolor="#fff" p='2rem 2rem' spacing={1.875}>
        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Họ và tên:
          </Typography>
          <Stack sx={{ flex: 0.65 }}>
            <TextField
              className="textfield"
              placeholder="Nhập họ và tên"
            ></TextField>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Công ty:
          </Typography>
          <Stack sx={{ flex: 0.65 }}>
            <TextField
              className="textfield"
              placeholder="Nhập công ty"
            ></TextField>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Số điện thoại:
          </Typography>
          <Stack sx={{ flex: 0.65 }}>
            <TextField
              className="textfield"
              placeholder="Nhập số điện thoại"
            ></TextField>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Tỉnh/Thành phố:
          </Typography>
          <FormControl sx={{ flex: "0.65" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              sx="flex:0.65"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tinh}
              label="Age"
              onChange={handleChange1}
            >
              <MenuItem value="1">Chọn Tỉnh/ Thành phố</MenuItem>
              <MenuItem value="2">Hà nội</MenuItem>
              <MenuItem value="3">Hải phòng</MenuItem>
              <MenuItem value="4">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Quận huyện:
          </Typography>
          <FormControl sx={{ flex: "0.65" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              sx="flex:0.65"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={huyen}
              label="Age"
              onChange={handleChange2}
            >
              <MenuItem value="1">Chọn Tỉnh/ Thành phố</MenuItem>
              <MenuItem value="2">Hà nội</MenuItem>
              <MenuItem value="3">Hải phòng</MenuItem>
              <MenuItem value="4">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Phường xã:
          </Typography>
          <FormControl sx={{ flex: "0.65" }}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              sx="flex:0.65"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={xa}
              label="Age"
              onChange={handleChange3}
            >
              <MenuItem value="1">Chọn Tỉnh/ Thành phố</MenuItem>
              <MenuItem value="2">Hà nội</MenuItem>
              <MenuItem value="3">Hải phòng</MenuItem>
              <MenuItem value="4">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Địa chỉ
          </Typography>
          <Stack sx={{ flex: 0.65 }}>
            <TextField
              multiline
              rows={4}
              className="textfield"
              placeholder="Nhập địa chỉ"
            ></TextField>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}>
            Loại địa chỉ:
          </Typography>
          <RadioGroup row>
            <FormControlLabel
              value="Nhà riêng/ Chung cư"
              control={<Radio />}
              label="Nhà riêng/ Chung cư"
            />
            <FormControlLabel
              value="Cơ quan/ Công ty"
              control={<Radio />}
              label="Cơ quan/ Công ty"
            />
          </RadioGroup>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}></Typography>
          <Checkbox defaultChecked />
          <Typography sx={{ margin: "auto 0" }}>
            Đặt làm địa chỉ mặc định
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography sx={{ width: "10rem", margin: "auto 0" }}></Typography>
          <Button className="btn__Update" variant="contained">
            Cập nhật
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CreateAddress;
