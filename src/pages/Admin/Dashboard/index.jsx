import * as React from "react";
import "./Dashboard.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import PaidIcon from "@mui/icons-material/Paid";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ doanh thu",
      fontSize: "20px",
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Dashboard() {
  return (
    <Stack spacing={3} pl="5rem" mt="2rem">
      <Stack direction="row" spacing={4}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "0.375rem",
            padding: "10px",
          }}
        >
          <Stack
            backgroundColor="#b9ffd3"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "0.375rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GroupsIcon sx={{ fontSize: 40, color: "#22ad56" }} />
          </Stack>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#d20000",
              }}
            >
              TỔNG KHÁCH HÀNG
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "450", color: "#2a2a2a" }}
            >
              256 Khách hàng
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "0.375rem",
            padding: "10px",
          }}
        >
          <Stack
            backgroundColor="#adcbf3"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "0.375rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InventoryIcon sx={{ fontSize: 40, color: "#1d5aab" }} />
          </Stack>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#d20000",
              }}
            >
              TỔNG SẢN PHẨM
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "450", color: "#2a2a2a" }}
            >
              256 Sản phẩm
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "0.375rem",
            padding: "10px",
          }}
        >
          <Stack
            backgroundColor="#fde1c3"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "0.375rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DescriptionIcon sx={{ fontSize: 40, color: "#ff8b07" }} />
          </Stack>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#d20000",
              }}
            >
              TỔNG ĐƠN HÀNG
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "450", color: "#2a2a2a" }}
            >
              256 Đơn hàng
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "0.375rem",
            padding: "10px",
          }}
        >
          <Stack
            backgroundColor="#f9baba"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "0.375rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PaidIcon sx={{ fontSize: 40, color: "#de2222" }} />
          </Stack>
          <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
            <Typography
              sx={{
                marginBottom: "5px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#d20000",
              }}
            >
              TỔNG DOANH THU
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "450", color: "#2a2a2a" }}
            >
              200.000.00đ
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box width="65%" height="65%">
        <Bar options={options} data={data} />
      </Box>
    </Stack>
  );
}

export default Dashboard;
