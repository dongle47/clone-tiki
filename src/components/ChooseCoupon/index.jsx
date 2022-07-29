import {useEffect,useState} from 'react'
import './ChooseCoupon.scss'
import {  Button, Modal,Box,Stack } from '@mui/material'
// import { CartItems } from "../../constraints/Cart"
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount'
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';

function ChooseCoupon(props) {
    const [open, setOpen] = useState(props.open);
  useEffect(()=>{
    setOpen(props.open)
  },[props.open])
    return (
        <Modal
            open={open}
            onClose={props.handleClose}
        >
            <Box className='choose-coupon'>
                <Stack direction='row' className="choose-coupon__heading">
                    <span>Tiki Khuyến mãi</span>
                    <CloseIcon onClick={props.handleClose} height="24px"/>
                </Stack>
                <Box className="choose-coupon__search">
                    <Box className="choose-coupon__groupinput">
                        <input type="text" placeholder='Nhập mã giảm giá' />
                        <span className="choose-coupon__icon">
                            <DiscountIcon sx={{ height: "18px", color: "#888" }} />
                        </span>
                        <span className="choose-coupon__iconclear">
                            <CancelIcon sx={{ height: "18px", color: "#888" }} />
                        </span>
                    </Box>

                    <Button variant="contained" className="choose-coupon__btn-apply"
                    >Áp dụng</Button>
                </Box>
                <Box className="choose-coupon__list">
                    <Stack direction='row' className="choose-coupon__list-heading">
                        <span>Mã giảm giá</span>
                        <span>Áp dụng tối đa: 1</span>
                    </Stack>
                    <ul>
                        <li>
                            <Box className="coupon-item">
                                <Box className="coupon-item__img">
                                    <img src="https://salt.tikicdn.com/cache/128x128/ts/upload/b6/c1/66/74ae9fd52a0e96a63551e054c135b53e.png" alt="" />
                                </Box>
                                <Box className="coupon-item__content">
                                    <Box className="coupon-item__title">
                                        <span>KH mới</span>
                                        <InfoIcon color="#017fff" height="20px" />
                                    </Box>
                                    <Box className="coupon-item__description">
                                        <h4>Giảm 20K</h4>
                                        <p>Cho đơn hàng từ 49K</p>
                                    </Box>
                                    <Box className="coupon-item__apply">
                                        <span>HSD: 31/07/2022</span>
                                        <Button variant="contained" className="coupon-item__btn-apply"
                                        >Áp dụng</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </li>
                    </ul>
                </Box>

            </Box>
        </Modal>
    )
}

export default ChooseCoupon