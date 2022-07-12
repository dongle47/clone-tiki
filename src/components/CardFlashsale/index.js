import React from 'react'
import './CardFlashsale.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {Link} from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress';


function CardFlashsale({ data }) {
    return (
        <Link to={"/product"}>
            <Card sx={{ maxWidth: '345px', padding: '12px', boxShadow: "none"}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    width="124px"
                    image={data?.image}
                />
                <CardContent sx={{ padding: "12px 0 0 0 !important" }}>
                    <Typography className="card__price" color={`${data?.sale ? "#ff0000" : "#000000"}`} gutterBottom variant="h5" component="div">
                        {data?.price} ₫ {data?.sale ? <div className="card__sale">{data?.percent_sale}</div> : <></>}
                    </Typography>
                    <div  className='card-flashsale__sold' >

                    <LinearProgress variant="determinate" value={43}/>
                    <div>Đã bán {43}</div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CardFlashsale