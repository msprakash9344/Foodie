import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import "./Layout.css";

import logo from "./images/logo-removebg-preview (1).png";

/*FontAwesome CDN */
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>




const Layout = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log("Search query:", e.target.value);
    };

    const token = localStorage.getItem('token');
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow fixed-top">
                <div className="container-fluid" >
                    <img src={logo} alt="logo" style={{ height: "70px", width: "130px" }} />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Centered Search Bar */}
                    <form className="d-flex " style={{ width: "30%" }}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                            value={search}
                            onChange={handleSearch}
                        />
                    </form>

                    <div  id="navbarNav">
                        <ul className="navbar-nav mx-auto" style={{ columnGap: "25px" }}>
                            <li >
                                <Link className="navitems" to="/home">
                                <i class="fa-solid fa-house"></i> Home
                                </Link>
                            </li>
                            <li >
                                <Link className="navitems" to="/menu">
                                    <i className="bi bi-person-lines-fill"></i> Menu
                                </Link>
                            </li>

                                                        <li>
                            <Link className="navitems" to="/cart">
                                <i class="fa-solid fa-cart-shopping"></i> Cart
                                </Link>
                            </li>

                            <li >
                                <Link className="navitems" to="/aboutus">
                                <i class="fa-solid fa-circle-info"></i> About Us
                                </Link>
                            </li>

                            {token &&                              
                                <li >
                                    <Link className="navitems" to="/login" onClick={() => localStorage.removeItem('token')}>
                                    <i class="fa-solid fa-right-to-bracket"></i> Logout
                                    </Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;


