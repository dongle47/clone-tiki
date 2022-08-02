import { useState, useEffect, useCallback, } from 'react'
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
import CardProduct from '../../components/CardProduct';
import apiProduct from '../../apis/apiProduct';
function FilterProduct(props) {
    const category = categories[0]
    const [value, setValue] = useState(0);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({})
    const [filterPrice, setFilterPrice] = useState({
        minPrice: '',
        maxPrice: '',
        option: 0,
        apply: false
    })

    const [productFilter, setProductFilter] = useState([])
    const size = 30;

    useEffect(() => {
        const getData = async () => {
            const response = await apiProduct.getProducts({});
            if (response) {
                setProducts((pre) => [...pre, ...response]);
            }
        };
        getData();
    }, [page]);

    useEffect(() => {
        const filterData = () => {
            let data = [...products]
            if (filter.rate)
                data = data.filter(item => item.rate >= filter.rate)
            category.properties.forEach(item => {
                if (item.name !== "origins" || item.name !== "brands")
                    data = data.filter(product => {
                        if (!filter[item.name] || filter[item.name].length === 0)
                            return true
                        if (product.details.options[item.name]) {
                            return product.details.options[item.name].list.some(item2 => filter[item.name].includes(item2.name))
                        }
                        return false
                    })
                // else
                //     data = data.filter(product => {
                //         if (!filter[item.name] || filter[item.name].length === 0)
                //             return true
                //         if (product.details.specifications[item.name]) {
                //             return product.details.specifications[item.name].list.some(item2 => filter[item.name].includes(item2.name))
                //         }
                //         return false
                //     })
            })
            if (filterPrice.apply) {
                switch (filterPrice.option) {
                    case 1: {
                        data = data.filter(item => item.price * (1 - item.discount / 100) < category.rangePrice.min)
                        break
                    }
                    case 2: {
                        data = data.filter(item => item.price * (1 - item.discount / 100) > category.rangePrice.min
                            && item.price * (1 - item.discount / 100) < category.rangePrice.max)
                        break
                    }
                    case 3: {
                        data = data.filter(item => item.price * (1 - item.discount / 100) > category.rangePrice.max)
                        break
                    }
                    case 4: {
                        data = data.filter(item => item.price * (1 - item.discount / 100)> filterPrice.minPrice
                            && item.price * (1 - item.discount / 100) < filterPrice.maxPrice)
                        break
                    }
                    case 0: {
                        break
                    }
                    default: {
                        break
                    }

                }
            }
            setProductFilter(data)
        }
        filterData()
    }, [products, filter, category, filterPrice])

    const onChangeMinPrice = (e) => {
        let value = Number(e.target.value)
        if (Number.isInteger(value) && value >= 0) {
            setFilterPrice({ ...filterPrice, minPrice: value, option: 4 })
        }
        else {
            setFilterPrice({ ...filterPrice, minPrice: category.rangePrice.min, option: 0 })
        }
    }
    const onChangeMaxPrice = (e) => {
        let value = Number(e.target.value)
        if (Number.isInteger(value) && value >= 0) {
            setFilterPrice({ ...filterPrice, maxPrice: value, option: 4 })
        }
        else {
            setFilterPrice({ ...filterPrice, maxPrice: category.rangePrice.max, option: 0 })
        }
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onChangeFilter = useCallback((e, propertyName) => {
        let property = filter[propertyName] || []
        if (e.target.checked) {
            property = [...property, e.target.name]
        }
        else
            property = property.filter(item => item !== e.target.name)

        setFilter(filter => {
            return {
                ...filter,
                [propertyName]: [...property]
            }
        })

        console.log({
            ...filter,
            [propertyName]: [...property]
        })
    }, [filter])
    const onChangeRating = (rate) => {
        setFilter({ ...filter, rate })
    }
    const onChangeShipping = (e) => {
        setFilter({ ...filter, shipping: e.target.value })
    }
    const handleApplyFilterPrice = () => {
        setFilterPrice(pre => {
            return { ...pre, apply: !pre.apply }
        })
    }


    return (
        <Stack className='filterProduct container' direction="row" spacing={1}>
            <Stack className='filterProduct__sidebar' direction="column">
                <Box className='filterProduct__form'>
                    <Typography className='filterProduct__title'>Dịch vụ</Typography>
                    <FormGroup>
                        {
                            services.map(item =>
                                <FormControlLabel
                                    key={item.id}
                                    name={item.name}
                                    onChange={(e) => onChangeFilter(e, "service")}
                                    className='filterProduct__label'
                                    control={<Checkbox className="filterProduct__checkbox" />
                                    } label={item.name} />)
                        }
                    </FormGroup>
                </Box>

                <Box className='filterProduct__form'>
                    <Typography className='filterProduct__title'>Đánh giá</Typography>
                    <FormGroup>
                        {
                            [5, 4, 3].map(item =>
                                <Box key={item} onClick={() => onChangeRating(item)}
                                    className='filterProduct__rating'>
                                    <Rating
                                        name="hover-feedback"
                                        value={item}
                                        readOnly
                                        icon={<StarIcon sx={{ fontSize: 16 }} />}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} sx={{ fontSize: 16 }} />}
                                    /><Box fontSize="13px">{`từ ${item} sao`}</Box>
                                </Box>)
                        }
                    </FormGroup>
                </Box>

                <Box className='filterProduct__form'>
                    <Typography className='filterProduct__title'>Giá</Typography>
                    <span
                        className={`filterPrice ${filterPrice.option === 1 ? 'selected' : ''}`}
                        onClick={() => setFilterPrice({ ...filterPrice, option: 1 })}
                    >
                        Dưới {numWithCommas(category.rangePrice.min)}
                    </span>
                    <span
                        className={`filterPrice ${filterPrice.option === 2 ? 'selected' : ''}`}
                        onClick={() => setFilterPrice({ ...filterPrice, option: 2 })}
                    >
                        Từ {numWithCommas(category.rangePrice.min)} đến {numWithCommas(category.rangePrice.max)}
                    </span>
                    <span
                        className={`filterPrice ${filterPrice.option === 3 ? 'selected' : ''}`}
                        onClick={() => setFilterPrice({ ...filterPrice, option: 3 })}
                    >
                        Trên {numWithCommas(category.rangePrice.max)}
                    </span>
                    <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#888" }}>Chọn khoảng giá</Typography>
                    <Box className="filterPrice__groupInput">
                        <input type="text" value={filterPrice.minPrice} onChange={onChangeMinPrice}></input>
                        <span>-</span>
                        <input type="text" value={filterPrice.maxPrice} onChange={onChangeMaxPrice}></input>
                    </Box>
                    <Button onClick={handleApplyFilterPrice}
                        variant='outlined' sx={{ width: "100px", height: "26px", fontWeight: 400 }}>
                        {filterPrice.apply ? 'Huỷ' : 'Áp dụng'}
                    </Button>
                </Box>

                {
                    category.properties.map(property =>
                        <FilterForm key={property.id} property={property} onChangeFilter={onChangeFilter} />
                    )
                }

                <Box className='filterProduct__form'>
                    <Typography className='filterProduct__title'>Giao hàng</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={onChangeShipping}
                    >
                        <FormControlLabel className='filterProduct__label'
                            value="noidia"
                            control={<Radio className="filterProduct__radiobutton" />}
                            label="Hàng Nội Địa" />
                        <FormControlLabel className='filterProduct__label'
                            value="quocte"
                            control={<Radio className="filterProduct__radiobutton" />}
                            label="Hàng Quốc Tế" />
                    </RadioGroup>
                </Box>
            </Stack >
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
                            productFilter.map(item =>
                                <Grid key={item.id} item xs={3}>
                                    <CardProduct data={item} />
                                </Grid>)
                        }
                    </Grid>
                </Box>
            </Box>
        </Stack >
    )
}

function FilterForm(props) {
    const { property, onChangeFilter } = props
    const [expand, setExpand] = useState(false)
    const handleExpand = () => {
        setExpand(pre => !pre)
    }

    return (
        <Box className='filterProduct__form'>
            <Typography className='filterProduct__title'>{property.display}</Typography>
            <FormGroup >
                {(expand ? property.items : property.items.slice(0, 4))
                    .map(item =>
                        <FormControlLabel
                            key={item.id}
                            className='filterProduct__label'
                            name={item.name}
                            onChange={(e) => onChangeFilter(e, property.name)}
                            control={<Checkbox className="filterProduct__checkbox" />}
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