import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';

import bell from "../../assets/notificationIcon.svg";
import robot from "../../assets/robot.svg";
import batLogo from "../../assets/batLogo.jpg";

export default class NavbarDark extends Component {
 render(){
   return(
     <>
     <Container className="nav-container" fluid>
       <Navbar className="w-100">
         <Nav className="nav">
         <div>
         <Navbar.Brand className="navbarBrand" href="/" >
         <div className="nav-logo-dark" >
         <div className="App-logo">
           <img
            src={batLogo}
            width="50"
            height="30"
            className="d-inline-block"
            alt="Bat Management Logo"
           />
           </div>
           </div>
         </Navbar.Brand>
         </div>
           <span className="navLinks-container">
             <Nav.Link className="navLinks bold" href="/">Home</Nav.Link>
             <Nav.Link className="navLinks bold" href="/templates">Templates</Nav.Link>
             <Nav.Link className="navLinks bold" href="/price">Price</Nav.Link>
             <Nav.Link className="navLinks bold" href="/mission">Our Mission </Nav.Link>
             <Nav.Link className="navLinks bold" href="/about">
              <img className="nav-icons" src={bell}></img>
            </Nav.Link>
            <Nav.Link className="navLinks bold" href="/welcome">
             <span className="navLinks bold">
              Company Name
              <span><img className="nav-icons" src={robot}></img></span>
            </span>
           </Nav.Link>
          </span>
         </Nav>
       </Navbar>
     </Container>
     </>
  );}
}
