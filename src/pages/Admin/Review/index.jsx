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
            const div = document.getElementById("reviewAdmin__filter__brand")
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
            <Box px={4} backgroundColor="#fff">
                <Typography component="h2" className="reviewAdmin__title">Quản lý đánh giá</Typography>
                <Stack direction="row" className="reviewAdmin__rate">

                    {
                        listRate.map(item =>
                            <Stack key={item.id} onClick={() => setFilterRate(item.id)}
                                alignItems="center" px={2.5} className={`reviewAdmin__rate__item ${filterRate === item.id ? "active" : ""}`}>
                                <Stack direction="row" alignItems={"flex-start"} sx={{ fontSize: "14px", height: "24px" }}>
                                    <span>{item.display}</span>
                                    {item.id === 0 || <StarIcon sx={{ fontSize: "17px", color: "#fadb14" }} />}
                                </Stack>
                                <Typography sx={{ color: "#888", fontSize: "14px", lineHeight: "24px", marginBottom: "8px" }}>(0)</Typography>
                            </Stack>)
                    }

                </Stack>
            </Box>

            <Box mt={2} mx={3} py={2} px={3} backgroundColor="#FFF">

                <Stack className="reviewAdmin__filter" direction="row" spacing={2} mt={1} mb={2}>
                    <Stack direction="row" sx={{ width: "256px" }} alignItems='center' >
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
                    <Stack sx={{ width: "256px" }} spacing={0.25}>
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
                        <ButtonSelect onClick={(e) => { e.stopPropagation(); setOpenBrand(!openBrand) }} variant="contained" endIcon={<KeyboardArrowDownIcon />}>Thương hiệu</ButtonSelect>
                        <Stack id="reviewAdmin__filter__brand" className={`reviewAdmin__filter__brand ${openBrand ? "active" : ""}`}>
                            <Box id="reviewAdmin__filter__brandInput">
                                <input type="text" placeholder="Nhập mã giảm giá" />
                                <SearchIcon sx={{ color: "#888" }} />
                            </Box>
                            <Stack className="reviewAdmin__filter__brandList">
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
                    <Button variant="text" sx={{color:"#333",fontSize:"14px",backgroundColor:"#dfdfdf",'&:hover':{backgroundColor:"#dfdfdf"}}}>Có nội dung</Button>
                    <Button variant="text" sx={{color:"#333",fontSize:"14px",backgroundColor:"#dfdfdf",'&:hover':{backgroundColor:"#dfdfdf"}}}>Có hình ảnh/video</Button>
                    <Button variant="text" sx={{color:"#333",fontSize:"14px",backgroundColor:"#dfdfdf",'&:hover':{backgroundColor:"#dfdfdf"}}}>Chưa trả lời</Button>
                </Stack>
            </Box>
            <Box mt={2} mx={3} py={2} px={3} backgroundColor="#FFF">
                <Typography fontSize={"14px"}>Số đánh giá: 3</Typography>              
                <Table className="reviewTable" sx={{ minWidth: 650,mt:"20px" }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "calc(14*100%/102)", backgroundColor: "#e8e8e8" }}>Mã đơn hàng</TableCell>
                            <TableCell sx={{ width: "calc(40*100%/102)", backgroundColor: "#e8e8e8" }}>Sản phẩm</TableCell>
                            <TableCell sx={{ width: "calc(20*100%/102)", backgroundColor: "#e8e8e8" }}>Đánh giá</TableCell>
                            <TableCell sx={{ width: "calc(14*100%/102)", backgroundColor: "#e8e8e8" }}>Trạng thái</TableCell>
                            <TableCell sx={{ width: "calc(14*100%/102)", backgroundColor: "#e8e8e8" }}>Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3].map(row => (
                            <TableRow
                                key={row}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ width: "calc(14*100%/102)" }}>
                                    <Stack>
                                        <Typography sx={{ color: "#1890ff" }}>GD252537</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ width: "calc(40*100%/102)" }}>
                                    <Stack direction="row" spacing={1.5} alignItems="center">
                                        <img width={"80px"} height={"100px"} src="https://salt.tikicdn.com/cache/400x400/ts/product/8d/e5/1f/d15f620cda7b01c5a42f5625e7b3ed46.jpg.webp" alt="" />
                                        <Stack sx={{ flex: 1 }}>
                                            <Typography className="text-overflow-2-lines" sx={{ fontSize: "14px" }}>Điện thoại Samsung Galaxy M23 5G (6GB/128GB) - Hàng chính hãng</Typography>
                                            <Typography sx={{ color: "#888", fontSize: "14px" }}>SKU: 1234567890123</Typography>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ width: "calc(20*100%/102)" }} spacing={1.25}>
                                    <Stack>
                                        <Rating name="read-only" value={3} readOnly />
                                        <Typography sx={{ fontSize: "14px" }}>3/5</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ width: "calc(14*100%/102)", padding: "8px" }}>
                                    <Typography>Đã duyệt</Typography>
                                </TableCell>
                                <TableCell align='center' sx={{ width: "calc(14*100%/102)", padding: "4px" }}>
                                    <Stack direction='row' spacing={1.25}>
                                        <Typography sx={{fontSize:"14px",color:"#1890ff"}}>Báo cáo</Typography>
                                        <Typography sx={{fontSize:"14px",color:"#1890ff"}}>Trả lời</Typography>
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