import { useEffect, useState } from 'react'
import './ChooseAddress.scss'
import { Button, Modal, Box, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import apiMain from '../../apis/apiMain';
import { address } from "../../constraints/Profile";
import PropTypes from 'prop-types';

function ChooseAddress(props) {
    const [coupons, setCoupons] = useState([]);
    
    useEffect(() => {
        const getCoupons = () => {
            let params = {
                _page: 1,
                _limit: 10
            }
            apiMain.getCoupons(params)
                .then(res => {
                    setCoupons(res.data)
                })
        }
        getCoupons()
    }, [])

    const chooseAddressShip = (address)=>{
        props.chooseAddressShip(address)
        props.handleClose()
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            <Box className='choose-address'>
                <Stack direction='row' className="choose-coupon__heading">
                    <span>Chọn địa chỉ</span>
                    <CloseIcon onClick={props.handleClose} height="24px" />
                </Stack>
                <Stack spacing={5}>{
                    address.map((item) => {
                        return (
                            <Stack
                                direction="row"
                                width="100%"
                                className="items"
                            >
                                <Stack className="info">
                                    <Typography className="name">{item.name}</Typography>
                                    <Typography className="address">Địa chỉ: {item.address}</Typography>
                                    <Typography className="number">Điện thoại: {item.phone}</Typography>
                                </Stack>

                                <Stack direction="row" className="action">
                                    <Button className="Modify" variant="text">
                                        Chỉnh sửa
                                    </Button>
                                    <Button onClick={()=>chooseAddressShip(item)} className="Delete" variant="text">
                                        Chọn
                                    </Button>
                                </Stack>
                            </Stack>
                        );
                    })
                }</Stack>

            </Box>
        </Modal>
    )
}

ChooseAddress.propsTypes = {
    open: PropTypes.bool,
    handleOpen: PropTypes.func,
    handleClose: PropTypes.func,
    chooseAddressShip: PropTypes.func
}
export default ChooseAddress