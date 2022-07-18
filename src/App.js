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
import RatePurchased from './pages/CustomerAccount/RatePurchased/index';
import FavoriteProduct from './pages/CustomerAccount/FavoriteProduct/index';
import MyRates from './pages/CustomerAccount/MyRates/index';
import DiscountCode from './pages/CustomerAccount/DiscountCode/index';

import ShoppingCart from "./pages/ShoppingCart"

import FilterProduct from "./pages/FilterProduct";
import DetailProduct from "./pages/DetailProduct"

import Admin from './pages/Admin';
import AdminLogin from './pages/Admin/Login';

function App() {

  const isAdmin = window.location.href.includes('admin')

  return (
    <BrowserRouter>

      {isAdmin ? null : <Header />}

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='tim-kiem' element={<Search />} />

        <Route path='cart' element={<ShoppingCart />} />

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

        <Route path="/sale/order/history" element={<CustomerAccount />}>
          <Route index element={<Orders />} />
        </Route>

        <Route path="/customer/address" element={<CustomerAccount />}>
          <Route index element={<Addresses />} />
          <Route path='create' element={<CreateAddress />} />
        </Route>

        <Route path="/customer/paymentcard" element={<CustomerAccount />}>
          <Route index element={<PayInfo />} />
        </Route>

        <Route path="/nhan-xet-san-pham-ban-da-mua" element={<CustomerAccount />}>
          <Route index element={<RatePurchased />} />
        </Route>

        <Route path="/customer/wishlist" element={<CustomerAccount />}>
          <Route index element={<FavoriteProduct />} />
        </Route>

        <Route path="/customer/review" element={<CustomerAccount />}>
          <Route index element={<MyRates />} />
        </Route>

        <Route path="/customer/coupons" element={<CustomerAccount />}>
          <Route index element={<DiscountCode />} />
        </Route>

        <Route path="/filter-product" element={<FilterProduct />} />
        <Route path="/detail-product" element={<DetailProduct />} />

        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/login' element={<AdminLogin />} />


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
