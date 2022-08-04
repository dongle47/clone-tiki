import React, { useState } from 'react'
import ReviewProduct from './ReviewProduct'
import {
    Rating,
    Button, Grid,
    Box,
    Stack

} from "@mui/material"
import "./DetailProduct.scss"
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardProduct from '../../components/CardProduct';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiProduct from '../../apis/apiProduct';
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cartSlice';

import apiMain from '../../apis/apiMain';

function DetailProduct() {
    const [expandContent, setExpandContent] = useState(false);
    const [product, setProduct] = useState({})
    const [productSimilars, setProductSimilars] = useState([])
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            let param = {
                _page: 1,
                _limit: 6,
            };
            const response = await apiMain.getProducts(param);
            if (response) {
                setProductSimilars((pre) => [...pre, ...response.data]);
            }
        };
        getData();
    }, []);

    useEffect(()=>{
        const getProduct = async()=>{
            const response = await apiProduct.getProductsById(id)
            if(response){
                if(response.length!==0)
                    setProduct(response[0])
            }
        }
        getProduct()
    },[id])

    const handleClickBuy =()=>{
        dispatch(addItem({
            choose:false,
            id:product.id,
            name:product.name,
            image:product.image,
            price:product.price,
            quantity
        }))
    }

    const onChangeQuantity=(e)=>{
        setQuantity(e.target.value)
        if(e.target.value==="")
            return
        let quantity = Number(e.target.value)
        console.log(quantity)
        if(Number.isInteger(quantity)){
            setQuantity(quantity)
        }
        else{
            setQuantity(1)
        }
    }

    const handleExpandContent = () => {
        setExpandContent(pre => !pre)
    }

    const link_image = "https://salt.tikicdn.com/cache/400x400/ts/product/a3/cf/a9/0b59f8742708d27a25315078edf91bda.png.webp"
    const link_option_color = "https://salt.tikicdn.com/cache/100x100/ts/product/d5/40/5e/754dcea83b913f7585861d083491a917.png.webp"
    
    return (
        <>
            <Box className="container">
                <Box className="detailProduct">
                    <Box className="detailProduct__img">
                        <Box className="detailProduct__primary-img">
                            <img src={link_image} alt="" />
                        </Box>
                        <Stack direction="row" justifyContent="space-between" mt={3}>
                            <Box className="detailProduct__item-img selected"> <img src={link_image} alt="" /></Box>
                            <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                            <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                            <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                            <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                            <Box className="detailProduct__item-img">
                                <Box className="lastimage">+6</Box>
                                <img src={link_image} alt="" />
                            </Box>

                        </Stack>
                    </Box>
                    <Box flex={1}>
                        <Box className="detailProduct__title">
                            <h2>Áo Thun Polo Nam YODY Bo Trơn Chất Liệu Cafe Siêu Nhẹ, Siêu Mát, Khử Mùi Tốt - APM4225</h2>
                        </Box>
                        <Box className="detailProduct__rating">
                            <Rating
                                name="simple-controlled"
                                value={4}
                                readOnly
                                sx={{ fontSize: "18px" }}
                            />
                            <span>Xem 19 đánh giá | Đã bán 400</span>
                        </Box>

                        <Box className="detailProduct__price">
                            <span>217.000 ₫</span>
                            <span>300.000 ₫</span>
                            <span>-30%</span>
                        </Box>
                        <Box className="product-option">
                            <Box className="product-option__title">
                                Màu: <span>Đen</span>
                            </Box>
                            <Box className="product-option__list">
                                <Box className="product-option__item product-option__item--color selected">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </Box>
                                <Box className="product-option__item product-option__item--color">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </Box>
                                <Box className="product-option__item product-option__item--color">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </Box>

                            </Box>
                        </Box>

                        <Box className="product-option">
                            <Box className="product-option__title">
                                Kích cỡ: <span>L</span>
                            </Box>

                            <Box className="product-option__list">
                                <Box className="product-option__item product-option__item--size">
                                    M
                                </Box>
                                <Box className="product-option__item product-option__item--size">
                                    L
                                </Box>
                                <Box className="product-option__item product-option__item--size selected">
                                    3XL
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </Box>

                            </Box>
                        </Box>

                        <Box className="product-coupon">
                            <Box className="product-coupon__title">
                                8 Mã giảm giá
                            </Box>
                            <Box className="product-coupon__list">
                                <Box className="product-coupon__item">
                                    Giảm 80k
                                </Box>
                                <Box className="product-coupon__item">
                                    Giảm 20k
                                </Box>
                                <ArrowForwardIosIcon sx={{ color: "#1890ff" }} />
                            </Box>
                        </Box>

                        <Box className="detailProduct__address">
                            <span>Giao đến </span>
                            <span>TP. Nha Trang, P. Vĩnh Trường, Khánh Hòa</span>
                            <span> - </span>
                            <span>Đổi địa chỉ</span>
                        </Box>

                        <Box className="product-quanlity">
                            <Box className="product-quanlity__title">
                                Số lượng
                            </Box>
                            <Box className="product-quanlity__groupInput">
                                <button onClick={()=>setQuantity(quantity===1?1:quantity-1)}><RemoveIcon /></button>
                                <input onChange={onChangeQuantity} type="text" value={quantity} />
                                <button onClick={()=>setQuantity(quantity+1)}><AddIcon /></button>
                            </Box>
                        </Box>
                        <Box className="detailProduct__buy">
                            <Button variant="contained" onClick={handleClickBuy}
                                sx={{
                                    width: "400px",
                                    height: "48px",
                                    backgroundColor: "#ff3945",
                                    "&:hover": { opacity: 0.8, backgroundColor: "#ff3945" }
                                }}
                            >Chọn mua</Button>
                        </Box>

                    </Box>
                </Box>

                <Box className="productSimilar">
                    <Box className="productSimilar__title">
                        Sản Phẩm Tương Tự
                    </Box>
                    <Grid container>
                        {productSimilars.slice(0, 6).map(item =>
                            <Grid item key={item.id} xs={2}>
                                <CardProduct data={item} />
                            </Grid>)
                        }
                    </Grid>
                </Box>
                <Box className="productSpecification">
                    <Box className="productSpecification__title">
                        Thông Tin Chi Tiết
                    </Box>
                    <Box className="productSpecification__table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>CAFE</td>
                                </tr>
                                <tr>
                                    <td>Xuất xứ</td>
                                    <td>Việt Nam</td>
                                </tr>
                                <tr>
                                    <td>Kích thước</td>
                                    <td>Nhiều mẫu - Nhiều size</td>
                                </tr>
                                <tr>
                                    <td>Xuất xứ thương hiệu</td>
                                    <td>Việt Nam</td>
                                </tr>
                                <tr>
                                    <td>Thương hiệu</td>
                                    <td>YODY</td>
                                </tr>
                            </tbody>
                        </table>
                    </Box>
                </Box>
                <Box className="descriptionProduct">
                    <Box className="productSpecification__title">
                        Mô Tả Sản phẩm
                    </Box>
                    <Box className="descriptionProduct__content">
                        {
                            (expandContent ? content.split("\n") : content.split("\n").splice(0, 40))
                                .map((item, i) => <p key={i}>{item}</p>)
                        }
                        {expandContent ? "" : <Box className="bg-gradient"></Box>}
                    </Box>

                    <Box className="descriptionProduct__showmore">
                        <Button onClick={handleExpandContent} variant="outlined">{expandContent ? "Thu gọn nội dung" : "Xem thêm"}</Button>

                    </Box>
                </Box>
            </Box>
            <ReviewProduct />
        </>



    )
}

const content = `YODY STYLE - Mang sản phẩm có chất liệu tốt, dịch vụ tốt nhất tới các khách yêu!

THÔNG TIN CHI TIẾT:

- Sản phẩm: Áo Thun Polo Nam YODY Bo Trơn Chất Liệu Cafe Siêu Nhẹ, Siêu Mát, Khử Mùi Tốt - APM4225

- Màu sắc: đỏ đô, trắng, vàng, nâu, đen, NAVY

- Chất liệu: Sợi Cafe: 50% sợi cafe; 50% sợi PET

- Kích thước Size: M, L, XL, 2XL, 3XL, 4XL,

- Cân nặng: 300 gam

Bảng Size:

- Size M: 55~65kg - 1m60~1m69

- Size L: 66~70kg - 1m70~1m74

- Size XL: 70~73kg - 1m74~1m76

- Size 2XL: 73~76kg - 1m65~1m77

- Size 3XL: 76~80kg - 1m70~1m80

- Size 4XL: 80~85kg - 1m75~1m85

Lưu ý: Bảng size chỉ mang tính chất tương đối

- Siêu nhẹ, siêu mát.

- Kiểm soát mùi cơ thể tốt

- Có khả năng kháng khuẩn

- Chống tia UV.

SỬ DỤNG ĐÚNG CÁCH:

- Lộn trái sản phẩm khi giặt, giặt bằng tay với các sản phẩm cùng màu để tránh lẫn màu.

- Sử dụng xà phòng trung tính, không sử dụng chất tẩy mạnh.

- Không phơi trực tiếp dưới ánh nắng mặt trời.

CAM KẾT CỦA YODY:

Bảng size này chỉ mang tính chất tham khảo, tùy thuộc vào số đo cơ thể mỗi người và chất liệu vải khác nhau sẽ có sự chênh lệch nhất định từ 1 - 2cm.

CAM KẾT 100% hàng chính hãng từ YODY.

LƯU Ý:

Các khách iu nhận được sản phẩm, vui lòng đánh giá 5* giúp Shop để nhận QUÀ bí mật từ YODY nhé!

Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....

`
export default DetailProduct