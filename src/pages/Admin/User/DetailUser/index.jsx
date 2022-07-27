import React from "react";
import imgProfile from "../../../../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { address } from "../../../../constraints/Profile";
import "./DetailUser.scss"
import {
  Stack,
  Button,
  Typography,
  Box,
  TableCell,
  TableBody,
  TableRow,
  Table,
  TableHead,
  Avatar,
} from "@mui/material";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";

import LinearProgress from "@mui/material/LinearProgress";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataChart = {
  labels: ["Thời trang", "Gia dụng", "Thiết bị điện tử"],
  datasets: [
    {
      label: "# of Votes",
      data: [120000, 600000, 100000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data = [
  {
    id: "1",
    method: "Thanh toán khi nhận hàng",
    orderDate: "01/01/2022",
    price: "1 tỷ",
  },
  {
    id: "2",
    method: "Thanh toán khi nhận hàng",
    orderDate: "01/01/2022",
    price: "1 tỷ",
  },
  {
    id: "3",
    method: "Thanh toán khi nhận hàng",
    orderDate: "01/01/2022",
    price: "1 tỷ",
  },
];


function DetailUser() {
  return (
    <Box p="2rem" bgcolor="#fff">
      <Typography variant="h6">Chi tiết khách hàng</Typography>
      <Stack p="1rem" spacing={3}>
        <Stack direction="row" spacing={3}>
          <Stack className="detailUser__infowrap" spacing={5}>
            <Typography fontWeight="bold">
              Thông tin người dùng
            </Typography>

            <Stack alignItems="center">
              <Avatar
                sx={{ width: 100, height: 100 }}
                alt=""
                src={imgProfile}
              />
              <Typography color="silver"variant="caption">
                ID
              </Typography>
              <Typography variant="h6">ABCD</Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Stack direction="row" alignItem="center">
                <PhoneAndroidIcon />
                <Typography>0123456789</Typography>
              </Stack>

              <Stack direction="row" alignItem="center">
                <EmailIcon />
                <Typography>abcd@gmail.com</Typography>
              </Stack>

              <Stack direction="row" alignItem="center">
                <CakeIcon/>
                <Typography>01/01/2001</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="detailUser__infowrap" alignItem="center">
            <Typography fontWeight="bold">Thống kê mua hàng</Typography>

            <Stack width="50%" height="50%" ml="7rem"
              alignItems="center"
              spacing={3}
            >
              <Doughnut data={dataChart} />
              <Typography fontWeight="bold">Tổng cộng: 820.000 VNĐ</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack className="detailUser__infowrap" width="100% !important" spacing={3}>
          <Typography fontWeight="bold">
            Thống kê hoạt động
          </Typography>

          <Stack flexGrow={1} spacing={3}>
            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Sản phẩm yêu thích</Typography>
                <Typography>30</Typography>
              </Stack>

              <Stack>
                <LinearProgress
                  color="primary"
                  variant="determinate"
                  value={30}
                />
              </Stack>
            </Stack>

            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Sản phẩm đã mua</Typography>
                <Typography>30</Typography>
              </Stack>

              <LinearProgress
                color="secondary"
                variant="determinate"
                value={60}
              />
            </Stack>

            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Sản phẩm đã đánh giá</Typography>
                <Typography>30</Typography>
              </Stack>
              <LinearProgress
                color="warning"
                variant="determinate"
                value={10}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack className="detailUser__infowrap" width="100% !important">
          <Typography fontWeight="bold">Sổ địa chỉ</Typography>
          {address.map((item) => {
            return (
              <Stack
                width="50rem"
                direction="row"
                justifyContent="space-between"
                className="items"
              >
                <Stack className="info">
                  <Typography className="name">{item.name}</Typography>
                  <Typography className="address">
                    Địa chỉ: {item.address}
                  </Typography>
                  <Typography className="number">
                    Điện thoại: {item.phone}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>

        <Stack  className="detailUser__infowrap" width="fit-content  !important">
          <Typography fontWeight="bold">
            Danh sách đơn hàng
          </Typography>

          <Table
            className="tableBrand"
            sx={{ minWidth: "50rem" }}
            stickyHeader
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                  ID
                </TableCell>

                <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                  Phương thức thanh toán
                </TableCell>

                <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                  Ngày đặt hàng
                </TableCell>

                <TableCell align="center" sx={{ width: "20%", top: "64px" }}>
                  Tổng thanh toán
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

                  <TableCell align="center">{item.method}</TableCell>

                  <TableCell align="center">{item.orderDate}</TableCell>

                  <TableCell align="center">
                    <Typography>{item.price}</Typography>
                  </TableCell>

                  <TableCell align="center">
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
      </Stack>
    </Box>
  );
}

export default DetailUser;
