import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import './navbar.css';
import $ from "jquery";

function IndexNavbar() {
  const [setpath, setpathname] = useState([]);
  const [setprovider, setProviderList] = useState([]);
  const [allGameList, setAllGameList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Open Provider List 
  const OpenProviderList = () => {
    let list = document.getElementById("search_provider_games");
    list.classList.remove("providerList");
  };
  const closeProviderList = () => {
    $('#search-Terms').val("");
    setSearchTerm("");
    let list = document.getElementById("search_provider_games");
    list.classList.add("providerList");
  };

  React.useEffect(() => {
    var pathname = window.location.pathname;
    if (pathname == '/MYCASINO') {
      setpathname("My Casino");
    } else if (pathname == '/SLOT') {
      setpathname("My Slots");
    }

    // Provider List API
    fetch(`${CONSTANT.BaseUrl}get-provider-list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProviderList(json.provider);
      })
      .catch((error) => {
        console.log(error)
      })

    // Search API
    fetch(`${CONSTANT.BaseUrl}get-all-game`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setAllGameList(json.game);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  // On Search Function
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Container id="search_provider_games" className="container_fluid_hwe providerList">
        <Nav className="nav_search">
          <InputGroup>
            <InputGroupAddon addonType="prepend" onClick={closeProviderList}>
              <InputGroupText className="angleleft">
                <FaAngleLeft />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="search_icon">
                <i className="fa fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Games Providers, Types etc."
              type="text"
              className="search_filter search_provider"
              id="search-Terms"
              onChange={(e) => handleSearch(e)}              
            ></Input> <br />
          </InputGroup>
        </Nav>

        {searchTerm.length < 3 ?
          <Nav className="game_providers_btn">
            <Button id="search-btn">Game Providers</Button>
          </Nav>
          : null
        }

        {searchTerm.length < 3 ?
          <div className="provider_content">
            {setprovider != "" ?
              setprovider.map((gameprovider) => {
                return (
                  <div className="content">
                    <div className="provider_name">{gameprovider.name}</div>
                    <Link to={`/providerList/${gameprovider.code}`}>
                      <img
                        alt="Image Not Found"
                        src={require("../../assets/img/avatar_ux.png")}
                      />
                    </Link>
                  </div>
                );
              })
              : <Nav className="Not_found">
                <img
                  alt="Image Not Found"
                  src={require("../../assets/img/data_not_found.png")}
                />
              </Nav>
            }
          </div>
          :
          <div className={`provider_content ${"Disable"}`}>
            {allGameList
              .filter((item) =>
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item) => (
                <div className="content">
                  <div className="provider_name">{item.description}</div>
                  <Link to={`/providerList/${item.game_code}`}>
                    <img
                      alt="Image Not Found"
                      src={require("../../assets/img/avatar_ux.png")}
                    />
                  </Link>
                </div>
              ))}
          </div>
        }

      </Container>

      <Navbar className="navbar_hwe fixed-top navbar-transparent" expand="lg" color="white">
        <Container className="container_fluid_hwe">
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              <Link to="/MYCASINO"><h3 className="logo_brand">{setpath}</h3></Link>
            </NavbarBrand>
            <Nav className="toggle_content_hwe">
              <button
                className="navbar-toggler navbar-toggler"
                onClick={OpenProviderList}
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
              <Link to="/login"><i className="fa fa-user-circle ml-3"></i></Link>
            </Nav>
          </div>

          <Collapse
            className="collapse_filter justify-content-between"
            navbar
          >
            <Nav navbar></Nav>
            <Nav navbar className="nav_search">
              <InputGroup onClick={OpenProviderList}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search here"
                  type="text"
                  className="search_filter"
                ></Input>
              </InputGroup>
            </Nav>
            <Nav navbar>
              <NavItem>
                <Button
                  className="nav-link btn-neutral nav_login"
                  to="/login"
                  tag={Link}
                >
                  <i className="fa fa-user-circle mr-1"></i>
                  <p>login</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
