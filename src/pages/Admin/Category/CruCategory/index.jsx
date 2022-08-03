import React from "react";
import { useEffect, useState } from "react";
import "./CruCategory.scss";
import apiCategory from "../../../../apis/apiCategory";

import {
    Box,
    Typography,
    Stack,
    TextField,
    MenuItem,
    Select,
    FormControl,
    Button,
    InputBase,
    styled
} from "@mui/material";



function CrudCategory() {
    const [categoryId, setCategoryId] = useState("");
    const [listType, setListType] = useState([]);

    useEffect(() => {
        const getData = async () => {
            apiCategory.showAllCategory()
                .then(res => {
                    setListType(res.data.listCategory);
                    console.log(res.data.listCategory.map(item => item.name));
                })
        };
        getData();
    }, []);

    const handleChangeType = (event) => {
        setCategoryId(event.target.value);
    };
    return (
        <Box>
            <Stack p={3} justifyContent="center" sx={{ width: "700px" }} spacing={3}>
                <Stack direction="row" p={2} >
                    <Typography sx={{ width: "200px" }}>Tên danh mục</Typography>
                    <FormControl className="create-address__input" sx={{flex:1}}>
                        <Select
                            size="small"
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={categoryId}
                            label="Age"
                            onChange={handleChangeType}
                            input={<InputCustom placeholder="Chọn Loại" />}
                        >
                            {
                                listType.map(item => <MenuItem value={item.id} >{item.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Stack>
                <Stack direction="row" p={2} >
                    <Typography sx={{ width: "200px" }}>Loại</Typography>
                    <TextField size="small" id="outlined-basic" variant="outlined" sx={{flex:1}}/>
                </Stack>
                <Stack justifyContent="center" alignItems="center">
                    <Button sx={{ width: "30%" }} variant="contained">Thêm</Button>
                </Stack>
            </Stack>
        </Box>
    )
}
const InputCustom = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        boxSizing: "border-box",
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        display: "flex",
        height: "40px !important",
        padding: '0px 26px 0px 12px',
        alignItems: "center",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#1890ff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default CrudCategory