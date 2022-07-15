import React from 'react'
import "./Footer.scss"
import nhanhieu from "../../assets/img/nhan-hieu.png"
import tikinow from "../../assets/img/tikinow.jpg"
import fb from "../../assets/img/fb.jpg"
import youtube from "../../assets/img/ytb.jpg"
import zalo from "../../assets/img/zalo.jpg"
function Footer() {
  return (
    <div className='Footer'>
      <div className='block'>
        <div className='block__1'>
          <h4 className='block__title'>Hỗ trợ khách hàng</h4>
          <div className='hotline'>
            Hotline:&nbsp;
            <a href="tel:1900-6035"> 1900-6035</a>
            <span className='small-text' style={{ marginRight: "1rem" }}>(1000 đ/phút, 8-21h kể cả T7, CN)</span>
          </div>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/" className="small-text" target="_blank">Các câu hỏi thường gặp</a>
          <a rel="noreferrer" href="https://tiki.vn/lien-he/gui-yeu-cau" className="small-text" target="_blank">Gửi yêu cầu hỗ trợ</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/lam-the-nao-de-toi-dat-hang-qua-website-tiki" className="small-text" target="_blank">Hướng dẫn đặt hàng</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tiet-kiem" className="small-text" target="_blank">Phương thức vận chuyển</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/chinh-sach-doi-tra-san-pham-tai-tiki-nhu-the-nao" className="small-text" target="_blank">Chính sách đổi trả</a>
          <a rel="noreferrer" href="https://tiki.vn/khuyen-mai/huong-dan-tra-gop" class="small-text" target="_blank">Hướng dẫn trả góp</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/dich-vu-giao-hang-tu-nuoc-ngoai" class="small-text" target="_blank">Chính sách hàng nhập khẩu</a>
          <div class="security">
            Hỗ trợ khách hàng:&nbsp;
            <a href="mailto:hotro@tiki.vn">hotro@tiki.vn</a>
          </div>
          <p className='security' style={{ marginRight: "4rem" }}>
            Báo lỗi bảo mật:&nbsp;
            <a href="mailto:security@tiki.vn">security@tiki.vn</a>
          </p>
        </div>

        <div className='block__2'>
          <h4 className="block__title">Về Tiki</h4>
          <a rel="noreferrer" href="https://tiki.vn/thong-tin/gioi-thieu-ve-tiki" className="small-text" target="_blank">Giới thiệu Tiki</a>
          <a rel="noreferrer" href="https://tuyendung.tiki.vn/" className="small-text" target="_blank">Tuyển dụng</a>
          <a rel="noreferrer" href="https://tiki.vn/bao-mat-thanh-toan" className="small-text" target="_blank">Chính sách bảo mật thanh toán</a>
          <a rel="noreferrer" href="https://tiki.vn/bao-mat-thong-tin-ca-nhan" className="small-text" target="_blank">Chính sách bảo mật thông tin cá nhân</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/chinh-sach-giai-quyet-khieu-nai" className="small-text" target="_blank">Chính sách giải quyết khiếu nại</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/dieu-khoan-su-dung" className="small-text" target="_blank">Điều khoản sử dụng</a>
          <a rel="noreferrer" href="https://hotro.tiki.vn/s/article/tiki-xu-la-gi" className="small-text" target="_blank">Giới thiệu Tiki Xu</a>
          <a rel="noreferrer" href="https://tiki.vn/sep/home" className="small-text" target="_blank">SEP - Mua sắm có lời</a>
          <a rel="noreferrer" href="https://tiki.vn/khuyen-mai/tiki-tiep-thi-lien-ket" className="small-text" target="_blank">Tiếp thị liên kết cùng Tiki</a>
          <a rel="noreferrer" href="https://tiki.vn/chuong-trinh/ban-hang-doanh-nghiep" className="small-text" target="_blank">Bán hàng doanh nghiệp</a>
          <a rel="noreferrer" href="https://www.tikinow.biz/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-v%E1%BA%ADn-chuy%E1%BB%83n" className="small-text" target="_blank">Điều kiện vận chuyển</a>
        </div>

        <div className='block__3'>
          <h4 className="block__title">Hợp tác và liên kết</h4>
          <div>
            <a rel="noreferrer" href="https://tiki.vn/quy-che-hoat-dong-sgdtmdt" className="small-text" target="_blank">Quy chế hoạt động Sàn GDTMĐT</a>
            <a rel="noreferrer" href="https://tiki.vn/khuyen-mai/ban-hang-cung-tiki" className="small-text" target="_blank">Bán hàng cùng Tiki</a>
          </div>

          <div>
            <h4 style={{ marginTop: '24px' }} className="block__title">Chứng nhận bởi</h4>
            <div className='block__3__logo'>
              <a href="https://hotro.tiki.vn/s/" rel="noreferrer" aria-label="" target="_blank" style={{ height: '32px' }}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width="32" height="32" alt="" /></a>
              <a href="http://online.gov.vn/Home/WebDetails/21193" rel="noreferrer" aria-label="" target="_blank" style={{ height: '32px' }}>
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" height="32" width="83" alt="" /></a>
            </div>
          </div>
        </div>

        <div className='block__4'>
          <div>
            <h4 className="block__title">Phương thức thanh toán</h4>
            <img alt='' src={nhanhieu} />
          </div>
          <div>
            <h4 style={{ margin: '24px 0 12px' }} className="block__title">Dịch vụ giao hàng</h4>
            <a href="/"><img alt='' src={tikinow}></img></a>
          </div>
        </div>

        <div className='block__5'>
          <div>
            <h4 className="block__title">Kết nối với chúng tôi</h4>
            <div className='block__contact'>
              <a rel="noreferrer" href="https://www.facebook.com/tiki.vn/" class="icon" target="_blank" title="Facebook">
                <img alt='' src={fb} />
              </a>
              <a rel="noreferrer" href="https://www.youtube.com/user/TikiVBlog" class="icon" target="_blank" title="Youtube">
                <img alt='' src={youtube} />
              </a>
              <a rel="noreferrer" href="http://zalo.me/589673439383195103" class="icon" target="_blank" title="Zalo">
                <img alt='' src={zalo} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="block__title">Tải ứng dụng trên điện thoại</h4>
            <div className="block__5__download">
              <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" width="80" height="80" alt="" />
              <div>
                <a rel="noreferrer" href="https://itunes.apple.com/vn/app/id958100553" target="_blank" aria-label="" style={{ height: '36px' }} admicro-data-event="100127" admicro-data-auto="1" admicro-data-order="false">
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width="122" alt="" /></a>
                <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid" target="_blank" aria-label="" style={{ height: '36px' }} admicro-data-event="100128" admicro-data-auto="1" admicro-data-order="false">
                  <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width="122" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container address-info">
        <p>Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh</p>
        <p>Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
        <p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022</p>
        <p  style={{marginBottom:'0'}}>© 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
      </div>
    </div>
  )
}

export default Footer
