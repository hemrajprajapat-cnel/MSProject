import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import MyPagination from 'components/MyPagination.js'
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
import './css/providerlist.css';


function EvolutionList() {

  // Get Provider Code
  const pathname = window.location.pathname.split("/");
  const provider_code = pathname[pathname.length - 1];
  const [providercode, setProviderCode] = useState(provider_code);

  // List Data
  const [evolutionlist, setEvolutionList] = useState([]);

  // Pagination Data
  const [first_page, setfirst_page] = React.useState();
  const [last_page, setlast_page] = React.useState();
  const [current_page, setcurrent_page] = React.useState(1);
  const [total_rows, settotal_rows] = React.useState();
  const [itemPerPage, setItemPerPage] = React.useState(25);

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

        setfirst_page(json.pagination.first_page);
        setlast_page(json.pagination.last_page);
        setcurrent_page(json.pagination.current_page);
        settotal_rows(json.pagination.total_rows);
      })
      .catch((error) => {
        console.log(error)
      })
  };


  // Get data from child to parent
  function callBack(childData) {
    setcurrent_page(childData);
  }

  // For Pagination
  function pageDecrease() {
    if (current_page > first_page) {
      setcurrent_page(current_page - 1);
    } 
  }
  function pageIncrease() {
    if (current_page < last_page) {
      setcurrent_page(current_page + 1);
    }
  }

  return (
    <>
      <div class={"loading " + loaderdisable}>Loading&#8230;</div>
      <Container id="Evolution_games" className="container_fluid_hwe">
        <Nav>
          <Link to="/MYCASINO">
            <InputGroupText className="angleleft">
              <FaAngleLeft />
            </InputGroupText>
          </Link>
        </Nav>
        <Nav className="evolution_heading">
          <h5>Games by Evolution</h5>
        </Nav>
        <Row className="justify-content-start flex-wrap">
          {evolutionlist != "" ?
            evolutionlist.map((items) => {
              return (
                <Col md="3" xs="6" id="evolution_card_hwe">
                  <Card className="evolution_card">
                    <CardHeader>
                      <img
                        alt="Image Not Found"
                        src={items.game_img ? CONSTANT.ImageUrl + items.game_img : require("../../assets/img/No_Image_Available.jpg")}
                      />
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
      <div className={`pagination mb-2 ${evolutionlist == "" ? "provider_list_pagination" : ""}`} >
        <button onClick={pageDecrease} className={"PrevNextBtn"}>Prev</button>
          <MyPagination totalItem={total_rows} itemPerPage={itemPerPage} handleCallBack={callBack} current_page={current_page} />
        <button onClick={pageIncrease} className={"PrevNextBtn"}>Next</button>
      </div>
    </>
  );
}

export default EvolutionList;
