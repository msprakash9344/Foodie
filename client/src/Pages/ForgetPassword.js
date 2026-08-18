import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      setMessage("Password reset link has been sent to your email.");
      setError("");
      setEmail("");
      setTimeout(() => navigate("/login"), 3000);
    } else {
      setError("Please enter a valid email.");
      setMessage("");
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <div className="mb-5 shadow p-5">
              <h3 className="text-center" style={{ fontSize: "30px", fontFamily: "Gill Sans, sans-serif" }}>
                Forgot Password?
              </h3>
              <p className="text-center" style={{ fontSize: "20px", fontFamily: "Gill Sans, sans-serif" }}>
                Enter your email to reset your password.
              </p>

              <form id="forgotPasswordForm" onSubmit={handleSubmit} noValidate>
                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className={`form-control ${isValid ? "is-valid" : "is-invalid"}`}
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    required
                    style={{
                      borderRadius: "20px",
                      border: "2px solid black",
                    }}
                  />
                  <div className="invalid-feedback">Please provide a valid email.</div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    backgroundColor: "orangered",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  Reset Password
                </button>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {message && <div className="alert alert-success mt-3">{message}</div>}

                {/* Links */}
                <div className="mt-3 text-center">
                  <a href="/login" className="text-decoration-none">Back to Login</a>
                </div>
              </form>
            </div>
          </div>

          {/* Go to Menu Button */}
          <div className="text-center mb-5">
            <a href="./Menu">
              <button className="gotomenubutton">Go to Menu</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
