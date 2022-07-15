
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const orderStates = [
    {
        id:1,
        display:"Thất bại",
        icon:DoDisturbIcon
    },
    {
        id:2,
        display:"Giao hàng thành công",
        icon:LocalShippingIcon
    }
]

export const orderItems = [
    {
        id:1,
        state:"Giao hàng thành công",
        type:"Đã giao",
        totalPrice:1400000,
        products:[
            {
                id:1,
                name:"Sạc Dự Phòng Xiaomi 10000mAh Gen 3 PLM13ZM - Hàng Nhập Khẩu - Đen",
                image:"https://salt.tikicdn.com/cache/200x200/ts/product/03/c5/fa/de1f68f3247b1a407d725800925f341a.jpg",
                link:"",
                price:350000,
                quanlity:1,
            },
            {
                id:2,
                name:"Sạc Dự Phòng Xiaomi 10000mAh Gen 3 PLM13ZM - Hàng Nhập Khẩu - Đen",
                image:"https://salt.tikicdn.com/cache/200x200/ts/product/03/c5/fa/de1f68f3247b1a407d725800925f341a.jpg",
                link:"",
                price:350000,
                quanlity:2,
            }
        ]
    },
    {
        id:2,
        state:"Thất bại",
        type:"Thất bại",
        totalPrice:1400000,
        products:[
            {
                id:1,
                name:"Sạc Dự Phòng Xiaomi 10000mAh Gen 3 PLM13ZM - Hàng Nhập Khẩu - Đen",
                image:"https://salt.tikicdn.com/cache/200x200/ts/product/03/c5/fa/de1f68f3247b1a407d725800925f341a.jpg",
                link:"",
                
                price:350000,
                quanlity:1,
            },
            {
                id:2,
                name:"Sạc Dự Phòng Xiaomi 10000mAh Gen 3 PLM13ZM - Hàng Nhập Khẩu - Đen",
                image:"https://salt.tikicdn.com/cache/200x200/ts/product/03/c5/fa/de1f68f3247b1a407d725800925f341a.jpg",
                link:"",
                price:350000,
                quanlity:1,
            }
        ]
    }
]

export const orderTabs = [
    {
        id:0,
        type:"Tất cả"
    },
    {
        id:1,
        type:"Chờ thanh toán"
    },
    {
        id:2,
        type:"Đang xử lý"
    },
    {
        id:3,
        type:"Đang vận chuyển"
    },
    {
        id:4,
        type:"Đã giao"
    },
    {
        id:5,
        type:"Đã huỷ"
    },
]