import "./Review.scss"
import { useState, useEffect } from "react"
import {
    Stack,
    Box,
    Button,
    Table,
    TableHead,
    Checkbox,
    FormControlLabel,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    MenuItem,
    InputBase,
    Rating,
    Select
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

function Review() {
    const [status, setStatus] = useState(0);
    const [filterRate, setFilterRate] = useState(0)
    const [openBrand, setOpenBrand] = useState()

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        const closePopper = (event) => {
            const div = document.getElementById("reviewAdmin__filterBrand")
            if (div) {
                const isClickInsideElement = div.contains(event.target);
                if (!isClickInsideElement) {
                    setOpenBrand(false);
                }
            }
        }
        document.addEventListener("click", closePopper)
        return (() => {
            document.removeEventListener("click", closePopper)
        })
    }, [])
    return (
        <Box mt={2} className="reviewAdmin">
            <Box px={4} bgcolor="#fff">
                <Typography component="h2" className="reviewAdmin__title">Quản lý đánh giá</Typography>
                <Stack direction="row">
                    {
                        listRate.map(item =>
                            <Stack key={item.id} onClick={() => setFilterRate(item.id)}
                                alignItems="center" px={2.5} className={`reviewAdmin__rateItem ${filterRate === item.id ? "active" : ""}`}>
                                <Stack direction="row" alignItems={"flex-start"} sx={{ fontSize: "14px", height: "24px" }}>
                                    <span>{item.display}</span>
                                    {item.id === 0 || <StarIcon sx={{ fontSize: "17px", color: "#fadb14" }} />}
                                </Stack>
                                <Typography>(0)</Typography>
                            </Stack>)
                    }

                </Stack>
            </Box>

            <Box mt={2} mx={3} py={2} px={3} bgcolor="#fff">
                <Stack className="reviewAdmin__filter" direction="row" spacing={2} mt={1} mb={2}>
                    <Stack direction="row" width="256px" alignItems='center' >
                        <Select
                            value={status}
                            onChange={onChangeStatus}
                            input={<BootstrapInput sx={{ '& .MuiInputBase-input': { borderRadius: "2px 0 0 2px" } }} />}
                        >{
                                [0, 1, 2, 3].map(item =>
                                    <MenuItem value={item}>{listStatus[item]}</MenuItem>)
                            }
                        </Select>
                        <Box className="reviewAdmin__groupinput">
                            <input type="text" placeholder="Nhập mã giảm giá" />
                            <SearchIcon sx={{ color: "#888" }} />
                        </Box>

                    </Stack>
                    <Stack width="256px" spacing={0.25}>
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
                    <Box>
                        <ButtonSelect
                            onClick={(e) => { e.stopPropagation(); setOpenBrand(!openBrand) }}
                            variant="contained"
                            endIcon={<KeyboardArrowDownIcon />}
                        >Thương hiệu
                        </ButtonSelect>
                        <Stack id="reviewAdmin__filterBrand" 
                        className={`reviewAdmin__filterBrand ${openBrand ? "active" : ""}`}>
                            <Box id="reviewAdmin__BrandInput">
                                <input type="text" placeholder="Nhập thương hiệu" />
                                <SearchIcon sx={{ color: "#888" }} />
                            </Box>
                            <Stack className="reviewAdmin__filterBrand--list">
                                <FormControlLabel control={<Checkbox />} label="X" />
                                <FormControlLabel control={<Checkbox />} label="L" />
                                <FormControlLabel control={<Checkbox />} label="M" />
                            </Stack>
                            <Stack direction="row">
                                <Button variant="text">Bỏ chọn</Button>
                                <Button variant="container">Áp dụng</Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>

                <Stack direction='row' spacing={2}>
                    <Button variant="text" className="reviewAdmin__btnFilter">Có nội dung</Button>
                    <Button variant="text" className="reviewAdmin__btnFilter">Có hình ảnh/video</Button>
                    <Button variant="text" className="reviewAdmin__btnFilter">Chưa trả lời</Button>
                </Stack>
            </Box>
            <Box mt={2} mx={3} py={2} px={3} bgcolor="#FFF">
                <Typography fontSize={"14px"}>Số đánh giá: 3</Typography>
                <Table className="reviewTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã đơn hàng</TableCell>
                            <TableCell>Sản phẩm</TableCell>
                            <TableCell>Đánh giá</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3].map(row => (
                            <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <Stack>
                                        <Typography color="#1890ff">GD252537</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <img width={"80px"} height={"100px"} src="https://salt.tikicdn.com/cache/400x400/ts/product/8d/e5/1f/d15f620cda7b01c5a42f5625e7b3ed46.jpg.webp" alt="" />
                                        <Stack flex={1}>
                                            <Typography className="text-overflow-2-lines">Điện thoại Samsung Galaxy M23 5G (6GB/128GB) - Hàng chính hãng</Typography>
                                            <Typography color="#888">SKU: 1234567890123</Typography>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell spacing={1.25}>
                                    <Stack>
                                        <Rating name="read-only" value={3} readOnly />
                                        <Typography>3/5</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Typography>Đã duyệt</Typography>
                                </TableCell>
                                <TableCell align='center'>
                                    <Stack direction='row' spacing={1.25}>
                                        <Typography color="#1890ff">Báo cáo</Typography>
                                        <Typography color="#1890ff">Trả lời</Typography>
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
    '& .MuiInputBase-input': {
        boxSizing: "border-box",
        borderRadius: 2,
        position: 'relative',
        border: '1px solid #888',
        fontSize: 14,
        height: '32px !important',
        padding: '4px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 2,
            borderColor: '#1890ff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const ButtonSelect = styled(Button)(() => ({
    borderRadius: "2px",
    backgroundColor: "#fff",
    border: "1px solid #888",
    color: "#333",
    height: '32px !important',
    '&:hover': {
        backgroundColor: "#fff",
        border: "1px solid #1890ff",
        color: "#1890ff",
        '& .MuiSvgIcon-root': {
            color: "#1890ff"
        }
    },
    '& .MuiSvgIcon-root': {
        color: "#333"
    }

}))
const listRate = [
    {
        id: 0,
        display: "Tất cả",
        count: 0
    },
    {
        id: 1,
        display: "1",
        count: 0
    },
    {
        id: 2,
        display: "2",
        count: 0
    },
    {
        id: 3,
        display: "3",
        count: 0
    },
    {
        id: 4,
        display: "4",
        count: 0
    },
    {
        id: 5,
        display: "5",
        count: 0
    },
]
const listStatus = ["Tất cả", "Đang diễn ra", "Sắp diễn ra", "Đã kết thúc"]

export default Review