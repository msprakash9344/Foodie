//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Biriyani.css';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';

//banner 
import banner from "./images/dosa banner.jpg"

import kaldosa from "./images/kal dosa.jpg";
import eggdosa from "./images/egg dosa.jfif";
import oniondosa from "./images/onion dosa.jfif";
import karidosa from "./images/kari dosa.jfif";
import masaladosa from "./images/masala dosa.jfif";
import ravadosa from "./images/rava dosa.jpg";
import mushroomdosa from "./images/mushroom dosa.jpeg";
import pannermasaladosa from "./images/panner masala dosa.jpeg";
import podidosa from "./images/podi dosa.jpeg";

import {useContext} from 'react'
import {CartContext} from '../context/CartContext'


//footer images

import logo from "./images/logo-removebg-preview (1).png";
import appstore from "./images/appstore1.png";
import playstore from "./images/playstore1.png";


const App = () => {
  const foodData = [
    { id: 1, name: "Plain Dosa", image: kaldosa, price: "40" ,offerprice:"32",offer:"off 20%",rating:"4.5"},
    { id: 2, name: "Egg Dosa", image: eggdosa, price: "80" ,offerprice:"68",offer:"off 15%",rating:"4.3"},
    { id: 3, name: "Onion Dosa", image: oniondosa, price: "60" ,offerprice:"54",offer:"off 10%",rating:"4.5" },
    { id: 4, name: "Kari Dosa", image: karidosa,price: "170" ,offerprice:"140",offer:"off 17%",rating:"4.4" },
    { id: 5, name: "Masala Dosa", image: masaladosa, price: "120" ,offerprice:"90",offer:"off 32%",rating:"4.5"},
    { id: 6, name: "Rava Dosa", image: ravadosa, price: "120" ,offerprice:"84",offer:"off 30%",rating:"4.2" },
    { id: 7, name: "Mushroom Dosa", image: mushroomdosa, price: "240" ,offerprice:"170",offer:"off 30%",rating:"4.5" },
    { id: 8, name: "Panner Masala Dosa", image: pannermasaladosa, price: "130" ,offerprice:"80",offer:"off 38%",rating:"4.4" },
    { id: 9, name: "Podi Dosa", image: podidosa, price: "110" ,offerprice:"70",offer:"off 36%",rating:"4.5" }
  ];


    const {addToCart} = useContext(CartContext)

  const [selectedFood, setSelectedFood] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    contact: "",
    address: "",
    quantity: 1,
    paymentMethod: "Cash on Delivery",
    totalPrice: 0,
  });

  const handleOrderNow = (food) => {
    setSelectedFood(food);
    setOrderDetails({
      name: "",
      contact: "",
      address: "",
      quantity: 1,
      paymentMethod: "Cash on Delivery",
      totalPrice: food.offerprice || food.price,
    });
  };

  // const handleAddToCart = (food) => {
  //   const alreadyInCart = cart.find((item) => item.id === food.id);
  //   if (alreadyInCart) {
  //     alert("This product is already added to the cart!");
  //     return;
  //   }
  //   setCart((prevCart) => [...prevCart, food]);
  //   alert(`${food.name} added to cart!`);

  // };


  const handleRemoveFromCart = (foodId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== foodId));
    alert("Product removed from cart!");
  };

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      totalPrice:
        name === "quantity"
          ? (selectedFood.offerprice || selectedFood.price) * parseInt(value || 1)
          : prevDetails.totalPrice,
    }));
  };

  const handleSubmitOrder = () => {
    alert(
      `Order placed successfully!\nDetails:\nName: ${orderDetails.name}\nContact: ${orderDetails.contact}\nAddress: ${orderDetails.address}\nQuantity: ${orderDetails.quantity}\nTotal Price: ₹${orderDetails.totalPrice}\nPayment Method: ${orderDetails.paymentMethod}`
    );
    setSelectedFood(null); // Close modal after submission
  };

  return (
    <div>
      <div>
      <img src={banner} alt="banner"  className='banner' style={{height:"650px"}}/>
      </div>
    <div className="container py-5">
    <h2 className="text-center mb-4">Our Delicius <span style={{color:"orangered"}}>Dosa</span> Varieties for You</h2>
    {/* <Link to="/cart" className="btn btn-warning mb-3">
          Your cart count ({cart.length})
        </Link> */}
      <div className="row g-4">
        {foodData.map((food) => (
          <div key={food.id} className="col-12 col-md-6 col-lg-4 card-container">
            <div className="card h-100 w-100 border-0 shadow image-container">
              <img
                src={food.image}
                alt={food.name}
                className="card-img-top img-fluid food-image"
              />
              <div className="card-body">
                <h4 className="card-title">{food.name}</h4>
                <h5 className='rating mt-3'>{food.rating} <i class="fa-solid fa-star"></i></h5>
                <h6 className="card-text food-prices mt-3">
                  <span className="offer-price">₹{food.offerprice}</span>
                  <span className="original-price">₹{food.price}</span>
                  <span className="offer">{food.offer}</span>
                </h6>
                <button
                  className="order-button"
                  onClick={() => handleOrderNow(food)}
                >
                  Order now
                </button>
                <button
                  className="cart-button"
                  onClick={() => addToCart(food)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      

      {/* Modal for order details */}
      {selectedFood && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Order Details for {selectedFood.name}</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="form-control"
                  value={orderDetails.contact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control"
                  min="1"
                  value={orderDetails.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  Payment Method:
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="form-control"
                  value={orderDetails.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="GPay">GPay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>
              <div className="mb-3">
                <h5>Total Price: ₹{orderDetails.totalPrice}</h5>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmitOrder}
              >
                Confirm Order
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedFood(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}



   {/* goto menu button*/}
<div className='text-center mb-5'>
  <a href='./Menu'> <button className='gotomenubutton'>Go to Menu</button> </a>
</div>



    </div>

     {/*----------------------------------------------------------footer-------------------------------------------------------*/}
 <footer className=" text-dark bg-light py-5 ">
  <div className="container">
    <div className="row">

      <div className='col-md-3'>
        <img src={logo} style={{height:"300px" , marginTop:"-80px" , marginLeft:"-30px"}}></img>
        <h4 style={{marginTop:"-50px"}}><i class="fa-regular fa-copyright"></i> 2025 foodie Limited</h4>

      </div>
    {/* Section 1: About */}
      <div className="col-md-3" >
        <h5 className='footerheading'>About Us</h5>
        <ul className="list-unstyled lh-lg footertext">
          <li><a href="#" className="text-decoration-none text-dark">About</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Careers</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Blog</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Terms & Conditions</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Section 2: Help */}
      <div className="col-md-3">
        <h5 className='footerheading'>Help & Support</h5>
        <ul className="list-unstyled lh-lg footertext">
          <li><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
          <li><a href="#" className="text-decoration-none text-dark">FAQs</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Partner with Us</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Cancellation Policy</a></li>
          <li><a href="#" className="text-decoration-none text-dark">Security</a></li>

        </ul>
      </div>

      {/* Section 3: Social Media */}
      <div className="col-md-3">
        <h5 className='footerheading'>Connect With Us</h5>
        <div className='lh-lg'>
          <a href="https://facebook.com"  className="text-dark  text-decoration-none footertext">
            <i className="bi bi-facebook"></i> Facebook
          </a> 

          <div>
          <a href="https://twitter.com"  className="text-dark text-decoration-none footertext">
            <i className="bi bi-twitter"></i> Twitter
          </a>
          </div>

          <a href="https://instagram.com" className="text-dark text-decoration-none footertext">
            <i className="bi bi-instagram"></i> Instagram
          </a>

          <div>
          <a href="https://www.youtube.com/"  className="text-dark text-decoration-none footertext">
            <i class="fa-brands fa-youtube"></i> youtube
          </a>
          </div>

          <div>
          <a href="https://whatsapp.com/"  className="text-dark text-decoration-none footertext">
          <i class="fa-brands fa-whatsapp"></i> whatsapp
          </a>
          </div>

        </div>
      </div>

    
   

    <hr className="text-dark" />

    {/* Footer Bottom */}

      <div className='col-12' >
      <h2 className='footerdownloadtext' style={{marginBottom:"-35px"}}>For better experience , Download the <span className='foodieapp'> FOODIE App</span> now <span><a href='https://play.google.com/store/games?device=windows' style={{marginright:"10px"}}><img src={playstore} alt='Playstore' style={{height:"60px" , width:"auto"}}></img></a> <a href='https://www.apple.com/app-store/'><img src={appstore} alt='Appstore' style={{height:"60px" , width:"auto"}}></img></a></span></h2>
      </div>
  </div>
  </div>
</footer>

    </div>
  );
};


export default App;
