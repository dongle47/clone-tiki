import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import CardProduct from '../../components/CardProduct';
import CardFlashsale from '../../components/CardFlashsale';
import { Products, Categories, SlideKhuyenMai1, SlideThuongHieu1, SlideThuongHieu2 } from '../../constraints/Home';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Home() {
  return (
    <>
      <div style={{ marginTop: "2rem",backgroundColor:"#f5f5fa" }}>
        <div className='category'>
        <div className='container'>
          <Swiper
            slidesPerView={13}
            slidesPerGroup={13}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            
          >
            {
              Categories.map(item =>
                <SwiperSlide key={item.id} style={{ margin: "auto" }}>
                  <div style={{ fontSize: "14px", textAlign: "center" }}>{item.display}</div>
                </SwiperSlide>)
            }
          </Swiper>
          </div>
        </div>
        <div className='container'>

          <section id="section1">
            <div style={{ width: "66.65%" }}>
              <Swiper
                navigation={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                id="slider-khuyenmai"
              >
                {SlideKhuyenMai1.map(item =>
                  <SwiperSlide key={item.id}>
                    <div style={{ width: "100%" }}>
                      <img style={{ width: "100%" }} src={item.image} alt=""/>
                    </div>
                  </SwiperSlide>)}
              </Swiper>
            </div>
            <div style={{ width: "32.7%" }}>
              <img style={{ width: "100%" }} alt="" src="https://salt.tikicdn.com/cache/w400/ts/banner/a7/ee/b9/b4931904b38e1c5d9236345aa8b02a67.png.webp" />
            </div>
          </section>

          <section id="section2">
            <div style={{ width: "59.35%",height:"274px",backgroundColor:"#fff",borderRadius:"4px" }}>
              <div id="section2__heading">
                <div id="section2__title">
                  <img alt="" src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"  />
                  <img alt="" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg"/>
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
                </div>
                <Link to={"/xemthem"}>Xem thêm</Link>
              </div>
              <Swiper
              slidesPerView={5}
              slidesPerGroup={5}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                id="slider-thuonghieu2"
              >
                {Products.map(item =>
                  <SwiperSlide style={{minWidth:"148px"}} key={item.id}>
                    <CardFlashsale data={item}/>
                  </SwiperSlide>)}
              </Swiper>
            </div>
            <div style={{ width: "39.35%" }}>
              <img style={{ width: "100%" }} src="https://salt.tikicdn.com/cache/w572/ts/upload/1a/8e/00/291b67286660dbc51bb8381633868927.png.webp" />
            </div>
          </section>

          <section id="section3"></section>
          <section id="section4"></section>
          <section id="section5"></section>
          <section id="section6">
            <div className="section__heading">
              <div className="section__title">
                <span><img style={{ width: "24px" }} src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png" alt="" /></span>
                Thương Hiệu Chính Hãng
              </div>
              <Link to={"/xem-them"}>XEM THÊM</Link>
            </div>

            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              slidesPerGroup={2}
              navigation={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
              id="slider-thuonghieu1"
            >
              {SlideThuongHieu1.map(item =>
                <SwiperSlide key={item.id} >
                  <div style={{ width: "100%" }}>
                    <img style={{ width: "100%", borderRadius: "8px" }} src={item.image} />
                  </div>
                </SwiperSlide>)}
            </Swiper>

            <Swiper
              slidesPerView={6}
              slidesPerGroup={6}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              id="slider-thuonghieu2"
            >
              {SlideThuongHieu2.map(item =>
                <SwiperSlide key={item.id} style={{ padding: "0 8px" }} >
                  <div className='img__thuonghieu2' style={{ width: "100%" }}>
                    <img style={{ width: "100%", borderRadius: "8px" }} src={item.image} />
                    <p>{item.alt}</p>
                  </div>
                </SwiperSlide>)}
            </Swiper>
          </section>



        </div>


      </div>
      <div className='container'>
        <Grid container >
          {Products.map(item => <Grid key={item.id} item lg={2} md={4} sm={6} xs={6}><CardProduct data={item} /></Grid>)}
        </Grid>
      </div>
    </>

  )
}


export default Home