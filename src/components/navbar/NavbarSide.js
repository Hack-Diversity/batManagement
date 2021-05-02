import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';


export default class Sidebar extends Component {
 render(){
   return(
     <>
     <Container className="nav">
       <Navbar className="navbar-container-dark">
         <Nav className="" style={{position:"relative", margin:"0px", alignContent:"center"}}>
           <div>
             <Nav.Link className="navLinks nl-dark" href="/">Overview </Nav.Link>
             <Nav.Link className="navLinks nl-dark" href="/account">Account </Nav.Link>
             <Nav.Link className="navLinks nl-dark" href="/templates">Templates </Nav.Link>
             <Nav.Link className="navLinks nl-dark" href="/socialMedia">Social Media </Nav.Link>
             <Nav.Link className="navLinks nl-dark" href="/review">Review </Nav.Link>
             <h5>-</h5>
             <Nav.Link className="navLinks nl-dark" href="/settings">Settings </Nav.Link>
             <Nav.Link className="navLinks nl-dark" href="/subscription">Subscription </Nav.Link>
          </div>
         </Nav>
       </Navbar>
     </Container>
     </>
  );}
}
