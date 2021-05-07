import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Navigation, Sidebar} from '../../components/navbar';
import {NextBtn, ReturnBtn} from '../../components/buttons';
import {useHistory} from 'react-router-dom';

const LANGUAGE_OPTIONS = [
  "Arabic", "Bengali", "Burmese", "Creole", "English", "German", "Hindi", "Igbo", "Fulani",
  "French", "Italian", "Japanese", "Mandarine", "Spanish", "Russian", "Yoruba" ];

function Language() {
  const [values, setValues] = useState("");
  const history = useHistory();

  const handleOnChange = (data) =>{
    setValues({
      ...values,
      [data.target.name]: data.target.value
    });
    return values.data;
  };

  const handleBackClick = () => {
      history.push('/welcome');
    };

  const handleNextClick = () =>{
    alert("Saved");
    history.push('/welcome');
  }

  return(
    <>
    <div className="w-100" fluid expand="lg">
      <Navigation />
      <div>
        <section style={{marginTop:"50px"}}>
          <h2 className="title mg"> Language Settings </h2>
        </section>
        <section className="dashboard w-100" style={{backgroundColor:"transparent", display:"flex"}}>
          <div className={{display:"block", alignItems:"center"}}>
            <select
              name="CompanyType"
              value={values.value}
              onChange={handleOnChange}
              className="createAccount_input createAccount_accountType" style={{width:"350px"}}>
                <option value=" ">Select Language... </option>
                  {LANGUAGE_OPTIONS.map((option, i) => <option key ={i} value={option}>{option}</option>)}
            </select>
            <div className="flex-between">
              <ReturnBtn onClick={handleBackClick} />
              <NextBtn onClick={handleNextClick} name="Save"/>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
   )
}

export default Language;
