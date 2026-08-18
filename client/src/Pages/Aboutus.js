import React from 'react';
import "./About.css";


//images

import briyani from './images/biriyani2.jpg';
import fridrice from "./images/chicken friedrice.jpg";
import noodless from "./images/chicken fried noodles.jpg";
import parotta from "./images/parotta.jpg";
import dosa from "./images/dosa1.jpg";
import shawarma from "./images/shawarma.jpeg";
import pizza from "./images/pizza about.jpg";
import burger from "./images/burger about.jpg";
import roll from "./images/roll.jpg";
import chicken from "./images/about chicken.jpg";
import cake from "./images/cake about.jpg";
import falooda from "./images/falooda about.jpg";


//logo 
//import logo from "./images/logo-removebg-preview (1).png"


//team member
import team1 from "./images/team1.jfif";
import team2 from "./images/team2.jfif";
import team3 from "./images/team3.jfif";

//footer images

import logo from "./images/logo-removebg-preview (1).png";
import appstore from "./images/appstore1.png";
import playstore from "./images/playstore1.png";

function About() {
  return (
    <div>

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className='text-center mb-5 mt-3'>
            <h1 style={{marginTop:"87px"}}>About Our Delicious Foods</h1>
        </div>
        <div className="col-md-10">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={briyani} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Briyani</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Fried Rice</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

               {/* Image Side */}
              <div className="col-md-6">
                <img src={fridrice} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={noodless} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Fried Noodles</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
             
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Parotta</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

               {/* Image Side */}
              <div className="col-md-6">
                <img src={parotta} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={dosa} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Dosa</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
             
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Shawarma</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

               {/* Image Side */}
              <div className="col-md-6">
                <img src={shawarma} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={pizza} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Pizza</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
            
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Burger</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

                {/* Image Side */}
              <div className="col-md-6">
                <img src={burger} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={roll} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Roll</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
             
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Cakes</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

               {/* Image Side */}
              <div className="col-md-6">
                <img src={cake} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
              {/* Image Side */}
              <div className="col-md-6">
                <img src={chicken} alt="Briyani" className="card-img" />
              </div>
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Chicken</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-10 mt-5">
          <div className="card shadow">
            <div className="row no-gutters">
             
              {/* Text Content Side */}
              <div className="col-md-6">
                <div className="card-body">
                  <h1 className="card-title">Falooda</h1>
                  <p className="card-text">
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    Biryani is a flavorful dish made with basmati rice, spices, and meat (often chicken, mutton, or beef). It's known for its rich aroma and spicy flavor.
                    </p>
                </div>
              </div>

               {/* Image Side */}
              <div className="col-md-6">
                <img src={falooda} alt="Briyani" className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="container my-5">
      <div className="row text-center mb-4">
        <div className="col-12 ">
          <h1>Learn more about our company and mission</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 sadow">
          <img
            src={logo}
            alt="About Us"
            className="img-fluid rounded"
            style={{height:"480px" , width:"auto" ,marginTop:"-110px"}}
          />
        </div>
        <div className="col-md-6">
          <h3 style={{color:"orangered" , marginTop:"20px"}}>Who We Are</h3>
          <p>
            We are a team of passionate individuals committed to delivering the best
            solutions to our clients. Our company has been at the forefront of innovation,
            providing exceptional services in the industry for over a decade.
          </p>
          <h3 style={{color:"orangered" , marginTop:"40px"}}>Our Mission</h3>
          <p>
            Our mission is to empower businesses to achieve their goals through innovative
            technologies and exceptional customer service. We strive to create a positive
            impact by providing high-quality products and services.
          </p>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12">
          <h2 className='mb-5'>Meet Our Team</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src={team1}
              className="card-img-top"
              alt="Team Member 1"
              style={{height:"230px" , width:"100%"}}
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src={team2}
              className="card-img-top"
              alt="Team Member 2"
              style={{height:"230px" , width:"100%"}}
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smithy</h5>
              <p className="card-text">CTO</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src={team3}
              className="card-img-top"
              alt="Team Member 3"
              style={{height:"230px" , width:"100%"}}
            />
            <div className="card-body">
              <h5 className="card-title">Sam Johnson</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>



      {/* goto menu button*/}
<div className='text-center mb-5 mt-4'>
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
}

export default About;
