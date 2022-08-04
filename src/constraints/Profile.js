import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import DiscountIcon from '@mui/icons-material/Discount';

export const sidebarTab = [
    {
        id: 1,
        icon: PersonIcon,
        text: 'Thông tin tài khoản',
        link: '/customer/account/edit',
    },
    {
        id: 2,
        icon: NotificationsIcon,
        text: 'Thông báo của tôi',
        link: '/customer/notification'
    },
    {
        id: 3,
        icon: ListAltIcon,
        text: 'Quản lý đơn hàng',
        link: '/customer/order/history'
    },
    {
        id: 4,
        icon: LocationOnIcon,
        text: 'Sổ địa chỉ',
        link: '/customer/address'
    },
    {
        id: 5,
        icon: CreditCardIcon,
        text: 'Thông tin thanh toán',
        link: '/customer/paymentcard'
    },
    {
        id: 6,
        icon: RateReviewIcon,
        text: 'Nhận xét sản phẩm đã mua',
        link: '/customer/nhan-xet-san-pham-ban-da-mua'
    },
    {
        id: 7,
        icon: FavoriteIcon,
        text: 'Sản phẩm yêu thích',
        link: '/customer/wishlist'
    },
    {
        id: 8,
        icon: StarHalfIcon,
        text: 'Nhận xét của tôi',
        link: '/customer/review'
    },
    {
        id: 9,
        icon: DiscountIcon,
        text: 'Mã giảm giá',
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
        id: 2,
        name: 'Nguyễn Thị A',
        address: 'Tp. Hồ Chí Minh',
        phone: '0123456789',
    }
]

export const orderTabs = [
    {
        id: 1,
        display: "Tất cả đơn",
    },
    {
        id: 2,
        display: "Chờ thanh toán",
    },
    {
        id: 3,
        display: "Đang xử lý",
    },
    {
        id: 4,
        display: "Đang vận chuyển",
    },
    {
        id: 5,
        display: "Đã giao",
    },
    {
        id: 6,
        display: "Đã huỷ",
    },

]
