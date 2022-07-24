import React from "react";
import "./CruBrand.scss";
import {
  Stack,
  Button,
  Typography,
  TextField,
  Box
} from "@mui/material";
import rev from "../../../../assets/img/test.png";

function CrudBrand() {
  const [review, setReview] = React.useState(rev)

  const onChangeImg = (e) => {
    console.log(e.target.files)
    if (e.target.files.length > 0) {
      setReview(URL.createObjectURL(e.target.files[0]))
      console.log(e.target.files[0])
    }
  }
  return (
    <Box>

      <Stack p={3} justifyContent="center" sx={{ width: "700px" }}>
        <Stack direction="row" p={2} >
          <Typography sx={{ width: "200px" }}>Nhập tên thương hiệu</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" />
        </Stack>

        <Stack direction="row" p={2} >
          <Typography sx={{ width: "200px" }}>Mô Tả</Typography>
          <TextField size="small" id="outlined-basic" variant="outlined" />
        </Stack>

        <Stack direction="row" p={2}>
          <Typography sx={{ width: "200px" }}>Địa chỉ</Typography>
          <TextField size="small" id="outlined-multiline-flexible"
            multiline
            maxRows={4} variant="outlined" />
        </Stack>

        <Stack direction="row" p={2}>
          <Typography sx={{ width: "200px" }}>Liên hệ</Typography>
          <TextField size="small" id="outlined-multiline-flexible"
            multiline
            maxRows={4} variant="outlined" />
        </Stack>

        <Stack direction="row" p={2}>
          <Typography sx={{ width: "200px" }}>Thêm ảnh</Typography>
          <Stack>
            <img src={review} style={{ width: "210px", height: "210px" }} alt="" />
            <input type="file" id="myfile" name="myfile" onChange={onChangeImg}></input>
          </Stack>
        </Stack>

        <Stack justifyContent="center">
          <Button sx={{width:"450px"}} variant="contained">Thêm</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CrudBrand;
