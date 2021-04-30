import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import Input from "/Users/zeejall/Desktop/bat_management/src/components/formsComponents/Input.js";

function CreateAccount(props){
  let initialValues = {
    companyName: "",
    companyName2: "",
    companyEmail: "",
    companyAddress: "",
    companyType:"",
    companyAbout: "",
  };

  const history = useHistory();
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (data) =>{
    setValues({
      ...values,
      [data.target.name]: data.target.value
    });
    return values.data;
  }

  const handleBackClick = () => {
    history.push('/');
  };

  const handleNextClick = () =>{
  history.push('/welcome');
  console.log(`
    ${values.companyName2}
    ${values.companyName}
    ${values.companyAddress}
    ${values.companyEmail}
    ${values.companyType}
    ${values.companyAbout}
  `);
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
            for="companyName">
              Company Name:
          </Form.Label>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={values.value}
            onChange={handleOnChange}
            className="createAccount_input createAccount_companyName"
            >
          </input>
          <Form.Label
            size="lg"
            className="start-form-label"
            for="companyAddress">
              Company Address:
          </Form.Label>
          <input
            type="text"
            name="companyAddress"
            placeholder="Address"
            value={values.value}
            onChange={handleOnChange}
            className="createAccount_input  createAccount_companyAddress"
            >
          </input>
          <label
            size="lg"
            className="start-form-label"
            for="companyEmail">
              E-mail Address:
          </label>
          <input
            required
            type="text"
            name="companyEmail"
            placeholder="E-mail"
            value={values.value}
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
              type="submit"
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
            for="accountType">
              Account Type:
          </Form.Label>
          <select
            name="companyType"
            value={values.value}
            onChange={handleOnChange}
            className="createAccount_input createAccount_accountType">
            <option
              value="Store Owner">Store Owner
            </option>
            <option
              value="Site Administrator">Site Administrator
            </option>
            <option
              value="Manager">Manager
            </option>
            <option
              value="Employee">Employee
            </option>
            <option
              value="Temp">Temp
            </option>
            <option
              value="Other">Other
            </option>
          </select>
          <Form.Label
            size="lg"
            className="start-form-label"
            for="accountAbout">
              About the company:
          </Form.Label>
          <textarea
            type="comment"
            name="companyAbout"
            value={values.value}
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
              type="submit"
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
