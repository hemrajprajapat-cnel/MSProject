import React from "react";
import { FaSignInAlt, FaGooglePlay } from "react-icons/fa";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import "../css/provider.css";

const ProviderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

function Provider() {

  return (
    <>
      <div className="section provider_container">
        <Container>
          <Row>
            <Col md="12 text-center heading">
              <h4>Please select Providers you are intrested to work with.</h4>
              <p>We work with a group of renown providers to give your platform the best gaming experience.</p>
              <p>We would like to provide you with the accurate Api documentation by knowing your preferences.</p>
            </Col>
          </Row>
          <Row className="form_content mt-5">
            <Col md="12">
              <Card classname="provider_content_section pl-3 pr-3">
                <CardBody>
                  <Row>
                    {ProviderItems.map((number) =>
                      <Col md="1" xs="6" className="innerbox mt-2">
                        <FaGooglePlay/>
                        <p className="mb-0">Play</p>
                      </Col> 
                    )};                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12 mt-3 text-center">
              <Button type="submit" className="btn btn-md btn-primary provider_submit">Submit <FaSignInAlt /> </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Provider;
