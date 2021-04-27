import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default class Navigation extends Component {
 render(){
   return(
     <>
     <Container id="nav-container d-flex">
       <Navbar className="nav-bg-custom" expand="lg">
         <Nav className="mr-auto mb-0 mb-lg-0 nav-container-style">
           <Navbar.Brand href="/">
             <img className="App-logo"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef44baf4-efd8-4556-9125-4642bb01c5f4/d4d6sc7-88fe8726-81b9-40bd-9caf-b5f79e08d299.png/v1/fill/w_1396,h_572,strp/batgirl_logo_barbara_by_machsabre_d4d6sc7-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NTYiLCJwYXRoIjoiXC9mXC9lZjQ0YmFmNC1lZmQ4LTQ1NTYtOTEyNS00NjQyYmIwMWM1ZjRcL2Q0ZDZzYzctODhmZTg3MjYtODFiOS00MGJkLTljYWYtYjVmNzllMDhkMjk5LnBuZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2YdWtzPRrYZpyiitIMSGTg_MBZmV9ji3ZhPcRyoulhs"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="Bat Management Logo"
             />
             <span className="nav-logo-font">
                <span className="nav-logo-purple">
                  Bat
                </span>
                Management
              </span>
           </Navbar.Brand>
           <span className="nav-item-style">
             <Nav.Link className="navLinks" href="/">Home</Nav.Link>
             <Nav.Link className="navLinks" href="/templates">Templates</Nav.Link>
             <Nav.Link className="navLinks" href="/price">Price</Nav.Link>
             <Nav.Link className="navLinks" href="/help">Our Mission </Nav.Link>
             <Nav.Link className="navLinks" href="/login">
              <span className="nav-login" >
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
