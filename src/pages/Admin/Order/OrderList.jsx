import React, { useState } from "react";
import { Link,Routes,Route } from "react-router-dom";
import "./Order.scss";
import {
    Stack,
    Button,
    Typography,
    TextField,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import DetailOrder from "./DetailOrder";

const listStatus = ["Mã đơn hàng", "SKU", "Thông tin khách hàng"]
const listOrderDate = ["Hôm nay", "7 ngày qua", "30 ngày qua", "Toàn thời gian"]

function createData(idOrder, status, date, amount, label) {
    return { idOrder, status, date, amount, label };
}

const rows = [
    createData(
        "123\n15/07/2022",
        "Đã duyệt",
        "10/7/2022",
        "4",
        "Hàng dễ vỡ",
    ),
]
const items = [
    { id: 1, label: 'Tất cả', value: "-" },
    { id: 2, label: 'Chờ xác nhận', value: "đơn quá hạn XN" },
    { id: 3, label: 'Đang xử lý', value: "-" },
    { id: 4, label: 'Đang vận chuyển', value: "-" },
    { id: 5, label: 'Đã giao hàng', value: "-" },
    { id: 6, label: 'Đã hủy', value: "-" },
]

function OrderList() {
    const [selected, setSelected] = React.useState(null)

    const handleClickTab = (i) => {
        if (i !== selected)
            setSelected(i)

    }
    const [status, setStatus] = useState(0);
    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const [orderDate, setOrderDate] = useState(0);
    const onChangeOrderDate = (e) => {
        setOrderDate(e.target.value)
    }

    return (<>
    
        <Stack p={3} bgcolor="#fff">
            <Typography fontSize="26px">Danh sách đơn hàng</Typography>
            <Stack direction="row" spacing="2rem" p={2} alignItems="center">
                <Typography>Vui lòng xem hướng dẫn và gửi góp ý:</Typography>
                <a href="https://hocvien.tiki.vn/faq/gioi-thieu-giao-dien-quan-ly-don-hang-moi/">
                    <Typography color= "#1890FF" fontSize="14px">Hướng dẫn xử lý đơn hàng</Typography></a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbp82PL58iyly_85SGcml8NcDYQEt1dK97QOJMZedVU7aVMA/viewform">
                    <Typography color="#1890FF" fontSize="14px">Gửi góp ý</Typography></a>
            </Stack>
            <Stack direction="row" spacing={0.5} p={2}>
                {
                    items?.map((item, i) =>
                        <Stack onClick={() => { handleClickTab(i)}} key={item.id || i}
                        alignItems="center" justifyContent="center"
                        className={`orderTab__item ${i === selected ? "selected" : ""}`}>
                            <Typography fontWeight="500 !important">{item.label}</Typography>
                            <Typography>{item.value}</Typography>
                        </Stack>)
                }
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Stack width="256px">
                    <Select
                        value={status}
                        onChange={onChangeStatus}
                        input={<BootstrapInput />}
                    >{
                            [0, 1, 2].map(item =>
                                <MenuItem value={item}>{listStatus[item]}</MenuItem>)
                        }
                    </Select>
                </Stack>


                <Stack direction="row" sx={{ width: "500px", position: "relative" }}>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        size="small"
                    />
                    <span className="order__iconSearch">
                        <SearchIcon sx={{ fontSize: "28px" }} />
                    </span>
                </Stack>
                <Stack width="256px">
                    <Select
                        value={orderDate}
                        onChange={onChangeOrderDate}
                        input={<BootstrapInput />}
                    >{
                            [0, 1, 2, 3].map(item =>
                                <MenuItem value={item}>{listOrderDate[item]}</MenuItem>)
                        }
                    </Select>
                </Stack>
            </Stack>

            <Stack direction="row" p={2} spacing="16px">
                <Button variant="outlined" borderRadius="16px">Chưa in phiếu</Button>
                <Button variant="outlined"  borderRadius="16px">Lấy hàng thất bại</Button>
                <Button variant="outlined" borderRadius="16px">Giao hàng thất bại</Button>
            </Stack>

            <Table
                className="tableCategory"
                sx={{ minWidth: "650px" }}
                stickyHeader
                size="small"
            >
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell sx={{ width: "20%", top: "64px" }}>Mã đơn hàng/Ngày đặt hàng</TableCell>
                        <TableCell sx={{ width: "15%", top: "64px" }}>Trạng thái&nbsp;</TableCell>
                        <TableCell align="center" sx={{ width: "20%", top: "64px" }}>Ngày xác nhận/hạn xác nhận&nbsp;</TableCell>
                        <TableCell align="center" sx={{ width: "20%", top: "64px" }}>Số lượng/DT/GTĐH&nbsp;</TableCell>
                        <TableCell sx={{ width: "15%", top: "64px" }}>Nhãn đơn hàng&nbsp;</TableCell>
                        <TableCell sx={{ width: "10%", top: "64px" }}>Thao tác&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell><Checkbox /></TableCell>
                            <TableCell component="th" scope="row">{row.idOrder}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.amount}</TableCell>
                            <TableCell align="left">{row.label}</TableCell>
                            <TableCell align="center">
                                <Stack spacing={1} justifyContent="center" py={1}>
                                    <Link to="detail">
                                        <Button sx={{ width: "100px" }} variant="outlined">Xem chi tiết</Button>
                                    </Link>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

          
        </Stack>
        <Routes>
            <Route path='detail' element={<DetailOrder />} />
        </Routes>
    </>
    )
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({

    '& .MuiInputBase-input': {
        boxSizing: "border-box",
        borderRadius: 4,
        position: 'relative',
        border: '1px solid #888',
        fontSize: 14,
        display: 'flex',
        alignItems: "center",
        height: '40px !important',
        padding: '4px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 4,
            borderColor: '#1890ff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default OrderList