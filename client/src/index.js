import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from './Pages/ProtectedRoute'



import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgetPassword";
import Signup from "./Pages/Signup";
import Aboutus from "./Pages/Aboutus";
import Cart from "./Pages/Cart";
import Biriyani from "./Pages/Biriyani";
import Friedrice  from "./Pages/Friedrice";
import Noodless from "./Pages/Noodless";
import Parotta from "./Pages/Parotta";
import Dosa from "./Pages/Dosa";
import Shawarma from "./Pages/Shawarma";
import Pizza from "./Pages/Pizza";
import Burger from "./Pages/Burger";
import Rolls from "./Pages/Rolls";
import Chicken from "./Pages/Chicken";
import Cakes from "./Pages/Cakes";
import Falooda from "./Pages/Falooda";

import CartProvider from './context/CartContext'


export default function App() {
    return (
        <CartProvider>
             <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                
                {/* PUBLIC */}
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                {/* PROTECTED */}
                <Route element={<ProtectedRoute />}>
                <Route path="home" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="forgetpassword" element={<ForgotPassword />} />
                <Route path="aboutus" element={<Aboutus />} />
                <Route path="cart" element={<Cart />} />

                <Route path="menu/biriyani" element={<Biriyani />} />
                <Route path="menu/friedrice" element={<Friedrice />} />
                <Route path="menu/noodless" element={<Noodless />} />
                <Route path="menu/parotta" element={<Parotta />} />
                <Route path="menu/dosa" element={<Dosa />} />
                <Route path="menu/shawarma" element={<Shawarma />} />
                <Route path="menu/pizza" element={<Pizza />} />
                <Route path="menu/burger" element={<Burger />} />
                <Route path="menu/rolls" element={<Rolls />} />
                <Route path="menu/chicken" element={<Chicken />} />
                <Route path="menu/cakes" element={<Cakes />} />
                <Route path="menu/falooda" element={<Falooda />} />
                </Route>
             </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
