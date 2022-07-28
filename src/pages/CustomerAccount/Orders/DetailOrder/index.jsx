import React from 'react'
import "./DetailOrder.scss"
import {
    Box,
    Stack,
    Typography,
    Button
} from "@mui/material"
import { Link } from "react-router-dom"

function DetailOrder() {
    return (
        <>
            <Box>
                <Typography mt={2.5} fontSize="19px" fontWeight={300}>Chi tiết đơn hàng #825345038 - <span style={{ fontWeight: 500 }}>Huỷ</span></Typography>
                <Typography fontSize="13px" textAlign= "end">Ngày đặt hàng: 10:17 15/07/2022</Typography>
                <Stack direction="row" mt={1.25} mb={2.5} className="detailOrder" justifyContent="space-between">
                    <Box className="detailOrder__boxInfo">
                        <Typography>ĐỊA CHỈ NHẬN HÀNG</Typography>
                        <Box p={1.25} className="detailOrder__content">
                            <Typography style={{ color: "#000", fontWeight: 500 }}>LÊ VĂN ĐỒNG</Typography>
                            <Typography>Địa chỉ: Ktx khu B đhqg, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương, Việt Nam</Typography>
                            <Typography>Điện thoại: 0332298170</Typography>
                        </Box>
                    </Box>

                    <Box className="detailOrder__boxInfo">
                        <Typography>HÌNH THỨC GIAO HÀNG</Typography>
                        <Box p={1.25} className="detailOrder__content">
                            <Typography>
                                <img width="56px" height="16px" src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png" alt="" />
                                Giao Tiết Kiệm</Typography>
                            <Typography>Giao vào Thứ hai, 18/07</Typography>
                            <Typography>Được giao bởi GiaPhucStore</Typography>
                            <Typography>Phí vận chuyển: 17.000đ</Typography>
                        </Box>
                    </Box>
                    <Box className="detailOrder__boxInfo">
                        <Typography >HÌNH THỨC THANH TOÁN</Typography>
                        <Box p={1.25} className="detailOrder__content">
                            <Typography>Thanh toán bằng ví ZaloPay</Typography>
                            <Typography style={{ color: "#fda223" }}>Thanh toán thất bại. Vui lòng thanh toán lại hoặc chọn phương thức thanh toán khác</Typography>
                        </Box>
                    </Box>
                </Stack>

                <Stack className="detailOrder-Table" >
                    <Stack direction="row" className="detailOrder-Table__heading">
                        <Box>Sản phẩm</Box>
                        <Box>Giá</Box>
                        <Box>Số lượng</Box>
                        <Box>Giảm giá</Box>
                        <Box>Tạm tính</Box>
                    </Stack>
                    {
                        [1, 2, 3, 4].map(item =>
                            <Stack key={item} direction="row" className="detailOrder-Table__row">
                                <Stack direction="row" className="orderDetail__item">
                                    <Box mr={1.875}>
                                        <img height="60px" width="60px" src="https://salt.tikicdn.com/cache/200x200/ts/product/03/c5/fa/de1f68f3247b1a407d725800925f341a.jpg" alt="" />
                                    </Box>
                                    <Stack spacing={1.5}>
                                        <Link to={"/"}><Typography sx={{ fontSize: "14px" }}>Sạc Dự Phòng Xiaomi 10000mAh Gen 3 PLM13ZM - Hàng Nhập Khẩu - Đen</Typography></Link>
                                        <Typography sx={{ fontSize: "13px" }}>Sku: 4816587252819</Typography>
                                        <Stack direction="row" spacing={1}>
                                            <Button variant="outlined" sx={{ fontSize: "12px", width: "102px", height: "30px", padding: 0 }}>Viết nhận xét</Button>
                                            <Button variant="outlined" sx={{ fontSize: "12px", width: "71px", height: "30px", padding: 0 }}>Mua lại</Button>

                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Box>359.000 ₫</Box>
                                <Box>1</Box>
                                <Box>10.000 ₫</Box>
                                <Box>349.000 ₫</Box>
                            </Stack>
                        )
                    }


                </Stack>

                <Stack direction="column"
                    justifyContent="center"
                    alignItems="flex-end"
                    mt={3.5}>

                    <Stack py={0.625} direction="row">
                        <Typography className="detailOrder__summary-label">Tạm tính</Typography>
                        <Typography className="detailOrder__summary-value">359.000 ₫</Typography>
                    </Stack>
                    <Stack py={0.625} direction="row">
                        <Typography className="detailOrder__summary-label">Giảm giá</Typography>
                        <Typography className="detailOrder__summary-value">10.000 ₫</Typography>
                    </Stack>
                    <Stack py={0.625} direction="row">
                        <Typography className="detailOrder__summary-label">Phí vận chuyển</Typography>
                        <Typography className="detailOrder__summary-value">17.000 ₫</Typography>
                    </Stack>
                    <Stack py={0.625} direction="row">
                        <Typography className="detailOrder__summary-label">Phí vận chuyển</Typography>
                        <Typography className="detailOrder__summary-value detailOrder__summary-value--final">366.000 ₫</Typography>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}

export default DetailOrder