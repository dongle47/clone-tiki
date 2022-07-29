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
  InputBase
} from "@mui/material";
import "./CreateAddress.scss";
import { styled } from '@mui/material/styles';
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

      <Stack bgcolor="#fff" p='2rem' spacing={1.875}>
        <Stack direction="row">
          <Typography className="create-address__label">
            Họ và tên:
          </Typography>
          <Stack className="create-address__input">
            <InputCustom
              placeholder="Nhập họ và tên"
              size="small"
            ></InputCustom>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Công ty:
          </Typography>
          <Stack className="create-address__input">
            <InputCustom
              size="small"
              placeholder="Nhập công ty"
            ></InputCustom>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Số điện thoại:
          </Typography>
          <Stack className="create-address__input">
            <InputCustom
              size="small"
              placeholder="Nhập số điện thoại"
            ></InputCustom>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Tỉnh/Thành phố:
          </Typography>
          <FormControl className="create-address__input">
            <Select
              size="small"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={tinh}
              label="Age"
              onChange={handleChange1}
              input={<InputCustom placeholder="Chọn Tỉnh/Thành phố" />}
            >
              <MenuItem value="1">Hà nội</MenuItem>
              <MenuItem value="2">Hải phòng</MenuItem>
              <MenuItem value="3">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Quận huyện:
          </Typography>
          <FormControl className="create-address__input">
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              sx="flex:0.65"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={huyen}
              label="Age"
              onChange={handleChange2}
              input={<InputCustom placeholder="Chọn Quận/Huyện" />}
            >
              <MenuItem value="1">Hà nội</MenuItem>
              <MenuItem value="2">Hải phòng</MenuItem>
              <MenuItem value="3">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Phường xã:
          </Typography>
          <FormControl className="create-address__input">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={xa}
              label="Age"
              onChange={handleChange3}
              input={<InputCustom placeholder="Chọn Xã/Thị trấn" />}
            >
              <MenuItem value="1">Hà nội</MenuItem>
              <MenuItem value="2">Hải phòng</MenuItem>
              <MenuItem value="3">Hồ Chí Minh</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
            Địa chỉ
          </Typography>
          <Stack className="create-address__input">
            <InputCustom
              multiline
              rows={4}
              placeholder="Nhập địa chỉ"
            ></InputCustom>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label">
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
          <Typography className="create-address__label"></Typography>
          <Checkbox defaultChecked />
          <Typography sx={{ margin: "auto 0" }}>
            Đặt làm địa chỉ mặc định
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography className="create-address__label"></Typography>
          <Button className="btn__Update" variant="contained">
            Cập nhật
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

const InputCustom = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    boxSizing: "border-box",
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    display: "flex",
    height: "40px !important",
    padding: '0px 26px 0px 12px',
    alignItems: "center",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#1890ff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default CreateAddress;
