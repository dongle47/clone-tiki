import './style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='tim-kiem' element={<Search/>}/>
      </Routes>
      <Footer/>
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
