import React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Stack,
  IconButton,
  Button,
  Typography,
  hexToRgb,
  Badge,
  Box,
  Modal,
  TextField,
  Divider,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const data = [
  {
    id: "1",
    name: "Emma Stone",
    registerDate: "01/01/2022",
    phone: "0123456789",
  },
  {
    id: "2",
    name: "Margot Robbie",
    registerDate: "01/01/2022",
    phone: "0123456789",
  },
  {
    id: "3",
    name: "Scarlett Johansson",
    registerDate: "01/01/2022",
    phone: "0123456789",
  },
];

function User() {
  const [modalDelete, setModalDelete] = React.useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  return (
    <Stack direction="row" sx={{ backgroundColor: "#fff" }} p={3}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Danh sách thương hiệu</Typography>
        </Stack>

        <Stack direction="row" justifyContent="flex-end"></Stack>

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
          sx={{ minWidth: "50rem" }}
          stickyHeader
          size="small"
          aria-label="sticky  table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                ID
              </TableCell>

              <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                Tên khách hàng
              </TableCell>

              <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                Ngày đăng ký
              </TableCell>

              <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                Số điện thoại
              </TableCell>

              <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.id}</TableCell>

                <TableCell align="center">{item.name}</TableCell>

                <TableCell align="center">{item.registerDate}</TableCell>

                <TableCell align="center">
                  <Typography>{item.phone}</Typography>
                </TableCell>

                <TableCell align="center" >
                  <Stack spacing={1} justifyContent="center" py={1}>
                    <Link to="/admin/user/detail">
                      <Button variant="contained">Xem</Button>
                    </Link>
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
                Bạn có chắc muốn xoá ảnh đại diện ?
              </Typography>
              <Typography>
                Hình ảnh đại diện sẽ quay về mặc định của Tiki
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

export default User;
