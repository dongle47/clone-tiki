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
import { useState } from "react";
import apiAddress from "../../../../apis/apiAddress";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function CreateAddress(props) {
  
  const [fullName, setFullName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [phone, setPhone] = useState("")
  const [addressDetail, setAddressDetail]= useState("")
  const [addressType, setAddressType] = useState("")
  const [addressid, setAddressid] = useState("")
  const [edit, setEdit] = useState(props.edit)
  const [province, setProvince] = React.useState("");
  const params = useParams();

  useEffect(()=>{
    const loaddata = ()=>{
      if(edit===true)
      {
        apiAddress.getAddressById(params)
        .then (res=>{
          const address = res.data
          setFullName(address.fullName)
          setCompanyName(address.companyName)
          setPhone(address.phone)
          setAddressDetail(address.addressDetail)
          setAddressType(address.addressType)
          setCommune(address.commune)
          setDistrict(address.district)
          setProvince(address.province)
        })
      }
      setAddressid(params.id)
      console.log(params.id)
    }
    loaddata()
  },[edit])

  const handleChange1 = (event) => {
    setProvince(event.target.value);
  };

  const [district, setDistrict] = React.useState("");
  const handleChange2 = (event) => {
    setDistrict(event.target.value);
  };

  const [commune, setCommune] = React.useState("");
  const handleChange3 = (event) => {
    setCommune(event.target.value);
  };
  const handleSave = () =>
  {
    const params = {
      "addressDetail": addressDetail,
      "addressType": Number(addressType),
      "commune": commune,
      "companyName": companyName,
      "district": district,
      "fullName": fullName,
      "phone": phone,
      "province": province

    }
    console.log("Save")
    apiAddress.saveAddress(params)
  }

  const handleUpdate = () =>
  {
    const params ={
      "addressDetail": addressDetail,
      "addressType": Number(addressType),
      "commune": commune,
      "companyName": companyName,
      "district": district,
      "fullName": fullName,
      "phone": phone,
      "province": province
    }
    console.log("update")
    apiAddress.updateAddress(params)
  }

  return (
    <Box className="create-address" px={0} m={0}>
      <Typography variant="h6">Tạo sổ địa chỉ</Typography>

      <Stack bgcolor="#fff" p='2rem' spacing={1.875}>
        <Stack direction="row">
          <Typography className="create-address__label">
            Họ và tên:
          </Typography>
          <Stack className="create-address__input">
            <InputCustom value={fullName} onChange={(event)=>{
              setFullName(event.target.value)
            }}
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
            <InputCustom value={companyName} onChange={(event)=>{
              setCompanyName(event.target.value)
            }}
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
            <InputCustom value={phone} onChange={(event)=>{
              setPhone(event.target.value)
            }}
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
              value={province}
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
              sx={{flex:0.65}}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={district}
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
              value={commune}
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
            <InputCustom value={addressDetail} onChange={(event)=>{
              setAddressDetail(event.target.value)
            }}
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
          <RadioGroup value={addressType} onChange={(event)=>{setAddressType(event.target.value)}} row>
            <FormControlLabel
              value= "0"
              control={<Radio />}
              label="Nhà riêng/ Chung cư"
            />
            <FormControlLabel
              value="1"
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
          <Button 
          onClick={
            edit? handleUpdate
            : handleSave} className="btn__Update" variant="contained">
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
