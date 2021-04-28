import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import CreateAccount from './CreateAccount';



function Welcome() {

  const name=({company}) => {
    <CreateAccount company={this.handleNextClick.bind(this.event.target.value)}/>
    return <div>{this.company}</div>
  }

  return(
    <Container className="create-account-container">
      <section className="create-account-form-top">
        <h3 className="title">Welcome, {name.company}</h3>
      </section>
    </Container>
   )
}

export default Welcome;
