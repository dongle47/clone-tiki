import React, { useCallback, useEffect, useState } from 'react'
import './ShoppingCart.scss'
import { Grid, Typography, Checkbox, Button, Stack } from '@mui/material'
import CartItem from '../../components/CartItem'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { CartItems } from "../../constraints/Cart"
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount';
import { numWithCommas } from "../../constraints/Util"
import { useSelector, useDispatch } from 'react-redux'
import ChooseCoupon from '../../components/ChooseCoupon';
import {unchooseAll,chooseAll,deleteAll} from '../../slices/cartSlice'


function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [couponPrice, setCouponPrice] = React.useState(20000);
  const [checkAll, setCheckAll] = useState(false)
  const handleOpen = useCallback(() => setOpen(true));
  const handleClose = useCallback(() => setOpen(false));
  const CartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    const calcPrice = () => {
      const total = CartItems.reduce((t, num) => num.choose ? t + num.price * num.quanlity : t, 0)
      setTotalPrice(total)
    }
    calcPrice()
  }, [CartItems])

  const handleChooseAll=()=>{
    if(checkAll){
      setCheckAll(false)
      dispatch(unchooseAll({}))
    }
    else{
      setCheckAll(true)
      dispatch(chooseAll({}))
    }
  }

  const handleDeleteAll=()=>{
    dispatch(deleteAll())
  }

  return (<>
    <div className="container" >
      <Grid container spacing={2} style={{marginTop:"24px"}}>
        <Grid item lg={9} md={12} sm={12} xs={12}>
          <div>
            <Typography className="cart__title" gutterBottom variant="h5" component="div" >
              GIỎ HÀNG
            </Typography>

            <div className="cart__heading">
              <div className="cart__heading__item" style={{ width: "44.45%",fontSize:"14px" }}>
                <Checkbox checked={checkAll} onChange={handleChooseAll}
                 sx={{ padding: 0, marginRight: "12px", width: "18px", height: "18px", fontSize: "14px" }} />
                {`Tất cả (${CartItems.length} sản phẩm)`}
              </div>
              <div className="cart__heading__item" style={{ width: "21.11%", fontSize: "13px" }}>Đơn giá</div>
              <div className="cart__heading__item" style={{ width: "14.45%", fontSize: "13px" }}>Số lượng</div>
              <div className="cart__heading__item" style={{ width: "14.45%", fontSize: "13px" }}>Thành tiền</div>
              <div className="cart__heading__item" style={{ width: "3.33%", fontSize: "13px" }}>
                <span onClick={handleDeleteAll}><DeleteOutlinedIcon /></span>
              </div>
            </div>
            <div className="cart__list">
              {
                CartItems.map(item => <CartItem key={item.id} data={item} />)
              }
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <div className='cart__address'>
            <Stack direction="row" mb={1.5} justifyContent="space-between">
              <Typography style={{fontSize:"16px",fontWeight:500,color:"#888"}}>Giao tới</Typography>
              <Typography sx={{color:"#1890ff"}}>Thay đổi</Typography>
            </Stack>
            <Typography mb={0.25} sx={{fontWeight:500}}>Lê Văn Đồng   0332298170</Typography>
            <Typography sx={{color:"#888"}}>Ktx khu B đhqg, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương</Typography>
            
          </div>
          <div className='cart__coupon'>
            <div className="cart__coupon__title">
              <span>Tiki Khuyến mãi</span>
            </div>
            <div className="cart__coupon__item">
              <svg className="cart__coupon__item__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 60"><g fill="none" fillRule="evenodd"><g stroke="#017FFF"><g><g><g><g><g><path fill="#E5F2FF" d="M 278 0.5 c 2.071 0 3.946 0.84 5.303 2.197 c 1.358 1.357 2.197 3.232 2.197 5.303 h 0 v 44 c 0 2.071 -0.84 3.946 -2.197 5.303 c -1.357 1.358 -3.232 2.197 -5.303 2.197 h 0 H 64.973 c -0.116 -1.043 -0.587 -1.978 -1.291 -2.682 c -0.814 -0.814 -1.94 -1.318 -3.182 -1.318 c -1.243 0 -2.368 0.504 -3.182 1.318 c -0.704 0.704 -1.175 1.64 -1.29 2.682 h 0 h -48.028 c -2.071 0 -3.946 -0.84 -5.303 -2.197 c -1.358 -1.357 -2.197 -3.232 -2.197 -5.303 h 0 V 8 c 0 -2.071 0.84 -3.946 2.197 -5.303 c 1.357 -1.358 3.232 -2.197 5.303 -2.197 h 48.027 c 0.116 1.043 0.587 1.978 1.291 2.682 c 0.814 0.814 1.94 1.318 3.182 1.318 c 1.243 0 2.368 -0.504 3.182 -1.318 c 0.704 -0.704 1.175 -1.64 1.29 -2.682 H 64.972 z" transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200)"></path><g strokeDasharray="2 4" strokeLinecap="square"><path d="M0.5 0L0.5 48" transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200) translate(60 8)"></path></g></g></g></g></g></g></g></g></svg>
              <div className="cart__coupon__item__content">
                <img src="https://salt.tikicdn.com/cache/128x128/ts/upload/4d/f9/12/bf69a916969c229446f9a30aefa38705.jpg" alt="" />
                <div className="cart__coupon__item__right">
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>Giảm 20K</span>
                  <div>
                    <InfoIcon sx={{ color: "#1890ff" }} />
                    <Button variant="contained" sx={{ width: "73px", height: "24px", fontSize: "13px", padding: 0, marginLeft: "4px" }}
                    >Bỏ chọn</Button>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleOpen} className="cart__coupon__showmore">
              <DiscountIcon sx={{ height: "18px", color: "#0b74e5" }} /> Chọn hoặc nhập Mã Khuyến Mãi khác
            </div>
          </div>

          <div className='cart__payment'>
            <div className="cart__summary">
              <div className="cart__summary__price">
                <span>
                  Tạm tính
                </span>
                <span>{numWithCommas(totalPrice)} ₫</span>
              </div>
              <div className="cart__summary__price">
                <span>
                  Giảm giá
                </span>
                <span>{numWithCommas(couponPrice)} ₫</span>
              </div>
              <div style={{ margin: "20px 0", width: "100%", height: "1px", backgroundColor: "#f3f3f3" }}></div>
              <div className="cart__summary__price">
                <span>
                  Tổng tiền
                </span>
                <div className="cart__summary__valueprice">
                  <span>{numWithCommas(totalPrice - couponPrice>0?totalPrice - couponPrice:0)} ₫</span>
                  <span>(Đã bao gồm VAT nếu có)</span>
                </div>
              </div>
            </div>
            <Button variant="contained"
              sx={{ width: "100%", height: "42px", backgroundColor: "#ff424e", "&:hover": { opacity: 0.8, backgroundColor: "#ff424e" } }}>
              Mua hàng</Button>

          </div>
        </Grid>
      </Grid>
    </div>
    {open ? <ChooseCoupon handleOpen={handleOpen} handleClose={handleClose} open={open} /> : <></>}

  </>
  )
}


export default ShoppingCart