import * as React from "react";
import "./Coupon.scss";
import { useState, useEffect } from "react";
import apiMain from "../../../apis/apiMain";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Stack,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#189eff",
    },
    secondary: {
      main: "#fffff",
    },
  },
});

function Coupon() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [myCoupons, setMyCoupons] = React.useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const size = 8;

  useEffect(() => {
    const getCoupons = async () => {
      let param = {
        _page: page,
        _limit: size,
      };
      const response = await apiMain.getCoupons(param);
      if (response) {
        setMyCoupons(response.data);
        setTotalPage(Math.ceil(response.pagination._totalRows / size));
      }
    };
    getCoupons();
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <Box className="coupon">
      <Typography variant="h6">Mã giảm giá</Typography>
      <Box sx={{ width: "100%", top: "0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" justifyContent="space-between">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab className="coupon__tab" label="Tất Cả" {...a11yProps(0)} />
              <Tab
                className="coupon__tab"
                label="Ưu đãi thanh toán"
                {...a11yProps(1)}
              />
              <Tab
                className="coupon__tab"
                label="Hết Hiệu Lực"
                {...a11yProps(2)}
              />
            </Tabs>
            <Button
              color="primary"
              size="medium"
              startIcon={<LocalActivityIcon />}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Khám Phá Thêm
            </Button>
          </Stack>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={1.5}>
            {myCoupons.map((item) => (
              <Grid item xs={6} key={item.id}>
                <Stack
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "0.6rem",
                  }}
                  className="coupon-container"
                  direction="row"
                  justifyContent="space-between"
                  backgroundColor="#fff"
                >
                  <Stack
                    sx={{ flex: "1", height: "132px" }}
                    direction="row"
                    spacing={3}
                  >
                    <Stack
                      sx={{ marginLeft: "1rem", width: "6rem" }}
                      alignItems="center"
                      justifyContent="center"
                      gap="0.3rem"
                    >
                      <img
                        alt=""
                        src={item.image}
                        style={{
                          width: "5rem",
                          height: "5rem",
                          justifyContent: "center",
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          margin: "0px 0px 0px 0px",
                        }}
                        align="center"
                      >
                        {item.publisher}
                      </Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack flex="1">
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#242424",
                        }}
                        className="text-overflow-2-lines"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                        className="text-overflow-3-lines"
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                          marginBottom: "0px",
                          marginTop: "auto",
                        }}
                      >
                        {item.expired}
                      </Typography>
                    </Stack>
                  </Stack>
                  <InfoOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                    color="info"
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} mt="10px">
            <ThemeProvider theme={theme} >
              <Pagination
                count={totalPage}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </ThemeProvider>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={1.5}>
            {myCoupons.map((item) => (
              <Grid item xs={6} key={item.id}>
                <Stack
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "0.6rem",
                  }}
                  className="coupon-container"
                  direction="row"
                  justifyContent="space-between"
                  backgroundColor="#fff"
                >
                  <Stack
                    sx={{ flex: "1", height: "132px" }}
                    direction="row"
                    spacing={3}
                  >
                    <Stack
                      sx={{ marginLeft: "1rem", width: "6rem" }}
                      alignItems="center"
                      justifyContent="center"
                      gap="0.3rem"
                    >
                      <img
                        alt=""
                        src={item.image}
                        sx={{
                          width: "5rem",
                          height: "5rem",
                          justifyContent: "center",
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          margin: "0px 0px 0px 0px",
                        }}
                        align="center"
                      >
                        {item.publisher}
                      </Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack flex="1">
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#242424",
                        }}
                        className="text-overflow-2-lines"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                        className="text-overflow-3-lines"
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                          marginBottom: "0px",
                          marginTop: "auto",
                        }}
                      >
                        {item.expired}
                      </Typography>
                    </Stack>
                  </Stack>
                  <InfoOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                    color="info"
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} mt="10px">
            <ThemeProvider theme={theme}>
              <Pagination
                count={totalPage}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </ThemeProvider>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={1.5}>
            {myCoupons.map((item) => (
              <Grid item xs={6} key={item.id}>
                <Stack
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "0.6rem",
                  }}
                  className="coupon-container"
                  direction="row"
                  justifyContent="space-between"
                  backgroundColor="#fff"
                >
                  <Stack
                    sx={{ flex: "1", height: "132px" }}
                    direction="row"
                    spacing={3}
                  >
                    <Stack
                      sx={{ marginLeft: "1rem", width: "6rem" }}
                      alignItems="center"
                      justifyContent="center"
                      gap="0.3rem"
                    >
                      <img
                        alt=""
                        src={item.image}
                        style={{
                          width: "5rem",
                          height: "5rem",
                          justifyContent: "center",
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          margin: "0px 0px 0px 0px",
                        }}
                        align="center"
                      >
                        {item.publisher}
                      </Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack flex="1">
                      <Typography
                        sx={{
                          fontSize: "17px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          color: "#242424",
                        }}
                        className="text-overflow-2-lines"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                        className="text-overflow-3-lines"
                      >
                        {item.subtitle}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#787878",
                          fontSize: "13px",
                          fontWeight: "400",
                          marginBottom: "0px",
                          marginTop: "auto",
                        }}
                      >
                        {item.expired}
                      </Typography>
                    </Stack>
                  </Stack>
                  <InfoOutlinedIcon
                    sx={{ width: "20px", height: "20px" }}
                    color="info"
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} mt="10px">
            <ThemeProvider theme={theme}>
              <Pagination
                count={totalPage}
                page={page}
                onChange={handleChangePage}
                color="primary"
              />
            </ThemeProvider>
          </Stack>
        </TabPanel>
      </Box>
      <Stack alignItems="center">
        <Stack
          sx={{
            width: "270px",
            height: "46px",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
          }}
        >
          <Button
            color="primary"
            size="large"
            fontSize="15px"
            startIcon={<LocalActivityIcon />}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Khám Phá Thêm
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Coupon;
