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
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

// Custome Style
import "./css/contentstyle.css";
import "./css/loader.css";

function CarouselSection() {

  // Popular Game List
  const [popularGame, setPopularGame] = useState([]);
  const [loaderdisable, setLoaderDisable] = useState();


  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}mycasino/POPULARITY`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        setPopularGame(json.items);
        setLoaderDisable("loaderDisable")
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  // New Game List
  const [newGame, setNewGame] = useState([]);
  useEffect(() => {
    fetch(`${CONSTANT.BaseUrl}mycasino/NEW`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        setNewGame(json.items);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  
  return (
    <>
      <div class={"loading " + loaderdisable}>Loading&#8230;</div>
      <Container className="container_fluid_hwe carousel_content carousel_content_lobby">
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
              slidesPerView={2}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{              
                767: {
                  width: 767,
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1200: {
                  width: 1200,
                  slidesPerView: 4,
                  spaceBetween: 30
                },
              }}
            >
              {popularGame.map((popular) => <SwiperSlide className="swiperslide_hwe">
                <Card className="slider_card">
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      src={popular.game_img ? CONSTANT.ImageUrl + popular.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                  </CardHeader>
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
               slidesPerView={2}
               spaceBetween={20}
               navigation={true}
               modules={[Navigation]}
               className="mySwiper"
               breakpoints={{              
                 767: {
                   width: 767,
                   slidesPerView: 2,
                   spaceBetween: 30
                 },
                 1200: {
                   width: 1200,
                   slidesPerView: 4,
                   spaceBetween: 30
                 },
               }}
            >

              {newGame.map((newly) => <SwiperSlide className="swiperslide_hwe">
                <Card className="slider_card">
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      className="slider_image"
                      src={newly.game_img ? CONSTANT.ImageUrl + newly.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                  </CardHeader>
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
