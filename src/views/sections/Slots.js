import React, { useState } from "react";
import Navbar from "components/Navbars/Navbar.js";
import Header from "components/Headers/Header.js";
import * as CONSTANT from '../../BaseURL';
import MyPagination from 'components/Pagination/MyPagination.js'
import $ from 'jquery';
import {
  Nav,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
// Custome Css
import "../sections/css/slot.css";
import "./css/loader.css";

function Slots() {

  // List Data
  const [gamelist, setGamelist] = React.useState("");
  const [gameLength, setGameLength] = useState();

  // Disable Loader
  const [loaderdisable, setLoaderDisable] = useState("loaderDisable");

  // filter Data
  const [filterList, setFilterList] = React.useState();

  // Pagination Data
  const [first_page, setfirst_page] = React.useState();
  const [last_page, setlast_page] = React.useState();
  const [current_page, setcurrent_page] = React.useState(1);
  const [total_rows, settotal_rows] = React.useState();
  const [itemPerPage, setItemPerPage] = React.useState(50);
  const [prevBtn, setPrevBtn] = React.useState("disabled");
  const [nextBtn, setNextBtn] = React.useState("");

  // Provider Filter
  const [sortBy, setsortBy] = useState(["popularity"]);
  const [provider, setprovider] = useState([]);
  const [game_type, setgame_type] = useState([]);
  const [currency, setcurrency] = useState([]);
  const [feature, setfeature] = useState([]);
  const [theme, settheme] = useState([]);
  const [volatility, setvolatility] = useState([]);

  // function for open filter list
  const OpenfilterList = () => {
    let list = document.getElementById("filter_section");
    if (list.classList.contains("open-list")) {
      list.classList.remove("open-list");
    } else {
      list.classList.add("open-list");
    }
  };
  const closeFilterList = () => {
    let list = document.getElementById("filter_section");
    list.classList.remove("open-list");
  };

  const getGameList = () => {
    fetch(`${CONSTANT.BaseUrl}category/SLOT?sortBy=${sortBy}&provider=${provider}&game_type=${game_type}&currency=${currency}&feature=${feature}&theme=${theme}&volatility=${volatility}&page=${current_page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setGamelist(json.game_list.items);
        setFilterList(json.filter_list);

        setLoaderDisable("loaderDisable")

        setGameLength(json.game_list.items.length)

        setfirst_page(json.game_list.pagination.first_page);
        setlast_page(json.game_list.pagination.last_page);
        setcurrent_page(json.game_list.pagination.current_page);
        settotal_rows(json.game_list.pagination.total_rows);
      })
      .catch((error) => {
        console.log(error)
      })
  };

  // Onload And also onchange
  React.useEffect(() => {
    getGameList();

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [sortBy, current_page, provider, game_type, currency, feature, theme, volatility]);


  // For Pagination & get data from child to parent
  function callBack(childData) { 
    disableBtnDate();

    setcurrent_page(childData);
    
    if(childData == first_page){
      setPrevBtn("disabled");
    }
    if (childData == last_page) {
      setNextBtn("disabled");
    }
  }
  function pageDecrease() {
    disableBtnDate();

    if (current_page > first_page) {
      setcurrent_page(current_page - 1);
    } 

    if (current_page-1 == first_page) {
      setPrevBtn("disabled")
    }

  }
  function pageIncrease() {
    disableBtnDate();

    if (current_page < last_page) {
      setcurrent_page(current_page + 1);
    }     

    if (current_page+1 == last_page) {
      setNextBtn("disabled");
    }    
  }
  function disableBtnDate(){
    setPrevBtn("");
    setNextBtn("");
  }
  
  // For Filter Data
  function sortByValue(index) {
    setcurrent_page(1);
    setLoaderDisable("")
    if (index == 1) {
      setsortBy("new");
    } else if (index == 2) {
      setsortBy("popularity");
    } else if (index == 3) {
      setsortBy("alphabetical");
    }
  }
  function slotFilter(value, key) {
    setcurrent_page(1);    
    if(key == 1){
      setprovider(value);
    }else if(key == 2){
      setgame_type(value);
    }else if(key == 3){
      setcurrency(value);
    }else if(key == 4){
      setfeature(value);
    }else if(key == 5){
      settheme(value);
    }else if(key == 6){
      setvolatility(value);
    }
  }  

  // For ShortBy Button
  $(document).ready(function () {
    $(".slot_tabs > .inner1 > button").click(function () {
      $(".slot_tabs > .inner1 > button").removeClass("active");
      $(this).addClass("active");
    });
  });

  return (
    <>
      <div className={"loading " + loaderdisable}>Loading&#8230;</div>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="main main_slot">
          <div className="container-fluid">
            <Row className="justify-content-center flex-wrap slot_tabs">
              <Col lg="2" className="inner"></Col>
              <Col lg="8" className="inner inner1">
                <Button className="recently" type="button" onClick={e => sortByValue(1)}>
                  <i className="fa fa-star mr-2"></i>Recently added
                </Button>
                <Button className="popular active" type="button" onClick={e => sortByValue(2)}>
                  <i className="fa fa-fire mr-2"></i>Most popular
                </Button>
                <Button className="played" type="button" onClick={e => sortByValue(3)}>
                  <i className="fa fa-thumbs-up mr-2"></i>most played
                </Button>
              </Col>
              <Col
                lg="2"
                className="justify-content-end inner position-relative"
              >
                <Button
                  className="filter mt-3"
                  type="button"
                  onClick={OpenfilterList}
                >
                  <i className="fa fa-filter mr-2"></i>Filter
                </Button>
                <div className="filter_section" id="filter_section">
                  <i
                    className="fa fa-times"
                    id="closeFilterList"
                    onClick={closeFilterList}
                  ></i>
                  <div style={{ width: '100%', height: '100vh', overflowY: 'scroll' }} className="filterInner">
                    <h6>Game Provider</h6>
                    {filterList?.provider.map((provider) => {
                      return (
                        <Button className="short provider" type="button" onClick={e => slotFilter(provider, 1)}>
                          {provider}
                        </Button>
                      );
                    })}

                    <h6>Game Type</h6>
                    <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                      {filterList?.game_type.map((game_type) => {
                        return (
                          <Button className="short game_type" type="button" onClick={e => slotFilter(game_type, 2)}>
                            {game_type}
                          </Button>
                        );
                      })}
                    </div>
                    <h6>Currency</h6>
                    {filterList?.currency.map((currency) => {
                      return (
                        <Button className="short currency" type="button" onClick={e => slotFilter(currency, 3)}>
                          {currency}
                        </Button>
                      );
                    })}

                    <h6>Game feature</h6>
                    {filterList?.feature.map((feature) => {
                      return (
                        <Button className="short feature" type="button" onClick={e => slotFilter(feature, 4)}>
                          {feature}
                        </Button>
                      );
                    })}

                    <h6>Game theme</h6>
                    {filterList?.theme.map((theme) => {
                      return (
                        <Button className="short theme" type="button" onClick={e => slotFilter(theme, 5)}>
                          {theme}
                        </Button>
                      );
                    })}

                    <h6>Game volatility</h6>
                    {filterList?.volatility.map((volatility) => {
                      return (
                        <Button className="short volatility" type="button" onClick={e => slotFilter(volatility, 6)}>
                          {volatility}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md="12" style={{ textAlign: "center", margin: "0.5rem 0px 0px", fontSize: "17px" }}>
                <h6 style={{ textTransform: "capitalize" }}>{gameLength} games</h6>
              </Col>
            </Row>

            <Row className="justify-content-start flex-wrap slot_gamelist">
              {gamelist != "" ?
                gamelist.map((item) => {
                  return (
                    <Col md="3" sm="6" xs="6" id="unic_card_hwe">
                      <Card className="slote_card">
                        <CardHeader>
                          <img
                            alt="Image Not Found"
                            src={item.game_img ? CONSTANT.ImageUrl + item.game_img : require("../../assets/img/No_Image_Available.jpg")}
                          />
                        </CardHeader>
                        <CardBody>
                          <CardTitle tag="h5">{item.game_name}</CardTitle>
                          <CardSubtitle className="mb-2" tag="p">
                            {item.provider_code}
                          </CardSubtitle>
                          <CardSubtitle className="mb-2" tag="p">
                            {item.game_type}
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
          </div>
        </div>
      </div>
      <div className={`pagination mt-2 ${gamelist == "" ? "slote_pagination" : ""}`}>
        <button onClick={pageDecrease} className={"PrevNextBtn " + prevBtn} id="PrevBtn" disabled={prevBtn ? true : false}>Prev</button>
          <MyPagination totalItem={total_rows} itemPerPage={itemPerPage} handleCallBack={callBack} current_page={current_page} />
        <button onClick={pageIncrease} className={"PrevNextBtn " + nextBtn} disabled={nextBtn ? true : false}>Next</button>
      </div>
    </>
  );
}

export default Slots;
