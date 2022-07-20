import React from "react";
import "./Category.scss"
import {
    Grid,
    Stack,
    IconButton,
    Button,
    Typography,
    hexToRgb,
    Badge,
    Box,
    Modal,
    TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import img from "../../../assets/img/test.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, description, image) {
    return { name, description, image };
}

const rows = [
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),
    createData('Giày thể thao nam', 'Bán lẻ theo đôi',
        'https://salt.tikicdn.com/cache/w100/ts/product/53/2a/16/36bcda30194826dff631e0d1e2b83390.jpg'),

]

function Category() {
    return (
        <Stack direction="row" sx={{ backgroundColor: "#fff"}} p={3} >
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        Danh sách danh mục sản phẩm
                    </Typography>
                    <Button variant="contained">Thêm danh mục</Button>
                </Stack>
                <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: "100%" }} />
                    <span className="category__iconSearch">
                        <SearchIcon sx={{ fontSize: "28px" }} />
                    </span>
                </Stack>

                <Table
                    className="tableCategory"
                    sx={{ minWidth: "650px" }}
                    stickyHeader
                    size="small"
                    aria-label="sticky  table"
                    >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "15%", top: "64px" }}>Tên danh mục</TableCell>
                            <TableCell sx={{ width: "15%", top: "64px" }}>Mô tả</TableCell>
                            <TableCell align="center" sx={{ width: "10%", top: "64px" }}>Ảnh&nbsp;</TableCell>
                            <TableCell align="center" sx={{ width: "10%", top: "64px" }}>Thao tác&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="center">
                                    <img width="80px" height="80px" src={row.image} />
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={1} justifyContent="center" py={1}>
                                        <Button variant="contained" >Sửa</Button>
                                        <Button variant="outlined" color="error">Xóa</Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Stack>
        </Stack>
    )
}

export default Category