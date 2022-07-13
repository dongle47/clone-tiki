import * as React from "react";

import { sidebar } from "../../constraints/Profile";

import avatarProfile from "../../assets/img/avatar.jpg";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Badge,
} from "@mui/material";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <React.Fragment>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="hình đại diện" src={avatarProfile} />
            </ListItemAvatar>
            <ListItemText primary="Tài khoản của" secondary="Dong Le" />
          </ListItem>

          {sidebar.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.text} />
                { index === 1 ? <Badge badgeContent='3' color="error" ></Badge> : null}
              </ListItemButton>
              
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
