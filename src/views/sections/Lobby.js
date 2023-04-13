import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import * as CONSTANT from '../../BaseURL';
import GameDetail from "components/Gamedetail/Gamedetails";
import $ from "jquery";
import "./css/lobby.css";
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

function Lobby() {
  // For Game Details Page
  const [gamecode, setGameCode] = useState('');
  const [datalist, setDataList] = useState('');

  // Popular Game List
  const [newGame, setNewGame] = useState([]);
  const [popularGame, setPopularGame] = useState([]);

  // Loader
  const [loaderdisable, setLoaderDisable] = useState();

  // New Game List
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

  // Popular Game List
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

  // OpenGameDetails
  function OpenGameDetail(gameCode, key) {
    var gamecode = gameCode;
    setGameCode(gamecode);

    if (key == "newly") {
      for (let i = 0; i < newGame.length; i++) {
        if (gamecode == newGame[i].game_code) {
          setDataList(newGame[i]);
        }
      };
    } else if (key == "popular") {
      for (let i = 0; i < popularGame.length; i++) {
        if (gamecode == popularGame[i].game_code) {
          setDataList(popularGame[i]);
        }
      };
    }

    let list = document.getElementById("game-detail");
    list.classList.remove("open-detail-list");
    $('.page-header').hide();
  };

  return (
    <>
      <GameDetail gameCode={gamecode} data={datalist} />
      <Container className="container_fluid_hwe carousel_content carousel_content_lobby">
        <Row className="mb-3 inner">
          <Col xs="6">
            <h4 className="carousel_title">Newly Added</h4>
          </Col>
          <Col xs="6" className="text-right">
            <Button
              className="show_more"
              type="button"
              tag={Link} to="/showmore/NEW"
            >
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
                  slidesPerView: 5,
                  spaceBetween: 30
                },
              }}
            >
              {newGame.map((newly) => <SwiperSlide className="swiperslide_hwe">
                <Card className="slider_card" onClick={(e) => OpenGameDetail(newly.game_code, "newly")}>
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      className="slider_image"
                      src={newly.game_img ? CONSTANT.ImageUrl + newly.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                    {newly.demo == 1 ? <button>Demo</button> : null}
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
            <Button
              className="show_more"
              type="button"
              tag={Link} to="/showmore/POPULARITY"
            >
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
                  slidesPerView: 5,
                  spaceBetween: 30
                },
              }}
            >
              {popularGame.map((popular) => <SwiperSlide className="swiperslide_hwe">
                <Card className="slider_card" onClick={(e) => OpenGameDetail(popular.game_code, "popular")}>
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      src={popular.game_img ? CONSTANT.ImageUrl + popular.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                    {popular.demo == 1 ? <button>Demo</button> : null}
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
    </>
  );
}

export default Lobby;
