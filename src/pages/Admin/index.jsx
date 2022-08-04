import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { sidebar } from "../../constraints/Admin";
import { styled } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  Stack,
  ClickAwayListener,
  Button,
  Badge,
  SwipeableDrawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

import CreateCoupon from "./Coupon/CreateCoupon";
import AdminLogin from "./Login";
import Brand from "./Brand";
import CreateBrand from "./Brand/CruBrand";
import Category from "./Category";
import CreateCategory from "./Category/CruCategory/index";
import CouponAdmin from "./Coupon";
import Dashboard from "./Dashboard";
import GrowthCenter from "./GrowthCenter";
import Order from "./Order";
import Product from "./Product";
import CreateProduct from "./Product/CreateProduct";
import Review from "./Review";
import User from "./User";
import DetailUser from "./User/DetailUser";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - calc(${theme.spacing(8)} + 1px))`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Admin() {
  const [openAccount, setOpenAccount] = React.useState(false);

  const handleClickAccount = () => {
    setOpenAccount((prev) => !prev);
  };

  const handleClickAwayAccount = () => {
    setOpenAccount(false);
  };

  const [openNotify, setOpenNotify] = React.useState(false);

  const formNotify = () => {
    return (
      <Box sx={{ zIndex: "10" }}>
        <Typography>dadsadadsa</Typography>
      </Box>
    );
  };

  const stylesAccount = {
    position: "absolute",
    top: 60,
    right: "0",
    left: "-5rem",
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
    width: "16rem",
  };


  const [selectedTabId, setSelectedTabId] = React.useState(0);

  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      <CssBaseline />

      <AppBar
        sx={{ backgroundColor: "white", color: "black" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{
                marginRight: 5,
                // ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Stack direction="row" spacing={3} alignItems="center">
              <IconButton sx={{ border: "1px solid silver" }}>
                <TextsmsOutlinedIcon sx={{ borderRadius: "50%" }} />
              </IconButton>

              <IconButton
                onClick={() => setOpenNotify(true)}
                sx={{ border: "1px solid silver" }}
              >
                <Badge color="info" badgeContent={3}>
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </IconButton>

              <SwipeableDrawer
                anchor="right"
                open={openNotify}
                onClose={() => setOpenNotify(false)}
                onOpen={() => setOpenNotify(true)}
              >
                {formNotify()}
              </SwipeableDrawer>

              <ClickAwayListener onClickAway={handleClickAwayAccount}>
                <Stack
                  sx={{
                    border: "1px solid silver",
                    borderRadius: "3px",
                    padding: "0.3rem",
                    position: "relative",
                  }}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  onClick={handleClickAccount}
                >
                  <Box
                    borderRadius="50%"
                    alt=""
                    component="img"
                    src="https://salt.tikicdn.com/cache/w32/ts/sellercenterFE/93/76/03/2a08fa4ae6a024a752fbba87d145bce8.png"
                    onClick={handleClickAccount}
                  />
                  <Typography variant="caption">dong.le47@yahoo.com</Typography>
                  {openAccount ? (
                    <Stack sx={stylesAccount}>
                      <Typography>Lê Văn Đồng</Typography>

                      <Typography>dong.le47@yahoo.com</Typography>

                      <ListItem disablePadding sx={{ display: "block" }}>
                        <Button
                          variant="text"
                          startIcon={<PersonOutlineIcon />}
                        >
                          Hồ sơ nhà bán
                        </Button>

                        <Button
                          variant="text"
                          startIcon={<DriveFileRenameOutlineOutlinedIcon />}
                        >
                          Thay đổi mật khẩu
                        </Button>
                      </ListItem>
                    </Stack>
                  ) : null}
                </Stack>
              </ClickAwayListener>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <img
              src="https://salt.tikicdn.com/cache/w32/ts/sellercenterFE/93/76/03/2a08fa4ae6a024a752fbba87d145bce8.png"
              alt=""
            />
          </IconButton>

          <Typography sx={{ ml: "1rem", fontWeight: "bold" }} variant="h6">
            Admin Center
          </Typography>
        </DrawerHeader>

        <Divider />

        <List>
          {sidebar.map((item) => (
            <Link to={item.link}>
              <ListItem
                key={item.id}
                disablePadding
                sx={{ display: "block" }}
                selected={selectedTabId === item.id}
                onClick={() => setSelectedTabId(item.id)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {<item.icon />}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <Box component="main" flexGrow={1} p={0} bgcolor="#f5f5fa" minHeight="40rem">
        <DrawerHeader />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="order/*" element={<Order />} />
          <Route path="product/*" element={
            <Routes>
              <Route index element={<Product />} />
              <Route path="create" element={<CreateProduct />} />
            </Routes>
          } />
          
          <Route path="category/*" element={
            <Routes>
              <Route index element={<Category />} />
              <Route path="create" element={<CreateCategory />} />
            </Routes>
          } />
          
          <Route path="brand/*" element={
            <Routes>
              <Route path="create" element={<CreateBrand />} />
              <Route path="edit/:id" element={<CreateBrand edit={true}/>} />
              <Route index element={<Brand />} />
            </Routes>
          }/>

          <Route path="develop" element={<GrowthCenter />} />
          <Route path="coupon/*" element={
            <Routes>
              <Route index element={<CouponAdmin />} />
              <Route path="create" element={<CreateCoupon />} />
            </Routes>
          } />

          <Route path="user/*" element={
          <Routes>
            <Route index element={<User />} />
            <Route path="detail" element={<DetailUser />} />
          </Routes>}/>

          <Route path="review" element={<Review />} />
        </Routes>
      </Box>
    </Stack>
  );
}

export default Admin;
