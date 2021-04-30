import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import CreateAccount from './CreateAccount';


function Welcome(props) {

  return(
    <Container className="create-account-container">
      <section className="create-account-form-top">
        <h3 className="title m-6">Welcome, {props.company}</h3>
      </section>
    </Container>
   )
}

export default Welcome;
