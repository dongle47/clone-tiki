import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DiscountIcon from '@mui/icons-material/Discount';

import Info from '../pages/CustomerAccount/Info';
import Notify from '../pages/CustomerAccount/Notify';
import Orders from '../pages/CustomerAccount/Orders';
import Addresses from '../pages/CustomerAccount/Addresses';
import PayInfo from '../pages/CustomerAccount/PayInfo';
import RatePurchased from '../pages/CustomerAccount/RatePurchased';
import FavoriteProduct from '../pages/CustomerAccount/FavoriteProduct';
import MyRates from '../pages/CustomerAccount/MyRates';
import DiscountCode from '../pages/CustomerAccount/DiscountCode';

export const sidebarTab = [
    {
        id: 1,
        icon: PersonIcon,
        text: 'Thông tin tài khoản',
        content: Info,
        link: '/customer/account/edit'
    },
    {
        id: 2,
        icon: NotificationsIcon,
        text: 'Thông báo của tôi',
        content: Notify,
        link: '/customer/notification'
    },
    {
        id: 3,
        icon: ListAltIcon,
        text: 'Quản lý đơn hàng',
        content: Orders,
        link: '/sale/order/history'
    },
    {
        id: 4,
        icon: LocationOnIcon,
        text: 'Sổ địa chỉ',
        content: Addresses,
        link: '/customer/address'
    },
    {
        id: 5,
        icon: CreditCardIcon,
        text: 'Thông tin thanh toán',
        content: PayInfo,
        link: '/customer/paymentcard'
    },
    {
        id: 6,
        icon: RateReviewIcon,
        text: 'Nhận xét sản phẩm đã mua',
        content: RatePurchased,
        link: '/nhan-xet-san-pham-ban-da-mua'
    },
    {
        id: 7,
        icon: FavoriteIcon,
        text: 'Sản phẩm yêu thích',
        content: FavoriteProduct,
        link: '/customer/wishlist'
    },
    {
        id: 8,
        icon: StarHalfIcon,
        text: 'Nhận xét của tôi',
        content: MyRates,
        link: '/customer/review'
    },
    {
        id: 9,
        icon: DiscountIcon,
        text: 'Mã giảm giá',
        content: DiscountCode,
        link: '/customer/coupons'
    },

]

export const address = [
    {
        id: 1,
        name: 'Lê Văn Đồng',
        address: 'Ktx khu B đhqg, Phường Đông Hòa, Thị xã Dĩ An, Bình Dương',
        phone: '0123456789',
    },
    {
        id: 1,
        name: 'Nguyễn Thị A',
        address: 'Tp. Hồ Chí Minh',
        phone: '0123456789',
    }
]