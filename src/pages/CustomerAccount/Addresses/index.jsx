import { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Addresses.scss";
import { address } from "../../../constraints/Profile";

import { Typography, Button, Stack , Box , Dialog } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



function Addresses() {
  const [itemdelete, setItemdelete] = useState(null)
  const [addresses, setAddresses] = useState([]);
  const [dialogDelete, setDialogDelete] = useState(false);
  
  useEffect(() => {
    const getData = async () => {
      setAddresses(address)
      // apiMain.getAddresses(param)
      //   .then(res=>{
      //     setAddresses((pre) => [...pre, ...res.data]);
      //   })
    };
    getData();
  }, []);

  const handleDelete = () => {

   const newaddress = addresses.filter(item => 
      {
        return itemdelete.id !== item.id
      }
      )
      setAddresses(newaddress)
    closeDialogDeleteAll()
  }
  const openDialogDeleteAll = (itemdelete) => {
    setItemdelete(itemdelete)
    setDialogDelete(true)
  }
  const closeDialogDeleteAll = () => {
    setDialogDelete(false)
  }

return (
  <Stack spacing={2} className="addresses">
    <Typography className="heading">Sổ địa chỉ</Typography>
    <Link to="/customer/address/create">
      <Button className="new" variant="outlined" startIcon={<AddIcon />}>
        Thêm địa chỉ mới
      </Button>
    </Link>
    <Stack spacing={5}>{addresses.map((item) => {
    return (
      <Stack
        direction="row"
        width="100%"
        className="items"
      >
        <Stack className="info">
          <Typography className="name">{item.name}</Typography>
          <Typography className="address">Địa chỉ: {item.address}</Typography>
          <Typography className="number">Điện thoại: {item.phone}</Typography>
        </Stack>

        <Stack direction="row" className="action">
          <Button className="Modify" variant="text">
            Chỉnh sửa
          </Button>
          <Button onClick={()=>openDialogDeleteAll(item)} className="Delete" variant="text">
            Xóa
          </Button>
        </Stack>
        {
      dialogDelete &&
      <Dialog onClose={closeDialogDeleteAll} open={dialogDelete}>
        <Box className="dialog-removecart">
          <Box className="dialog-removecart__title">
            <h4>Xoá địa chỉ</h4>
          </Box>
          <Box className="dialog-removecart__content">
            Bạn có muốn xóa địa chỉ
          </Box>
          <Box className="dialog-removecart__choose">
            <Button
              variant="outlined"
              onClick={handleDelete}
              sx={{ width: "94px", height: "36px" }}
            >
              Xác nhận
            </Button>
            <Button
              variant="contained"
              onClick={closeDialogDeleteAll}
              sx={{ width: "57px", height: "36px" }}
            >
              Huỷ
            </Button>
          </Box>
        </Box>
      </Dialog>
    }
      </Stack>
      )
})
}</Stack>
  </Stack>
);
}

export default Addresses;
