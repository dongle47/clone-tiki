import * as React from "react";
import { Box, Stack, InputBase, Typography, Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useState, } from "react";
import apiProfile from "../../../../apis/apiProfile";

function Email() {

  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
    if (regex.test(event.target.value)) {
      setMessage("")
    }
    else {
      setMessage("Email không hợp lệ")
    }
  }

  const handleChange = () => {
    const params = {
      email
    }
    apiProfile.putChangeEmail(params)
      .then(response => {
        setMessage("Thay đổi Email thành công")
      })
      .catch(error => {
        console.log(error)
        setMessage("Thay đổi không thành công!")
    })
  }


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
              <InputBase placeholder="Nhập email" value={email} onChange={onChangeEmail}
              />            
            </Stack>
            <Typography  >{message}</Typography>
            <Button onClick={(event) =>{handleChange(event)}} variant="contained">Lưu thay đổi</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Email;
