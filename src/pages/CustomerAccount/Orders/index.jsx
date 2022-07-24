import { useState } from "react"
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Tabs,
    Tab,
    Typography
} from '@mui/material'
import "./Orders.scss"
import SearchIcon from '@mui/icons-material/Search';
import OrderItem from "../../../components/OrderItem.js";
import { orderTabs, orderItems } from "../../../constraints/OrderItem";

function Orders() {
    const [orders, setOrders] = useState(orderItems)
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
    return (
        <>
            <Box className="myorder" sx={{ width: "100%" }}>
                <Box className="myorder__tabs">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        {
                            orderTabs.map(item =>
                                <Tab key={item.id} label={item.type}
                                    sx={{ fontSize: "12px", textTransform: "none", fontWeight: "400" }}
                                    {...a11yProps(item.id)} />)
                        }
                    </Tabs>


                </Box>
                <Box className="myorder__search">
                    <div className="myorder__search__logo">
                        <SearchIcon />
                    </div>
                    <input type="text" className="myorder__search__input" placeholder="Tìm đơn hàng theo Mã đơn hàng, Đơn hàng, nhà bán" />
                    <div className="myorder__search__btn">
                        Tìm đơn hàng
                    </div>
                </Box>
                <Box>

                
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {
                        orders ? orders.map(item => <OrderItem key={item.id} order={item} />)
                            :
                            <Box>
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" alt="" />
                                <Typography>Chưa có đơn hàng</Typography>
                            </Box>
                    }
                </TabPanel>
                {
                    orderTabs.slice(1, orderTabs.length).map(item => {
                        const tmp = getOrderByType(orders, item.type)
                        if (tmp.length === 0)
                            return (
                                <TabPanel value={value} index={item.id} dir={theme.direction}>
                                    <Box className="myorder__none">
                                        <img height="200px" width="200px" src="https://frontend.tikicdn.com/_desktop-next/static/img/account/empty-order.png" alt="" />
                                        <Typography>Chưa có đơn hàng</Typography>
                                    </Box>
                                </TabPanel>)
                        else return (
                            <TabPanel value={value} index={item.id} dir={theme.direction}>
                            {tmp.map(item => <OrderItem key={item.id} order={item} />)}
                            </TabPanel>
                        )
                    }

                    )
                }
                </Box>


            </Box></>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

const getOrderByType = (orders, type) => orders.filter(item => item.type === type)


export default Orders