import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateAccount extends Component{

  render(){
    return(
      <Container className="create-account-container">
      <section className="create-account-form-top">
        <h3 className="title">Let's start by creating your account</h3>
      </section>
      <section id="create-account-form">
        <Form className="createAccount">
        <Form.Group className="leftSection">
          <Form.Label
            size="lg"
            className="start-form-label"
            for="company_name">
              Company Name:
          </Form.Label>
          <input
            type="text"
            placeholder="Company Name"
            className="createAccount_input createAccount_companyName"
            >
          </input>
          <Form.Label
            size="lg"
            className="start-form-label"
            for="company_address">
              Company Address:
          </Form.Label>
          <input
            type="text"
            placeholder="Address"
            className="createAccount_input  createAccount_companyAddress"
            >
          </input>
          <label
            size="lg"
            className="start-form-label"
            for="company_email">
              E-mail Address:
          </label>
          <input
            type="text"
            placeholder="E-mail"
            className="createAccount_input  createAccount_companyEmail"
            >
          </input>
          </Form.Group>
          <div className="createAccount_btn_back">
            <Button
              variant="secondary"
              >
                Back
            </Button>
          </div>
        </Form>
        <Form className="createAccount">
        <Form.Group className="rightSection">
          <Form.Label
            size="lg"
            className="start-form-label"
            for="account_type">
              Account Type:
          </Form.Label>
          <select className="createAccount_input createAccount_accountType">
            <option
              value="retail">Store Owner
            </option>
            <option
              value="online store">Employee
            </option>
            <option
              value="fashion and style">Manager
            </option>
            <option
              value="health and wellness">Temp
            </option>
            <option
              value="portfolio & CV">Administrator
            </option>
            <option
              value="Other">Other
            </option>
          </select>
          <Form.Label
            size="lg"
            className="start-form-label"
            for="about">
              About:
          </Form.Label>
          <textarea
            type="comment"
            className="createAccount_input  createAccount_textarea"
            >
          </textarea>
          </Form.Group>
          <div className="createAccount_btn_next">
            <Button
              variant="primary"
              >
              Next
            </Button>
          </div>
          </Form>
      </section>
      </Container>
    )
  }
}

export default CreateAccount;
