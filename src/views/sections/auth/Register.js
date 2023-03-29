import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaGoogle, FaTelegramPlane } from 'react-icons/fa';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

import "../css/register.css";

// core components

function SignUp() {
  return (
    <>
      <div className="section section-signup register_container">
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="white">
              <Form action="" className="form" method="">                
                <CardBody>
                  <div class="text-center">
                    <img
                      alt="..."
                      className="brand_img"
                      src={require("../../../assets/img/brand_logo.png")}
                    />
                  </div>
                  <h4 class="text-center logo_title mt-1 mb-1">Metasoft</h4>
                  <h4 className="text-center title_register mt-1 mb-1">REGISTRATION</h4>
                  <p className="text-center small social_media_account mt-3 mb-2">Create And Account With Following Social Media Account :</p>                          
                  <div className="social_section mt-1 mb-1">
                    <div className="social_btn"><button type="button" className="btn btn-primary btn-block"><FaFacebookSquare/></button></div>
                    <div className="social_btn"><button type="button" className="btn btn-block" style={{ background: "#76c8ff" }}><FaTwitter/></button></div>
                    <div className="social_btn"><button type="button" className="btn btn-danger btn-block"><FaGoogle/></button></div>
                    <div className="social_btn"><button type="button" className="btn btn-info btn-block"><FaTelegramPlane/></button></div>
                  </div>
                  <div className="hr_section mt-1 mb-2">
                    <hr /> or <hr />
                  </div>
                  <p class="small fill_info_section">Please Fill Out The Form Below &nbsp; <p class="small">(Red Highlighted - Compulsory)</p></p>
                  <div className="form-group">
                    <input type="email" className="form-control" id="Email" placeholder="Email" />                    
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="Password" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="confirmpassword" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                  </div>
                  <div className="select_group">
                    <div className="form-group select_country">
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>India</option>                     
                      </select>
                    </div>                 
                    <div className="form-group number">
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" class="btn btn-primary btn-block register">REGISTER</button>
                  </div>
                  <p className="text-center small mt-3 already_have_account">Already have an account? <Link to="/login">Login</Link></p>                          
                </CardBody>                                 
              </Form>
            </Card>
          </Row>       
        </Container>
      </div>
    </>
  );
}

export default SignUp;
