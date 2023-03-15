import React from "react";
import { Link } from "react-router-dom";
import { FaSkype, FaTelegramPlane } from "react-icons/fa";
import $ from 'jquery'; 
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
  Row,
  Col
} from "reactstrap";
import "../css/transactionmethod.css";

function Transactionmethod() {

  $(document).ready(function(){
    $(".card").click(function(){
      $(this).addClass("active");      
    });
    $(".card").dblclick(function(){
      $(this).removeClass("active");      
    });
  });

  return (
    <>
      <div className="section transectionmethod_container">
        <Container>
          <Row>
            <Col md="12 text-center heading">
              <h4>Let us know which method of transaction is preferred</h4>
              <p>You may select both transfer and seamless wallet if preferred</p>
            </Col>
          </Row>
          <Row className="form_content mt-5">
            <Col md="6" className="inner">
              <Card className="text-center transfer_wallet active">
                <CardBody>
                  <div class="">
                    <img
                      alt="..."
                      className="brand_img"
                      src={require("../../../assets/img/transfer1.png")}
                    />
                  </div>
                  <h4>Transfer Wallet</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="inner">
              <Card className="text-center seamless_wallet" data-background-color="white">
                <CardBody>
                  <div class="">
                    <img
                      alt="..."
                      className="brand_img"
                      src={require("../../../assets/img/transfer2.png")}
                    />
                  </div>
                  <h4>Seamless Wallet</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12 mt-3 text-center">
              <Link to="/provider"><Button type="submit" className="btn btn-md btn-primary transectionmethod_submit">Submit</Button></Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Transactionmethod;
