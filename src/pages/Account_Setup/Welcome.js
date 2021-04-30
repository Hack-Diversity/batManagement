import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import CreateAccount from './CreateAccount';
import Button from 'react-bootstrap/Button';

function Welcome(props) {
  return(
    <Container className="welcome-container">
      <section className="welcome-headerText">
        <h3 className="title m-6">Welcome, {props.companyName}</h3>
      </section>
      <section className="welcome-dashboard">
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >
          Overview
        </Button>
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >
          Manage Social Media
        </Button>
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >Manage Subscription
        </Button>
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >
          Template
        </Button>
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >Translation Settings
        </Button>
        <Button
          type="button"
          className="bat_btn_general btn-lg createAccount_btn_next"
          variant=""
          >Settings
        </Button>
      </section>
    </Container>
   )
}

export default Welcome;
