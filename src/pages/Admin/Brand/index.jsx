import React from "react";
import { Link } from "react-router-dom";
import "./Brand.scss";
import { Stack, Button, Typography, Modal, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, description, address, contact, image) {
  return { name, description, address, contact, image };
}

const rows = [
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),
  createData(
    "Thế giới di động",
    "Bán lẻ, tmdt",
    "Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    "Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com",
    "https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg"
  ),

  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Brand() {
  const [modalDelete, setModalDelete] = React.useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  return (
    <Stack direction="row" sx={{ backgroundColor: "#fff" }} p={3}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Danh sách thương hiệu</Typography>

          <Link to="/admin/brand/create">
            <Button variant="contained">Thêm thương hiệu</Button>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <span className="brand__iconSearch">
            <SearchIcon sx={{ fontSize: "28px" }} />
          </span>
        </Stack>

        <Table
          className="tableBrand"
          sx={{ minWidth: "650px" }}
          stickyHeader
          size="small"
          aria-label="sticky  table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "15%", top: "64px" }}>
                Tên nhãn hiệu
              </TableCell>
              <TableCell sx={{ width: "15%", top: "64px" }}>Mô tả</TableCell>
              <TableCell align="center" sx={{ width: "30%", top: "64px" }}>
                Địa chỉ&nbsp;
              </TableCell>
              <TableCell sx={{ width: "20%", top: "64px" }}>
                Thông tin liên lạc&nbsp;
              </TableCell>
              <TableCell align="center" sx={{ width: "10%", top: "64px" }}>
                Ảnh&nbsp;
              </TableCell>
              <TableCell align="center" sx={{ width: "10%", top: "64px" }}>
                Thao tác&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">
                  <Typography>{row.contact}</Typography>
                </TableCell>
                <TableCell align="center">
                  <img alt="" width="80px" height="80px" src={row.image} />
                </TableCell>
                <TableCell>
                  <Stack spacing={1} justifyContent="center" py={1}>
                    <Button variant="contained">Sửa</Button>
                    <Button
                      onClick={openModalDelete}
                      variant="outlined"
                      color="error"
                    >
                      Xóa
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>

      <Modal
        sx={{ overflowY: "scroll" }}
        open={modalDelete}
        onClose={closeModalDelete}
      >
        <Stack
          className="modal-info"
          direction="row"
          spacing={2}
          justifyContent="center"
          width="26rem"
        >
          <Stack>
            <InfoOutlinedIcon color="primary" />
          </Stack>

          <Stack spacing={3}>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                Bạn có chắc muốn xoá thương hiệu này ?
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button onClick={closeModalDelete} variant="outlined">
                Hủy
              </Button>
              <Button variant="contained">Xóa bỏ</Button>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default Brand;
