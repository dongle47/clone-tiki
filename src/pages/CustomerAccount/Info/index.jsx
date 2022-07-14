import {
  Grid,
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
  CssBaseline,
  Badge,
  MenuList,
  ClickAwayListener,
  Popper,
  Grow,
  SxProps,
} from "@mui/material";
import React from "react";
import "./Info.scss";
import avatar from "../../../assets/img/avatar.jpg";
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

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

function Info() {
  const [day, setDay] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const [openAvatar, setOpenAvatar] = React.useState(false);

  const handleClickAvatar = () => {
    setOpenAvatar((prev) => !prev);
  };

  const handleClickAwayAvatar = () => {
    setOpenAvatar(false);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
                    sx={{ width: 110, height: 110, border: "2px solid aqua" }}
                    src={avatar}
                  />
                </Badge>
                {openAvatar ? (
                  <Stack className="avatar-control">
                    <Stack autoFocusItem={openAvatar}>
                      <MenuItem>
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
              onClick={handleOpenModal}
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
            <Button size="small" variant="outlined">
              Cập nhật
            </Button>
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
            <Button size="small" variant="outlined">
              Cập nhật
            </Button>
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
            <Button size="small" variant="outlined">
              Đổi mật khẩu
            </Button>
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

      {/* Modal  */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Chọn quốc tịch
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Paper>
            <IconButton aria-label="search" onClick={handleCloseModal}>
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
    </Stack>
  );
}

export default Info;
