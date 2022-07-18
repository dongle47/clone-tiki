import React, { useState } from 'react'
import ReviewProduct from './ReviewProduct'
import {
    Box,
    Rating,
    Stack,
    Button, Grid

} from "@mui/material"
import "./DetailProduct.scss"
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Products } from "../../constraints/Home"
import CardProduct from '../../components/CardProduct';
function DetailProduct() {
    const [expandContent, setExpandContent] = useState(false);
    const handleExpandContent = () => {
        setExpandContent(pre => !pre)
    }
    const link_image = "https://salt.tikicdn.com/cache/400x400/ts/product/a3/cf/a9/0b59f8742708d27a25315078edf91bda.png.webp"
    //const link_image = "https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/288914191_1448018802381522_5413425023341557697_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xMVXmNyUMIoAX--rPOK&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT_03fKblX3DllohOfwKhG4TwIf80iWz_voFbV7uQP35og&oe=62D81D8D"

    const link_option_color = "https://salt.tikicdn.com/cache/100x100/ts/product/d5/40/5e/754dcea83b913f7585861d083491a917.png.webp"
    return (
        <>
            <div className="container">
                <div className="detailProduct">
                    <div className="detailProduct__img">
                        <div className="detailProduct__img__primary">
                            <img src={link_image} alt="" />
                        </div>
                        <div className="detailProduct__img__list">
                            <div className="detailProduct__img__item selected"> <img src={link_image} alt="" /></div>
                            <div className="detailProduct__img__item"> <img src={link_image} alt="" /></div>
                            <div className="detailProduct__img__item"> <img src={link_image} alt="" /></div>
                            <div className="detailProduct__img__item"> <img src={link_image} alt="" /></div>
                            <div className="detailProduct__img__item"> <img src={link_image} alt="" /></div>
                            <div className="detailProduct__img__item">
                                <div className="lastimage">+6</div>
                                <img src={link_image} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="detailProduct__info">
                        <div className="detailProduct__info__title">
                            <h2>Áo Thun Polo Nam YODY Bo Trơn Chất Liệu Cafe Siêu Nhẹ, Siêu Mát, Khử Mùi Tốt - APM4225</h2>
                        </div>
                        <div className="detailProduct__info__rating">
                            <Rating
                                name="simple-controlled"
                                value={4}
                                readOnly
                                sx={{ fontSize: "18px" }}
                            />
                            <span>Xem 19 đánh giá | Đã bán 400</span>
                        </div>

                        <div className="detailProduct__info__price">
                            <span>217.000 ₫</span>
                            <span>300.000 ₫</span>
                            <span>-30%</span>
                        </div>
                        <div className="detailProduct__option">
                            <div className="detailProduct__option__title">
                                Màu: <span>Đen</span>
                            </div>
                            <div className="detailProduct__option__list">
                                <div className="detailProduct__option__item detailProduct__option__item--color selected">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </div>
                                <div className="detailProduct__option__item detailProduct__option__item--color">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </div>
                                <div className="detailProduct__option__item detailProduct__option__item--color">
                                    <img src={link_option_color} alt="" />
                                    Navy
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </div>

                            </div>
                        </div>

                        <div className="detailProduct__option">
                            <div className="detailProduct__option__title">
                                Kích cỡ: <span>L</span>
                            </div>

                            <div className="detailProduct__option__list">
                                <div className="detailProduct__option__item detailProduct__option__item--size">
                                    M
                                </div>
                                <div className="detailProduct__option__item detailProduct__option__item--size">
                                    L
                                </div>
                                <div className="detailProduct__option__item detailProduct__option__item--size selected">
                                    3XL
                                    <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                </div>

                            </div>
                        </div>

                        <div className="detailProduct__coupon">
                            <div className="detailProduct__coupon__title">
                                8 Mã giảm giá
                            </div>
                            <div className="detailProduct__coupon__list">
                                <div className="detailProduct__coupon__item">
                                    Giảm 80k
                                </div>
                                <div className="detailProduct__coupon__item">
                                    Giảm 20k
                                </div>
                                <ArrowForwardIosIcon sx={{ color: "#1890ff" }} />
                            </div>
                        </div>

                        <div className="detailProduct__address">
                            <span>Giao đến </span>
                            <span>TP. Nha Trang, P. Vĩnh Trường, Khánh Hòa</span>
                            <span> - </span>
                            <span>Đổi địa chỉ</span>
                        </div>

                        <div className="detailProduct__quanlity">
                            <div className="detailProduct__quanlity__title">
                                Số lượng
                            </div>
                            <div className="detailProduct__quanlity__groupInput">
                                <button><RemoveIcon /></button>
                                <input type="text" value={1} />
                                <button><AddIcon /></button>
                            </div>
                        </div>
                        <div className="detailProduct__buy">
                            <Button variant="contained"
                                sx={{
                                    width: "400px",
                                    height: "48px",
                                    backgroundColor: "#ff3945",
                                    "&:hover": { opacity: 0.8, backgroundColor: "#ff3945" }
                                }}
                            >Chọn mua</Button>
                        </div>

                    </div>
                </div>

                <div className="productSimilar">
                    <div className="productSimilar__title">
                        Sản Phẩm Tương Tự
                    </div>
                    <Grid container>
                        {Products.slice(0, 6).map(item =>
                            <Grid item key={item.id} xs={2}>
                                <CardProduct data={item} />
                            </Grid>)
                        }
                    </Grid>
                </div>
                <div className="productSpecification">
                    <div className="productSpecification__title">
                        Thông Tin Chi Tiết
                    </div>
                    <div className="productSpecification__table">

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
                    </div>
                </div>
                <div className="descriptionProduct">
                    <div className="productSpecification__title">
                        Mô Tả Sản phẩm
                    </div>
                    <div className="descriptionProduct__content">
                        {
                            (expandContent ? content.split("\n") : content.split("\n").splice(0, 40))
                                .map((item, i) => <p key={i}>{item}</p>)
                        }
                        {expandContent ? "" : <div className="bg-gradient"></div>}
                    </div>

                    <div className="descriptionProduct__showmore">
                        <Button onClick={handleExpandContent} variant="outlined">{expandContent ? "Thu gọn nội dung" : "Xem thêm"}</Button>

                    </div>
                </div>
            </div>
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