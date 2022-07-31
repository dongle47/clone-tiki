import React from "react";
import { Outlet, Routes, Route, Link } from "react-router-dom";

import "./CustomerAccount.scss";

import { sidebarTab } from "../../constraints/Profile";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Badge,
  Box,
} from "@mui/material";

import avatarProfile from "../../assets/img/avatar.jpg";

import Info from "./Info/index";
import PhoneNumber from "./Info/PhoneNumber/index";
import Email from "./Info/Email/index";
import Password from "./Info/Password/index";
import Notify from "./Notify/index";
import Orders from "./Orders/index";
import Addresses from "./Addresses/index";
import CreateAddress from "./Addresses/CreateAddress/index";
import PayInfo from "./PayInfo/index";
import ReviewPurchased from "./ReviewPurchased/index";
import FavoriteProduct from "./FavoriteProduct/index";
import MyReview from "./MyReview/index";
import DiscountCode from "./Coupon/index";
import DetailOrder from "./Orders/DetailOrder";

function CustomerAccount() {
  const [selectedTabId, setSelectedTabId] = React.useState(0);

  return (
    <Box className="container">
      <Box className="customer-account">
        <Box width="16rem">
          <List sx={{maxWidth:"300px"}}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="hình đại diện" src={avatarProfile} />
              </ListItemAvatar>
              <ListItemText primary="Tài khoản của" secondary="Dong Le" />
            </ListItem>

            {sidebarTab.map((item, index) => {
              return (
                <Link key={item.id} to={item.link}>
                  <ListItem
                    
                    disablePadding
                    onClick={() => setSelectedTabId(item.id)}
                    selected={selectedTabId === item.id}
                  >
                    <ListItemButton>
                      <ListItemIcon>{<item.icon />}</ListItemIcon>

                      <ListItemText
                        primary={item.text}
                        sx={{ "&>span": { fontSize: "13px" } }}
                      />
                      {index === 1 ? (
                        <Badge badgeContent="3" color="error"></Badge>
                      ) : null}
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
        <Box flex={1} mt="16px">
          {/* <Outlet /> */}
          <Routes>
            <Route path="account/edit/*" element={
              <Routes>
                <Route index element={<Info />} />
                <Route path="phone" element={<PhoneNumber />} />
              <Route path="email" element={<Email />} />
              <Route path="pass" element={<Password />} />
              </Routes>
            } />

            <Route path="notification" element={<Notify />} />

            <Route path="order/*" element={
              <Routes>
                <Route path="history" element={<Orders />} />
                <Route path="detail" element={<DetailOrder />} />
              </Routes>} />

            <Route path="address/*" element={
              <Routes>
                <Route index element={<Addresses />} />
                <Route path="create" element={<CreateAddress />} />
                <Route path="edit/:id" element={<CreateAddress edit= {true}/>}></Route>
              </Routes>
            }/>

            <Route path="/paymentcard" element={<PayInfo />} />

            <Route path="/nhan-xet-san-pham-ban-da-mua" element={<ReviewPurchased />} />

            <Route path="/wishlist" element={<FavoriteProduct />} />

            <Route path="/review" element={<MyReview />} />

            <Route path="/coupons" element={<DiscountCode />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerAccount;
