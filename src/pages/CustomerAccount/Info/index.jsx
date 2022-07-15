import React from "react";

import "./Info.scss";
import avatar from "../../../assets/img/avatar.jpg";

import { Link } from "react-router-dom";

import {
  Avatar,
  Typography,
  Stack,
  ListItemText,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  hexToRgb,
  Modal,
  Box,
  IconButton,
  Paper,
  InputBase,
  Divider,
  Badge,
  ClickAwayListener,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/Lock";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

function Info() {
  const [day, setDay] = React.useState("");

  const [modalNational, setModalNational] = React.useState(false);
  const openModalNational = () => setModalNational(true);
  const closeModalNational = () => setModalNational(false);

  const [modalViewAvatar, setModalViewAvatar] = React.useState(false);
  const openModalViewAvatar = () => setModalViewAvatar(true);
  const closeModalViewAvatar = () => setModalViewAvatar(false);

  const [modalUploadAvatar, setModalUploadAvatar] = React.useState(false);
  const openModalUploadAvatar = () => setModalUploadAvatar(true);
  const closeModalUploadViewAvatar = () => setModalUploadAvatar(false);

  const [openAvatar, setOpenAvatar] = React.useState(false);
  const handleClickAvatar = () => {
    setOpenAvatar((prev) => !prev);
  };
  const handleClickAwayAvatar = () => {
    setOpenAvatar(false);
  };

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <Stack className="customer-info" spacing={3}>
      <Typography>Thông tin tài khoản</Typography>

      <Stack direction="row" spacing={3}>
        <Stack spacing={3} className="">
          <Typography>Thông tin cá nhân</Typography>

          <Stack direction="row" spacing={4}>
            <ClickAwayListener onClickAway={handleClickAwayAvatar}>
              <Box sx={{ position: "relative" }} onClick={handleClickAvatar}>
                <Badge
                  badgeContent={
                    <EditRoundedIcon fontSize="30" sx={{ color: "white" }} />
                  }
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  color="primary"
                >
                  <Avatar
                    sx={{
                      width: 110,
                      height: 110,
                      border: "3px solid aquamarine",
                    }}
                    src={avatar}
                  />
                </Badge>
                {openAvatar ? (
                  <Stack className="avatar-control">
                    <Stack autoFocusItem={openAvatar}>
                      <MenuItem onClick={openModalViewAvatar}>
                        <WallpaperIcon sx={{ mr: 2 }} />
                        Xem ảnh đại diện
                      </MenuItem>

                      <MenuItem>
                        <VisibilityIcon sx={{ mr: 2 }} />
                        Cập nhật ảnh đại diện
                      </MenuItem>

                      <MenuItem>
                        <DeleteIcon sx={{ mr: 2 }} />
                        Xóa ảnh đại diện hiện tại
                      </MenuItem>
                    </Stack>
                  </Stack>
                ) : null}
              </Box>
            </ClickAwayListener>

            <Stack spacing={3} justifyContent="space-around">
              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                justifyContent="space-between"
              >
                <label>Họ & tên</label>
                <input id="input-name" placeholder="Thêm họ tên" type="text" />
              </Stack>

              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                justifyContent="space-between"
              >
                <label>Nickname</label>
                <input
                  id="input-nickname"
                  placeholder="Thêm nickname"
                  type="text"
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={9} alignItems="center">
            <label>Ngày sinh</label>
            <Stack direction="row" spacing={2} alignItems="center">
              <Select
                sx={{ maxHeight: 30, minWidth: 100 }}
                value={day}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Ngày</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>

              <Select
                sx={{ maxHeight: 30, minWidth: 100 }}
                value={day}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Tháng</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>

              <Select
                sx={{ maxHeight: 30, minWidth: 100 }}
                value={day}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Năm</em>
                </MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={5} alignItems="center">
            <label>Giới tính</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="male" control={<Radio />} label="Nam" />
              <FormControlLabel value="female" control={<Radio />} label="Nữ" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Khác"
              />
            </RadioGroup>
          </Stack>

          <Stack direction="row" alignItems="center">
            <label>Quốc tịch</label>
            <Button
              variant="outlined"
              onClick={openModalNational}
              endIcon={<KeyboardArrowDownIcon />}
              color="inherit"
              sx={{ color: hexToRgb("#ACABAB"), width: "73%" }}
            >
              Chọn quốc tịch
            </Button>
          </Stack>

          <Button variant="contained" sx={{ width: 200, alignSelf: "center" }}>
            Lưu thay đổi
          </Button>
        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack spacing={4} className="customer-info__column2">
          <Typography>Số điện thoại và Email</Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <LocalPhoneOutlinedIcon />
              <ListItemText primary="Số điện thoại" secondary="0123456789" />
            </Stack>
            <Link to="/customer/account/edit/phone">
              <Button size="small" variant="outlined">
                Cập nhật
              </Button>
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={15}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <EmailOutlinedIcon />

              <ListItemText
                primary="Địa chỉ email"
                secondary="dong.le47@yahoo.com"
              />
            </Stack>

            <Link to="/customer/account/edit/email">
              <Button size="small" variant="outlined">
                Cập nhật
              </Button>
            </Link>
          </Stack>

          <Typography>Bảo mật</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <LockIcon />
              <ListItemText primary="Đổi mật khẩu" />
            </Stack>
            <Link to="/customer/account/edit/pass">
              <Button size="small" variant="outlined">
                Đổi mật khẩu
              </Button>
            </Link>
          </Stack>

          <Typography>Liên kết mạng xã hội</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <FacebookRoundedIcon />
              <ListItemText primary="Facebook" />
            </Stack>
            <Button size="small" variant="outlined">
              Đổi mật khẩu
            </Button>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <GoogleIcon />
              <ListItemText primary="Google" />
            </Stack>
            <Button size="small" variant="outlined">
              Đổi mật khẩu
            </Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Modal nationality  */}
      <Modal open={modalNational} onClose={closeModalNational}>
        <Box className="modal-nationality">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Chọn quốc tịch
            </Typography>
            <IconButton onClick={closeModalNational}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Paper>
            <IconButton aria-label="search" onClick={closeModalNational}>
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Tìm kiếm nhanh" />
          </Paper>

          <RadioGroup>
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Việt Nam"
            />
            <FormControlLabel value="female" control={<Radio />} label="Khác" />
          </RadioGroup>

          <Button
            variant="contained"
            sx={{ alignSelf: "center", mr: "auto", ml: "auro", width: "100%" }}
          >
            Lưu thay đổi
          </Button>
        </Box>
      </Modal>

      {/* Modal view avatar */}
      <Modal
        sx={{ overflowY: "scroll" }}
        open={modalViewAvatar}
        onClose={closeModalViewAvatar}
      >
        <Stack className="modal-view-avatar" spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Xem ảnh đại diện
            </Typography>
            <IconButton onClick={closeModalViewAvatar}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <img
            style={{ width: "35rem", height: "35rem", alignSelf: "center" }}
            src={avatar}
            alt="ảnh đại diện"
          />
        </Stack>
      </Modal>

      {/* Modal upload avatar */}
      <Modal
        sx={{ overflowY: "scroll" }}
        open={modalViewAvatar}
        onClose={closeModalViewAvatar}
      >
        <Stack className="modal-view-avatar" spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Xem ảnh đại diện
            </Typography>
            <IconButton onClick={closeModalViewAvatar}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <img
            style={{ width: "35rem", height: "35rem", alignSelf: "center" }}
            src={avatar}
            alt="ảnh đại diện"
          />
        </Stack>
      </Modal>
    </Stack>
  );
}

export default Info;
