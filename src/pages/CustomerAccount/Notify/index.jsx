import * as React from "react";
import "./Notify.scss";
import PropTypes from "prop-types";

import {
  Stack,
  Tabs,
  Tab,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Button,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import UpdateIcon from "@mui/icons-material/Update";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Notifies } from "../../../constraints/Notify";
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
        <Box sx={{ p: 0 }}>
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

const options = ["Đánh dấu đọc tất cả", "Xóa tất cả thông báo"];
const ITEM_HEIGHT = 48;

function Notify() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%", top: "0" }}>
      <Typography variant="h6">Thông báo của tôi</Typography>

      <Box sx={{ width: "100%", mt: "1rem", backgroundColor: "#fff" }}>
        <Stack
          position="static"
          color="default"
          direction="row"
          alignItems="center"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
            backgroundColor="#ffffff"
          >
            <Tab
              icon={
                <Badge variant="dot" color="error">
                  <HomeIcon color="action" />
                </Badge>
              }
              aria-label="Home"
              sx={{ coler: "#666666" }}
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Badge variant="dot" color="error">
                  <CardGiftcardIcon color="action" />
                </Badge>
              }
              aria-label="Gift Card"
              {...a11yProps(1)}
            />
            <Tab
              icon={<ReceiptIcon />}
              aria-label="Receipt"
              {...a11yProps(2)}
            />
            <Tab icon={<UpdateIcon />} aria-label="Update" {...a11yProps(3)} />
          </Tabs>
          <Box marginRight="0px" marginLeft="auto">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "25ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
        <TabPanel value={value} index={0}>
          <Stack sx={{ minHeight: "400px" }}>
            {Notifies.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                padding={3}
              >
                <Typography variant="body2">{item.date}</Typography>

                <div
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0px 0px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      color: "#ffffff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                      backgroundColor: "#fd810b",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
                    </svg>
                  </div>
                </div>

                <Box style={{ flex: 1 }}>
                  <Typography variant="body2">{item.info}</Typography>
                  <a
                    style={{ fontSize: "13px", color: "#0b74e5" }}
                    target="_blank"
                    href={item.link}
                    rel="noreferrer"
                  >
                    Chi tiết
                  </a>
                </Box>

                <Button>Đánh dấu đã đọc</Button>

                <Button color="warning">Xóa</Button>
              </Stack>
            ))}
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Stack
            sx={{
              width: "100%",
              minHeight: "400px",
            }}
            justifyContent="center"
            alignItems="center"
            p="2rem"
          >
            <img
              alt=""
              src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
            />
            <Typography variant="body1">Bạn chưa có thông báo</Typography>

            <Button variant="contained" color="warning">
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Stack
            sx={{
              width: "100%",
              minHeight: "400px",
            }}
            justifyContent="center"
            alignItems="center"
            p="2rem"
          >
            <img
              alt=""
              src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
            />
            <Typography variant="body1">Bạn chưa có thông báo</Typography>

            <Button variant="contained" color="warning">
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Stack
            sx={{
              width: "100%",
              minHeight: "400px",
            }}
            justifyContent="center"
            alignItems="center"
            p="2rem"
          >
            <img
              alt=""
              src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
            />
            <Typography variant="body1">Bạn chưa có thông báo</Typography>

            <Button variant="contained" color="warning">
              Tiếp tục mua sắm
            </Button>
          </Stack>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Notify;
