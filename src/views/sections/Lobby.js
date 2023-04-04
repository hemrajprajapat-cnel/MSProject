import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import * as CONSTANT from '../../BaseURL';
import $ from "jquery";
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
import "./css/lobby.css";
import "./css/loader.css";
// import GameDetail from "components/Gamedetail/Gamedetails";

import { BsXCircleFill, BsPlusCircle } from "react-icons/bs";

function Lobby() {
  const [datalist, setDataList] = useState('');

  // Hide Show Popup And Game Detail List State
  const [detail_list, setDetailList] = useState("detail_list");

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

  // Open Provider List
  const OpenProviderList = () => {
    let list = document.getElementById("search_provider_games");
    list.classList.remove("providerList");
  };

  // Hide Show Popup And detail List Function
  const detailList = (value) => {
    if (value == "add") {
      setDetailList("");
    } else if (value == "remove") {
      setDetailList("open-detail-list");
    } else if (value == "removelist") {
      let list = document.getElementById("game-detail");
      list.classList.add("open-detail-list");
      $('.page-header').show();
    }
  }

  // OpenGameDetails
  function OpenGameDetail(e) {
    var gamecode = e;

    for (let i = 0; i < newGame.length; i++) {
      if (gamecode == newGame[i].game_code) {
        setDataList(newGame[i]);
      }
    };

    let list = document.getElementById("game-detail");
    list.classList.remove("open-detail-list");
    $('.page-header').hide();
  };

  return (
    <>
      <div className={"loading " + loaderdisable}>Loading&#8230;</div>
      <div id="game-detail" className="container-fluid open-detail-list">
        <BsXCircleFill className="removepopup" onClick={(e) => detailList("removelist")} />
        <BsPlusCircle className="adddetail" onClick={(e) => detailList("add")} />
        <img alt="Image Not Found" src={require("../../assets/img/game_detail_back_img.png")} />
        <div className={`inner-data ${detail_list}`}>
          <div className="inner-text">
            <BsXCircleFill className="removedetail" onClick={(e) => detailList("remove")} />
            <div className="inner-title">{datalist.game_name}</div>
            <label>{datalist.game_code}</label>
            <p className="inner-description">
            </p>
            <div className="inner-game-feature">
              <div className="row">
                <label class="col-6">Game Type:</label>
                <div className="col-6 list-game-feature">{datalist.game_type}</div>
              </div>
              <div className="row">
                <label class="col-6 label-title">Themes:</label>
                <div className="col-6 label-content">
                {datalist.theme}
                </div>
              </div>
              <div className="row">
                <label class="col-6 label-title">Features:</label>
                <div className="col-6 label-content">
                {datalist.feature}
                </div>
              </div>
              <div className="row">
                <label class="col-6 label-title">Voladity:</label>
                <div className="col-6 label-content ">
                {datalist.volatility}
                </div>
              </div>              
              <div className="row">
                <label class="col-6 label-title">Provider Code:</label>
                <div className="col-6 label-content">
                {datalist.provider_code}
                </div>
              </div>
              <hr />
              {/* <div className="ongoing">
              <div className="row">
                <label class="col-6 label-title">Football Fever</label>
                <div className="col-6">
                  Ongoing
                </div>
              </div>
              <div className="row">
                <label class="col-6 label-title">Prize Pool:</label>
                <div className="col-6">
                  $200.00
                </div>
              </div>
              <div className="row">
                <label class="col-4 label-title">Ends in id:</label>
                <div className="col-5">
                  20h:02m
                </div>
              </div>
            </div> */}
              {/* <div className="row game-profile">
              <label class="col-4 label-title">
                <img src={require('../../assets/img/slider_img.png')} className="ima-fluid" alt="image not found" />
              </label>
              <div className="col-8">
                <li className="profile-title">john hunter And..</li>
                <li>prgnatic Play</li>
                <li>Slot</li>
              </div>
            </div>
            <div className="row game-profile">
              <label class="col-4 label-title">
                <img src={require('../../assets/img/slider_img.png')} className="ima-fluid" alt="image not found" />
              </label>
              <div className="col-8">
                <li className="profile-title">john hunter And..</li>
                <li>prgnatic Play</li>
                <li>Slot</li>
              </div>
            </div>
            <div className="row game-profile">
              <label class="col-4 label-title">
                <img src={require('../../assets/img/slider_img.png')} className="ima-fluid" alt="image not found" />
              </label>
              <div className="col-8">
                <li className="profile-title">john hunter And..</li>
                <li>prgnatic Play</li>
                <li>Slot</li>
              </div>
            </div>
            <div className="row game-profile">
              <label class="col-4 label-title">
                <img src={require('../../assets/img/slider_img.png')} className="ima-fluid" alt="image not found" />
              </label>
              <div className="col-8">
                <li className="profile-title">john hunter And..</li>
                <li>prgnatic Play</li>
                <li>Slot</li>
              </div>
            </div> */}
            </div>
          </div>
         
        </div>
        <button className="btn demo" onClick={(e) => detailList("remove")}>Demo</button>
      </div>
      <Container className="container_fluid_hwe carousel_content carousel_content_lobby">
        <Row className="mb-3 inner">
          <Col xs="6">
            <h4 className="carousel_title">Newly Added</h4>
          </Col>
          <Col xs="6" className="text-right">
            <Button
              className="show_more"
              type="button"
              onClick={OpenProviderList}
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
                  slidesPerView: 4,
                  spaceBetween: 30
                },
              }}
            >
              {newGame.map((newly) => <SwiperSlide className="swiperslide_hwe">
                <Card className="slider_card" onClick={(e) => OpenGameDetail(newly.game_code)}>
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
              onClick={OpenProviderList}
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
    </>
  );
}

export default Lobby;
