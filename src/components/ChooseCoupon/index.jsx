import {useEffect,useState} from 'react'
import './ChooseCoupon.scss'
import {  Button, Modal } from '@mui/material'
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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        ><div className='choose-coupon'>
                <div className="choose-coupon__heading">
                    <span>Tiki Khuyến mãi</span>
                    <CloseIcon onClick={props.handleClose} sx={{ height: "24px" }} />
                </div>
                <div className="choose-coupon__groupinput">
                    <div className="choose-coupon__groupinput__wrap">
                        <input type="text" placeholder='Nhập mã giảm giá' />
                        <span className="choose-coupon__groupinput__icon">
                            <DiscountIcon sx={{ height: "18px", color: "#888" }} />
                        </span>
                        <span className="choose-coupon__groupinput__iconclear">
                            <CancelIcon sx={{ height: "18px", color: "#888" }} />
                        </span>
                    </div>


                    <Button variant="contained"
                        sx={{ height: "36px", width: "89px", padding: 0, lineHeight: 0 }}
                    >Áp dụng</Button>
                </div>
                <div className="choose-coupon__list">
                    <div className="choose-coupon__list__heading">
                        <span>Mã giảm giá</span>
                        <span>Áp dụng tối đa: 1</span>
                    </div>
                    <ul>
                        <li>
                            <div className="coupon-item">
                                <div className="coupon-item__img">
                                    <img src="https://salt.tikicdn.com/cache/128x128/ts/upload/b6/c1/66/74ae9fd52a0e96a63551e054c135b53e.png" alt="" />
                                </div>
                                <div className="coupon-item__content">
                                    <div className="coupon-item__content__title">
                                        <span>KH mới</span>
                                        <InfoIcon sx={{ color: "#017fff", height: "20px" }} />
                                    </div>
                                    <div className="coupon-item__content__description">
                                        <h4>Giảm 20K</h4>
                                        <p>Cho đơn hàng từ 49K</p>
                                    </div>
                                    <div className="coupon-item__content__apply">
                                        <span>HSD: 31/07/2022</span>
                                        <Button variant="contained"
                                            sx={{ height: "28px", padding: 0, lineHeight: 0 }}
                                        >Áp dụng</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

        </Modal>
    )
}

export default ChooseCoupon