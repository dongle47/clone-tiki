import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
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
import { orderTabs } from "../../../constraints/OrderItem";

import productImage from "../../../assets/img/avatar1.jpg";

import CloseIcon from "@mui/icons-material/Close";
import apiMain from "../../../apis/apiMain";
import apiCart from "../../../apis/apiCart";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./ReviewPurchased.scss";

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
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [imgRate, setImgRate] = useState();
  const [storeName, setStoreName] = useState("");
  const [content, setContent] = useState("");
  const [satisfy, setSatisfy] = useState("");
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const [chosenProduct, setChosenProduct] = useState();

  const [myRevPurchaseds, setMyRevPurchaseds] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(1);
  const size = 5;
  const user = useSelector((state) => state.auth.user); //lấy user từ store
  useEffect(() => {
    const getMyRevPurchaseds = async () => {
      let param = {
        _page: page,
        _limit: size,
        idUser: user.id,
        "type.id": orderTabs[4].id,
      };
      const response = await apiCart.getOrders(param);
      if (response) {
        let listProduct = [];
        response.data.forEach((item) => listProduct.push(...item.products));
        setMyRevPurchaseds(listProduct);
        console.log(listProduct);
        setTotalPage(Math.ceil(response.pagination._totalRows / size));
      }
    };
    getMyRevPurchaseds();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const handleChangeRating = (event, value) => {
    setRating(value);
  };
  const handleClickOpen = (product) => {
    setChosenProduct(product);
    setOpen(true);
  };

  console.log(user);

  const handleSaveCmt = () => {
    const params = {
      imgRate: [],
      productName: chosenProduct?.name || "",
      storeName: "Tiki",
      rating: rating,
      satisfy: satisfy,
      content: content,
      productImg: chosenProduct?.image || "",
      userId: user.id,
      userName: user.fullName,
      userAvatar: user.img,
    };

    apiMain
      .postMyReviews(params)
      .then((res) => {
        toast.success("Đã đánh giá");
        handleClose();
      })
      .catch((error) => {
        toast.error("Đánh giá thất bại!");
      });
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

      <Stack
        sx={{ padding: "1rem", backgroundColor: "white" }}
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        {myRevPurchaseds.map((item) => (
          <Card
            key={item.id}
            sx={{ border: "0px solid black", maxWidth: "13rem" }}
          >
            <CardMedia component="img" image={item.image} height="200" />
            <CardContent sx={{ padding: "5px 0 0 0" }}>
              <Typography
                className="reviewpurchased__name"
                variant="caption"
                color="text.secondary"
              >
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => handleClickOpen(item)}
              >
                Viết nhận xét
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>

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
                  src={chosenProduct?.image}
                />

                <Stack>
                  <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                    {chosenProduct?.name}
                  </Typography>
                  {/* <Typography variant="subtitle2">Phân loại</Typography> */}
                </Stack>
              </Stack>
              <Stack
                sx={{ height: "9rem", width: "100%" }}
                alignItems="center"
                spacing={3}
              >
                <Rating
                  onChange={handleChangeRating}
                  sx={{}}
                  name="size-large"
                  defaultValue={5}
                  value={rating}
                  size="large"
                />

                <TextareaAutosize
                  onChange={handleChangeContent}
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

            <Button variant="contained" onClick={handleSaveCmt}>
              Hoàn thành
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>

      {myRevPurchaseds.length !== 0 ? (
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={totalPage} page={page} onChange={handleChange} />
        </Stack>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default ReviewPurchased;
