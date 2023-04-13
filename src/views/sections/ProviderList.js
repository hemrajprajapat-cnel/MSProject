import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import MyPagination from 'components/Pagination/MyPagination.js'
import GameDetail from "components/Gamedetail/Gamedetails";
import './css/providerlist.css';
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

function EvolutionList() {
  // For Game Details Page
  const [gamecode, setGameCode] = useState('');
  const [datalist, setDataList] = useState('');

  // Get Provider Code
  const pathname = window.location.pathname.split("/");
  const provider_code = pathname[pathname.length - 1];
  const provider_name = pathname[pathname.length - 2];
  const [providercode, setProviderCode] = useState(provider_code);
  const [providername, setProviderName] = useState(provider_name);

  // List Data
  const [evolutionlist, setEvolutionList] = useState([]);

  // Pagination Data
  const [last_page, setlast_page] = React.useState();
  const [current_page, setcurrent_page] = React.useState(1);

  // Disable Loader
  const [loaderdisable, setLoaderDisable] = useState();

  // Call API Function
  React.useEffect(() => {
    getEvolutionList();
  }, [current_page]);

  const getEvolutionList = () => {
    fetch(`${CONSTANT.BaseUrl}provider-game-list?provider=${providercode}&page=${current_page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setEvolutionList(json.items);

        setLoaderDisable("loaderDisable")

        setlast_page(json.pagination.last_page);
      })
      .catch((error) => {
        console.log(error)
      })
  };


  // Pagination Handle Change
  function handlePageClick({ selected }) {
    setcurrent_page(selected + 1);
  };

  // Open Game Details
  function OpenGameDetail(gameCode) {
    var gamecode = gameCode;
    setGameCode(gamecode);

    for (let i = 0; i < evolutionlist.length; i++) {
      if (gamecode == evolutionlist[i].game_code) {
        setDataList(evolutionlist[i]);
      }
    };

    let list = document.getElementById("game-detail");
    list.classList.remove("open-detail-list");
  };

  return (
    <>
      <div className={"loading " + loaderdisable}>Loading&#8230;</div>
      <GameDetail gameCode={gamecode} data={datalist} />
      <Container id="Evolution_games" className="container_fluid_hwe">
        <Nav>
          <Link to="/gameprovider">
            <InputGroupText className="angleleft">
              <FaAngleLeft />
            </InputGroupText>
          </Link>
        </Nav>
        <Nav className="evolution_heading">
          <h5>Games by {providername}</h5>
        </Nav>
        <Row className="justify-content-start flex-wrap">
          {evolutionlist != "" ?
            evolutionlist.map((items) => {
              return (
                <Col id="evolution_card_hwe" className="hwe_each_card_adjust">
                  <Card className="evolution_card" onClick={(e) => OpenGameDetail(items.game_code)}>
                    <CardHeader>
                      <img
                        alt="Image Not Found"
                        src={items.game_img ? CONSTANT.ImageUrl + items.game_img : require("../../assets/img/No_Image_Available.jpg")}
                      />
                      {items.demo == 1 ? <button>Demo</button> : null}
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h5">{items.game_name}</CardTitle>
                      <CardSubtitle className="mb-2" tag="p">
                        {items.provider_code}
                      </CardSubtitle>
                      <CardSubtitle className="mb-2" tag="p">
                        {items.game_type}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
            : <Nav className="Not_found mt-4 mb-4">
              <img
                alt="Image Not Found"
                src={require("../../assets/img/data_not_found.png")}
              />
            </Nav>
          }
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md="12">
            <MyPagination pageCount={last_page} handlePageClick={handlePageClick} />
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default EvolutionList;
