/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import { BsXCircleFill, BsPlusCircle } from "react-icons/bs";
import "./css/showmoregames.css";
import {
  Nav,
  Container,
  InputGroupText,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

function ShowMore() {
  const pathname = window.location.pathname.split("/");
  const value = pathname[pathname.length - 1];

  const [Showmore, setShowMore] = useState([]);
  const [category, setCategory] = useState(value);
  
  // New Game List
  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}mycasino/${category}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        setShowMore(json.items);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Container id="Show_more" className="container_fluid_hwe">

        <Nav>
          <Link to="/MYCASINO">
            <InputGroupText className="angleleft">
              <FaAngleLeft />
            </InputGroupText>
          </Link>
        </Nav>
        <h1 className="topgame">Top Games</h1>

        <Row className="justify-content-start flex-wrap">
          {Showmore.map((show) =>
            <Col md="3" xs="6" id="showmore_card_hwe">
              <Card className="showmore_card">
                <CardHeader>
                  <img
                    alt="Image Not Found"
                    src={show.game_img ? CONSTANT.ImageUrl + show.game_img : require("../../assets/img/No_Image_Available.jpg")}
                  />
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5"> {show.game_name}</CardTitle>
                  <CardSubtitle className="mb-2" tag="p">
                    {show.provider_code}
                  </CardSubtitle>
                  <CardSubtitle className="mb-2" tag="p">
                    {show.game_type}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          )};
        </Row>
       
        <Nav>
          <Link to="/MYCASINO">
            <BsXCircleFill className="removepopup" />
          </Link>
        </Nav>
      </Container>
    </>
  );
}

export default ShowMore;
