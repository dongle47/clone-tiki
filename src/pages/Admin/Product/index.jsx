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
    TextField,
    Grid,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Product.scss"
import ListProduct from './ListProduct'
import RefreshIcon from '@mui/icons-material/Refresh';
import { height } from '@mui/system';
function Product() {
    return (
        <>
            <Box p={3}>
                <Stack direction="row" mb={1} justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#FFF" , height: "80px" }} px={2}>
                    <Typography sx={{fontWeight:550}} >Quản lý sản phẩm</Typography>
                    <Button variant="outlined" pr={2}>Tạo sản phẩm</Button>
                </Stack>
                <Stack sx= {{backgroundColor: "#FFF"}} mb={2}>
                <Box pt={1} pb={1.5}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" px ={2}>
                        <Grid xs={3}>
                        <Typography sx={{fontWeight:550}}>Tên sản phẩm</Typography>
                        <TextField label="Nhập tên sản phẩm" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={3}>
                        <Typography sx={{fontWeight:550}}>ID sản phẩm</Typography>
                        <TextField label="ID" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={3}>
                        <Typography sx={{fontWeight:550}}>SKU</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid xs={3}>
                        <Typography sx={{fontWeight:550}}>Thương hiệu</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                    </Grid>
                </Box>
                <Box pb={1.5} spacing ={1}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" px={2}>
                        <Grid xs={2.4} >
                        <Typography sx={{fontWeight:550}}>Gian hàng</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Ngành hàng</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Trạng thái</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Kho hàng</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Tồn kho</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                    </Grid>
                </Box>
                <Box pb={1.5} spacing ={1}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" px={2}>
                        <Grid xs={2.4} >
                        <Typography sx={{fontWeight:550}}>MDI</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={2.4}>
                        <Typography sx={{fontWeight:550}}>MSKU</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid  xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Mã sản phẩm nhà bán</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Thuộc tính còn thiếu</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                        <Grid xs={2.4}>
                        <Typography sx={{fontWeight:550}}>Khả năng hiển thị</Typography>
                        <TextField label="" id="outlined-size-small" defaultValue="" size="small"/>
                        </Grid>
                    </Grid>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} mt={2} pr={2}>
                        <Button variant="contained">Tìm kiếm</Button>
                        <Button variant='outlined'><RefreshIcon sx={{height:"20px"}}></RefreshIcon>Làm mới</Button>
                    </Stack>
                    
                </Box>
                </Stack>
                </Box>
            <ListProduct />
        </>
    )
}

export default Product