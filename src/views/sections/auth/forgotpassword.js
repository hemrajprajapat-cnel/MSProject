import React from "react";
import { Link } from "react-router-dom";
import "../css/forgot_password.css";

function ForgotPassword() {
  return (
    <>
      <div class="container-fluid forgot_container">
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
              <h4 class="text-center mt-5 mb-2">Reset Password</h4>              
              <p class="text-center small mb-4">Enter your account details to reset password </p>

              <div class="form-group">                
                <input type="text" class="form-control" placeholder="Enter e-mail" required="required" />               
              </div>
              
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block reset">Reset Password</button>
              </div>
              <p className="text-center back_to_login"><Link to="/Login">Back to Login</Link></p> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
