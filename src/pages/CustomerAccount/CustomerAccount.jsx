import React from "react";
import { Outlet, Link } from "react-router-dom";
import { isFulfilled } from "@reduxjs/toolkit";

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

function CustomerAccount() {
  const [selectedTabId, setSelectedTabId] = React.useState(0);

  return (
    <div className="container">
      <div className="customer-account">
        <Box sx={{ width: "250px" }}>
          <List sx={{ maxWidth: 300 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="hình đại diện" src={avatarProfile} />
              </ListItemAvatar>
              <ListItemText primary="Tài khoản của" secondary="Dong Le" />
            </ListItem>

            {sidebarTab.map((item, index) => {
              return (
                <Link to={item.link}>
                  <ListItem
                    key={item.id}
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
        <Box sx={{ flex: 1, marginTop: "16px" }}>
          <Outlet />
        </Box>
      </div>
    </div>
  );
}

export default CustomerAccount;
