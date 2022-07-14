import * as React from 'react';
import "./DiscountCode.scss"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
    
    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DiscountCode() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Tất Cả" {...a11yProps(0)} />
            <Tab label="Tiki" {...a11yProps(1)} />
            <Tab label="Nhà bán" {...a11yProps(2)} />
            <Tab label="Ưu đãi thanh toán" {...a11yProps(3)} />
            <Tab label="Hết Hiệu Lực" {...a11yProps(4)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div className="list-voucher">
                <div className="voucher-bg1">
                    <div className="voucher-bg2" type="full" style={{ width: "100%"}}> 
                        <div className="voucher-bg3" type="full">
                            <div className="voucher">
                                <div className="voucher-publisher">
                                    <div className="publisher-info">
                                        <a className="publisher-link" href="https://tiki.vn/cua-hang/tiki-trading" aria-label="Tiki Trading-link">
                                            <div className="publisher-img">
                                                <img className="img-voucher" src="https://vcdn.tikicdn.com/cache/128x128/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png" alt="Tiki Trading" opacity="1"></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="publisher-name">
                                        <p className="">Tiki Trading</p>
                                    </div>
                                </div>
                                <div className="voucher-info">
                                    <button className="button-info" data-view-id="cart_coupon_view.coupon.rule" aria-describedby="popup-1" style={{ position: "absolute", marginTop: "12px", marginRight : "12px", Translate: "8px, -8px" }}>
                                        <img className="img-info" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23017FFF%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E" alt="info-icon"></img>
                                    </button>
                                    <div className="discount-info" style={{ paddingRight : "28px" }}>
                                        <h4 className="money-discount">Giảm 40K</h4>
                                        <p className="discount-note">Cho đơn hàng từ 500K</p>
                                    </div>
                                    <div className="note-background">
                                        <p className="discount-note" style={{paddingRight: "8px"}}>HSD: 31/07/22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="voucher-bg1">
                    <div className="voucher-bg2" type="full" style={{ width: "100 %"}}> 
                        <div className="voucher-bg3" type="full">
                            <div className="voucher">
                                <div className="voucher-publisher">
                                    <div className="publisher-info">
                                        <a className="publisher-link" href="https://tiki.vn/cua-hang/the-gioi-di-dong-official" aria-label="Thế Giới Di Động Official-link">
                                            <div className="publisher-img">
                                                <img className="img-voucher" src="https://vcdn.tikicdn.com/cache/128x128/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg" alt="Thế Giới Di Động Official" opacity="1"></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="publisher-name">
                                        <p className="">Thế Giới Di Động Official</p>
                                    </div>
                                </div>
                                <div className="voucher-info">
                                    <button className="button-info" data-view-id="cart_coupon_view.coupon.rule" aria-describedby="popup-2" style={{ position: "absolute", marginTop: "12px", marginRight : "12px", Translate: "8px, -8px" }}>
                                        <img className="img-info" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23017FFF%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E" alt="info-icon"></img>
                                    </button>
                                    <div className="discount-info" style={{ paddingRight : "28px" }}>
                                        <h4 className="money-discount">Giảm 500K</h4>
                                        <p className="discount-note">Số lượng có hạn</p>
                                    </div>
                                    <div className="note-background">
                                        <p className="discount-note" style={{paddingRight: "8px"}}>HSD: 31/07/22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="voucher-bg1">
                    <div className="voucher-bg2" type="full" style={{ width: "100 %"}}> 
                        <div className="voucher-bg3" type="full">
                            <div className="voucher">
                                <div className="voucher-publisher">
                                    <div className="publisher-info">
                                        <a className="publisher-link" href="https://tiki.vn/cua-hang/the-gioi-di-dong-official" aria-label="Thế Giới Di Động Official-link">
                                            <div className="publisher-img">
                                                <img className="img-voucher" src="https://vcdn.tikicdn.com/cache/128x128/ts/seller/4f/bb/60/2797e4e553ea5b4e9b4f93ad63ccc110.jpg" alt="Thế Giới Di Động Official" opacity="1"></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="publisher-name">
                                        <p className="">Thế Giới Di Động Official</p>
                                    </div>
                                </div>
                                <div className="voucher-info">
                                    <button className="button-info" data-view-id="cart_coupon_view.coupon.rule" aria-describedby="popup-2" style={{ position: "absolute", marginTop: "12px", marginRight : "12px", Translate: "8px, -8px" }}>
                                        <img className="img-info" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23017FFF%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E" alt="info-icon"></img>
                                    </button>
                                    <div className="discount-info" style={{ paddingRight : "28px" }}>
                                        <h4 className="money-discount">Giảm 500K</h4>
                                        <p className="discount-note">Số lượng có hạn</p>
                                    </div>
                                    <div className="note-background">
                                        <p className="discount-note" style={{paddingRight: "8px"}}>HSD: 31/07/22</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
            Item Three
        </TabPanel>
        </Box>
        </div>
    )
}

export default DiscountCode;
