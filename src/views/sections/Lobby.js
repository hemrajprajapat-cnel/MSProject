import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import * as CONSTANT from '../../BaseURL';

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

// Custome Style
import "./css/contentstyle.css";

function CarouselSection() {

  // Popular Game List
  const [popularGame, setPopularGame] = useState([]);
  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}mycasino/POPULARITY`,{
      method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
      setPopularGame(json.items);
    })
    .catch((error) => {
      console.log(error)
    })
  },[])


  // New Game List
  const [newGame, setNewGame] = useState([]);
  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}mycasino/NEW`,{
      method: 'GET',
    })
    .then((res) => res.json())
    .then((json) => {
      setNewGame(json.items);
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const SlideItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Container className="container_fluid_hwe carousel_content">
        <Row className="mb-3 inner">
          <Col xs="6">
            <h4 className="carousel_title">Newly Added</h4>
          </Col>
          <Col xs="6" className="text-right">
            <Button className="show_more" type="button">
              SHOW MORE
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="12">
            <Swiper
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                500: {
                  width: 500,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 4,
                },
              }}
            >             
             {popularGame.map((popular) => <SwiperSlide>
                <Card className="slider_card">                 
                  <img
                    alt="..."
                    className="Slider Image..."
                    src={require("../../assets/img/slider_img.png")}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {popular.game_name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2"
                      tag="p"
                    >
                      {popular.provider_code}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2"
                      tag="p"
                    >
                      {popular.game_type}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </SwiperSlide>
             )};                             
            </Swiper>
          </Col>
        </Row>
      </Container>

      <Container className="container_fluid_hwe carousel_content">
        <Row className="mb-3">
          <Col md="12">
            <hr className="horizontal_line" />
          </Col>
        </Row>
      </Container>

      <Container className="container_fluid_hwe carousel_content">
        <Row className="mb-3 inner">
          <Col xs="6">
            <h4 className="carousel_title">Most Popular</h4>
          </Col>
          <Col xs="6" className="text-right">
            <Button className="show_more" type="button">
              SHOW MORE
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="12">
            <Swiper
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                500: {
                  width: 500,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 4,
                },
              }}
            > 
             
             {newGame.map((newly) => <SwiperSlide>
                <Card className="slider_card">                 
                  <img
                    alt="..."
                    className="Slider Image..."
                    src={require("../../assets/img/slider_img.png")}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                    {newly.game_name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2"
                      tag="p"
                    >
                      {newly.provider_code}
                    </CardSubtitle>
                    <CardSubtitle
                      className="mb-2"
                      tag="p"
                    >
                      {newly.game_type}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </SwiperSlide>
             )};              
            </Swiper>
          </Col>
        </Row>
      </Container>      
    </>
  );
}

export default CarouselSection;
