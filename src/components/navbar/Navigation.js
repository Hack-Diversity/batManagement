import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import batLogo from "../../assets/batLogo.jpg";

export default class Navigation extends Component {
 render(){
   return(
     <>
     <Container className="bat_nav-container d-flex">
       <Navbar className="w-100 " expand="lg">
         <Nav className="flex-end">
           <Navbar.Brand href="/">
             <img className="App-logo"
              src={batLogo}
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="Bat Management Logo"
             />
             <span className="nav-logo-font">
                <span className="purple_txt">
                  BAT
                </span>
                MANAGEMENT
              </span>
           </Navbar.Brand>
           <span className="flex-end">
             <Nav.Link className="navLinks bold" href="/">Home</Nav.Link>
             <Nav.Link className="navLinks bold" href="/templates">Templates</Nav.Link>
             <Nav.Link className="navLinks bold" href="/price">Price</Nav.Link>
             <Nav.Link className="navLinks bold" href="/mission">Our Mission </Nav.Link>
             <Nav.Link className="navLinks bold" href="/login">
              <span className="nav-login purple_txt" >
                Log In
              </span>
            </Nav.Link>
          </span>
         </Nav>
       </Navbar>
     </Container>
     </>
  );}
}
