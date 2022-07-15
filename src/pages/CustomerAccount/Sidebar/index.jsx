import * as React from "react";

import { sidebarTab } from "../../../constraints/Profile";

import avatarProfile from "../../../assets/img/avatar.jpg";

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

export default function PermanentDrawerLeft(props) {
  return (
    <React.Fragment>
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
              <ListItem
                key={item.id}
                disablePadding
                onClick={() => props.handleClick(item.id)}
                selected={props.selectedTabId === item.id}
              >
                <ListItemButton>
                  <ListItemIcon>{<item.icon />}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {index === 1 ? (
                    <Badge badgeContent="3" color="error"></Badge>
                  ) : null}
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </React.Fragment>
  );
}
