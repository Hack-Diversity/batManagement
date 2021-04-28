import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import Welcome from './Welcome';

function CreateAccount(){
  const initialValues = {
    companyName: "Testing",
    companyEmail: "",
    companyAddress: "",
    companyAbout: "",
  };

  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const handleOnChange = (event) => {
      setValues({
        ...values,
        [event.target.data]:  event.target.value,
      });
      console.log(event.target.value);
    };

  const handleBackClick = () => {
    history.push('/');
  };

  const handleNextClick = () =>{
  history.push('/welcome');
  };

    return(
      <Container className="create-account-container">
      <section className="create-account-form-top">
        <h3 className="title">Let's start by creating your account</h3>
      </section>
      <section id="create-account-form">
        <Form
          className="createAccount"
          >
        <Form.Group className="leftSection">
          <Form.Label
            size="lg"
            className="start-form-label"
            for="company_name">
              Company Name:
          </Form.Label>
          <input
            required
            type="text"
            name="companyName"
            placeholder="Company Name"
            defaultvalue={values.companyName}
            onChange={handleOnChange}
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
            required
            type="text"
            name="company_address"
            placeholder="Address"
            defaultValue={values.companyAddress}
            onChange={handleOnChange}
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
            required
            type="text"
            name="company_email"
            placeholder="E-mail"
            defaultValue={values.companyEmail}
            onChange={handleOnChange}
            className="createAccount_input  createAccount_companyEmail"
            >
          </input>
          </Form.Group>
          <div className="createAccount_btn_back">
            <Button
              variant="secondary"
              style={{fontWeight:"bold"}}
              onClick={handleBackClick}
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
          <select
            className="createAccount_input createAccount_accountType">
            <option
              value="retail">Store Owner
            </option>
            <option
              value="online store">Site Administrator
            </option>
            <option
              value="fashion and style">Manager
            </option>
            <option
              value="health and wellness">Employee
            </option>
            <option
              value="portfolio & cv">Temp
            </option>
            <option
              value="Other">Other
            </option>
          </select>
          <Form.Label
            size="lg"
            className="start-form-label"
            for="about">
              About the company:
          </Form.Label>
          <textarea
            type="comment"
            defaultValue={values.companyAbout}
            onChange={handleOnChange}
            className="createAccount_input  createAccount_textarea"
            >
          </textarea>
          </Form.Group>
          <div className="createAccount_btn_next">
            <Button
              variant=""
              className="bat_btn_general"
              id="change the href target to the correct ones from Mari"
              onClick={handleNextClick}
              >
              Next
            </Button>
          </div>
          </Form>
      </section>
      </Container>
    )

}

export default CreateAccount;
