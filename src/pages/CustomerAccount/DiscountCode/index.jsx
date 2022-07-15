import * as React from "react";
import "./DiscountCode.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { DiscountCodes } from "../../../constraints/DiscountCode";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

function DiscountCode() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography>Mã giảm giá</Typography>

      <Box sx={{ width: "100%", top: "0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Tất Cả"
              {...a11yProps(0)}
              style={{
                fontSize: "13px",
                fontWeight: "400",
                textTransform: "none",
              }}
            />
            <Tab
              label="Ưu đãi thanh toán"
              {...a11yProps(1)}
              style={{
                fontSize: "13px",
                fontWeight: "400",
                textTransform: "none",
              }}
            />
            <Tab
              label="Hết Hiệu Lực"
              {...a11yProps(2)}
              style={{
                fontSize: "13px",
                fontWeight: "400",
                textTransform: "none",
              }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Stack direction="row" spacing={2}>
            <Stack spacing={1.6}>
              {DiscountCodes.map((item) => (
                <Stack
                  sx={{ width: "100%", borderRadius: "5px", padding: "0.6rem" }}
                  key={item.id}
                  className="coupon-container"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Stack
                    sx={{ width: "70%", height: "132px" }}
                    direction="row"
                    spacing={3}
                  >
                    <Stack
                      sx={{ marginLeft: "1rem" }}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
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

                    <Stack sx={{ width: "10rem" }}>
                      <Typography>{item.name}</Typography>
                      <Typography>{item.note}</Typography>
                      <Typography>{item.expired}</Typography>
                    </Stack>
                  </Stack>
                  <InfoOutlinedIcon color="info" />
                </Stack>
              ))}
            </Stack>

            <Stack spacing={1.6}>
              {DiscountCodes.map((item) => (
                <Stack
                  sx={{ width: "100%", borderRadius: "5px", padding: "0.6rem" }}
                  key={item.id}
                  className="coupon-container"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Stack
                    sx={{ width: "70%", height: "132px" }}
                    direction="row"
                    spacing={3}
                  >
                    <Stack
                      sx={{ marginLeft: "1rem" }}
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
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

                    <Stack sx={{ width: "10rem" }}>
                      <Typography>{item.name}</Typography>
                      <Typography>{item.note}</Typography>
                      <Typography>{item.expired}</Typography>
                    </Stack>
                  </Stack>
                  <InfoOutlinedIcon color="info" />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>

        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}

export default DiscountCode;
