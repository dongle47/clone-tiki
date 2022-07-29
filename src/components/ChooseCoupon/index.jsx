import { useEffect, useState } from 'react'
import './ChooseCoupon.scss'
import { Button, Modal, Box, Stack } from '@mui/material'
// import { CartItems } from "../../constraints/Cart"
import InfoIcon from '@mui/icons-material/Info';
import DiscountIcon from '@mui/icons-material/Discount'
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import apiMain from '../../apis/apiMain';
import PropTypes from 'prop-types';

function ChooseCoupon(props) {
    const [coupons, setCoupons] = useState([]);
    
    useEffect(()=>{
        const getCoupons = ()=>{
            let params = {
                _page:1,
                _limit:10
            }
            apiMain.getCoupons(params)
                .then(res=>{
                    setCoupons(res.data)
                })
        }
        getCoupons()
    },[])

    const handleChooseCoupon=(item)=>{
        props.chooseCoupon(item)
        props.handleClose()
    }
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <Box className='choose-coupon'>
                <Stack direction='row' className="choose-coupon__heading">
                    <span>Tiki Khuyến mãi</span>
                    <CloseIcon onClick={props.handleClose} height="24px" />
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
                <Box className="choose-coupon__content">
                    <Stack direction='row' className="choose-coupon__content-heading">
                        <span>Mã giảm giá</span>
                        <span>Áp dụng tối đa: 1</span>
                    </Stack>
                    <Stack className="choose-coupon__list">
                        {
                            coupons.map(item=>
                            <Box key={item.id} className="coupon-item">
                                <Box className="coupon-item__img">
                                    <img src={item.image} alt="" />
                                </Box>
                                <Box className="coupon-item__content">
                                    <Box className="coupon-item__title">
                                        <span>{item.publisher}</span>
                                        <InfoIcon color="#017fff" height="20px" />
                                    </Box>
                                    <Box className="coupon-item__description">
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                    </Box>
                                    <Box className="coupon-item__apply">
                                        <span>{item.expired}</span>
                                        <Button onClick={()=>handleChooseCoupon(item)}
                                         variant="contained" className="coupon-item__btn-apply"
                                        >Áp dụng</Button>
                                    </Box>
                                </Box>
                            </Box>
                            )
                        }
                    </Stack>
                </Box>

            </Box>
        </Modal>
    )
}

ChooseCoupon.propsTypes = {
    open: PropTypes.bool,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    chooseCoupon: PropTypes.func
}

export default ChooseCoupon