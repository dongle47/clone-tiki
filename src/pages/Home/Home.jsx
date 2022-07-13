import React, { useState, useRef } from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CardProduct from '../../components/CardProduct';
import CardFlashsale from '../../components/CardFlashsale';
import { Products, Categories, SlideKhuyenMai1, SlideThuongHieu1, SlideThuongHieu2, Quicklink, CategorySpecify, Suggestions } from '../../constraints/Home';
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Home() {
  const [page, setPage] = useState(1)
  const size = 12

  const handleLoadMore = () => {
    setPage(page => page + 1)
  }
  return (
    <>
      <div className='category'>
        <div className='container'>
          <Category />
        </div>
      </div>

      <div className='container'>
        <section id="section1">
          <SlideKhuyenMai />
        </section>

        <section id="section2">
          <SectionFlashsale />
        </section>

        <section id="section3">
          <div style={{ width: "16.45%" }}>
            <img style={{ maxHeight: "160px" }} src="https://salt.tikicdn.com/cache/w200/ts/banner/15/54/a3/dc054f7084003d4c9f5e100249fff610.png.webp" alt="" />
          </div>
          <div style={{ width: "64.52%" }}>
            <img src="https://salt.tikicdn.com/cache/w750/ts/banner/20/af/9d/85c2367e8eb8c832e631842e75364fe2.png.webp" alt="" />
          </div>
          <div style={{ width: "16.45%" }}>
            <img style={{ maxHeight: "160px" }} src="https://salt.tikicdn.com/cache/w200/ts/banner/da/12/bb/6c23d2e7f4a0242b01c3f9c5619bb140.png.webp" alt="" />
          </div>
        </section>
        <section id="section4">
          <div className='quicklink__wrap'>
            {
              Quicklink.map(item =>
                <Link key={item.id} to={item.link}>
                  <div className='quicklink__item'>
                    <img style={{ width: "48px" }} src={item.image} alt={item.alt} />
                    <span>{item.alt}</span>
                  </div>
                </Link>
              )
            }
          </div>
        </section>
        <section id="section5">
          <div className='banner__wrap1'>
            <img src="https://salt.tikicdn.com/cache/w280/ts/banner/f9/50/fd/80d44082ed11e523c7a48bc648018d11.png.webp" alt="" />
            <img src="https://salt.tikicdn.com/cache/w280/ts/banner/88/b4/4b/84bd376e4b0c8513036a0d562c7bcfb6.png.webp" alt="" />
            <img src="https://salt.tikicdn.com/cache/w280/ts/banner/8a/be/67/38ec52352aa1550dc8c128dd0969f757.png.webp" alt="" />
            <img src="https://salt.tikicdn.com/cache/w280/ts/banner/ed/0d/3b/7dc88059494e699d3c77248d7d42e5d0.png.webp" alt="" />
          </div>
        </section>

        <section id="section6">
          <div className="section__heading">
            <div className="section__title">
              <span>
                <img style={{ width: "24px" }} src="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png" alt="" />
              </span>
              Thương Hiệu Chính Hãng
            </div>
            <Link className="section__more" to={"/xem-them"}>XEM THÊM</Link>
          </div>
          <SlideThuongHieu />
        </section>

        <section id="section7">
          <div className="section__heading" style={{ padding: "10px 16px", marginBottom: "16px" }}>
            <div className="section__title">
              Danh Mục Nổi Bật
            </div>
          </div>
          <div className='specify__wrap'>
            {
              CategorySpecify.map(item =>
                <Link key={item.id} to={item.link}>
                  <div className='specify__item'>
                    <img style={{ width: "60px" }} src={item.image} alt={item.alt} />
                    <span>{item.alt}</span>
                  </div>
                </Link>
              )
            }
          </div>
        </section>

        <section id="section8">
          <div className='banner__wrap2'>
            <img src="https://salt.tikicdn.com/cache/w400/ts/banner/83/25/b8/96442cbb3cccebd796916c8af5377ecd.png.webp" alt="" />
            <img src="https://salt.tikicdn.com/cache/w400/ts/banner/64/4f/4a/b58dfceb83bbba5a710772d5e9fd14e9.png.webp" alt="" />
            <img src="https://salt.tikicdn.com/cache/w400/ts/banner/d0/09/63/2ae37cd70c15bbf073bddedb1b5b42d9.png.webp" alt="" />
          </div>
        </section>

        <section id="section9">
          <div className="suggestion">
            <div className="section__heading">
              <div className="section__title">
                Gợi Ý Hôm Nay
              </div>
            </div>
            <div className='suggestion__wrap'>
              {
                Suggestions.map(item =>
                  <Link key={item.id} to={item.link}>
                    <div className={`suggestion__item ${item.id === 1 ? 'active' : ''}`}>
                      <img style={{ width: "48px" }} src={item.image} alt={item.alt} />
                      <span>{item.alt}</span>
                    </div>
                  </Link>
                )
              }
            </div>
          </div>
          <Grid container >
            {Products.slice(0, page * size).map(item => <Grid key={item.id} item lg={2} md={4} sm={6} xs={6}><CardProduct data={item} /></Grid>)}
          </Grid>
          <div style={{ width: "100%", display: "flex" }}>
            <button onClick={handleLoadMore} className='btn__outline__primary'>Xem thêm</button>
          </div>
        </section>
      </div>
    </>

  )
}

function SlideKhuyenMai(props) {
  return (
    <>
      <div style={{ width: "66.65%" }}>
        <Swiper
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          id="slider-khuyenmai"
        >
          {SlideKhuyenMai1.map(item =>
            <SwiperSlide key={item.id} >
              <Link to={item.link}>
                <div style={{ width: "100%" }}>
                  <img src={item.image} alt="" />
                </div></Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div style={{ width: "32.7%" }}>
        <Link to={"/"}>
          <img alt="" src="https://salt.tikicdn.com/cache/w400/ts/banner/a7/ee/b9/b4931904b38e1c5d9236345aa8b02a67.png.webp" />
        </Link>
      </div>
    </>
  )
}

function SlideThuongHieu(props) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={2}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        id="slider-thuonghieu1"
      >
        {SlideThuongHieu1.map(item =>
          <SwiperSlide key={item.id}>
            <Link to={item.link}>
              <div style={{ width: "100%" }}>
                <img style={{ width: "100%", borderRadius: "8px" }} alt={item.alt} src={item.image} />
              </div>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>

      <Swiper
        slidesPerView={6}
        slidesPerGroup={6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper slider-thuonghieu2"
      >
        {SlideThuongHieu2.map(item =>
          <SwiperSlide key={item.id} style={{ padding: "0 8px" }} >
            <Link to={item.link}>
              <div className='img__thuonghieu2' style={{ width: "100%" }}>
                <img style={{ width: "100%", borderRadius: "8px" }} alt={item.alt} src={item.image} />
                <p>{item.alt}</p>
              </div>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

function SectionFlashsale(props) {

  return (
    <>
      <div style={{ width: "59.35%", height: "274px", backgroundColor: "#fff", borderRadius: "4px" }}>
        <div id="section2__heading">
          <div id="section2__title">
            <img alt="" src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" />
            <img alt="" src="https://frontend.tikicdn.com/_desktop-next/static/img/dealFlashIcon.svg" />
            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
          </div>
          <Link id="section2__more" to={"/xemthem"}>Xem thêm</Link>
        </div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper slider-thuonghieu2"
        >
          {Products.map(item =>
            <SwiperSlide key={item.id} style={{ minWidth: "148px" }}>
              <CardFlashsale data={item} />
            </SwiperSlide>)}
        </Swiper>
      </div>
      <div style={{ width: "39.35%" }}>
        <Link to={"/"}>
          <img alt="" src="https://salt.tikicdn.com/cache/w572/ts/upload/1a/8e/00/291b67286660dbc51bb8381633868927.png.webp" />
        </Link>
      </div>
    </>
  )
}

function Category(props) {
  const categoryRef = useRef();
  const handleReachEnd = () => {
    if (categoryRef) {
      categoryRef.current.children[2].style.display = 'none'
      categoryRef.current.children[1].style.removeProperty("display")
    }
  }
  const handleReachBeginning = () => {
    if (categoryRef) {
      categoryRef.current.children[1].style.display = 'none'
      categoryRef.current.children[2].style.removeProperty("display")
    }
  }
  return (
    <Swiper
      slidesPerView={13}
      slidesPerGroup={13}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      ref={categoryRef}
      onReachEnd={handleReachEnd}
      onReachBeginning={handleReachBeginning}
      onInit={handleReachBeginning}
    >
      {
        Categories.map(item =>
          <SwiperSlide key={item.id}>
            <Link to={item.link}>
              <div style={{ fontSize: "14px", textAlign: "center" }}>{item.display}</div></Link>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}
export default Home