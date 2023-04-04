import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import "../css/captcha.css";
import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
  const [isDisabled, setIsDisabled] = useState(true);

  function onChange(value) {
    if(value != ""){
      setIsDisabled(false);
    }
  }

  return (
    <>
      <div className="section captcha_container">
        <Container>
          <Row>
            <Card className="card-captcha" data-background-color="white">
              <CardBody>
                <div className="text-center">
                  <img
                    alt="..."
                    className="Logo_image"
                    src={require("../../../assets/img/brand_logo.png")}
                  />
                </div>
                <h4 className="text-center logo_text mt-1 mb-1">Metasoft</h4>
                <hr className="mb-2" />
                <h4 className="text-center welcome_text mt-1 mb-1">Welcome to Metasoft</h4>
                <p className="text-center">This site contains online casino games, Please confirm That you are of legal age before continuing</p>
                <Row>
                  <Col md="12">
                    <ReCAPTCHA                    
                      sitekey="6LfoOzolAAAAAI9TX2x2BtIaqu1k3eyivd1BvAhU"
                      onChange={onChange}
                      className={"verifyRecaptcha"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Link to="/MYCASINO">
                      <button type="button" className="btn btn-block active" disabled={isDisabled}>YES, I'm Over 18</button>
                    </Link>
                  </Col>
                  <Col md="6">
                    <Link to="/">
                      <button type="button" className="btn btn-block" disabled={isDisabled}>No, I want to leave</button>
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Captcha;
