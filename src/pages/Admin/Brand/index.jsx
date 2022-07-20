import React from "react";
import "./Brand.scss"
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

function createData(name, description, address, contact, image) {
    return { name, description, address, contact, image };
}

const rows = [
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),
    createData('Thế giới di động', 'Bán lẻ, tmdt',
        'Tòa nhà MWG - Lô T2-1.2,Đường D1, Khu Công nghệ Cao, P. Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
        'Điện thoại: 028 38125960\nEmail: cskh@thegioididong.com',
        'https://salt.tikicdn.com/cache/w220/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg'),

    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Brand() {
    return (
        <Stack direction="row" sx={{ backgroundColor: "#fff" }} p={3}>
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography>
                        Danh sách thương hiệu
                    </Typography>
                    <Button variant="contained">Thêm thương hiệu</Button>
                </Stack>
                <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" sx={{ width: "100%" }} />
                    <span className="brand__iconSearch">
                        <SearchIcon sx={{ fontSize: "28px" }} />
                    </span>
                </Stack>

                <Table
                    className="tableBrand"
                    sx={{ minWidth: "650px" }}
                    stickyHeader
                    size="small"
                    aria-label="sticky  table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "15%" ,top:"64px"}}>Tên nhãn hiệu</TableCell>
                            <TableCell sx={{ width: "15%" ,top:"64px"}}>Mô tả</TableCell>
                            <TableCell align="center" sx={{ width: "30%" ,top:"64px"}}>Địa chỉ&nbsp;</TableCell>
                            <TableCell sx={{ width: "20%" ,top:"64px"}}>Thông tin liên lạc&nbsp;</TableCell>
                            <TableCell align="center" sx={{ width: "10%" ,top:"64px"}}>Ảnh&nbsp;</TableCell>
                            <TableCell align="center" sx={{ width: "10%" ,top:"64px"}}>Thao tác&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="left"><Typography>{row.contact}</Typography></TableCell>
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

export default Brand