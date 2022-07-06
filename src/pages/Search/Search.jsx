import React from 'react'
import "./Search.scss"
import {Link} from "react-router-dom"
function Search() {
  return (
    <>
    <div>Tìm kiếm</div><br/>
    <div><Link to={"/"} className=""> Đến trang trang chủ</Link></div>
    </>
  )
}

export default Search