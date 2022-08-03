import React from "react";
import { useEffect, useState } from "react";
import apiBrand from "../../../../apis/apiBrand";
import "./CruBrand.scss";
import {
  Stack,
  Button,
  Typography,
  TextField,
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  InputBase
} from "@mui/material";
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';
import rev from "../../../../assets/img/test.png";
import SelectBoxAddress from "../../../../components/SelectBoxAddress";
function CrudBrand() {
  const [review, setReview] = React.useState(rev)
  const [brand, setBrand] = useState([])
  const [country, setCountry] = useState("")
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")
  const [commune, setCommune] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [phone, setPhone] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  useEffect(() => {
    const getData = async () => {
      apiBrand.getAllBrand()
        .then(res => {
          setBrand(res.data.ListBrand);
          console.log(res.data.ListBrand)
        })
    };
    getData();
  }, []);

  const onChangeImg = (e) => {
    if (e.target.files.length > 0) {
      setReview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleChangeProvince = (value) => {

    setProvince(value);
  };

  const handleChangeDistrict = (value) => {

    setDistrict(value);
  };


  const handleChangeCommune = (value) => {
    setCommune(value);
  };
  const handleInsert = () => {
    const params = {
      "addressDetail": addressDetail,
      "country": country,
      "commune": commune,
      "description": description,
      "district": district,
      "name": name,
      "phone": phone,
      "province": province

    }
    apiBrand.insertBrand(params)
      .then(res => {
        toast.success("Thêm địa chỉ thành công")
        setCountry("")
        setDescription("")
        setPhone("")
        setName("")
        setAddressDetail("")
        setCommune("")
        setDistrict("")
        setProvince("")
      })
      .catch(error => {
        toast.error("Thêm địa chỉ thất bại!")
      })
  }

  return (
    <Box width={'100%'} bgcolor='#fff'>
      <Stack className="cruBrand" p={3} justifyContent="center" width="700px" spacing={2} bgcolor='#fff'>
        <Stack direction="row">
          <Typography className="cruBrand__label">Nhập tên thương hiệu</Typography>
          <TextField value={name} onChange={(event) => { setName(event.target.value) }}
              size="small" id="outlined-basic" variant="outlined" sx={{ flex: "1" }} />
        </Stack>

        <Stack direction="row" >
          <Typography className="cruBrand__label">Mô Tả</Typography>
          <TextField value={description} onChange={(event) => { setDescription(event.target.value) }} size="small" id="outlined-basic" variant="outlined" sx={{ flex: "1" }} />
        </Stack>
        <Stack direction="row" >
          <Typography className="cruBrand__label">Địa chỉ</Typography>
          <TextField value={addressDetail} onChange={(event) => { setAddressDetail(event.target.value) }} size="small" id="outlined-basic" variant="outlined" sx={{ flex: "1" }} />
        </Stack>

        <Stack direction="row">
          <Typography  className="cruBrand__label">
            Quốc gia:
          </Typography>
          <FormControl className="create-address__input" sx={{flex:"1"}}>
            <InputLabel id="demo-simple-select-helper-label"></InputLabel>
            <Select
              sx={{ flex: 0.65 }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={country}
              label="Age"
              onChange={e=>setCountry(e.target.value)}
              input={<InputCustom placeholder="Chọn Quận/Huyện" />}
            >
                 <MenuItem value={"1"}>Việt Nam</MenuItem>
              
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row">
          <Typography className="cruBrand__label">Liên hệ</Typography>
          <TextField value={phone} onChange={(event) => { setPhone(event.target.value) }} size="small" id="outlined-multiline-flexible"
            multiline
            maxRows={4} variant="outlined" sx={{ flex: "1" }} />
        </Stack>
        <SelectBoxAddress province={province} district={district} commune={commune}
          onChangeProvince={handleChangeProvince}
          onChangeDistrict={handleChangeDistrict}
          onChangeCommune={handleChangeCommune}
          classLabel="cruBrand__label"
        />
        {/* <Stack direction="row" p={2}>
          <Typography className="cruBrand__label">Thêm ảnh</Typography>
          <Stack>
            <img src={review} width="210px" height="210px" alt="" />
            <input type="file" id="myfile" name="myfile" onChange={onChangeImg}></input>
          </Stack>
        </Stack> */}

        <Stack justifyContent="center">
          <Button width="450px" variant="contained" onClick={handleInsert} >Thêm</Button>
        </Stack>
      </Stack>
    </Box>
  )
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

export default CrudBrand;
