import Home from "./pages/Home";
import CustomerAccount from "./pages/CustomerAccount";
import ShoppingCart from "./pages/ShoppingCart";
import FilterProduct from "./pages/FilterProduct";
import DetailProduct from "./pages/DetailProduct";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";
import Error from "./pages/Error/index";
import {  Route, Routes } from "react-router-dom";

function ConfigRoute() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="payment" element={<Payment />} />
        {/* Routing customer account */}
        <Route path="customer/*" element={<CustomerAccount />} />
        <Route path="/filter" element={<FilterProduct />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="admin/*" element={<Admin />}/>
        <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default ConfigRoute