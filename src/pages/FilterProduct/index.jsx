import React, { useState } from 'react'
import {
    Stack,
    Box,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    FormGroup,
    Grid,
    Rating,
    Tab,
    RadioGroup,
    Tabs,
    Radio,
}
    from '@mui/material';
import "./FilterProduct.scss"
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { numWithCommas } from "../../constraints/Util"
import { categories } from "../../constraints/FilterProduct"
import { Products } from "../../constraints/Home"
import CardProduct from '../../components/CardProduct';
function FilterProduct(props) {
    const category = categories[0]
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack className='filterProduct container' direction="row" spacing={1}>
            <Stack className='filterProduct__sidebar' direction="column">
                <Box className='filterProduct__sidebar__form'>
                    <Typography className='filterProduct__sidebar__title'>Dịch vụ</Typography>
                    <FormGroup>
                        {
                            services.map(item =>
                                <FormControlLabel key={item.id} className='filterProduct__sidebar__label'
                                    control={<Checkbox className="filterProduct__sidebar__checkbox" />
                                    } label={item.name} />)
                        }
                    </FormGroup>
                </Box>

                <Box className='filterProduct__sidebar__form'>
                    <Typography className='filterProduct__sidebar__title'>Đánh giá</Typography>
                    <FormGroup>
                        {
                            [5, 4, 3].map(item =>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: "10px",
                                        height: "24px",
                                        marginBottom: "4px"
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={item}
                                        readOnly
                                        icon={<StarIcon sx={{ fontSize: 16 }} />}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} sx={{ fontSize: 16 }} />}
                                    /><Box sx={{ fontSize: "13px" }}>{`từ ${item} sao`}</Box>
                                </Box>)
                        }
                    </FormGroup>
                </Box>

                <Box className='filterProduct__sidebar__form'>
                    <Typography className='filterProduct__sidebar__title'>Giá</Typography>
                    <span className='filterPrice'>Dưới {numWithCommas(category.rangePrice.min)} </span>
                    <span className='filterPrice'>Từ {numWithCommas(category.rangePrice.min)} đến {numWithCommas(category.rangePrice.max)} </span>
                    <span className='filterPrice'>Trên {numWithCommas(category.rangePrice.max)} </span>
                    <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#888" }}>Chọn khoảng giá</Typography>
                    <Box className="filterPrice__groupInput">
                        <input type="text"></input>
                        <span>-</span>
                        <input type="text"></input>
                    </Box>
                    <Button variant='outlined' sx={{ width: "100px", height: "26px", fontWeight: 400 }}>Áp dụng</Button>
                </Box>

                {
                    category.properties.map(property =>
                        <FilterForm key={property.id} property={property} />
                    )
                }

                <Box className='filterProduct__sidebar__form'>
                    <Typography className='filterProduct__sidebar__title'>Giao hàng</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel className='filterProduct__sidebar__label'
                            value="noidia"
                            control={<Radio className="filterProduct__sidebar__radiobutton" />}
                            label="Hàng Nội Địa" />
                        <FormControlLabel className='filterProduct__sidebar__label'
                            value="quocte"
                            control={<Radio className="filterProduct__sidebar__radiobutton" />}
                            label="Hàng Quốc Tế" />
                    </RadioGroup>
                </Box>
            </Stack>
            <Box sx={{ flex: 1 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="basic tabs example"
                    >
                        {
                            tabs.map(item =>
                                <Tab key={item.id}
                                    label={item.name}
                                    sx={{ fontSize: "12px", textTransform: "none", fontWeight: "500" }}
                                />)
                        }
                    </Tabs>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {
                            Products.map(item =>
                                <Grid item xs={3}>
                                    <CardProduct key={item.id} data={item} />
                                </Grid>)
                        }
                    </Grid>
                </Box>
            </Box>
        </Stack>
    )
}

function FilterForm(props) {
    const property = props.property
    const [expand, setExpand] = useState(false)
    const handleExpand = () => {
        setExpand(pre => !pre)
    }
    return (
        <Box className='filterProduct__sidebar__form'>
            <Typography className='filterProduct__sidebar__title'>{property.display}</Typography>
            <FormGroup>
                {(expand ? property.items : property.items.slice(0, 4))
                    .map(item =>
                        <FormControlLabel
                            key={item.id}
                            className='filterProduct__sidebar__label'
                            control={<Checkbox className="filterProduct__sidebar__checkbox" />}
                            label={item.name} />)
                }
            </FormGroup>
            {
                expand ?
                    <Stack onClick={handleExpand} direction="row" sx={{ cursor: "pointer", marginTop: "14px" }} >
                        <Typography sx={{ fontSize: 14, color: "#0D5CB6" }}>Thu gọn</Typography>
                        <KeyboardArrowUpIcon sx={{ fontSize: 20, color: "#0D5CB6" }} />
                    </Stack>
                    :
                    <Stack onClick={handleExpand} direction="row" sx={{ cursor: "pointer", marginTop: "14px" }} >
                        <Typography sx={{ fontSize: 14, color: "#0D5CB6" }}>Xem thêm</Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: 20, color: "#0D5CB6" }} />
                    </Stack>
            }
        </Box>
    )

}

const services = [
    {
        id: 1,
        name: "Giao siêu tốc 2h"
    },
    {
        id: 2,
        name: "Không giới hạn"
    },
    {
        id: 3,
        name: "Rẻ hơn hoàn tiền"
    },
    {
        id: 4,
        name: "Trả góp 0%"
    }
]



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

const tabs = [
    {
        id: 1,
        name: "Phổ biến"
    },
    {
        id: 2,
        name: "Bán chạy"
    },
    {
        id: 3,
        name: "Hàng mới"
    },
    {
        id: 4,
        name: "Giá thấp"
    },
    {
        id: 5,
        name: "Giá cao"
    },
]



export default FilterProduct