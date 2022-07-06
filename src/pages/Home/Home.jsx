import React from 'react'
import "./Home.scss"
import {Link} from "react-router-dom"
function Home() {
  return (
    <>
    <div>Trang chủ</div><br/>
    <div><Link to={"/tim-kiem"} className=""> Đến trang Tìm kiếm</Link></div>
    </>
    
  )
}

export default Home