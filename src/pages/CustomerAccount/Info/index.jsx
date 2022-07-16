import React from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";

import "./Info.scss";
import avatar from "../../../assets/img/avatar.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function Info() {
  const [day, setDay] = React.useState(null);

  const [image, setImage] = React.useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  const [modalNational, setModalNational] = React.useState(false);
  const openModalNational = () => setModalNational(true);
  const closeModalNational = () => setModalNational(false);

  const [modalViewAvatar, setModalViewAvatar] = React.useState(false);
  const openModalViewAvatar = () => setModalViewAvatar(true);
  const closeModalViewAvatar = () => setModalViewAvatar(false);

  const [modalUploadAvatar, setModalUploadAvatar] = React.useState(false);
  const openModalUploadAvatar = () => setModalUploadAvatar(true);
  const closeModalUploadAvatar = () => setModalUploadAvatar(false);

  const [modalDeleteAvatar, setModalDeleteAvatar] = React.useState(false);
  const openModalDeleteAvatar = () => setModalDeleteAvatar(true);
  const closeModalDeleteAvatar = () => setModalDeleteAvatar(false);

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
                        <WallpaperIcon color='disabled' sx={{ mr: 2 }} />
                        Xem ảnh đại diện
                      </MenuItem>

                      <MenuItem onClick={openModalUploadAvatar}>
                        <VisibilityOutlinedIcon color='disabled' sx={{ mr: 2 }} />
                        Cập nhật ảnh đại diện
                      </MenuItem>

                      <MenuItem onClick={openModalDeleteAvatar}>
                        <DeleteIcon color='disabled' sx={{ mr: 2 }} />
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
              <LocalPhoneOutlinedIcon color='disabled' />
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
              <EmailOutlinedIcon color='disabled' />

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
              <LockIcon color='disabled' />
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
              <FacebookRoundedIcon color='primary' />
              <ListItemText primary="Facebook" />
            </Stack>
            <Button size="small" variant="outlined">
              Liên kết
            </Button>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1}>
              <GoogleIcon color='success' />
              <ListItemText primary="Google" />
            </Stack>
            <Button size="small" variant="outlined">
              Liên kết
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
        open={modalUploadAvatar}
        onClose={closeModalUploadAvatar}
      >
        <Stack
          sx={{ padding: "2rem" }}
          className="modal-view-avatar"
          spacing={2}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Cập nhật ảnh đại diện
            </Typography>

            <IconButton onClick={closeModalUploadAvatar}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider />

          <Box>
            <ImageUploading
              value={image}
              onChange={onChange}
              dataURLKey="data_url"
              acceptType={["jpg"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  {imageList.length == 0 ? (
                    <Stack
                      sx={{
                        width: "100%",
                        height: "30rem",
                        border: "2px dashed grey",
                        borderRadius: "5px",
                      }}
                      style={isDragging ? { color: "red" } : null}
                      justifyContent="center"
                      alignItems="center"
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <Typography
                        sx={{ ml: "auto", mr: "auto", color: "blue" }}
                      >
                        Nhấn để chọn hoặc kéo thả hình ảnh vào khung này.
                      </Typography>
                    </Stack>
                  ) : null}

                  {imageList.map((image) => (
                    <Stack
                      sx={{
                        width: "100%",
                        height: "30rem",
                        borderRadius: "5px",
                      }}
                      spacing={3}
                      className="image-item"
                    >
                      <img
                        style={{
                          width: "25rem",
                          height: "25rem",
                          alignSelf: "center",
                        }}
                        src={image.data_url}
                        alt=""
                      />
                      <Stack
                        direction="row"
                        className="image-item__btn-wrapper"
                        justifyContent="center"
                        spacing={5}
                      >
                        <Button
                          sx={{ width: "50%" }}
                          variant="outlined"
                          onClick={() => onImageRemove(0)}
                        >
                          Hủy bỏ
                        </Button>
                        <Button
                          sx={{ width: "50%" }}
                          variant="contained"
                          onClick={closeModalUploadAvatar}
                        >
                          Lưu thay đổi
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
                </div>
              )}
            </ImageUploading>
          </Box>
        </Stack>
      </Modal>

      {/* Modal delete avatar */}
      <Modal
        sx={{ overflowY: "scroll" }}
        open={modalDeleteAvatar}
        onClose={closeModalDeleteAvatar}
      >
        <Stack className="modal-delete-avatar" direction="row" spacing={2} justifyContent='center' >
          <Stack>
            <InfoOutlinedIcon color="primary" />
          </Stack>

          <Stack spacing={3}>
            <Stack>
              <Typography sx={{ fontWeight: "bold" }}>
                Bạn có chắc muốn xoá ảnh đại diện ?
              </Typography>
              <Typography>
                Hình ảnh đại diện sẽ quay về mặc định của Tiki
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Button onClick={closeModalDeleteAvatar} variant="outlined">Hủy</Button>
              <Button variant="contained">Xóa bỏ</Button>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default Info;
