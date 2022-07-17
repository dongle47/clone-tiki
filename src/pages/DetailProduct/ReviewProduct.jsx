import React from 'react'
import "./ReviewProduct.scss"
import {
    Box, Typography,
    Stack,
    Rating
} from "@mui/material"
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ReviewProduct() {
    return (

        <Box className="container">
            <Typography sx={{ fontSize: "20px" }}>Đánh Giá - Nhận Xét Từ Khách Hàng</Typography>
            <Stack direction="row">
                <Box sx={{ width: "335px" }}>
                    <Stack direction="row" spacing={2}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ fontSize: "32px", fontWeight: 600 }}
                        >4.9</Stack>
                        <Stack direction="column">
                            <Rating
                                name="simple-controlled"
                                value={5}
                                readOnly
                            />
                            <span>247 nhận xét</span>
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography></Typography>
                    <Stack direction="row"></Stack>
                    <Stack direction="row">
                        <StarBorderIcon sx={{ fontSize: '20px' }} />
                    </Stack>
                </Box>
            </Stack>

            {/* Đánh giá của người mua */}
            <Stack direction="row">
                <Box sx={{ width: "335px"}}>
                    <Stack direction="row" spacing={2}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{ fontSize: "32px", fontWeight: 600 }}
                        >4.9</Stack>
                        <Stack direction="column">
                            <Rating
                                name="simple-controlled"
                                value={5}
                                readOnly
                            />
                            <span>247 nhận xét</span>
                        </Stack>
                    </Stack>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography></Typography>
                    <Stack direction="row"></Stack>
                    <Stack direction="row">
                        <StarBorderIcon sx={{ fontSize: '20px' }} />
                    </Stack>
                </Box>
            </Stack>


        </Box>
    )
}

export default ReviewProduct