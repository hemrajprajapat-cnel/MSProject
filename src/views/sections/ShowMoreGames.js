/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import { BsXCircleFill } from "react-icons/bs";
import $ from "jquery";
import GameDetail from "components/Gamedetail/Gamedetails";
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
  // For Game Details Page
  const [gamecode, setGameCode] = useState('');
  const [datalist, setDataList] = useState('');

  const pathname = window.location.pathname.split("/");
  const value = pathname[pathname.length - 1];

  const [category, setCategory] = useState(value);
  const [Showmore, setShowMore] = useState([]);
  const [shownIframeModel, setShownIframeModel] = useState(false);
  const [modelIframeURL, setModelIframeURL] = useState("");
  const [foundLoader, setFoundLoader] = React.useState(false);

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


  // OpenGameDetails
  function OpenGameDetail(event, gameCode) {
    event.preventDefault();
    
    if (event.currentTarget.className === "showmore_card card" && event.target.className !== "handleChildClickDemo") {
     
      var gamecode = gameCode;
      setGameCode(gamecode);

      for (let i = 0; i < Showmore.length; i++) {
        if (gamecode == Showmore[i].game_code) {
          setDataList(Showmore[i]);
        }
      };

      let list = document.getElementById("game-detail");
      list.classList.remove("open-detail-list");
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
      <Container id="Show_more" className="container_fluid_hwe">
        {foundLoader ? <div class="loader"></div>: null}
        {shownIframeModel ? <VideoModal src={modelIframeURL}/> : null}
        <Nav>
          <Link to="/MYCASINO">
            <InputGroupText className="angleleft">
              <FaAngleLeft />
            </InputGroupText>
          </Link>
        </Nav>
        <h1 className="topgame">{category == "NEW" ? "Newly Added" : "Most Popular"}</h1>
        <Row className="justify-content-start flex-wrap">
          {Showmore.map((show) =>
            <Col id="showmore_card_hwe" className="hwe_each_card_adjust">
              <Card className="showmore_card" onClick={(e) => OpenGameDetail(e, show.game_code)}>
                <CardHeader>
                  <img
                    alt="Image Not Found"
                    src={show.game_img ? CONSTANT.ImageUrl + show.game_img : require("../../assets/img/No_Image_Available.jpg")}
                  />
                  {show.demo == 1 ? <button className="handleChildClickDemo" onClick={(e) => handleChildClickDemo(e, show.game_code, show.provider_code)}>Demo</button> : null}
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
          )}
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

const VideoModal = (props) => {
  return <div className="demoBTIframeModel" style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"}}>
    {/*<span class="demoModelCloseBT">X</span>*/}
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

export default ShowMore;
