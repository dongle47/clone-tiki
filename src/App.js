import './style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';

import Search from './pages/Search/Search';

import CustomerAccount from './pages/CustomerAccount/CustomerAccount';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShoppingCart from "./pages/ShoppingCart"
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='tim-kiem' element={<Search />} />
        <Route path='cart' element={<ShoppingCart />} />
        <Route path='customer/account/edit' element={<CustomerAccount />} />
        <Route path='customer/notification' element={<CustomerAccount />} />
        <Route path='sale/order/history' element={<CustomerAccount />} />
        <Route path='customer/address' element={<CustomerAccount />} />
        <Route path='customer/paymentcard' element={<CustomerAccount />} />
        <Route path='nhan-xet-san-pham-ban-da-mua' element={<CustomerAccount />} />
        <Route path='customer/wishlist' element={<CustomerAccount />} />
        <Route path='customer/review' element={<CustomerAccount />} />
        <Route path='customer/coupons' element={<CustomerAccount />} />
        

      </Routes>
      <Footer />
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
