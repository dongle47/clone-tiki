import React from 'react'
import {
    Box,
    Typography,
    Stack,
    Button,
    TextField,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Pagination,
    MenuItem,
    FormControl,
    Select,
    Checkbox,
    Modal
} from '@mui/material';
import "./Product.scss"
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Product() {
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
        <>
            <Box className="productAdmin">
                <Stack direction="row" mb={1} justifyContent="space-between" alignItems="center" sx={{ backgroundColor: "#FFF", height: "80px" }} px={2}>
                    <Typography >Quản lý sản phẩm</Typography>
                    <Link to='/admin/product/create'>
                        <Button variant="outlined" pr={2}>Tạo sản phẩm</Button>
                    </Link>
                </Stack>
                <Stack mb={2} className="productAdmin__filter">
                    <Box pt={1} pb={1.5}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" px={2}>
                            <Grid xs={3}>
                                <Typography>Tên sản phẩm</Typography>
                                <TextField label="Nhập tên sản phẩm" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={3}>
                                <Typography>ID sản phẩm</Typography>
                                <TextField label="ID" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={3}>
                                <Typography>SKU</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={3}>
                                <Typography>Thương hiệu</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box pb={1.5} spacing={1}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" px={2}>
                            <Grid xs={2.4} >
                                <Typography>Gian hàng</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Ngành hàng</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Trạng thái</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Kho hàng</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Tồn kho</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box pb={1.5} spacing={1}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" px={2}>
                            <Grid xs={2.4} >
                                <Typography>MDI</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>MSKU</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Mã sản phẩm nhà bán</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Thuộc tính còn thiếu</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                            <Grid xs={2.4}>
                                <Typography>Khả năng hiển thị</Typography>
                                <TextField label="" id="outlined-size-small" defaultValue="" size="small" />
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} mt={2} pr={2}>
                            <Button variant="contained">Tìm kiếm</Button>
                            <Button variant='outlined'><RefreshIcon sx={{ height: "20px" }}></RefreshIcon>Làm mới</Button>
                        </Stack>
                    </Box>
                </Stack>

                <Box sx={{ backgroundColor: "#fff" }} p={2}>
                    <Stack direction="row">
                        <FormControl sx={{ m: 1, minWidth: 120, flex: 1 }}>
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
                                <TableCell justifyContent="center">
                                    <Checkbox></Checkbox>
                                </TableCell>
                                <TableCell>Tên sản phẩm</TableCell>
                                <TableCell>Giá bán</TableCell>
                                <TableCell>Nhà cung cấp</TableCell>
                                <TableCell>Danh mục</TableCell>
                                <TableCell>Thương hiệu</TableCell>
                                <TableCell>Trạng thái</TableCell>
                                <TableCell>Ngày tạo</TableCell>
                                <TableCell>Lợi nhuận</TableCell>
                                <TableCell>Thao tác</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 2, 3, 4, 5, 6, 7].map(row => (
                                <TableRow key={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>
                                        <Checkbox></Checkbox>
                                    </TableCell>
                                    <TableCell>
                                        <Stack>
                                            <Typography sx={{ color: "#1890ff" }}>Điện Thoại OnePlus  Nord CE 5G (12GB/256G) - Hàng Chính Hãng</Typography>
                                            <Typography>ID: 123456789</Typography>
                                            <Typography>SKU: 123456789</Typography>
                                            <Typography>MID: 123456789</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" justifyContent="center">
                                            <Typography sx={{ margin: "auto 0" }}>7.898.000</Typography>
                                            <EditIcon sx={{ width: "12px" }} />
                                        </Stack>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography>One Plus</Typography>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography>Điện thoại</Typography>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography>One Plus</Typography>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography>Đang bán</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>21/07/2022</Typography>
                                        <Typography>11:04:00</Typography>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography>0 - 0</Typography>
                                    </TableCell>
                                    <TableCell align='center'>
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
                                    <Typography fontWeight="bold">
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
            </Box>


        </>
    )
}

export default Product