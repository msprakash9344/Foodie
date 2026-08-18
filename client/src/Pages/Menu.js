import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Menu.css";
import banner from "./images/chicken friedrice.jpg";
import { useState } from 'react';
import { Link } from 'react-router-dom';


import biriyani from "./images/biriyani.jfif";
import fridrice from "./images/fridrice1.jfif";
import noodless from "./images/noodless2.jfif";
import parotta from "./images/parotta1.jfif";
import dosa from "./images/dosa.jfif";
import shawarma from "./images/shawarma.jfif";
import pizza from "./images/pizza.jfif";
import burger from "./images/burger.jfif";
import roll from "./images/rolls.jfif";
import chicken from "./images/chicken.jfif";
import cake from "./images/cakes.jfif";
import falooda from "./images/falooda.jfif";

//import logo from "./images/logo-removebg-preview (1).png"


// food images 

import i1 from "./images/chicken biriyani1.jfif";
import i2 from "./images/chicken friedrice.jpg";
import i3 from "./images/chicken fried noodles.jpg";
import i4 from "./images/parotta.jpg";
import i5 from "./images/dosa1.jpg";
import i6 from "./images/pizza.jpg";
 

//footer images

import logo from "./images/logo-removebg-preview (1).png";
import appstore from "./images/appstore1.png";
import playstore from "./images/playstore1.png";




const App = () => {
  const foodData = [
    { id: 1, name: "Chicken Briyani", image: i1, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 1, name: "Chicken Fried Rice", image: i2, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 1, name: "Chicken Noodles", image: i3, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 1, name: "Parotta", image: i4, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 1, name: "Dosa", image: i5, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 1, name: "Pizza", image: i6, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"}
  ];

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

  const handleAddToCart = (food) => {
    const alreadyInCart = cart.find((item) => item.id === food.id);
    if (alreadyInCart) {
      alert(`${food.name} is already added to the cart!`);
      return;
    }
    setCart((prevCart) => [...prevCart, food]);
    alert(`${food.name} added to cart!`);

  };


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
      <img src={banner} alt="banner"  className='banner'/>


    <div className="container-fluid py-5">
      <h2 className="text-center mb-4">what's On Your Mind</h2>
      <div className="row g-3">
        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to='/menu/biriyani'>
          <div className='image-container'> 
            <img
              src={biriyani}
              height={200}
              alt="Biriyani"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
                borderRadius:"50%"
              }}
            />
            </div>
          </Link>
          <h5>Biriyani</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/friedrice">

          <div className='image-container'>
            <img
              src={fridrice}
              alt="Fried Rice"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
                borderRadius:"50%"

              }}
            />
            </div>
          </Link>
          <h5 style={{zIndex:"1000"}}>Friedrice</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/noodless">
          <div className='image-container'>
            <img
              src={noodless}
              alt="Noodles"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Noodles</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/parotta">
          <div className='image-container'>
            <img
              src={parotta}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Parotta</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/dosa">
          <div className='image-container'>
            <img
              src={dosa}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Dosa</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/shawarma">
          <div className='image-container'>
            <img
              src={shawarma}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Shawarma</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/pizza">
          <div className='image-container'>
            <img
              src={pizza}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Pizza</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/burger">
          <div className='image-container'>
            <img
              src={burger}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
           </div>
          </Link>
          <h5>Burger</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/rolls">
          <div className='image-container'>
            <img
              src={roll}
              alt="Roll"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Rolls</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/chicken">
          <div className='image-container'>
            <img
              src={chicken}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Chicken</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/cakes">
          <div className='image-container'>
            <img
              src={cake}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Cakes</h5>
        </div>

        <div className="col-6 col-md-3 col-lg-2 text-center">
          <Link to="/menu/falooda">
          <div className='image-container'>
            <img
              src={falooda}
              alt="Parotta"
              className="card-img-top rounded-circle img-fluid food-images"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "0 auto",
              }}
            />
            </div>
          </Link>
          <h5>Falooda</h5>
        </div>
        </div>
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
    
     
    {/*---------------------------------------------------------card page----------------------------------------------------*/}

<div className="container py-5">
      <h2 className="text-center mb-4">Our Delecious Food's for you</h2>
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
                <h6 className="card-text food-prices">
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
                  onClick={() => handleAddToCart(food)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

 {/* cart Page */}

 <div className="cart-container mt-5 mb-5" style={{ width: "40%", marginLeft: "30%" }}>
      {/* <h3 className="text-center">Cart</h3> */}
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div style={{ display: "flex" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top img-fluid food-image"
                  style={{ height: "100px", width: "100px", borderRadius: "20px" }}
                />
                <div style={{ marginLeft: "10px", marginTop: "20px" }}>
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.offerprice || item.price}</p>
                </div>
              </div>
              <div>
                <button className="btn btn-primary me-2" onClick={() => handleOrderNow(item)}>
                  Order now
                </button>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center"></p>
      )}
    </div>

     


   {/* goto menu button*/}
{/* <div className='text-center mb-5'>
  <a href='./Menu'> <button className='gotomenubutton'>Go to Menu</button> </a>
</div> */}


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
}

export default App;

