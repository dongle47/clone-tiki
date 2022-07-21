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

function GrowthCenter() {
  const [value, setValue] = React.useState([null, null]);
  return (
    <Box padding="1rem">
      <Stack spacing={2}>
        <Stack backgroundColor="#ffff" pl="1rem" pt="1rem">
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
                  <React.Fragment maxHeight="32px" justifyContent="center">
                    <TextField {...startProps} />
                    <Box sx={{ mx: 1 }}> to </Box>
                    <TextField {...endProps} />
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
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600", color: "#000000d9" }}
            >
              Chỉ số chính
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#00000073" }}>
              7 ngày qua: 14/07/2022 - 20/07/2022 (So sánh với: 05/07/2022 -
              11/07/2022)
            </Typography>
            <Button variant="outlined" endIcon={<DownloadIcon />}>
              Tải dữ liệu
            </Button>
          </Stack>

          <Stack direction="row" spacing={3}>
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
      </Stack>
    </Box>
  );
}

export default GrowthCenter;
