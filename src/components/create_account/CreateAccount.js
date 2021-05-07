import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import Layout from '../layouts/Layout';
import {NextBtn, ReturnBtn} from '../../components/buttons';

function CreateAccount(props){
  let initialValues = {
    companyName: "",
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
  };

  const handleBackClick = () => {
    history.push('/');
  };

  const handleNextClick = () =>{
  history.push('/welcome');
  console.log(`
    ${values.CompanyName}
    ${values.CompanyAddress}
    ${values.CompanyEmail}
    ${values.CompanyType}
    ${values.CompanyAbout}
  `);
};

const SELECT_OPTIONS = [ "Store Owner", "Site Administrator", "Manager", "Employee", "Temp", "Other"];
const INPUT_OPTIONS = [ "Company Name", "Company Address", "E-mail Address"];

  return(
    <Layout>
      <Container className="w-100 centered">
      <section>
        <h3 className="title">Let's start by creating your account</h3>
      </section>
      <section id="create-form">
        <Form className="createAccount centered">
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
                  className={`createAccount_input createAccount_${inputs.replace(" ", "")}`}
                  >
                </input>
              </>
            )}
            <div>
              <ReturnBtn
                type="submit"
                onClick={handleBackClick}
              />
            </div>
          </Form.Group>
          <Form.Group className="rightSection">
            <Form.Label
            size="lg"
            className="form-label"
            for="CompanyType">Company Type
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
                About the company
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
                onClick={handleNextClick}
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
