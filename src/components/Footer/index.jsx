import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <div className='Main-Footer'>
      <div className='block' style={{ width: "268px" }}>
        <h4 className='sdt'>Hỗ trợ khách hàng</h4>
        <div className='hotline'>
          Hotline:
          <a href="tel:1900-6035">1900-6035</a>
          <span className='small-text' style={{ marginRight: "4rem" }}>'(1000 đ/phút, 8-21h kể cả T7, CN)'</span>
        </div>
        <a rel="noreferrer" href="https://hotro.tiki.vn/s/" className="small-text" target="_blank">Các câu hỏi thường gặp</a>
        <a rel="noreferrer" href="https://tiki.vn/lien-he/gui-yeu-cau" className="small-text" target="_blank">Gửi yêu cầu hỗ trợ</a>
        <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki" className="small-text" target="_blank">Hướng dẫn đặt hàng</a>
        <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tiet-kiem" className="small-text" target="_blank">Phương thức vận chuyển</a>
        <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao" className="small-text" target="_blank">Chính sách đổi trả</a>
        <a rel="noreferrer" href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop" class="small-text" target="_blank">Hướng dẫn trả góp</a>
        <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai" class="small-text" target="_blank">Chính sách hàng nhập khẩu</a>
        <div class="security">
          Hỗ trợ khách hàng:
          <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
        </div>
        <p className='security' style={{ marginRight: "4rem" }}>
          Báo lỗi bảo mật:
          <a href="mailto:security@tiki.vn">security@tiki.vn</a>
        </p>
      </div>
    </div>

  )
}

export default Footer