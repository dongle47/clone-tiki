import * as React from "react";
import "./Notify.scss";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Notifies } from "../../../constraints/Notify";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import UpdateIcon from "@mui/icons-material/Update";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
      <div>
        <h4
          style={{
            fontSize: "19px",
            fontWeight: "300",
            marginTop: "20px",
            marginRight: "0px",
            marginBottom: "15px",
            marginLeft: "0px",
            scale: "",
          }}
        >
          Thông báo của tôi (3)
        </h4>
      </div>
      <Box sx={{ width: "100%", top: "0", backgroundColor: "#ffffff"}}>
        <Stack position="static" color="default" direction="row" alignItems="center">
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
          <Box marginRight = "0px" marginLeft = "auto">
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
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  padding: "25px",
                  backgroundColor: "#f6fcff",
                }}
              >
                <Typography
                  component="div"
                  style={{ fontSize: "13px", width: "100px", color: "#666" }}
                >
                  {item.date}
                </Typography>
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
                  <Typography style={{ fontSize: "13px", color: "#666" }}>
                    {item.info}
                  </Typography>
                  <a
                    style={{ fontSize: "13px", color: "#0b74e5" }}
                    target="_blank"
                    href={item.link}
                    rel="noreferrer"
                  >
                    Chi tiết
                  </a>
                </Box>
                <Typography
                  sx={{ fontSize: "14px", color: "#0b74e5", width: "122px" }}
                >
                  Đánh dấu đã đọc
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", color: "#ff424e", width: "42px" }}
                >
                  Xóa
                </Typography>
              </Stack>
            ))}
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Stack sx={{ minHeight: "400px" }}>
            {Notifies.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  padding: "25px",
                  backgroundColor: "#f6fcff",
                }}
              >
                <Typography
                  component="div"
                  style={{ fontSize: "13px", width: "100px", color: "#666" }}
                >
                  {item.date}
                </Typography>
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
                <div style={{ flex: 1 }}>
                  <Typography style={{ fontSize: "13px", color: "#666" }}>
                    {item.info}
                  </Typography>
                  <a
                    style={{ fontSize: "13px", color: "#0b74e5" }}
                    target="_blank"
                    href={item.link}
                    rel="noreferrer"
                  >
                    Chi tiết
                  </a>
                </div>
                <Typography
                  sx={{ fontSize: "14px", color: "#0b74e5", width: "122px" }}
                >
                  Đánh dấu đã đọc
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", color: "#ff424e", width: "42px" }}
                >
                  Xóa
                </Typography>
              </Stack>
            ))}
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Stack
            sx={{
              width: "100%",
              minHeight: "400px",
              margin: "20px 0px 20px 0px",
              padding: "25px",
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" />
            <Typography
              sx={{ margin: "20px 0px", color: "#000000a6", fontSize: "14px" }}
            >
              Bạn chưa có thông báo
            </Typography>
            <Box
              href="/"
              sx={{
                width: "190px",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: "#fdd835",
                padding: "10px 30px",
              }}
            >
              Tiếp tục mua sắm
            </Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Stack
            sx={{
              width: "100%",
              minHeight: "400px",
              margin: "20px 0px 20px 0px",
              padding: "25px",
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg" />
            <Typography
              sx={{ margin: "20px 0px", color: "#000000a6", fontSize: "14px" }}
            >
              Bạn chưa có thông báo
            </Typography>
            <Box
              href="/"
              sx={{
                width: "190px",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: "#fdd835",
                padding: "10px 30px",
              }}
            >
              Tiếp tục mua sắm
            </Box>
          </Stack>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Notify;
