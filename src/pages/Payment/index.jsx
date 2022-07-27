import { useCallback, useEffect, useState } from 'react'
import './Payment.scss'
import { Grid, Typography, Box, Button, Stack, Radio, RadioGroup } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount';
import { numWithCommas } from "../../constraints/Util"
import { useSelector } from 'react-redux'
import ChooseCoupon from '../../components/ChooseCoupon';


function Payment() {
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponPrice, setCouponPrice] = useState(20000);
  const handleOpen = useCallback(() => setOpen(true),[]);
  const handleClose = useCallback(() => setOpen(false),[]);
  const CartItems = useSelector(state => state.cart.items)

  const [expandDetail, setExpandDetail] = useState(false)
  useEffect(() => {
    const calcPrice = () => {
      const total = CartItems.reduce((t, num) => num.choose ? t + num.price * num.quanlity : t, 0)
      setTotalPrice(total)
    }
    calcPrice()
  }, [CartItems])

  const [ship, setShip] = useState('shipping1');
  const [payment, setPayment] = useState(1);

  const handleChangeTypeShip = (event) => {
    setShip(event.target.value);
  };

  const handleChangeTypePayment = (event) => {
    setPayment(event.target.value);
  };

  const handleExpand = () => {
    setExpandDetail(pre => !pre)
  }

  return (<>
    <Box className="container" >
      <Grid container spacing={2} mt="24px">
        <Grid item lg={9} md={12} sm={12} xs={12}>
          <Box bgcolor="#fff" p={2}>
          <Box mb={2}>
            <Typography className="payment__title" gutterBottom variant="h5" component="div" >
              Chọn hình thức giao hàng
            </Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={ship}
              onChange={handleChangeTypeShip}
            >
              <Stack direction="row" height="48px" >
                <Radio name='shipping' value="shipping1" sx={{ padding: 0, marginRight: "8px" }} />
                <Typography sx={{ margin: "auto 0" }}>Giao hàng nhanh</Typography>
              </Stack>
              <Stack direction="row" height="48px">
                <Radio name='shipping' value="shipping2" sx={{ padding: 0, marginRight: "8px" }} />
                <Typography sx={{ margin: "auto 0" }}>Giao hàng tiêu chuẩn</Typography>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <Typography className="payment__title" gutterBottom variant="h5" component="div" >
              Chọn hình thức thanh toán
            </Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={payment}
              onChange={handleChangeTypePayment}
            >
              {
                paymentMethods.map(item =>
                  <Stack key={item.id} direction="row" alignItems="center" sx={{ height: "64px" }} >
                    <Radio name='payment' value={item.value} sx={{ padding: 0, marginRight: "8px" }} />
                    <img alt="" width="32px" height="32px" style={{ marginRight: "12px" }} src={item.image}></img>
                    <Typography sx={{ margin: "auto 0" }}>{item.display}</Typography>
                  </Stack>
                )
              }
            </RadioGroup>
          </Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
        <Box className='cart__address'>
            <Stack direction="row" mb={1.5} justifyContent="space-between">
              <Typography style={{ fontSize: "16px", fontWeight: 500, color: "#888" }}>Giao tới</Typography>
              <Typography color="#1890ff">Thay đổi</Typography>
            </Stack>
            <Typography mb={0.25} fontWeight={500}>Lê Văn Đồng   0332298170</Typography>
            <Typography color="#888">Ktx khu B đhqg, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương</Typography>
          </Box>
          <Box className='cart-coupon'>
            <Box className="cart-coupon__title">
              Tiki Khuyến mãi
            </Box>
            <Box className="cart-coupon__item">
              <svg className="cart-coupon__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 60"><g fill="none" fillRule="evenodd"><g stroke="#017FFF"><g><g><g><g><g><path fill="#E5F2FF" d="M 278 0.5 c 2.071 0 3.946 0.84 5.303 2.197 c 1.358 1.357 2.197 3.232 2.197 5.303 h 0 v 44 c 0 2.071 -0.84 3.946 -2.197 5.303 c -1.357 1.358 -3.232 2.197 -5.303 2.197 h 0 H 64.973 c -0.116 -1.043 -0.587 -1.978 -1.291 -2.682 c -0.814 -0.814 -1.94 -1.318 -3.182 -1.318 c -1.243 0 -2.368 0.504 -3.182 1.318 c -0.704 0.704 -1.175 1.64 -1.29 2.682 h 0 h -48.028 c -2.071 0 -3.946 -0.84 -5.303 -2.197 c -1.358 -1.357 -2.197 -3.232 -2.197 -5.303 h 0 V 8 c 0 -2.071 0.84 -3.946 2.197 -5.303 c 1.357 -1.358 3.232 -2.197 5.303 -2.197 h 48.027 c 0.116 1.043 0.587 1.978 1.291 2.682 c 0.814 0.814 1.94 1.318 3.182 1.318 c 1.243 0 2.368 -0.504 3.182 -1.318 c 0.704 -0.704 1.175 -1.64 1.29 -2.682 H 64.972 z" transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200)"></path><g strokeDasharray="2 4" strokeLinecap="square"><path d="M0.5 0L0.5 48" transform="translate(-1024 -2912) translate(80 2252) translate(0 460) translate(464) translate(480) translate(0 200) translate(60 8)"></path></g></g></g></g></g></g></g></g></svg>
              <Box className="cart-coupon__content">
                <img src="https://salt.tikicdn.com/cache/128x128/ts/upload/4d/f9/12/bf69a916969c229446f9a30aefa38705.jpg" alt="" />
                <Box className="cart-coupon__right">
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>Giảm 20K</span>
                  <Box>
                    <InfoIcon sx={{ color: "#1890ff" }} />
                    <Button className="cart-coupon__unchoose" variant="contained">Bỏ chọn</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box onClick={handleOpen} className="cart-coupon__showmore">
              <DiscountIcon sx={{ height: "18px", color: "#0b74e5" }} /> Chọn hoặc nhập Mã Khuyến Mãi khác
            </Box>
          </Box>

          <Box>
            <Box className="cart-summary">
              <Box mb={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography style={{ fontWeight: 500, color: "#333" }}>Giao tới</Typography>
                  <Typography sx={{ color: "#1890ff", fontSize: "14px" }}>Thay đổi</Typography>
                </Stack>
                <Stack direction="row" alignItems={"baseline"} spacing={1} >
                  <Typography sx={{ fontSize: "14px", color: "#888" }}>1 sản phẩm</Typography>
                  {expandDetail ? <span onClick={handleExpand} className="payment__btn-detail"
                  >Thu gọn<KeyboardArrowDownIcon sx={{ fontSize: "16px" }} /> </span>
                    :
                    <span onClick={handleExpand} className="payment__btn-detail"
                    >Xem thông tin<KeyboardArrowUpIcon sx={{ fontSize: "16px" }} /> </span>
                  }
                </Stack>
              </Box>
              {
                expandDetail ?
                  <Box>
                    <Stack direction="row" spacing={1} py={1}>
                      <div style={{ width: "30px" }}>1x</div>
                      <Typography className="payment__name-detail">
                        Kem Dưỡng Thể 2% BHA Paula’s Choice Resist Weightless Body Treatment With 2% BHA  60ml - MFullSize_210ml
                      </Typography>
                      <span>{numWithCommas(23000)} ₫</span>
                    </Stack>
                  </Box> : <></>
              }
              <Box py={1}>

                <Box className="cart-summary__price">
                  <span>Tạm tính</span>
                  <span>{numWithCommas(totalPrice)} ₫</span>
                </Box>
                <Box className="cart-summary__price">
                  <span>Phí vận chuyển</span>
                  <span>{numWithCommas(23000)} ₫</span>
                </Box>
                <Box className="cart-summary__price">
                  <span>Khuyến mãi vận chuyển</span>
                  <span style={{ color: "#00AB56" }}>{numWithCommas(-20000)} ₫</span>
                </Box>
                <Box className="cart-summary__price">
                  <span> Giảm giá</span>
                  <span style={{ color: "#00AB56" }}>{numWithCommas(-couponPrice)} ₫</span>
                </Box>
                <Box className="cart-summary__divider"></Box>
                <Box className="cart-summary__price">
                  <span>Tổng tiền</span>
                  <Box className="cart-summary__valueprice">
                    <span>{numWithCommas(totalPrice - couponPrice > 0 ? totalPrice - couponPrice : 0)} ₫</span>
                    <span>(Đã bao gồm VAT nếu có)</span>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button variant="contained"
              sx={{ width: "100%", height: "42px", backgroundColor: "#ff424e", "&:hover": { opacity: 0.8, backgroundColor: "#ff424e" } }}>
              Mua hàng</Button>

          </Box>
        </Grid>
      </Grid>
    </Box>
    {open ? <ChooseCoupon handleOpen={handleOpen} handleClose={handleClose} open={open} /> : <></>}

  </>
  )
}

const paymentMethods = [
  {
    id: 1,
    display: "Thanh toán tiền mặt khi nhận hàng",
    value: 1,
    image: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"
  },
  {
    id: 2,
    display: "Thanh toán bằng Viettel Money",
    value: 2,
    image: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-viettelmoney.png"
  },
  {
    id: 3,
    display: "Thanh toán bằng Momo",
    value: 3,
    image: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
  },
  {
    id: 4,
    display: "Thanh toán bằng ZaloPay",
    value: 4,
    image: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-zalo-pay.svg"
  },
  {
    id: 5,
    display: "Thanh toán bằng VNPay",
    value: 5,
    image: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
  },
]

export default Payment