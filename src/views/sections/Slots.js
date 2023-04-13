import React, { useState } from "react";
import Navbar from "components/Navbars/Navbar.js";
import Header from "components/Headers/Header.js";
import * as CONSTANT from '../../BaseURL';
import MyPagination from 'components/Pagination/MyPagination.js'
import GameDetail from "components/Gamedetail/Gamedetails";
import "../../components/Loader/loader.css";
import $ from 'jquery';
import "./css/slot.css";
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
  Container,
} from "reactstrap";
import zIndex from "@mui/material/styles/zIndex";

function Slots() {
  // For Game Details Page
  const [gamecode, setGameCode] = useState('');
  const [datalist, setDataList] = useState('');

  // List Data
  const [slotGamelist, setSlotGamelist] = React.useState("");
  const [gameLength, setGameLength] = useState();

  // Disable Loader
  const [loaderdisable, setLoaderDisable] = useState("loaderDisable");

  // filter Data
  const [filterList, setFilterList] = React.useState();

  // Pagination Data
  const [last_page, setlast_page] = React.useState();
  const [current_page, setcurrent_page] = React.useState(1);

  // Provider Filter
  const [sortBy, setsortBy] = useState(["popularity"]);
  const [provider, setprovider] = useState('');
  const [game_type, setgame_type] = useState('');
  const [currency, setcurrency] = useState('');
  const [feature, setfeature] = useState('');
  const [theme, settheme] = useState('');
  const [volatility, setvolatility] = useState('');

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
        setSlotGamelist(json.game_list.items);
        setFilterList(json.filter_list);

        setLoaderDisable("loaderDisable")

        setGameLength(json.game_list.items.length)

        setlast_page(json.game_list.pagination.last_page);


        // For filter, when filter not available while set filter

        if (json.filter_list.provider == "") {
          setprovider("");
        }
        else{   
          $(".provider").removeClass("active");       
          for (let i = 0; i < json.filter_list.provider.length; i++) {
            if(json.filter_list.provider[i] == provider){             
              $(".provider" + i).addClass("active");
            }             
          } 
        }

        if (json.filter_list.game_type == "") {
          setgame_type("");
        }
        else{   
          $(".game_type").removeClass("active");       
          for (let i = 0; i < json.filter_list.game_type.length; i++) {
            if(json.filter_list.game_type[i] == game_type){             
              $(".game_type" + i).addClass("active");
            }             
          } 
        }

        if (json.filter_list.currency == "") {
          setcurrency("");
        }
        else{   
          $(".currency").removeClass("active");       
          for (let i = 0; i < json.filter_list.currency.length; i++) {
            if(json.filter_list.currency[i] == currency){             
              $(".currency" + i).addClass("active");
            }             
          } 
        }

        if (json.filter_list.feature == "") {
          setfeature("");
        }
        else{   
          $(".feature").removeClass("active");       
          for (let i = 0; i < json.filter_list.feature.length; i++) {
            if(json.filter_list.feature[i] == feature){             
              $(".feature" + i).addClass("active");
            }             
          } 
        }

        if (json.filter_list.theme == "") {
          settheme("");
        }
        else{   
          $(".theme").removeClass("active");       
          for (let i = 0; i < json.filter_list.theme.length; i++) {
            if(json.filter_list.theme[i] == theme){             
              $(".theme" + i).addClass("active");
            }             
          } 
        }

        if (json.filter_list.volatility == "") {
          setvolatility("");
        }
        else{   
          $(".volatility").removeClass("active");       
          for (let i = 0; i < json.filter_list.volatility.length; i++) {
            if(json.filter_list.volatility[i] == volatility){             
              $(".volatility" + i).addClass("volatility");
            }             
          } 
        }

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


  // Pagination Handle Change
  function handlePageClick({ selected }) {
    setcurrent_page(selected + 1);
  };

  // For Filter Data
  function sortByValue(index) {
    setcurrent_page(1);
    $(".reactPaginate > li").removeClass("selected");
    $(".reactPaginate > li:nth-child(2)").addClass("selected");

    setLoaderDisable("")
    if (index == 1) {
      setsortBy("new");
    } else if (index == 2) {
      setsortBy("popularity");
    } else if (index == 3) {
      setsortBy("alphabetical");
    }
  }

  async function slotFilter(value, filternumber, key)  {
    setcurrent_page(1);
    $(".reactPaginate > li").removeClass("selected");
    $(".reactPaginate > li:nth-child(2)").addClass("selected");

    if (filternumber == 1) {
      if (value != provider) {
        setprovider(value);
      } else {
        setprovider("");
      }
    } else if (filternumber == 2) {
      if (value != game_type) {
        setgame_type(value);
      } else {
        setgame_type("");
      }
    } else if (filternumber == 3) {
      if (value != currency) {
        setcurrency(value);
      } else {
        setcurrency("");
      }
    } else if (filternumber == 4) {
      if (value != feature) {
        setfeature(value);
      } else {
        setfeature("");
      }
    } else if (filternumber == 5) {
      if (value != theme) {
        settheme(value);
      } else {
        settheme("");
      }
    } else if (filternumber == 6) {
      if (value != volatility) {
        setvolatility(value);
      } else {
        setvolatility("");
      }
    }
  }

  // OpenGameDetails
  function OpenGameDetail(gameCode) {
    closeFilterList();
    var gamecode = gameCode;
    setGameCode(gamecode);

    for (let i = 0; i < slotGamelist.length; i++) {
      if (gamecode == slotGamelist[i].game_code) {
        setDataList(slotGamelist[i]);
      }
    };

    let list = document.getElementById("game-detail");
    list.classList.remove("open-detail-list");
    $('.page-header').hide();
  };

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
      <GameDetail gameCode={gamecode} data={datalist} />
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
                    {filterList?.provider.map((provider, key) => {
                      return (
                        <Button className={`short provider provider${key}`} type="button" onClick={e => slotFilter(provider, 1, key)}>
                          {provider}
                        </Button>
                      );
                    })}

                    <h6>Game Type</h6>
                    <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                      {filterList?.game_type.map((game_type, key) => {
                        return (
                          <Button className={`short game_type game_type${key}`} type="button" onClick={e => slotFilter(game_type, 2, key)}>
                            {game_type}
                          </Button>
                        );
                      })}
                    </div>
                    <h6>Currency</h6>
                    {filterList?.currency.map((currency, key) => {
                      return (
                        <Button className={`short currency currency${key}`} type="button" onClick={e => slotFilter(currency, 3, key)}>
                          {currency}
                        </Button>
                      );
                    })}

                    <h6>Game feature</h6>
                    {filterList?.feature.map((feature, key) => {
                      return (
                        <Button className={`short feature feature${key}`} type="button" onClick={e => slotFilter(feature, 4, key)}>
                          {feature}
                        </Button>
                      );
                    })}

                    <h6>Game theme</h6>
                    {filterList?.theme.map((theme, key) => {
                      return (
                        <Button className={`short theme theme${key}`} type="button" onClick={e => slotFilter(theme, 5, key)}>
                          {theme}
                        </Button>
                      );
                    })}

                    <h6>Game volatility</h6>
                    {filterList?.volatility.map((volatility, key) => {
                      return (
                        <Button className={`short volatility volatility${key}`} type="button" onClick={e => slotFilter(volatility, 6, key)}>
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
              {slotGamelist != "" ?
                slotGamelist.map((item) => {
                  return (
                    <Col id="unic_card_hwe" className="hwe_each_card_adjust">
                      <Card className="slote_card" onClick={(e) => OpenGameDetail(item.game_code)}>
                        <CardHeader>
                          <img
                            alt="Image Not Found"
                            src={item.game_img ? CONSTANT.ImageUrl + item.game_img : require("../../assets/img/No_Image_Available.jpg")}
                          />
                          {item.demo == 1 ? <button>Demo</button> : null}
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

export default Slots;
