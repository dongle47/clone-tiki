import "./Coupon.scss"
import { useState } from "react"
import {
    Stack,
    Box,
    Button,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    MenuItem,
    InputBase,
    Select
} from "@mui/material"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { couponAnalytics } from "../../../constraints/CouponAnalytic"
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

function Coupon() {
    const [status, setStatus] = useState(0);

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }
    
    return (
        <Box mt={2} className="couponAdmin">
            <Box px={4}>
                <Typography component="h2" className="couponAdmin__title">Mã giảm giá</Typography>
                <Typography mt={0.625} pb={2}
                    sx={{ lineHeight: "32px" }}
                >Vui lòng xem hướng dẫn chi tiết: <span>Cách cài đặt “Mã giảm giá”</span></Typography>
            </Box>
            <Box mt={2} mx={3} px={3} py={2}>
                <Stack direction="row" spacing={1} mb={2} justifyContent="space-between" alignItems="center" 
                    sx={{height:"32px"}}>
                    <Typography style={{ fontSize: "16px", fontWeight: 500 }}>Các chỉ số hiệu quả chính</Typography>
                    <Typography sx={{ flex: 1 }}>7 ngày qua: 03/07/2022 - 09/07/2022•So sánh với: 26/06/2022 - 02/07/2022</Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5} className="color-primary" sx={{ cursor: "pointer" }}>
                        <TrendingUpIcon />
                        Báo cáo chi tiết
                        <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    {
                        couponAnalytics.map((item, i) =>
                            <Stack className='couponAdmin__analytic__item' key={item.id} justifyContent="space-between" sx={{ height: "94px" }}>
                                <Stack direction="row" spacing={1}>{item.name} <InfoOutlinedIcon sx={{ fontSize: "18px", color: "#888" }} /></Stack>
                                <Box>
                                    <Typography className="couponAdmin__title" sx={{ lineHeight: "28px" }}>
                                        {item.value}{i === 4 ? "" : "₫"}</Typography>
                                    <Typography sx={{ lineHeight: "22px", fontWeight: 500 }}>{item.percent} %</Typography>
                                </Box>
                            </Stack>
                        )
                    }
                </Stack>
            </Box>
            <Box mt={2} mx={3} py={2} px={3}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography style={{ fontSize: "16px", fontWeight: 500 }}>Danh sách mã giảm giá</Typography>
                    <Button variant="contained" startIcon={<AddIcon />}>Tạo mã giảm giá</Button>
                </Stack>
                <Stack className="couponAdmin__filter" direction="row" spacing={2} mt={4} mb={2}>
                    <Stack sx={{ width: "256px" }} spacing={0.25}>
                        <label>Mã giảm giá</label>
                        <Box className="couponAdmin__groupinput">
                            <input type="text" placeholder="Nhập mã giảm giá" />
                            <SearchIcon sx={{ color: "#888" }} />
                        </Box>

                    </Stack>
                    <Stack sx={{ width: "256px" }} spacing={0.25}>
                        <label>Trạng thái</label>
                        <Select
                            value={status}
                            onChange={onChangeStatus}
                            input={<BootstrapInput />}
                        >{
                                [0, 1, 2, 3].map(item =>
                                    <MenuItem value={item}>{listStatus[item]}</MenuItem>)
                            }
                        </Select>
                    </Stack>
                </Stack>

                <Table mx={3} className="couponTable" sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Mã giảm giá</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>Đã sử dụng / Tổng số mã</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>Loại giảm giá</TableCell>
                            <TableCell sx={{ width: "calc(18*100%/101)" }}>Tiêu chí</TableCell>
                            <TableCell sx={{ width: "calc(18*100%/101)" }}>Thời gian áp dụng</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>Trạng thái</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3].map(row => (
                            <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                    <Stack>
                                        <Typography>Mã giảm giá 1</Typography>
                                        <Typography sx={{ color: "#1890ff" }}>GD252537</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                    <Typography>0/1</Typography>
                                </TableCell>
                                <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                    <Typography>Giảm giá 10%</Typography>
                                </TableCell>
                                <TableCell sx={{ width: "calc(18*100%/101)", padding: "4px" }}>
                                    <Typography sx={{ color: "#1890ff" }}>Áp dụng cho tất cả sản phẩm</Typography>
                                    <Typography>Cho tất cả khách hàng</Typography>
                                    <Typography>&gt;= 100.000đ giá trị đơn hàng</Typography>
                                    <Typography>Giới hạn tổng cộng 3 lần sử dụng</Typography>
                                </TableCell>
                                <TableCell sx={{ width: "calc(18*100%/101)", padding: "8px" }}>
                                    <Typography>Từ: 10/07/2022 - 10:00:00</Typography>
                                    <Typography>Đến: 13/07/2022 - 10:00:00</Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ width: "calc(13*100%/101)", padding: "4px" }}>
                                    <Button variant="outlined"
                                        sx={{ borderColor: "#00FD47", color: "#00FD47", padding: "4px", "&:hover": { borderColor: "#00FD47" } }}
                                    >Đang hoạt động</Button>
                                </TableCell>
                                <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                    <Stack spacing={1}>
                                        <Button variant="outlined" sx={{ padding: "4px" }}>Chỉnh sửa</Button>
                                        <Stack className="couponTable__button__end" direction="row" justifyContent="space-between" alignItems="center"  >
                                            <div>Kết thúc</div>
                                            <span><MoreVertIcon /></span>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>

    )
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        boxSizing: "border-box",
        borderRadius: 4,
        position: 'relative',
        border: '1px solid #888',
        fontSize: 14,
        height: '32px !important',
        padding: '4px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 4,
            borderColor: '#1890ff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
const listStatus = ["Tất cả", "Đang diễn ra", "Sắp diễn ra", "Đã kết thúc"]
export default Coupon