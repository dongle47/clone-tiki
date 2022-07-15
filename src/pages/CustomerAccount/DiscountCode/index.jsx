import * as React from "react";
import "./DiscountCode.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tất Cả" {...a11yProps(0)} />
            <Tab label="Ưu đãi thanh toán" {...a11yProps(1)} />
            <Tab label="Hết Hiệu Lực" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Stack direction="row">
            <Stack
              className="coupon-container"
              direction="row"
              justifyContent="space-between"
            >
              <Stack
                sx={{ width: "70%" }}
                direction="row"
                justifyContent="space-between"
              >
                <img
                  alt=""
                  src="https://salt.tikicdn.com/cache/128x128/ts/upload/92/ad/57/0d9a096885400b7b4752b67afdc72898.png"
                />

                <Stack>
                  <Typography>Giảm 500k</Typography>
                  <Typography>Số lượng có hạn</Typography>
                  <Typography>HSD: 31/07/2022</Typography>
                </Stack>
              </Stack>

              <InfoOutlinedIcon />
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
