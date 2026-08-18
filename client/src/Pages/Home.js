import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./Home.css";
import React , {useState} from 'react';
//import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";

//carousel images
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";


//food images
import briyani from "./images/biriyani2.jpg";
import friedrice from "./images/chicken friedrice.jpg";
import noodles from "./images/chicken fried noodles.jpg";
//import banner from "./images/banner1.jpg";


//review images

import person1 from "./images/review1.jfif";
import person2 from "./images/review2.jfif";
import person3 from "./images/review3.jfif";

//footer images

import logo from "./images/logo-removebg-preview (1).png";
import appstore from "./images/appstore1.png";
import playstore from "./images/playstore1.png";

const HomePage = () => {

  const foodData = [
    { id: 1, name: "Chicken Briyani", image: briyani, price: "200" ,offerprice:"150",offer:"off 25%",rating:"4.5"},
    { id: 2, name: "Chicken Fried Rice", image: friedrice, price: "300" ,offerprice:"250",offer:"off 16%",rating:"4.5"},
    { id: 3, name: "Chicken Noodles", image: noodles, price: "250" ,offerprice:"180",offer:"off 28%",rating:"4.5" },
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
        alert("This product is already added to the cart!");
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

       {/*carousal*/}
    <Carousel className='mb-5' style={{marginTop:"87px"}}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={banner3}
          alt="First slide"
          style={{height:"570px"}}
        />
        <Carousel.Caption>
          <div className='carousal'>
          <h3>Delicious Food</h3>
          <p>Enjoy the best taste in town with our exclusive dishes.</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          style={{height:"570px"}}
        />
        <Carousel.Caption>
          <h3>Fresh Ingredients</h3>
          <p>We use only the freshest ingredients for every meal.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
          style={{height:"570px"}}
        />
        <Carousel.Caption>
          <h3>Unforgettable Experience</h3>
          <p>Join us for an unforgettable dining experience.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      {/* Banner Section */}
      <div className="homebanner text-white text-center py-5">
        <h1>Welcome to Our Foodie Paradise</h1>
        <p className='text-dark'>Exclusive dishes and special offers just for you!</p>
      </div>

    
      {/* recommended food item*/}

      <div className="container py-5">
      <h2 className="text-center mb-4">Recommended Food's for You</h2>
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

      

      {/* cart Page */}
      <div className="container mt-5 mb-5">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12">
      <div className="cart-container">
        {/* <h2 className="text-center">Cart</h2> */}
        {cart.length > 0 ? (
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex flex-wrap align-items-center">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid food-image"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                  
                  {/* Product Info */}
                  <div className="ms-3 mt-2">
                    <h5>{item.name}</h5>
                    <p className="mb-1">Price: ₹{item.offerprice || item.price}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleOrderNow(item)}
                    style={{width:"110px"}}

                  >
                    Order now
                  </button>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                    style={{width:"110px"}}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-3"></p>
        )}
      </div>
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
 
    </div>



      <h1 className='text-center mb-3'>Today <span style={{color:"orangered"}}>offers</span> for you</h1>


      {/* Special Offers Section */}
      <div className="special-offers bg-light py-4 shadow">
        <Container >
          <Row>
            <Col md={6} className='align-content-center'>
              <h2>Special Offers Just For You!</h2>
              <p>Get up to 30% off on all your favorite dishes.</p>
              <Button className='sploffbtn'>Grab the Offer</Button>
            </Col>
            <Col md={6}>
              <img src={friedrice} style={{height:"200px" , width:"100%" , borderTopLeftRadius:"20px" , borderBottomRightRadius:"20px"}} alt="Special Offers" />
            </Col>
          </Row>
        </Container>
      </div>




      {/* Testimonials Section */}
      <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
  <Row>
    <Col md={4} lg={4}>
      <div className="testimonial card h-100 w-100 border-0 shadow  mb-4">
        <img src={person1} style={{ height: "200px", width: "100%" }} alt="Special Offers" />
        <p>"The food was absolutely amazing, and the service was top-notch!"</p>
        <h5>- Ishan</h5>
      </div>
    </Col>

    <Col md={4} lg={4}>
      <div className="testimonial card h-100 w-100 border-0 shadow  mb-4">
        <img src={person2} style={{ height: "200px", width: "100%" }} alt="Special Offers" />
        <p>"An unforgettable dining experience. Highly recommend their exclusive dishes!"</p>
        <h5>- Mary Laila</h5>
      </div>
    </Col>

    <Col md={4} lg={4}>
      <div className="testimonial card h-100 w-100 border-0 shadow  mb-4">
        <img src={person3} style={{ height: "200px", width: "100%" }} alt="Special Offers" />
        <p>"Every bite was perfection. This is my new favorite food spot!"</p>
        <h5>- Rohan</h5>
      </div>
    </Col>
  </Row>
</Container>
 

 {/* goto menu button*/}
<div className='text-center mb-5'>
  <a href='./Menu'> <button className='gotomenubutton'>Go to Menu</button> </a>
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

export default HomePage;
