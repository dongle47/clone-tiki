import React from 'react'
import './CardProduct.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function CardProduct({data}) {
    const sale = true;
    return (
        <Card sx={{ maxWidth: '345px', padding: '12px', boxShadow: "none" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="183px"
                width="183px"
                image={data?.image}
            />
            <CardContent sx={{ padding: "12px 0" }}>
                <Typography className="card__title" gutterBottom variant="h5" component="div" sx={{ fontSize: "13px" }}>
                    {data?.name}
                </Typography>
                <div style={{display:"flex",alignItems: "center"}}>

                <Rating name="read-only" value={2} sx={{ fontSize: "0.875rem" }} readOnly />
                <span style={{ color: "#888888", fontSize: "11px" }}>| Đã bán 43</span>
                </div>
                <Typography color = {`${data?.sale?"#ff0000":"#000000"}`}  gutterBottom variant="h5" component="div" sx={{ fontSize: "1rem", fontWeight: "500",marginTop:"4px"}}>
                    {data?.price} ₫ {data?.sale?<div className="card__sale">{data?.percent_sale}</div>:<></>}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProduct