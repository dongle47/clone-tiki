import React from 'react'
import './CardProduct.scss'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    Stack
}from '@mui/material';
import {Link} from 'react-router-dom'


function CardProduct({ data }) {
    return (
        <Link className="card__wrap" to={`/product/${data.id}`}>
            <Card sx={{ maxWidth: '345px', padding: '12px', boxShadow: "none"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    width="183px"
                    image={data?.image}
                />
                <CardContent sx={{ padding: "12px 0 0 0 !important" }}>
                    <Typography className="card__title" gutterBottom variant="h5" component="div" sx={{ fontSize: "13px" }}>
                        {data?.name}
                    </Typography>
                    <Stack direction="row" alignItems="center">
                        <Rating name="read-only" value={data?.rate || 0} sx={{ fontSize: "0.875rem" }} readOnly />
                        <span style={{ color: "#787878", fontSize: "11px" }}>| Đã bán {data?.sold}</span>
                    </Stack>
                    <Typography className="card__price" color={`${data?.discount!==0 ? "#ff0000" : "#000000"}`} gutterBottom variant="h5" component="div">
                        {data?.price} ₫ {data?.discount!==0 ? <div className="card__sale">{data?.discount}%</div> : <></>}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CardProduct