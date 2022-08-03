import React, { useState } from 'react'
import ReviewProduct from './ReviewProduct'
import {
    Rating,
    Button, Grid,
    Box,
    Stack

} from "@mui/material"
import "./DetailProduct.scss"
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardProduct from '../../components/CardProduct';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import apiProduct from '../../apis/apiProduct';
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cartSlice';
import apiMain from '../../apis/apiMain';
import { numWithCommas, roundPrice } from "../../constraints/Util"

function DetailProduct() {
    const [expandContent, setExpandContent] = useState(false);
    const [product, setProduct] = useState(null)
    const [productSimilars, setProductSimilars] = useState([])
    const [quantity, setQuantity] = useState(1)

    const [choose, setChoose] = useState({});

    const [indexImg, setIndexImg] = useState(0);

    const dispatch = useDispatch()

    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            let param = {
                _page: 1,
                _limit: 6,
            };
            const response = await apiMain.getProducts(param);
            if (response) {
                setProductSimilars((pre) => [...pre, ...response.data]);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getProduct = async () => {
            const response = await apiProduct.getProductsById(id)
            if (response) {
                if (response.length !== 0)
                    setProduct(response[0])
            }
        }
        getProduct()
    }, [id])

    const handleClickBuy = () => {
        dispatch(addItem({
            choose: false,
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity
        }))
    }

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value)
        if (e.target.value === "")
            return
        let quantity = Number(e.target.value)
        console.log(quantity)
        if (Number.isInteger(quantity)) {
            setQuantity(quantity)
        }
        else {
            setQuantity(1)
        }
    }

    const handleExpandContent = () => {
        setExpandContent(pre => !pre)
    }

    const onChangeOption = (optionId, itemId) => {
        let optionSelect = product.details.options.find(item => item.id === optionId)
        let itemSelect = optionSelect.list.find(item => item.id === itemId)
        let newChoose = { ...choose }
        newChoose[optionSelect.name] = itemId
        console.log(newChoose)
        setChoose(newChoose)
    }

    const onChangeimg = (index) => {
        setIndexImg(index)
    }

    const link_image = "https://salt.tikicdn.com/cache/400x400/ts/product/a3/cf/a9/0b59f8742708d27a25315078edf91bda.png.webp"
    const link_option_color = "https://salt.tikicdn.com/cache/100x100/ts/product/d5/40/5e/754dcea83b913f7585861d083491a917.png.webp"

    return (
        <>
            <Box className="container">
                <Box className="detailProduct">
                    <Box className="detailProduct__img">
                        <Box className="detailProduct__primary-img">
                            <img src={product?.details.images[indexImg]} alt="" />
                        </Box> <Stack direction="row" justifyContent="flex-start" mt={3} spacing={1}>
                            {product?.details.images.map((imgs, index) =>
                                <> <Box
                                    onClick={() => onChangeimg(index)}
                                    className={`detailProduct__item-img ${indexImg === index ? 'selected' : ''}`}><img src={imgs} alt="" /></Box>
                                    {/* <Box className="detailProduct__item-img"> </Box>
                                <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                                <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box>
                                <Box className="detailProduct__item-img"> <img src={link_image} alt="" /></Box> */}
                                    {/* <Box className="detailProduct__item-img">
                                    <Box className="lastimage">+6</Box>
                                    <img src={link_image} alt="" />
                                </Box> */}
                                </>


                            )} </Stack>
                    </Box>
                    <Box flex={1}>
                        <Box className="detailProduct__title">
                            <h2>{product?.name}</h2>
                        </Box>
                        <Box className="detailProduct__rating">
                            <Rating
                                name="simple-controlled"
                                value={4}
                                readOnly
                                sx={{ fontSize: "18px" }}
                            />
                            <span>Xem 19 đánh giá | Đã bán {product?.sold} </span>
                        </Box>

                        <Box className="detailProduct__price">
                            <span>{numWithCommas(roundPrice(product?.price * (1 - product?.discount / 100)))}₫</span>
                            <span>{numWithCommas(product?.price || 0)} ₫</span>
                            <span>{product?.discount}%</span>
                        </Box>
                        {product?.details.options.map(itemOpt => {
                            let select = itemOpt.list.find(item => choose[itemOpt.name] === item.id)
                            return (<Box className="product-option">
                                <Box className="product-option__title">
                                    {itemOpt.display} : <span>{select && select.name}</span>
                                </Box>
                                <Box className="product-option__list">
                                    {itemOpt.list.map(item => {
                                        let selected = choose[itemOpt.name] === item.id
                                        return (<Box key={item.id}
                                            onClick={() => onChangeOption(itemOpt.id, item.id)}
                                            className={`product-option__item product-option__item--color ${selected ? "selected" : ""}`}>
                                            <img src={link_option_color} alt="" />
                                            {item.name}
                                            <span><CheckIcon sx={{ fontSize: "12px", color: '#fff' }} /></span>
                                        </Box>)
                                    })}
                                </Box>
                            </Box>)
                        }
                        )}
                        <Box className="product-coupon">
                            <Box className="product-coupon__title">
                                8 Mã giảm giá
                            </Box>
                            <Box className="product-coupon__list">
                                <Box className="product-coupon__item">
                                    Giảm 80k
                                </Box>
                                <Box className="product-coupon__item">
                                    Giảm 20k
                                </Box>
                                <ArrowForwardIosIcon sx={{ color: "#1890ff" }} />
                            </Box>
                        </Box>

                        <Box className="detailProduct__address">
                            <span>Giao đến </span>
                            <span>TP. Nha Trang, P. Vĩnh Trường, Khánh Hòa</span>
                            <span> - </span>
                            <span>Đổi địa chỉ</span>
                        </Box>

                        <Box className="product-quanlity">
                            <Box className="product-quanlity__title">
                                Số lượng
                            </Box>
                            <Box className="product-quanlity__groupInput">
                                <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}><RemoveIcon /></button>
                                <input onChange={onChangeQuantity} type="text" value={quantity} />
                                <button onClick={() => setQuantity(quantity + 1)}><AddIcon /></button>
                            </Box>
                        </Box>
                        <Box className="detailProduct__buy">
                            <Button variant="contained" onClick={handleClickBuy}
                                sx={{
                                    width: "400px",
                                    height: "48px",
                                    backgroundColor: "#ff3945",
                                    "&:hover": { opacity: 0.8, backgroundColor: "#ff3945" }
                                }}
                            >Chọn mua</Button>
                        </Box>

                    </Box>
                </Box>

                <Box className="productSimilar">
                    <Box className="productSimilar__title">
                        Sản Phẩm Tương Tự
                    </Box>
                    <Grid container>
                        {productSimilars.slice(0, 6).map(item =>
                            <Grid item key={item.id} xs={2}>
                                <CardProduct data={item} />
                            </Grid>)
                        }
                    </Grid>
                </Box>
                <Box className="productSpecification" bgcolor="white" p={2}  borderRadius="4px">
                    <Box className="productSpecification__title">
                        Thông Tin Chi Tiết
                    </Box>
                    <Box className="productSpecification__table">
                        <table>
                            <tbody>
                                {product?.details.specifications.map(spec =>
                                    <tr>
                                        <td>{spec.display}</td>
                                        <td>{spec.value}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Box>
                </Box>
                <Box className="descriptionProduct" bgcolor="white" p={2} borderRadius="4px">
                    <Box className="productSpecification__title">
                        Mô Tả Sản phẩm
                    </Box>
                    <Box className="descriptionProduct__content" >
                        {product &&
                            (expandContent ? product?.details.description.split("\n") :  product?.details.description.split("\n").splice(0, 40))
                                .map((item, i) => <p key={i}>{item}</p>)
                        }
                        {expandContent ? "" : <Box className="bg-gradient"></Box>}
                    </Box>

                    <Box className="descriptionProduct__showmore">
                        <Button onClick={handleExpandContent} variant="outlined">{expandContent ? "Thu gọn nội dung" : "Xem thêm"}</Button>

                    </Box>
                </Box>
            </Box>
            <ReviewProduct />
        </>



    )
}

export default DetailProduct