import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box,
    Typography,
    Stack,
    Button,
    Pagination,
    TextField,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
    Modal
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./ListProduct.scss"

function ListProduct() {
    const [modalDelete, setModalDelete] = React.useState(false);
    const openModalDelete = () => setModalDelete(true);
    const closeModalDelete = () => setModalDelete(false);
    const [page, setPage] = React.useState('');
    const handleChange = (event) => {
        setPage(event.target.value);
    };
    const [print, setPrint] = React.useState('');

    const handleChangePrint = (event) => {
        setPrint(event.target.value);
    };
    const [update, setUpdate] = React.useState('');

    const handleChangeUpdate = (event) => {
        setUpdate(event.target.value);
    };
    const [select, setSelect] = React.useState('');

    const handleChangeSelect = (event) => {
        setSelect(event.target.value);
    };
    return (
        <Box sx={{ backgroundColor: "#fff" }} p={2}>
            <Stack direction="row">
                <FormControl sx={{m: 1, minWidth: 120, flex: 1 }}>
                    <Select
                        value={print}
                        onChange={handleChangePrint}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        cursor="pointer"
                    >
                        <MenuItem value="">
                            Xuất danh sách tất cả sản phẩm
                        </MenuItem>
                        <MenuItem value={10}>Hạn sử dụng</MenuItem>
                        <MenuItem value={20}>Xuất nhập tồn</MenuItem>
                        <MenuItem value={30}>Thông tin chi tiết</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120, flex: 1 }}>
                    <Select
                        value={select}
                        onChange={handleChangeSelect}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        disabled
                    >
                        <MenuItem value="">
                            Xuất danh sách sản phẩm đã chọn
                        </MenuItem>
                        {/* <MenuItem value={10}></MenuItem>
                        <MenuItem value={20}></MenuItem>
                        <MenuItem value={30}></MenuItem> */}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120, flex: 1 }}>
                    <Select
                        value={update}
                        onChange={handleChangeUpdate}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        cursor="pointer"
                    >
                        <MenuItem value="">
                            Cập nhật danh sách sản phẩm
                        </MenuItem>
                        <MenuItem value={10}>Thay đổi giá, trạng thái sản phẩm</MenuItem>
                        <MenuItem value={20}>Thay đổi kiểu nhập kho, số lượng</MenuItem>
                        <MenuItem value={30}>Thêm mincode của sản phẩm</MenuItem>
                        <MenuItem value={40} disabled>Ẩn sản phẩm</MenuItem>
                        <MenuItem value={50} disabled>Bật sản phẩm hàng loạt</MenuItem>
                        <MenuItem value={60} disabled>Tắt sản phẩm hàng loạt</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} py={2}>
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Tổng cộng có: 7 bản ghi</Typography>
                <Pagination count={7} color="primary" variant="outlined" shape="rounded" />
                <TextField id="outlined-basic" label="Nhập số trang" variant="outlined" size='small' />
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Hiển thị: </Typography>
                <FormControl sx={{ flex: 1 }} >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={page}
                        onChange={handleChange}
                        size="small"
                    >
                        <MenuItem value={10} defaultValue>10/Trang</MenuItem>
                        <MenuItem value={20}>20/Trang</MenuItem>
                        <MenuItem value={30}>30/Trang</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Table className="productTable" sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: "calc(8*100%/101)", backgroundColor: "#e8e8e8" }} justifyContent="center">
                            <Checkbox></Checkbox>
                        </TableCell>
                        <TableCell sx={{ width: "calc(20*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Tên sản phẩm</TableCell>
                        <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Giá bán</TableCell>
                        <TableCell sx={{ width: "calc(18*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Nhà cung cấp</TableCell>
                        <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Danh mục</TableCell>
                        <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Thương hiệu</TableCell>
                        <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Trạng thái</TableCell>
                        <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Ngày tạo</TableCell>
                        <TableCell sx={{ width: "calc(15*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Lợi nhuận</TableCell>
                        <TableCell sx={{ width: "calc(18*100%/101)", backgroundColor: "#e8e8e8", fontWeight: "bold" }}>Thao tác</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[1, 2, 3, 4, 5, 6, 7].map(row => (
                        <TableRow
                            key={row}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ width: "calc(8*100%/101)" }}>
                                <Checkbox></Checkbox>
                            </TableCell>
                            <TableCell sx={{ width: "calc(20*100%/101)" }}>
                                <Stack>
                                    <Typography sx={{ color: "#1890ff" }}>Điện Thoại OnePlus  Nord CE 5G (12GB/256G) - Hàng Chính Hãng</Typography>
                                    <Typography>ID: 123456789</Typography>
                                    <Typography>SKU: 123456789</Typography>
                                    <Typography>MID: 123456789</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                <Stack direction="row" justifyContent="center">
                                    <Typography sx={{ margin: "auto 0" }}>7.898.000</Typography>
                                    <EditIcon sx={{ width: "12px" }} />
                                </Stack>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(18*100%/101)", padding: "4px" }} >
                                <Typography>One Plus</Typography>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(13*100%/101)", padding: "8px" }}>
                                <Typography>Điện thoại</Typography>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(13*100%/101)", padding: "4px" }}>
                                <Typography>One Plus</Typography>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(13*100%/101)" }}>
                                <Typography>Đang bán</Typography>
                            </TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)" }}>
                                <Typography>21/07/2022</Typography>
                                <Typography>11:04:00</Typography>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(15*100%/101)" }}>
                                <Typography>0 - 0</Typography>
                            </TableCell>
                            <TableCell align='center' sx={{ width: "calc(18*100%/101)" }}>
                                {/* <Button variant="outlined" sx={{ padding: "4px" }}>Thao tác</Button> */}
                                <Stack spacing={1} justifyContent="center" py={1}>
                                    <Button variant="contained">Sửa</Button>
                                    <Button onClick={openModalDelete} variant="outlined" color="error">
                                        Xóa
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal
                sx={{ overflowY: "scroll" }}
                open={modalDelete}
                onClose={closeModalDelete}
            >
                <Stack className="modal-info" direction="row" spacing={2} justifyContent='center' width='26rem' >
                    <Stack>
                        <InfoOutlinedIcon color="primary" />
                    </Stack>

                    <Stack spacing={3}>
                        <Stack>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Bạn có chắc muốn xoá sản phẩm?
                            </Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="flex-end" spacing={1}>
                            <Button onClick={closeModalDelete} variant="outlined">Hủy</Button>
                            <Button variant="contained">Xóa bỏ</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Modal>
        </Box>
    )
}

export default ListProduct


