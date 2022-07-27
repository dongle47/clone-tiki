import { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Rating,
  Pagination,
} from "@mui/material";

import productImage from "../../../assets/img/avatar1.jpg";

import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function ReviewPurchased() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "50rem",
      }}
    >
      <Typography gutterBottom variant="h6">
        Nhận xét sản phẩm đã mua
      </Typography>

      <Stack sx={{ padding: "1rem", backgroundColor: "white" }} direction="row">
        <Card sx={{ border: "0px solid black", maxWidth: "13rem" }}>
          <CardMedia component="img" image={productImage} height="200" />

          <CardContent sx={{ padding: "5px 0 0 0" }}>
            <Typography variant="caption" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              size="small"
              color="primary"
              onClick={handleClickOpen}
            >
              Viết nhận xét
            </Button>
          </CardActions>
        </Card>
      </Stack>

      <Pagination count={10} page={1} />

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Đánh giá sản phẩm
          </BootstrapDialogTitle>
          <DialogContent sx={{ width: "100%" }} dividers>
            <Stack sx={{}} spacing={3}>
              <Stack
                sx={{ width: "35rem", border: "1px solid #c2c2c2" }}
                direction="row"
                spacing={3}
              >
                <Box
                  sx={{ height: 100, width: 100 }}
                  component="img"
                  alt=""
                  src={productImage}
                />

                <Stack>
                  <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                    Fallen Angel
                  </Typography>
                  <Typography variant="subtitle2">Phân loại</Typography>
                </Stack>
              </Stack>

              <Stack
                sx={{ height: "9rem", width: "100%" }}
                alignItems="center"
                spacing={3}
              >
                <Rating
                  sx={{}}
                  name="size-large"
                  defaultValue={2}
                  size="large"
                />

                <TextareaAutosize
                  minRows={6}
                  maxRows={10}
                  aria-label="maximum height"
                  placeholder="Nhập bình luận"
                  style={{
                    width: "100%",
                    border: "1px solid #c2c2c2",
                    fontSize: "20px",
                  }}
                />
              </Stack>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Trở lại
            </Button>

            <Button variant="contained">Hoàn thành</Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </Box>
  );
}

export default ReviewPurchased;
