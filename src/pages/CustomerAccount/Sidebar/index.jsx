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

  /*const [selectedTab, setSelectedTab] = React.useState(sidebarTab[0].id);

  const handleListItemClick = (id) => {
    setSelectedTab(id);
  };
  */

  return (
    <React.Fragment>
      <List sx={{ maxWidth: 300 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="hình đại diện" src={avatarProfile} />
          </ListItemAvatar>
          <ListItemText primary="Tài khoản của" secondary="Dong Le" />
        </ListItem>

        {sidebarTab.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => props.setSelectedTab(item.id)}
            selected={props.selectedTab === item.id}
          >
            <ListItemButton>
              <ListItemIcon>{<item.icon />}</ListItemIcon>
              <ListItemText primary={item.text} />
              {index === 1 ? (
                <Badge badgeContent="3" color="error"></Badge>
              ) : null}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
