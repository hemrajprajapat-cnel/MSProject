import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import * as CONSTANT from '../../BaseURL';
import GameDetail from "components/Gamedetail/Gamedetails";
import $ from "jquery";
import { BsXCircleFill } from "react-icons/bs";
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
  const [shownIframeModel, setShownIframeModel] = useState(false);
  const [modelIframeURL, setModelIframeURL] = useState("");
  const [foundLoader, setFoundLoader] = React.useState(false);
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
  function OpenGameDetail(event, gameCode, key) {
    event.preventDefault();

    if (event.currentTarget.className === "slider_card card" && event.target.className !== "handleChildClickDemo") {
      //console.log('parent clicked');

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
    }
  };

  
  function handleChildClickDemo(event, gameCode, providerCode) { 
    
    setFoundLoader(true);
    console.log(gameCode);
    console.log(providerCode);
    fetch(`${CONSTANT.BaseUrl}get-demo-url?provider_code=${providerCode}&game_code=${gameCode}`, {
      method: 'GET',
      /*body: JSON.stringify({
        provider_code: providerCode,
        game_code: gameCode
      })
      */
    })
    .then((res) => res.json())
    .then((json) => {
      if(json.url !== ""){
        setTimeout(function(){
          setFoundLoader(false);
        }, 3000);
        setModelIframeURL(json.url);
        setShownIframeModel(!shownIframeModel);
      }
    })
    .catch((error) => {
      console.log(error)
    })
  };

  $('.demoModelCloseBT').click(function(){
    setModelIframeURL("");
    setShownIframeModel(!shownIframeModel);
  });
  return (
    <>
      <GameDetail gameCode={gamecode} data={datalist} />
      <Container className="container_fluid_hwe carousel_content carousel_content_lobby">
        {foundLoader ? <div class="loader"></div>: null}
        {shownIframeModel ? <VideoModal src={modelIframeURL}/> : null}
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
                <Card className="slider_card" onClick={(e) => OpenGameDetail(e, newly.game_code, "newly")}>
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      className="slider_image"
                      src={newly.game_img ? CONSTANT.ImageUrl + newly.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                    {newly.demo == 1 ? <button className="handleChildClickDemo" onClick={(e) => handleChildClickDemo(e, newly.game_code, newly.provider_code)}>Demo</button> : null}
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
                <Card className="slider_card" onClick={(e) => OpenGameDetail(e, popular.game_code, "popular")}>
                  <CardHeader>
                    <img
                      alt="Image Not Found"
                      src={popular.game_img ? CONSTANT.ImageUrl + popular.game_img : require("../../assets/img/No_Image_Available.jpg")}
                    />
                    {popular.demo == 1 ? <button className="handleChildClickDemo" onClick={(e) => handleChildClickDemo(e, popular.game_code, popular.provider_code)}>Demo</button> : null}
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

const VideoModal = (props) => {
  return <div className="demoBTIframeModel" style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"}}>
    <BsXCircleFill className="demoModelCloseBT" />
    <iframe
        title={props.src}
        allowFullScreen
        frameBorder="0"
        height="100%"
        src={props.src}
        width="100%"
        className="demoBTIframe"
    />
  </div>
}

export default Lobby;
