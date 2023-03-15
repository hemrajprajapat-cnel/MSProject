import React, { useState } from "react";
import Navbar from "components/Navbars/Navbar.js";
import Header from "components/Headers/Header.js";
import * as CONSTANT from '../../BaseURL';
import MyPagination from 'components/MyPagination.js'
import $ from 'jquery';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
// Custome Css
import "../sections/css/Slot.css";

function Slots() {

  // List Data
  const [gamelist, setGamelist] = React.useState();

  // filter Data
  const [filterList, setFilterList] = React.useState();

  // Pagination Data
  const [first_page, setfirst_page] = React.useState();
  const [last_page, setlast_page] = React.useState();
  const [current_page, setcurrent_page] = React.useState();
  const [total_rows, settotal_rows] = React.useState();
  const [itemPerPage, setItemPerPage] = React.useState(50);

  // Provider Filter
  const [sortBy, setsortBy] = useState(["popularity"]);
  const [provider, setprovider] = useState([]);
  const [game_type, setgame_type] = useState([]);
  const [currency, setcurrency] = useState([]);
  const [feature, setfeature] = useState([]);
  const [theme, settheme] = useState([]);
  const [volatility, setvolatility] = useState([]);


  // get data from child to parent
  function callBack(childData) {
    setcurrent_page(childData);
  }

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
    fetch(`${CONSTANT.BaseUrl}category/SLOT?sortBy=${sortBy}&provider=${provider}&game_type=${game_type}&currency=${currency}&feature=${feature}&theme=${theme}&volatility=${volatility}&page=${current_page ? current_page : 1}`, {
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

        setfirst_page(json.game_list.pagination.first_page);
        setlast_page(json.game_list.pagination.last_page);
        setcurrent_page(json.game_list.pagination.current_page);
        settotal_rows(json.game_list.pagination.total_rows);
      });
  };

  // Onload And also onchange
  React.useEffect(() => {
    getGameList();
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };    
  }, [sortBy, current_page, provider, game_type, currency, feature, theme, volatility]);


  // For Pagination
  function pageDecrease() {
    if (current_page > first_page) {
      setcurrent_page(current_page - 1);
    } else {
      setcurrent_page(Math.ceil(total_rows / itemPerPage));
    }
  }
  function pageIncrease() {
    if (current_page < last_page) {
      setcurrent_page(current_page + 1);
    } else {
      setcurrent_page(1);
    }
  }

  // For Filter Data
  function sortByValue(index) {
    if(index == 1){
      setsortBy("new");
    }else if(index == 2){
      setsortBy("popularity");       
    }else if(index == 3){
      setsortBy("alphabetical");
    }
    // getGameList();
  }
  function providerValue(provider) {
    setprovider(provider)
    // getGameList();
  }
  function game_typeValue(game_type) {
    setgame_type(game_type)
    // getGameList();
  }
  function currencyValue(currency) {
    setcurrency(currency)
    // getGameList();
  }
  function featureValue(feature) {
    setfeature(feature)
    // getGameList();
  }
  function themeValue(theme) {
    settheme(theme)
    // getGameList();
  }
  function volatilityValue(volatility) {
    setvolatility(volatility)
    // getGameList();
  }


  // For ShortBy Button
  $(document).ready(function(){
    $(".slot_tabs > .inner1 > button").click(function(){      
      $(".slot_tabs > .inner1 > button").removeClass("active");
      $(this).addClass("active");
    });
  });

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="main">
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
                className="justify-content-end inner mt-3 position-relative"
              >
                <Button
                  className="filter"
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
                        <Button className="short provider" type="button" onClick={e => providerValue(provider)}>
                          {provider}
                        </Button>
                      );
                    })}

                    <h6>Game Type</h6>
                    <div style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "thin" }}>
                      {filterList?.game_type.map((game_type) => {
                        return (
                          <Button className="short game_type" type="button" onClick={e => game_typeValue(game_type)}>
                            {game_type}
                          </Button>
                        );
                      })}
                    </div>
                    <h6>Currency</h6>
                    {filterList?.currency.map((currency) => {
                      return (
                        <Button className="short currency" type="button" onClick={e => currencyValue(currency)}>
                          {currency}
                        </Button>
                      );
                    })}

                    <h6>Game feature</h6>
                    {filterList?.feature.map((feature) => {
                      return (
                        <Button className="short feature" type="button" onClick={e => featureValue(feature)}>
                          {feature}
                        </Button>
                      );
                    })}

                    <h6>Game theme</h6>
                    {filterList?.theme.map((theme) => {
                      return (
                        <Button className="short theme" type="button" onClick={e => themeValue(theme)}>
                          {theme}
                        </Button>
                      );
                    })}

                    <h6>Game volatility</h6>
                    {filterList?.volatility.map((volatility) => {
                      return (
                        <Button className="short volatility" type="button" onClick={e => volatilityValue(volatility)}>
                          {volatility}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-start flex-wrap mt-5">
              {gamelist?.map((item) => {
                return (
                  <Col sm="6" md="4" lg='3' className="">
                    <Card className="slider_card slote_card">
                      <img
                        alt="..."
                        className="Slider Image..."
                        src={require("../../assets/img/slider_img.png")}
                      />
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
              })}
            </Row>
          </div>
        </div>
      </div>
      <div className='pagination'>
        <button onClick={pageDecrease}>Prev</button>
        <MyPagination totalItem={total_rows} itemPerPage={itemPerPage} handleCallBack={callBack} />
        <button onClick={pageIncrease}>Next</button>
      </div>
    </>
  );
}

export default Slots;