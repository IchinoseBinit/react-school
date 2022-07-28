import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
function Header() {
  const { authState } = useContext(AuthContext);
  let { setAuthState } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ ...authState, status: false });
    // window.location.reload(false);
  };

  return (
    <div>
      {" "}
      {/* <!-- Header Start --> */}{" "}

      <div class="header-area">
        <div class="main-header ">
          <div
            class="header-top top-bg d-none d-lg-block"
            style={{ background: "#0056B5" }}
          >
            <div class="container">
              <div class="row justify-content-between align-items-center">
                <div class="col-lg-8">
                  <div class="header-info-left">
                    <ul>
                      <li style={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}> info@preciouscollege.edu.np </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="col-lg-4" style={{ float: "right" }}>
                  <div class="header-info-left">
                    <ul style={{ textAlign: "end" }}>
                      <li style={{ color: "#fff", fontSize: "18px", fontWeight: "600" }}>+977 1 4353290</li>{" "}

                      <li>  <a href="https://www.facebook.com/precious1985/">  <i style={{ color: "#fff" }} class="fab fa-facebook"></i> </a></li>{" "}
                      <li> <a href="https://instagram.com/pnac.nepal"> <i style={{ color: "#fff" }} class="fab fa-instagram"></i></a> </li>{" "}
                      <li> <a href="https://www.tiktok.com/@pnac.nepal"> <i style={{ color: "#fff" }} class="fab fa-tiktok"></i></a> </li>{" "}

                      <a href="http://app.preciouscollege.edu.np/" style={{color: "#fcfcfc; padding: 2px;"}}>
                        Web App 
                        <li>  <i style={{ color: "#fff", marginLeft:"2px"}} class="fa fa-globe"></i></li>{" "}
                      </a>
                    </ul>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}

          <Navbar expand="lg" style={{ height: "6.5rem", background: "	#A32626" }}>
            <Container >
              <div class="col-xl-5 col-lg-7">
                <Navbar.Brand href="#home"> <img
                  height={70}
                  src={"assets/img/logo.png"}
                  alt=""
                />{" "}</Navbar.Brand>
              </div>
              <div class="col-xl-7 col-lg-5 col-md-5 ">
                <Navbar.Toggle ariaControls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <div className="main-menu">

                      <ul  >
                        <li>
                          <NavLink to="/"> Home </NavLink>{" "}

                        </li>

                        <li>
                          <NavLink to="/about"> About </NavLink>{" "}

                        </li>
                        <li>
                          <NavLink to="/programs"> Programs </NavLink>{" "}
                        </li>

                        <li>
                          <NavLink to="/news"> News </NavLink>{" "}
                        </li>

                        <li>
                          <NavLink to="/gallery"> Gallery </NavLink>{" "}
                        </li>

                        <li>
                          <NavLink to="/show_event"> Event </NavLink>{" "}
                        </li>
                        <li>    <NavLink to="/blog"> Blog </NavLink>{" "}</li>
                        <li>      <NavLink to="/contact"> Contact Us </NavLink>{" "}</li>
                      </ul>
                    </div>







                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>

        </div>{" "}
      </div>{" "}
      {/* <!-- Header End --> */}{" "}
    </div>
  );
}

export default Header;
