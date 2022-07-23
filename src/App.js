import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './style/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';

import Search from './pages/Search/Search';

import CustomerAccount from './pages/CustomerAccount/CustomerAccount';

import Info from './pages/CustomerAccount/Info/index';
import PhoneNumber from './pages/CustomerAccount/Info/PhoneNumber/index';
import Email from './pages/CustomerAccount/Info/Email/index';
import Password from './pages/CustomerAccount/Info/Password/index';

import Notify from './pages/CustomerAccount/Notify/index';
import Orders from './pages/CustomerAccount/Orders/index';

import Addresses from './pages/CustomerAccount/Addresses/index';
import CreateAddress from './pages/CustomerAccount/Addresses/CreateAddress/index';

import PayInfo from './pages/CustomerAccount/PayInfo/index';
import ReviewPurchased from './pages/CustomerAccount/ReviewPurchased/index';
import FavoriteProduct from './pages/CustomerAccount/FavoriteProduct/index';
import MyReview from './pages/CustomerAccount/MyReview/index';
import DiscountCode from './pages/CustomerAccount/Coupon/index';

import ShoppingCart from "./pages/ShoppingCart"

import FilterProduct from "./pages/FilterProduct";
import DetailProduct from "./pages/DetailProduct"

import Admin from './pages/Admin';
import AdminLogin from './pages/Admin/Login';

import Brand from './pages/Admin/Brand';
import CreateBrand from './pages/Admin/Brand/CruBrand';

import Category from './pages/Admin/Category';
import CreateCategory from './pages/Admin/Category/CruCategory/index';


import CouponAdmin from './pages/Admin/Coupon';
import Dashboard from './pages/Admin/Dashboard';
import GrowthCenter from './pages/Admin/GrowthCenter';
import Order from './pages/Admin/Order';
import Product from './pages/Admin/Product';
import Review from './pages/Admin/Review';

import User from './pages/Admin/User';
import DetailUser from './pages/Admin/User/DetailUser';

import DetailOrder from "./pages/CustomerAccount/Orders/DetailOrder/DetailOrder";
import Payment from "./pages/Payment";
import TableCustom from "./components/TableCustom";
import AdminTab from "./components/AdminTab/AdminTab";




function App() {

  const isAdmin = window.location.href.includes('admin')

  return (
    <BrowserRouter>

      {isAdmin ? null : <Header />}

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='tim-kiem' element={<Search />} />

        <Route path='cart' element={<ShoppingCart />} />
        <Route path='payment' element={<Payment />} />

        {/* Routing customer account */}
        <Route path="/customer/account/edit" element={<CustomerAccount />}>
          <Route index element={<Info />} />
          <Route path='phone' element={<PhoneNumber />} />
          <Route path='email' element={<Email />} />
          <Route path='pass' element={<Password />} />
        </Route>

        <Route path="/customer/notification" element={<CustomerAccount />}>
          <Route index element={<Notify />} />
        </Route>

        <Route path="/sale/order" element={<CustomerAccount />}>
          <Route path="history" element={<Orders />} />
          <Route path="detail" element={<DetailOrder />} />
        </Route>


        <Route path="/customer/address" element={<CustomerAccount />}>
          <Route index element={<Addresses />} />
          <Route path='create' element={<CreateAddress />} />
        </Route>

        <Route path="/customer/paymentcard" element={<CustomerAccount />}>
          <Route index element={<PayInfo />} />
        </Route>

        <Route path="/nhan-xet-san-pham-ban-da-mua" element={<CustomerAccount />}>
          <Route index element={<ReviewPurchased />} />
        </Route>

        <Route path="/customer/wishlist" element={<CustomerAccount />}>
          <Route index element={<FavoriteProduct />} />
        </Route>

        <Route path="/customer/review" element={<CustomerAccount />}>
          <Route index element={<MyReview />} />
        </Route>

        <Route path="/customer/coupons" element={<CustomerAccount />}>
          <Route index element={<DiscountCode />} />
        </Route>

        <Route path="/filter-product" element={<FilterProduct />} />
        <Route path="/detail-product" element={<DetailProduct />} />

        <Route path='/admin/login' element={<AdminLogin />} />

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='order' element={<Order />} />
          <Route path='product' element={<Product />} />

          <Route path='category' element={<Category />}>
          </Route>

          <Route path='category/create' element={<CreateCategory />} />

          <Route path='brand/create' element={<CreateBrand />} />


          <Route path='brand' element={<Brand />} />
          <Route path='develop' element={<GrowthCenter />} />
          <Route path='coupon' element={<CouponAdmin />} />
          
          <Route path='user' element={<User />} />
          <Route path='user/detail' element={<DetailUser />} />


          <Route path='review' element={<Review />} />
          <Route path='test-table' element={<TableCustom />} />
          <Route path='test-tab' element={<AdminTab items={[{id:1,label:"Tất cả"},{id:2,label:"Đang bán"},{id:3,label:"Hết hàng"},{id:4,label:"Nháp"}]}
                                                    handleChangeTab={(i)=>{console.log(i)}} />} />
                    

        </Route>

      </Routes>

      {isAdmin ? null : <Footer />}

      <ToastContainer autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false} />
    </BrowserRouter >
  );
}

export default App;
