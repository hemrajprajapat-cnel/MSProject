import React, {useState} from "react";
import { Link } from "react-router-dom";
// reactstrap components
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
} from "reactstrap";

import './navbar.css';

function IndexNavbar() {  
  const [setpath, setpathname] = useState([]);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {

    var pathname = window.location.pathname;
    if(pathname == '/HOME'){
      setpathname("My Casino");
    } else if (pathname == '/SLOT') {
      setpathname("My Slots");
    }
  });  

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="white"> 
        <Container className="container_fluid_hwe">
          <div className="navbar-translate">
            <NavbarBrand              
              id="navbar-brand"
            >
              <Link to="/HOME"><h3 className="logo_brand">{setpath}</h3></Link>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          
          <Collapse
            className="justify-content-between"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar></Nav>
            <Nav navbar className="nav_search">
              <InputGroup>
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
