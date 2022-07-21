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
    return (
        <Box className='container' sx={{ backgroundColor: "#fff" }}>
            <Stack direction="row">

            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} py={2}>
                <Typography>Tổng cộng có: 7 bản ghi</Typography>
                <Pagination count={7} color="primary" variant="outlined" shape="rounded" />
                <TextField id="outlined-basic" label="Nhập số trang" variant="outlined" size='small' />
                <Typography>Hiển thị: </Typography>
                <FormControl sx={{ flex: 1 }} >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={page}
                        onChange={handleChange}
                    >
                        <MenuItem value={10} defaultValue>10/Trang</MenuItem>
                        <MenuItem value={20}>20/Trang</MenuItem>
                        <MenuItem value={30}>30/Trang</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Box p={3}>
                <Table className="couponTable" sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "calc(8*100%/101)", backgroundColor: "#e8e8e8" }} justifyContent="center">
                                <Checkbox></Checkbox>
                            </TableCell>
                            <TableCell sx={{ width: "calc(20*100%/101)", backgroundColor: "#e8e8e8" }}>Tên sản phẩm</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Giá bán</TableCell>
                            <TableCell sx={{ width: "calc(18*100%/101)", backgroundColor: "#e8e8e8" }}>Nhà cung cấp</TableCell>
                            <TableCell sx={{ width: "calc(18*100%/101)", backgroundColor: "#e8e8e8" }}>Danh mục</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Thương hiệu</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Trạng thái</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Ngày tạo</TableCell>
                            <TableCell sx={{ width: "calc(13*100%/101)", backgroundColor: "#e8e8e8" }}>Lợi nhuận</TableCell>
                            <TableCell sx={{ width: "calc(18*100%/101)", backgroundColor: "#e8e8e8" }}>Thao tác</TableCell>
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
                                <TableCell align='center' sx={{ width: "calc(18*100%/101)", padding: "8px" }}>
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
                                <TableCell align='center' sx={{ width: "calc(13*100%/101)" }}>
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
                                <Typography>
                                    Hình ảnh đại diện sẽ quay về mặc định của Tiki
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
        </Box>
    )
}

export default ListProduct


