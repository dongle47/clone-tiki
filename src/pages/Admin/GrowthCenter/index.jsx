import * as React from "react";
import "./GrowthCenter.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DownloadIcon from "@mui/icons-material/Download";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [35, 65, 95, 35, 67, 70, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: [350, 450, 750, 650, 470, 769, 570],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

function GrowthCenter() {
  const [value, setValue] = React.useState([null, null]);
  return (
    <Box padding="1rem">
      <Stack spacing={2}>
        <Stack backgroundColor="#ffff" pl="1rem" pt="1rem" pb="1rem" spacing={1.5}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
          >
            Hiệu quả kinh doanh
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ fontSize: "14px", color: "#000000d9" }}>
              Thời gian báo cáo:
            </Typography>
            <Stack direction="row" alignItems="center">
              <Button
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  color: "#000000d9",
                  fontWeight: "400",
                  border: "1px solid #c2c2c2",
                }}
              >
                Hôm nay
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  color: "#000000d9",
                  fontWeight: "400",
                  border: "1px solid #1890ff",
                }}
              >
                7 ngày qua
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  color: "#000000d9",
                  fontWeight: "400",
                  border: "1px solid #c2c2c2",
                }}
              >
                30 ngày qua
              </Button>
            </Stack>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              localeText={{ start: "", end: "" }}
            >
              <DateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment justifyContent="center">
                    <TextField size="small" {...startProps} />
                    <Box sx={{ mx: 1 }}> to </Box>
                    <TextField size="small" {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>

            <Typography
              sx={{ fontSize: "14px", fontWeight: "", color: "#000000d9" }}
            >
              (Lần cập nhật cuối: 18/06/2022. 11:00)
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} backgroundColor="#ffff" pl="1rem" pt="1rem">
          {/*  */}
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            spacing={1}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#000000d9" }}
            >
              Chỉ số chính
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#00000073", flex: 1 }}>
              7 ngày qua: 14/07/2022 - 20/07/2022 (So sánh với: 05/07/2022 -
              11/07/2022)
            </Typography>
            <Button variant="outlined" endIcon={<DownloadIcon />}>
              Tải dữ liệu
            </Button>
          </Stack>

          <Stack direction="row" spacing={3}>
            <Stack className="Box-info" >
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Doanh thu
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>
              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                928.000đ
              </Typography>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  {" "}
                  100%
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Đơn hàng
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>
              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                1
              </Typography>
              <Stack direction="row">
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  {" "}
                  100%
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Doanh thu thuần
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>

              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                {" "}
                --{" "}
              </Typography>
              <Stack direction="row">
                <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                  Không có dữ liệu
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Lượt xem
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>

              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                108
              </Typography>
              <Stack direction="row">
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  468,5%
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Tỷ lệ chuyển đổi
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>

              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                16,7%
              </Typography>
              <Stack direction="row">
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  {" "}
                  100%
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  Đơn hàng hủy
                </Typography>{" "}
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />{" "}
              </Stack>

              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                1
              </Typography>
              <Stack direction="row">
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  {" "}
                  100%
                </Typography>
              </Stack>
            </Stack>
            <Stack className="Box-info">
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {" "}
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#000000d9",
                  }}
                >
                  SKU bán ra
                </Typography>
                <InfoOutlinedIcon
                  sx={{ width: "20px", height: "20px" }}
                  color="#adadad"
                />
              </Stack>

              <Typography
                mt="20px"
                sx={{ fontSize: "20px", fontWeight: "500", color: "#000000d9" }}
              >
                1
              </Typography>
              <Stack direction="row">
                <ArrowDropUpIcon sx={{ color: "#7dd254" }} />
                <Typography
                  sx={{ color: "#7dd254", fontSize: "14px", fontWeight: "600" }}
                >
                  {" "}
                  100%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          backgroundColor="#ffff"
          direction="row"
          sx={{ justifyContent: "center" }}
        >
          <Stack sx={{ width: "70%", justifyContent: "center" }}>
            <Line options={options} data={data} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default GrowthCenter;
