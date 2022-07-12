import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import CardProduct from '../../components/CardProduct';
import Container from '@mui/material/Container';
function Home() {
  return (
    <>
      <div>Trang chủ</div><br />
      <div><Link to={"/tim-kiem"} className=""> Đến trang Tìm kiếm</Link></div>
      <br></br>
      <div className='container' style={{ maxWidth: "1270px" }}>
        <Grid container >
            {Products.map(item=> <Grid key={item.id}  item lg={2} md={4} sm={6} xs={6}><CardProduct data={item} /></Grid> )}
          </Grid>
      </div>
    </>

  )
}

const Products = [{
  id:"1",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:true,
  percent_sale:"-21%",
  rate:4,
},
{
  id:"2",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:false,
  percent_sale:"-21%",
  rate:3,
},
{
  id:"3",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:true,
  percent_sale:"-21%",
  rate:5,
}
,
{
  id:"4",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:true,
  percent_sale:"-21%",
  rate:4,
},
{
  id:"5",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:true,
  percent_sale:"-21%",
  rate:2,
},
{
  id:"6",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:false,
  percent_sale:"-21%",
  rate:2,
},
{
  id:"7",
  name:"Sữa Tắm Dưỡng Thể Từ Thiên Nhiên Dove Căng Bóng Thư Giãn Với Chiết Xuất Lavender Và Hương Thảo 530G",
  image:"https://salt.tikicdn.com/cache/200x200/ts/product/5e/ab/4e/6ab0ba2c73e2ab0e48ee4cd2fed28630.jpg.webp",
  price:"113.000",
  sale:true,
  percent_sale:"-21%",
  rate:1,
}]

export default Home