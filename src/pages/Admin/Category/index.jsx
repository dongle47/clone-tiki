import React from "react";
import { Link } from "react-router-dom";

import "./Category.scss";

import img from "../../../assets/img/test.png";

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
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


function createData(name, description, image) {
  return { name, description, image };
}

const rows = [
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
  createData(
    "Giày thể thao nam",
    "Bán lẻ theo đôi",
    "https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg"
  ),
];

function Category() {
  const [modalDelete, setModalDelete] = React.useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  return (
    <Stack direction="row" sx={{ backgroundColor: "#fff" }} p={3}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Danh sách danh mục sản phẩm</Typography>
          <Link to="/admin/category/create">
            <Button variant="contained">Thêm danh mục</Button>
          </Link>
        </Stack>
        <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <span className="category__iconSearch">
            <SearchIcon sx={{ fontSize: "28px" }} />
          </span>
        </Stack>

        <Table
          className="tableCategory"
          sx={{ minWidth: "650px" }}
          stickyHeader
          size="small"
          aria-label="sticky  table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "15%", top: "64px" }}>
                Tên danh mục
              </TableCell>
              <TableCell sx={{ width: "15%", top: "64px" }}>Mô tả</TableCell>
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
                <TableCell align="center">
                  <img alt="" width="80px" height="80px" src={row.image} />
                </TableCell>
                <TableCell>
                  <Stack spacing={1} justifyContent="center" py={1}>
                    <Button variant="contained">Sửa</Button>
                    <Button onClick={openModalDelete} variant="outlined" color="error">
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
        <Stack className="modal-info" direction="row" spacing={2} justifyContent='center' width='26rem' >
          <Stack>
            <InfoOutlinedIcon color="primary" />
          </Stack>

          <Stack spacing={3}>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                Bạn có chắc muốn xóa danh mục này ?
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button onClick={closeModalDelete} variant="outlined">Hủy</Button>
              <Button variant="contained">Xóa bỏ</Button>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default Category;
