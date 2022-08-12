import { useState, useRef, useEffect } from "react";
import "./ReviewProduct.scss"
import React from "react";
import {
    Box, Typography,
    Stack,
    Rating,
    CardMedia,
    Card,
} from "@mui/material"
import apiMain from "../../apis/apiMain";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import Pagination from '@mui/material/Pagination';
import { useSelector } from "react-redux";
import StoreIcon from "@mui/icons-material/Store";
import StarBorder from "@mui/icons-material/StarBorder";

function ReviewProduct() {
    const [reviews, setReviews] = useState([])
    const [totalPage, setTotalPage] = useState(10)
    const [page, setPage] = useState([1])
    const [chosenProduct, setChosenProduct] = useState()
    const [filter, setFilter] = useState({})
    const [selected, setSelected] = React.useState(0)
    const items = [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' },
        { id: 4, label: '4' },
        { id: 5, label: '5' },
    ]
    const handleClickTab = (i) => {
        if (i !== selected)
            setSelected(i)

    }
    const size = 10
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        const getMyReviews = async () => {
            let param = {
                _page: page,
                _limit: size,
                rating_gte: selected
            }
            const response = await apiMain.getMyReviews(param)
            if (response) {
                setReviews(response.data)
            }
        }
        getMyReviews()
    }, [page])
    useEffect(() => {
        const getMyReviews = async () => {
            let param = {
                _page: page,
                _limit: size,
                rating_gte: selected
            }
            const response = await apiMain.getMyReviews(param)
            if (response) {
                setReviews(response.data)
            }
        }
        getMyReviews()
    }, [page])
    return (
        <Box className="container">
            <Box bgcolor={'#fff'} >

                <Typography sx={{ fontSize: "20px" }} py={1} px={2}>Đánh Giá - Nhận Xét Từ Khách Hàng</Typography>
                <Stack direction="row" sx={{ padding: "0px 48px 24px", borderBottom: "1px solid #BFBFBf" }} >
                    <Box sx={{ width: "335px" }}>
                        <Stack direction="row" spacing={2} mb={1}>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                                sx={{ fontSize: "32px", fontWeight: 600 }}
                            >4.9</Stack>
                            <Stack direction="column">
                                <Rating
                                    name="simple-controlled"
                                    value={5}
                                    readOnly
                                />
                                <Typography sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }}>247 Nhận xét</Typography>
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
                                    <div style={{ width: "90%" }} ></div>
                                </div>
                                <Typography sx={{ width: "30px", fontSize: "11px", color: "rgb(128, 128, 137)" }} >37</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating
                                    name="simple-controlled"
                                    value={4}
                                    readOnly
                                    sx={{ fontSize: "16px" }}
                                />
                                <div className="SliderReview">
                                    <div style={{ width: "10%" }} ></div>
                                </div>
                                <Typography sx={{ width: "30px", fontSize: "11px", color: "rgb(128, 128, 137)" }}>5</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating
                                    name="simple-controlled"
                                    value={3}
                                    readOnly
                                    sx={{ fontSize: "16px" }}
                                />
                                <div className="SliderReview">
                                    <div style={{ width: "0%" }} ></div>
                                </div>
                                <Typography sx={{ width: "30px", fontSize: "11px", color: "rgb(128, 128, 137)" }}>0</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating
                                    name="simple-controlled"
                                    value={2}
                                    readOnly
                                    sx={{ fontSize: "16px" }}
                                />
                                <div className="SliderReview">
                                    <div style={{ width: "0%" }} ></div>
                                </div>
                                <Typography sx={{ width: "30px", fontSize: "11px", color: "rgb(128, 128, 137)" }}>0</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating
                                    name="simple-controlled"
                                    value={1}
                                    readOnly
                                    sx={{ fontSize: "16px" }}
                                />
                                <div className="SliderReview">
                                    <div style={{ width: "0%" }} ></div>
                                </div>
                                <Typography sx={{ width: "30px", fontSize: "11px", color: "rgb(128, 128, 137)" }}>0</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        {/* <Typography sx={{ fontSize: "17px", fontWeight: "500 !important" }} mb={2}>Tất cả hình ảnh</Typography>
                        <Stack direction="row" spacing={1}>
                        {
                            reviews.slice(0,6).map((item) =>
                                
                                    <Stack className="imgReview"  justifyContent="space-between"
                                        sx={{
                                            backgroundImage: `url(${item.productImg})`,
                                        }}
                                    ></Stack>
                            )
                        }
                        </Stack> */}
                        <Stack direction="row" alignItems={"center"} spacing={2} mt={4}>
                            <Typography sx={{ fontSize: "15px" }}>Lọc xem theo: </Typography>
                            {/* <div className='ReviewProduct__Filter Selected'>
                                <CheckIcon sx={{ color: "rgb(26, 148, 255)", fontSize: "16px", marginRight: "6px" }} mr={1} />
                                Mới nhất
                            </div>
                            <div className='ReviewProduct__Filter'>
                                Có hình ảnh
                            </div>
                            <div className='ReviewProduct__Filter'>
                                Đã mua hàng
                            </div> */}
                            <Stack direction="row" alignItems="center" spacing={2} className="ReviewProduct__Filter" >
                                {
                                    items?.map((item, i) =>
                                        <Stack onClick={() => { handleClickTab(i) }} key={item.id || i}
                                            alignItems="center" justifyContent="center"
                                            className={` reviewTab__item ${i === selected ? "selected" : ""}`}>
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
                                                <Typography>{item.label}</Typography>
                                                <StarBorderIcon sx={{ color: "gold" }} />
                                            </Stack>
                                        </Stack>)
                                }
                            </Stack>
                            {/* <div className='ReviewProduct__Filter'>
                                5
                                <StarBorderIcon />
                            </div>
                            <div className='ReviewProduct__Filter Selected'>
                                <CheckIcon sx={{ color: "rgb(26, 148, 255)", fontSize: "16px", marginRight: "6px" }} />
                                4<StarIcon sx={{ color: "yellow" }} />
                            </div>
                            <div className='ReviewProduct__Filter'>
                                3<StarBorderIcon />
                            </div>
                            <div className='ReviewProduct__Filter'>
                                2<StarBorderIcon />
                            </div>
                            <div className='ReviewProduct__Filter'>
                                1<StarBorderIcon />
                            </div> */}
                        </Stack>
                    </Box>
                </Stack>

                {/* Đánh giá của người mua */}
                {
                    reviews.map((item, i) =>
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
                                        <div className='BackgroundAvatar'>
                                            <span>NA</span>
                                        </div>
                                    </Stack>
                                    <Stack direction="column">
                                        <Typography sx={{ fontSize: "15px", color: "rgb(36, 36, 36)", fontWeight: "600" }}>Nguyễn Văn A</Typography>
                                        <Typography sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }}>Đã tham gia 6 năm</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="column">
                                    <Stack direction="row" mt={2}>
                                        <div className='IconWritten'>
                                            <img src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png" alt="" />
                                        </div>
                                        <Typography sx={{ fontSize: "13px", color: "#888" }}>Đã viết: </Typography>
                                        <Typography ml={1} sx={{ fontSize: "13px", color: "#333" }}>1 đánh giá</Typography>
                                    </Stack>
                                    <Stack direction="row" mt={1}>
                                        <div className='IconWritten'>
                                            <img src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png" alt="" />
                                        </div>
                                        <Typography sx={{ fontSize: "13px", color: "#888" }}>Đã nhận: </Typography>
                                        <Typography sx={{ fontSize: "13px", color: "#333" }} ml={1}>0 Lượt cám ơn</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Stack direction="row" spacing={2} bgcolor="#ffff" p={2}
                                >
                                    <Stack
                                        spacing={1} minWidth="240px" minHeight="256px"
                                    >
                                        <Stack className="myreview__avt"
                                            sx={{
                                                backgroundImage: `url(${item.productImg})`,
                                            }}
                                        ></Stack>
                                        <Stack>
                                            <Typography sx={{ fontSize: "14px", marginBottom: "6px" }}>
                                                {item.name}
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <StoreIcon sx={{ fontSize: "17px", color: "#808089" }} />
                                                <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                                                    {item.storeName}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Stack direction="row" spacing={1} jutifyContent="center">
                                            <Stack direction="row" spacing={1}>
                                                <Rating readOnly value={item.rating} />
                                                <Stack jutifyContent="center">
                                                    <Typography
                                                        sx={{ fontSize: "13px", fontWeight: "400", lineHeight: "20px" }}
                                                    >
                                                        {item.satisfy}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Typography
                                                fontSize="15px" color="#242424" fontWeight="500"
                                            >
                                                {item.subject}
                                            </Typography>
                                        </Stack>
                                        <Typography
                                            sx={{ fontSize: "13px", fontWeight: "400", lineHeight: "20px" }}
                                        >
                                            {item.content}
                                        </Typography>
                                        <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={'10px'}>
                                            {item.imgRate?.map((item) => (
                                                <Stack className="myreview__picture"
                                                    sx={{
                                                        backgroundImage: `url(${item})`,
                                                    }}
                                                ></Stack>
                                            ))}
                                        </Stack>
                                        <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                                            {item.option}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={3}>
                                    <div className='Feedback Selected'>
                                        <ThumbUpOffAltIcon sx={{ color: "rgb(26, 148, 255)", fontSize: "16px" }} mr={3} />
                                        Hữu ích
                                    </div>
                                    <div className='Feedback' >
                                        Bình luận
                                    </div>
                                    <div className='Feedback'>
                                        Chia sẻ
                                    </div>

                                </Stack>
                            </Box>
                        </Stack>
                    )
                }

                <Stack justifyContent={"flex-end"} direction="row" sx={{ padding: "0 48px" }}>
                    <Pagination count={5} color="primary" />
                </Stack>
            </Box>
        </Box>
    )
}

// function Feedback({ data }) {
//     return (

//                 {/* <Stack direction="row" mb={1}> */}
//                     {/* <Rating
//                         name="simple-controlled"
//                         value={5}
//                         readOnly
//                         fontSize="20px"
//                     />
//                     <Typography sx={{ fontSize: "15px", fontWeight: "600" }} ml={2}>Cực kì hài lòng</Typography>
//                 </Stack>
//                 <Stack direction="row" mb={2}>
//                     <div>
//                         <CheckCircleIcon color='success' fontSize='14px' />
//                     </div>
//                     <Typography color="green" ml={1} sx={{ fontSize: "13px" }}>Đã mua hàng</Typography>
//                 </Stack>
//                 <Typography sx={{ fontSize: "13px", fontWeight: "400" }} mb={1}>Ngoại hình tai nghe và hộp sạc khá đẹp, phù hợp cho người thích loại tay nghe open space như mình. Pin thì chỉ được khoảng 2/3 so với quảng cáo thôi. Được cái kết nối nhanb, ổn định, di chuyển 10m hoặc qua 1 lớp tường vẫn ổn. Mình rất ấn tượng với khả năng chống ồn của tai nghe này, đặc biệt đối với âm thanh xe cộ, mưa rơi. Âm lượng thì do là tai nghe ko có nút cao su, ko kín nên mở max cũng ko phải quá lớn. Chất âm nghe cũng rất ổn, bass dồi dào, đầy đủ sắc âm, rất phù hợp nghe nhạc cổ điển. Micro khử ỏin trên cả mong đợi của mình, tiếng quạt được khử chỉ sau 0,5s sau khi tiếng ồn đến.</Typography>
//                 <Stack direction="row">
//                     <div className='imgReview'>
//                         <img src="https://salt.tikicdn.com/cache/w120/ts/review/36/58/79/9ff2d72e4d8075101b3e5ab158b3b59c.jpg" alt="" />
//                     </div>
//                 </Stack>
//                 <Typography mt={1} sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }} pr={1}>Màu sắc: Trắng sứ</Typography>
//                 <Stack direction="row">
//                     <Typography sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }}>Đánh giá vào 1 tháng trước</Typography>

//                     <Typography sx={{ fontSize: "13px", color: "rgb(128, 128, 137)" }} ml={1} pl={1} mb={2} className='TimeReview' component={"span"}>Đã dùng 7 ngày</Typography>
//                 </Stack> */}
//     )
// }

export default ReviewProduct