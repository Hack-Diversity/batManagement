import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import Layout from '../layouts/Layout';
import {NextBtn, ReturnBtn} from '../../components/buttons';
import smoke from '../../assets/smoke1.png';
import axios from 'axios';

function CreateAccount(props){
  let initialValues = {
    CompanyName: "",
    CompanyEmail: "",
    CompanyAddress: "",
    CompanyType:"",
    CompanyAbout: "",
  };

  const history = useHistory();
  const [values, setValues] = useState(initialValues);

  const handleOnChange = (data) =>{
    setValues({
      ...values,
      [data.target.name]: data.target.value
    });
    return values.value;
  };

  const handleBackClick = () => {
    history.push('/');
  };

  function handleNextClick(){
    history.push('/personal');
  };

  function logDataToConsole(){
    const companyData = (`
      ${values.CompanyName}
      ${values.CompanyAddress}
      ${values.EmailAddress}
      ${values.CompanyType}
      ${values.CompanyAbout}
    `);
    console.log(companyData);
  }

  function sendDataToMongo(){
    const data = {
      CompanyName: `${values.CompanyName}`,
      CompanyAddress: `${values.CompanyAddress}`,
      EmailAddress: `${values.EmailAddress}`,
      CompanyType: `${values.CompanyType}`,
      CompanyAbout: `${values.CompanyAbout}`
    }
     axios.post("http://localhost:5000/add", data)
      .then(res => console.log("Response" + res.data))
  };

  const completedForm = () =>{
    if(
    `${values.CompanyName}`.length>0 &&
    `${values.CompanyAddress}`.length>0 &&
    `${values.EmailAddress}`.length>0 &&
    `${values.CompanyType}`.length>0 &&
    `${values.CompanyAbout}`.length>0
    ){
    handleNextClick();
    logDataToConsole();
    sendDataToMongo();
  }else alert("Cannot leave field empty");
  }

const SELECT_OPTIONS = [ "Store Owner", "Site Administrator", "Manager", "Employee", "Temp", "Other"];
const INPUT_OPTIONS = [ "Company Name", "Company Address", "Email Address"];

  return(
    <Layout>
      <Container className="w-100 centered">
      <section>
        <h3 className="title">Let's start by creating your account</h3>
      </section>
      <section id="create-form">
        <Form className="createAccount centered" onSubmit={completedForm}>
          <Form.Group className="leftSection">
            {INPUT_OPTIONS.map((inputs, m) =>
              <>
                <Form.Label
                  size="lg"
                  key={m}
                  className="form-label"
                  for={inputs.replace(" ", "")}>{inputs}
                </Form.Label>
                <input
                  type="text"
                  key={m+0}
                  name={inputs.replace(" ", "")}
                  placeholder={inputs}
                  value={values.value}
                  onChange={handleOnChange}
                  required
                  size="40"
                  minLength="4"
                  className={`createAccount_input createAccount_${inputs.replace(" ", "")}`}
                  >
                </input>
              </>
            )}
            <div>
              <ReturnBtn
                type="submit"
                name="Back"
                onClick={handleBackClick}
              />
            </div>
          </Form.Group>
          <Form.Group className="rightSection">
            <Form.Label
            size="lg"
            className="form-label"
            for="CompanyType">Account Creator
            </Form.Label>
            <select
              name="CompanyType"
              value={values.value}
              onChange={handleOnChange}
              className="createAccount_input createAccount_accountType">
              <option value=" ">Select... </option>
                {SELECT_OPTIONS.map((option, i) => <option key ={i} value={option}>{option}</option>)}
            </select>
            <Form.Label
              size="lg"
              className="form-label"
              for="CompanyAbout">
                About the Company
            </Form.Label>
            <textarea
              type="comment"
              name="CompanyAbout"
              value={values.value}
              onChange={handleOnChange}
              className="createAccount_input  createAccount_textarea"
              >
            </textarea>
            <div className="btn_next rightSection">
              <NextBtn
                type="submit"
                name="Next"
                onClick={completedForm}
              />
            </div>
          </Form.Group>
        </Form>
      </section>
    </Container>
  </Layout>
  )
}

export default CreateAccount;
