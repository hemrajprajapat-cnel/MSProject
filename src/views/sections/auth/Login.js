import React from "react";
import { FaFacebookSquare, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../css/login.css";

function LoginPage() {
  return (
    <>
      <div class="container-fluid login_container">
        <div class="row">
          <div class="col-md-8 inner inner_first_child">
            <img
              alt="..."
              className="Landing_image"
              src={require("../../../assets/img/landing.png")}
            />
          </div>
          <div class="col-md-4 inner inner_last_child">
            <form>
              <div class="text-center">
                <img
                  alt="..."
                  className="Logo_image"
                  src={require("../../../assets/img/brand_logo.png")}
                />
              </div>
              <h4 class="text-center mt-2 mb-2">Metasoft</h4>
              <p class="text-center small mb-2">Hi, Welcome Back</p>
              <p class="text-center small">Login with Social Media</p>
              <div class="social_section mt-1 mb-1">
                <div class="social_btn"><button type="button" class="btn btn-primary btn-block"><FaFacebookSquare/></button></div>
                <div class="social_btn"><button type="button" class="btn btn-info btn-block"><FaTwitter/></button></div>
                <div class="social_btn"><button type="button" class="btn btn-danger btn-block"><FaGoogle/></button></div>
              </div>

              <div class="hr_section mt-1 mb-1">
                <hr /> or <hr />
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" required="required" />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password" required="required" />
                </div>
              </div>
              <div class="form-group">
               <Link to="/picinformation"><button type="button" class="btn btn-primary btn-block login">LOGIN</button></Link>
              </div>
              <Link to="/forgotpassword">Forgot Password?</Link>
              <p class="text-center small mt-3 dont_have_account">Don't have an account? <Link to="/register">Sign Up Now</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
