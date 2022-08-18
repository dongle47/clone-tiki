import { useState, useRef, useEffect } from "react";
import "./ReviewProduct.scss";
import React from "react";
import { toast } from "react-toastify";
import {
  Box,
  Typography,
  Stack,
  Rating,
  IconButton,
  CardMedia,
  Card,
  Avatar,
  Dialog,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import apiMain from "../../apis/apiMain";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import StoreIcon from "@mui/icons-material/Store";
import apiReviews from "../../apis/apiReviews";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

function ReviewProduct(props) {
  const [reviews, setReviews] = useState([]);
  const [content, setContent] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState([1]);
  const [selected, setSelected] = React.useState(0);
  const [chooseReview, setChooseReview] = useState(null);
  const [openCmt, setOpenCmt] = useState(false)
  const user = useSelector((state) => state.auth.user);

  const items = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
  ];
  const handleClickTab = (i) => {
    if (i !== selected) setSelected(i);
  };
  const size = 5;


  useEffect(() => {
    const getMyReviews = async () => {
      let param = {
        _page: page,
        _limit: size,
        rating_gte: selected,
        productId: props.product?.id

      };
      const response = await apiReviews.getMyReviews(param);
      if (response) {
        setReviews(response.data);
      }
    };
    getMyReviews();
  }, [page, props.product, selected]);

  const handleChangePage = (event, newValue) => {
    setPage(newValue);
  };

  const handleClickOpen = (rev) => {
    setChooseReview(rev);
    setOpenCmt(prev => !prev)
  };

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
  }

  const submitReply = () => {//hàm thực hiện tạo reply
    const listReply = chooseReview?.reply || []
    console.log(user)
    let params = {
      reply: [...listReply,
      {
        image: user.img,
        name: user.fullName,
        content: content
      }
      ]
    }

    apiReviews.updateMyReviews(params, chooseReview.id)
      .then(res => {
        toast.success("Cập nhật thành công")
      })
      .catch(err => {
        toast.error("Cập nhật thất bại!")
      })
  }

  return (
    <Box className="container">
      <Box bgcolor={"#fff"}>
        <Typography sx={{ fontSize: "20px" }} py={1} px={2}>
          Đánh Giá - Nhận Xét Từ Khách Hàng
        </Typography>
        <Stack
          direction="row"
          sx={{ padding: "0px 48px 24px", borderBottom: "1px solid #BFBFBf" }}
        >
          <Box sx={{ width: "335px" }}>
            <Stack direction="row" spacing={2} mb={1}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ fontSize: "32px", fontWeight: 600 }}
              >
                4.9
              </Stack>
              <Stack direction="column">
                <Rating name="simple-controlled" value={5} readOnly />
                <Typography
                  sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }}
                >
                  247 Nhận xét
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  name="simple-controlled"
                  value={5}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <div className="SliderReview">
                  <div style={{ width: "90%" }}></div>
                </div>
                <Typography
                  sx={{
                    width: "30px",
                    fontSize: "11px",
                    color: "rgb(128, 128, 137)",
                  }}
                >
                  37
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  name="simple-controlled"
                  value={4}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <div className="SliderReview">
                  <div style={{ width: "10%" }}></div>
                </div>
                <Typography
                  sx={{
                    width: "30px",
                    fontSize: "11px",
                    color: "rgb(128, 128, 137)",
                  }}
                >
                  5
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  name="simple-controlled"
                  value={3}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <div className="SliderReview">
                  <div style={{ width: "0%" }}></div>
                </div>
                <Typography
                  sx={{
                    width: "30px",
                    fontSize: "11px",
                    color: "rgb(128, 128, 137)",
                  }}
                >
                  0
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  name="simple-controlled"
                  value={2}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <div className="SliderReview">
                  <div style={{ width: "0%" }}></div>
                </div>
                <Typography
                  sx={{
                    width: "30px",
                    fontSize: "11px",
                    color: "rgb(128, 128, 137)",
                  }}
                >
                  0
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  name="simple-controlled"
                  value={1}
                  readOnly
                  sx={{ fontSize: "16px" }}
                />
                <div className="SliderReview">
                  <div style={{ width: "0%" }}></div>
                </div>
                <Typography
                  sx={{
                    width: "30px",
                    fontSize: "11px",
                    color: "rgb(128, 128, 137)",
                  }}
                >
                  0
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>

            <Stack direction="row" alignItems={"center"} spacing={2} mt={4}>
              <Typography sx={{ fontSize: "15px" }}>Lọc xem theo: </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                className="ReviewProduct__Filter"
              >
                {items?.map((item, i) => (
                  <Stack
                    onClick={() => {
                      handleClickTab(item.id);
                    }}
                    key={item.id || i}
                    alignItems="center"
                    justifyContent="center"
                    className={` reviewTab__item ${item.id === selected ? "selected" : ""
                      }`}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      spacing={0.5}
                    >
                      <Typography>{item.label}</Typography>
                      <StarBorderIcon sx={{ color: "gold" }} />
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Đánh giá của người mua */}
        {reviews.map((item) => (
          <ReplyReviews 
          reviewId={item.id}
          user={user}
          // submitReply={submitReply} 
          handleChang={handleChange}
          item={item} />
        ))}


        <Stack
          justifyContent={"flex-end"}
          direction="row"
          sx={{ padding: "12px 48px" }}
        >
          {totalPage > 1 ? <Stack spacing={2}>
            <Pagination count={totalPage} page={page} color="primary" onChange={handleChangePage} />
          </Stack> : <></>}
        </Stack>
      </Box>
    </Box>
  );
}

function ReplyReviews(props)
{
  const [content, setContent] = useState([]);
  const [openCmt, setOpenCmt] = useState(false);
  const [chooseReview, setChooseReview] = useState(null);

  const handleClickOpen = (rev) => {
    setChooseReview(rev);
    setOpenCmt(prev => !prev)
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const submitReply = () => {//hàm thực hiện tạo reply
    const listReply = chooseReview?.reply || []
    let params = {
      reply: [...listReply,
      {
        image: props.user.img,
        name: props.user.fullName,
        content: content
      }
      ]
    }

    apiReviews.updateMyReviews(params, props.reviewId)
      .then(res => {
        toast.success("Cập nhật thành công")
      })
      .catch(err => {
        toast.error("Cập nhật thất bại!")
      })
  }

  return (
      <Stack direction="row" sx={{ padding: "32px 48px 24px" }}>
        <Box sx={{ width: "335px" }}>
          <Stack direction="row" spacing={2}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ fontSize: "32px", fontWeight: 600 }}
            >
              <div className="BackgroundAvatar">
                <Avatar src={props.item.userAvatar} />
              </div>
            </Stack>
            <Stack direction="column">
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "rgb(36, 36, 36)",
                  fontWeight: "600",
                }}
              >
                {props.item.userName}
              </Typography>

            </Stack>
          </Stack>
          <Stack direction="column">
            <Stack direction="row" mt={2}>
              <div className="IconWritten">
                <img
                  src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                  alt=""
                />
              </div>
              <Typography sx={{ fontSize: "13px", color: "#888" }}>
                Đã viết:{" "}
              </Typography>
              <Typography ml={1} sx={{ fontSize: "13px", color: "#333" }}>
                1 đánh giá
              </Typography>
            </Stack>
            <Stack direction="row" mt={1}>
              <div className="IconWritten">
                <img
                  src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                  alt=""
                />
              </div>
              <Typography sx={{ fontSize: "13px", color: "#888" }}>
                Đã nhận:{" "}
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#333" }} ml={1}>
                0 Lượt cám ơn
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={2} bgcolor="#ffff" p={2}>
            <Stack spacing={1} minWidth="240px" minHeight="16px">
              <Stack
                className="myreview__avt"
                sx={{
                  backgroundImage: `url(${props.item.productImg})`,
                }}
              ></Stack>
              <Stack>
                <Typography sx={{ fontSize: "14px", marginBottom: "6px" }}>
                  {props.item.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <StoreIcon sx={{ fontSize: "17px", color: "#808089" }} />
                  <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                    {props.item.storeName}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} jutifyContent="center">
                <Stack direction="row" spacing={1}>
                  <Rating readOnly value={props.item.rating} />
                  <Stack jutifyContent="center">
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "400",
                        lineHeight: "20px",
                      }}
                    >
                      {props.item.satisfy}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  fontSize="15px"
                  color="#242424"
                  fontWeight="500"
                >
                  {props.item.subject}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {props.item.content}
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-start"
                gap={"10px"}
              >
                {props.item.imgRate?.map((item) => (
                  <Stack
                    className="myreview__picture"
                    sx={{
                      backgroundImage: `url(${item})`,
                    }}
                  ></Stack>
                ))}
              </Stack>
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                {props.item.option}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={3}>
              <div className="Feedback Selected">
                <ThumbUpOffAltIcon
                  sx={{ color: "rgb(26, 148, 255)", fontSize: "16px" }}
                  mr={3}
                />
                Hữu ích
              </div>
              <Typography className="Feedback" onClick={() => handleClickOpen(props.item)}>Bình luận</Typography>
              <Typography className="Feedback">Chia sẻ</Typography>
            </Stack>

            {
              openCmt ? <Stack p={2} spacing={2}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Nhập phản hồi"
                  multiline
                  maxRows={4}
                  value={content}
                  onChange={handleChange}
                />
                <Button onClick={submitReply}>Đăng</Button>
              </Stack> : <></>

            }

          </Stack>
          {props.item?.reply?.map((itemReply, i) =>
            <Stack spacing={3} px={5} my={3} direction="row">
              <img src={itemReply.image} height="40px" />
              <Stack spacing={1}>
                <Typography>{itemReply.name}</Typography>
                <Typography marginLeft="16px" fontSize="14px">{itemReply.content}</Typography>
              </Stack>
            </Stack>
          )}
        </Box>
      </Stack>
  )
}

export default ReviewProduct;
