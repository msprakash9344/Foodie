import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

//footer images

import logo from "./images/logo-removebg-preview (1).png";
import appstore from "./images/appstore1.png";
import playstore from "./images/playstore1.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    switch (type) {
      case "name":
        setName(value);
        setIsValid((prev) => ({ ...prev, name: value.trim() !== "" }));
        break;
      case "email":
        setEmail(value);
        setIsValid((prev) => ({
          ...prev,
          email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value),
        }));
        break;
      case "password":
        setPassword(value);
        setIsValid((prev) => ({ ...prev, password: value.length >= 6 }));
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        setIsValid((prev) => ({ ...prev, confirmPassword: value === password }));
        break;
      default:
        break;
    }
  };


const handleSubmit = async (e) => {

  e.preventDefault();

  setError("");


  // Check all fields
  if (
    !isValid.name ||
    !isValid.email ||
    !isValid.password ||
    !isValid.confirmPassword
  ) {

    setError("Please fill in all fields correctly.");

    return;
  }


  // Check password confirmation
  if (password !== confirmPassword) {

    setError("Passwords do not match.");

    return;
  }


  try {
    const result = await axios.post(
      "http://localhost:3001/register",
      {
        name,
        email,
        password,
      }
    );


    // Registration successful
    if (result.data.status === "success") {

      alert("Registration successful!");

      // Go to login page
      navigate("/login");

    }

    // Email already registered
    else {

      setError(result.data.message);

    }

  }

  catch (err) {

    console.log(err);

    setError("Unable to connect to server.");

  }

};


  return (
    <div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
         <div className="mb-5 shadow p-5" style={{marginTop:"87px"}}>
          <h3 className="text-center" style={{ fontSize: "30px", fontFamily: "Gill Sans, sans-serif" }}>
            Create an Account
          </h3>
          <p className="text-center" style={{ fontSize: "20px", fontFamily: "Gill Sans, sans-serif" }}>
            After Create Account order food,eat and enjoy
          </p>

          <form id="signupForm" onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Name</label>
              <input
                type="text"
                className={`form-control ${isValid.name ? "is-valid" : "is-invalid"}`}
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => handleInputChange(e, "name")}
                required
                style={{
                  borderRadius: "20px",
                  border: "2px solid black",
                }}
              />
              <div className="invalid-feedback">Name is required.</div>
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input
                type="email"
                className={`form-control ${isValid.email ? "is-valid" : "is-invalid"}`}
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => handleInputChange(e, "email")}
                required
                style={{
                  borderRadius: "20px",
                  border: "2px solid black",
                }}
              />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold">Password</label>
              <input
                type="password"
                className={`form-control ${isValid.password ? "is-valid" : "is-invalid"}`}
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => handleInputChange(e, "password")}
                required
                minLength="6"
                style={{
                  borderRadius: "20px",
                  border: "2px solid black",
                }}
              />
              <div className="invalid-feedback">Password must be at least 6 characters long.</div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label htmlFor="confirm_password" className="form-label fw-bold">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${isValid.confirmPassword ? "is-valid" : "is-invalid"}`}
                id="confirm_password"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(e) => handleInputChange(e, "confirmPassword")}
                required
                style={{
                  borderRadius: "20px",
                  border: "2px solid black",
                }}
              />
              <div className="invalid-feedback">Passwords must match.</div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor:"orangered",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Sign Up
            </button>

            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {/* Links */}
            {/* <div className="mt-3 text-center ">
              <a href="/forgot-password" className="text-decoration-none">Forgot your password?</a>
            </div> */}
            <div className="mt-2 text-center">
              <p>
                Already have an account? <a href="/login" className="text-decoration-none">Login here</a>
              </p>
            </div>
          </form>
        </div>
        </div>

        {/* goto menu button*/}
<div className='text-center mb-5'>
  <a href='./Menu'> <button className='gotomenubutton'>Go to Menu</button> </a>
</div> 

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

export default SignUp;