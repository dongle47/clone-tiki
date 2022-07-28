import { useCallback, useEffect, useState } from 'react'
import './ShoppingCart.scss'
import { Grid, Typography, Checkbox, Button, Stack, Box ,Dialog} from '@mui/material'
import CartItem from '../../components/CartItem'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { CartItems } from "../../constraints/Cart"
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount';
import { numWithCommas } from "../../constraints/Util"
import { useSelector, useDispatch } from 'react-redux'
import ChooseCoupon from '../../components/ChooseCoupon';
import { unchooseAll, chooseAll, deleteAll } from '../../slices/cartSlice'
import { Link } from "react-router-dom"


function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponPrice, setCouponPrice] = useState(20000);
  const [checkAll, setCheckAll] = useState(false)
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const CartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    const calcPrice = () => {
      const total = CartItems.reduce((t, num) => num.choose ? t + num.price * num.quantity : t, 0)
      setTotalPrice(total)
    }
    const checkChooseAll = () => {
      if (CartItems.every(item => item.choose))
        setCheckAll(true)
      else
        setCheckAll(false)
    }
    calcPrice()
    checkChooseAll()
  }, [CartItems])

  const handleChooseAll = () => {
    if (checkAll) {
      setCheckAll(false)
      dispatch(unchooseAll({}))
    }
    else {
      setCheckAll(true)
      dispatch(chooseAll({}))
    }
  }

  const handleDeleteAll = () => {
    dispatch(deleteAll())
    closeDialogDeleteAll()
  }
  const openDialogDeleteAll = () => {
    setDialogDelete(true)
  }
  const closeDialogDeleteAll = () => {
    setDialogDelete(false)
  }

  return (<>
    <Box className="container" >
      <Grid container spacing={2} style={{ marginTop: "24px" }}>
        <Grid item lg={9} md={12} sm={12} xs={12}>
          <Box>
            <Typography className="cart__title" gutterBottom variant="h5" component="div" >
              GIỎ HÀNG
            </Typography>

            <Box className="cart__heading cart">
              <Stack direction="row">
                <Checkbox checked={checkAll} onChange={handleChooseAll} className="cart__checkbox" />
                {`Tất cả (${CartItems.length} sản phẩm)`}
              </Stack>
              <Stack>Đơn giá</Stack>
              <Stack>Số lượng</Stack>
              <Stack>Thành tiền</Stack>
              <Stack>
                <span onClick={openDialogDeleteAll}><DeleteOutlinedIcon /></span>
              </Stack>
            </Box>
            <Stack className="cart__list">
              {
                CartItems.map(item => <CartItem key={item.id} data={item} />)
              }
            </Stack>
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
              <Box className="cart-summary__price">
                <span>
                  Tạm tính
                </span>
                <span>{numWithCommas(totalPrice)} ₫</span>
              </Box>
              <Box className="cart-summary__price">
                <span>
                  Giảm giá
                </span>
                <span>{numWithCommas(couponPrice)} ₫</span>
              </Box>
              <Box className="cart-summary__divider"></Box>
              <Box className="cart-summary__price">
                <span>
                  Tổng tiền
                </span>
                <Box className="cart-summary__valueprice">
                  <span>{numWithCommas(totalPrice - couponPrice > 0 ? totalPrice - couponPrice : 0)} ₫</span>
                  <span>(Đã bao gồm VAT nếu có)</span>
                </Box>
              </Box>
            </Box>
            <Link to={"/payment"}>
              <Button variant="contained"
                sx={{ width: "100%", height: "42px", backgroundColor: "#ff424e", "&:hover": { opacity: 0.8, backgroundColor: "#ff424e" } }}>
                Mua hàng</Button>
            </Link>

          </Box>
        </Grid>
      </Grid>
    </Box>
    {open ? <ChooseCoupon handleOpen={handleOpen} handleClose={handleClose} open={open} /> : <></>}
    {dialogDelete &&
      <Dialog onClose={closeDialogDeleteAll} open={dialogDelete}>
        <Box className="dialog-removecart">
          <Box className="dialog-removecart__title">
            <h4>Xoá sản phẩm</h4>
          </Box>
          <Box className="dialog-removecart__content">
            Bạn có muốn xóa tất cả sản phẩm trong giỏ hàng
          </Box>
          <Box className="dialog-removecart__choose">
            <Button
              variant="outlined"
              onClick={handleDeleteAll}
              sx={{ width: "94px", height: "36px" }}
            >
              Xác nhận
            </Button>
            <Button
              variant="contained"
              onClick={closeDialogDeleteAll}
              sx={{ width: "57px", height: "36px" }}
            >
              Huỷ
            </Button>
          </Box>
        </Box>
      </Dialog>}

  </>
  )
}


export default ShoppingCart