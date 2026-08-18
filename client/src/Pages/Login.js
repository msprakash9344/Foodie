
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();


  // =========================
  // INPUT VALIDATION
  // =========================

  const handleInputChange = (e, type) => {

    const value = e.target.value;

    if (type === "email") {

      setEmail(value);

      setIsValid((prev) => ({
        ...prev,
        email:
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value),
      }));

    }

    else if (type === "password") {

      setPassword(value);

      setIsValid((prev) => ({
        ...prev,
        password: value.length >= 6,
      }));

    }
  };


  // =========================
  // LOGIN
  // =========================

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");


    // Check frontend validation
    if (!isValid.email || !isValid.password) {

      setError("Please enter a valid email and password.");

      return;
    }


    try {

      const result = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          password,
        }
      );


      // Login successful
      if (result.data.status === "success") {
        localStorage.setItem("token", result.data.token);
        alert(result.data.message);
        navigate("/home");

      }

      // Email doesn't exist OR password is wrong
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

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="shadow p-5">

            <h3 className="text-center">
              Login to Your Account
            </h3>

            <p className="text-center">
              Order food, eat, and enjoy!
            </p>


            <form onSubmit={handleSubmit} noValidate>


              {/* EMAIL */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Email
                </label>

                <input
                  type="email"
                  className={`form-control ${
                    isValid.email ? "is-valid" : "is-invalid"
                  }`}
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) =>
                    handleInputChange(e, "email")
                  }
                  required
                />

                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>

              </div>


              {/* PASSWORD */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Password
                </label>

                <input
                  type="password"
                  className={`form-control ${
                    isValid.password ? "is-valid" : "is-invalid"
                  }`}
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) =>
                    handleInputChange(e, "password")
                  }
                  required
                />

                <div className="invalid-feedback">
                  Password must be at least 6 characters.
                </div>

              </div>


              {/* SERVER ERROR */}

              {error && (

                <div className="alert alert-danger">

                  {error}

                </div>

              )}


              {/* LOGIN BUTTON */}

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "orangered",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Login
              </button>


              {/* SIGNUP LINK */}

              <div className="text-center mt-3">

                <p>

                  Don't have an account?{" "}

                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up here
                  </button>

                </p>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;

