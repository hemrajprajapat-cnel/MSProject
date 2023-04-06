import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import './navbar.css';

function Navigationbar() {
  const [setpath, setpathname] = useState([]);

  React.useEffect(() => {
    var pathname = window.location.pathname;
    if (pathname == '/MYCASINO') {
      setpathname("My Casino");
    } else if (pathname == '/SLOT') {
      setpathname("My Slots");
    }
  }, []);

  return (
    <>
      <Navbar className="navbar_hwe fixed-top navbar-transparent" expand="lg" color="white">
        <Container className="container_fluid_hwe">
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              <Link to="/MYCASINO"><h3 className="logo_brand">{setpath}</h3></Link>
            </NavbarBrand>
            <Nav className="toggle_content_hwe">
              <Link to="/gameprovider"><i className="fa fa-search"></i></Link>
              <Link to="/login"><i className="fa fa-user-circle ml-3"></i></Link>
            </Nav>
          </div>

          <Collapse
            className="collapse_filter justify-content-between"
            navbar
          >
            <Nav navbar></Nav>
            <Nav navbar className="nav_search" tag={Link} to="/gameprovider">              
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
                  />
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

export default Navigationbar;

