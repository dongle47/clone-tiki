import React from "react";
import {  Outlet, Link } from "react-router-dom";
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
} from "@mui/material";

import avatarProfile from "../../assets/img/avatar.jpg";

function CustomerAccount() {
  const [selectedTabId, setSelectedTabId] = React.useState(0);

  const handleClick = (id) => {
    setSelectedTabId(id);
  };

  return (
    <div className="container">
      <div className="customer-account">
        <List sx={{ maxWidth: 300 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="hình đại diện" src={avatarProfile} />
            </ListItemAvatar>
            <ListItemText primary="Tài khoản của" secondary="Dong Le" />
          </ListItem>

          {sidebarTab.map((item, index) => {
            if (item.text != "/") {
              return (
                <Link to={item.link}>
                  <ListItem
                    key={item.id}
                    disablePadding
                    onClick={() => handleClick(item.id)}
                    selected={selectedTabId === item.id}
                  >
                    <ListItemButton>
                      <ListItemIcon>{<item.icon />}</ListItemIcon>

                      <ListItemText primary={item.text} />
                      {index === 1 ? (
                        <Badge badgeContent="3" color="error"></Badge>
                      ) : null}
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            }
          })}
        </List>

        <Outlet />
      </div>
    </div>
  );
}

export default CustomerAccount;
