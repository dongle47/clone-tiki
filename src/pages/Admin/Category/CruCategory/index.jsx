import React from "react";
import { Link } from "react-router-dom";
import "./CruCategory.scss";
import {
    Stack,
    Button,
    Typography,
    TextField,
    Box,
} from "@mui/material";
import rev from "../../../../assets/img/test.png";
function CrudCategory() {
    const [review, setReview] = React.useState(rev)

    const onChangeImg = (e) => {
        console.log(e.target.files)
        if (e.target.files.length > 0) {
            setReview(URL.createObjectURL(e.target.files[0]))
            console.log(e.target.files[0])
        }

    }
    return (
        <Box>
            <Stack p={3} justifyContent="center" sx={{ width: "700px" }}>
                <Stack direction="row" p={2} >
                    <Typography sx={{ width: "200px" }}>Nhập tên danh mục mới</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" />
                </Stack>

                <Stack direction="row" p={2} >
                    <Typography sx={{ width: "200px" }}>Mô Tả</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" />
                </Stack>

                <Stack direction="row" p={2}>
                    <Typography sx={{ width: "200px" }}>Thêm ảnh</Typography>
                    <Stack>
                        <img src={review} style={{ width: "210px", height: "210px" }} alt="" />
                        <input type="file" id="myfile" name="myfile" onChange={onChangeImg}></input>
                    </Stack>
                </Stack>

                <Stack justifyContent="center">
                    <Button sx={{ width: "450px"}} variant="contained">Thêm</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CrudCategory