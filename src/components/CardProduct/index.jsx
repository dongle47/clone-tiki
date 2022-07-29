import React from 'react'
import './CardProduct.scss'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Stack,
    Box
}from '@mui/material';
import {Link} from 'react-router-dom'
import {numWithCommas} from "../../constraints/Util"

function CardProduct({ data }) {
    return (
        <Link className="card__wrap" to={`/product/${data.id}`}>
            <Card className="card">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    width="183px"
                    image={data?.image}
                />
                <CardContent className="card__content">
                    <Typography className="card__title" variant="h5" component="div" fontSize="13px">
                        {data?.name}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <Rating name="read-only" value={data?.rate || 0} sx={{ fontSize: "0.875rem" }} readOnly />
                        <span style={{ color: "#787878", fontSize: "11px" }}>| Đã bán {data?.sold}</span>
                    </Stack>
                    <Typography className="card__price" color={`${data?.discount!==0 ? "#ff0000" : "#000000"}`} variant="h5" component="div">
                    {
                        data?.discount!==0 ?
                        <>{numWithCommas(Math.round(data?.price*(1-0.01*data.discount)))} ₫ <Box className="card__sale">{data?.discount}%</Box>
                        </>
                        :
                        <>{numWithCommas(data?.price)} ₫ </>
                    } 
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CardProduct