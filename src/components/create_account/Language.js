import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Navigation, Sidebar} from '../../components/navbar';
import {NextBtn, ReturnBtn} from '../../components/buttons';
import {useHistory} from 'react-router-dom';
import Footer from "../../components/layouts/Footer";
import axios from 'axios';

const LANGUAGE_OPTIONS = [
  "Arabic", "Bengali", "Burmese", "Creole", "English", "German", "Hindi", "Igbo", "Fulani",
  "French", "Italian", "Japanese", "Mandarine", "Spanish", "Russian", "Yoruba" ];

function Language({text, language}) {
  const [convertedText, setConvertedText] = useState("");
  const history = useHistory();

  const handleOnChange = (lang) =>{
    setConvertedText({
      ...convertedText,
      [lang.target.name]: lang.target.value
    });
    return convertedText.lang;

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
    <div className="w-100" fluid >
      <Navigation />
      <div className="row" style={{display:"grid", position:"relative"}}>
        <section className="col flex-center mtop_50">
          <h2 className="title"> Language Settings </h2>
        </section>
        <section className="dashboard col-10 lang">
          <div className="flex-center">
            <select
              name="CompanyType"
              value={convertedText.value}
              onChange={handleOnChange}
              className="createAccount_input createAccount_accountType" style={{width:"350px"}}>
                <option value=" ">Select Language... </option>
                  {LANGUAGE_OPTIONS.map((option, i) => <option key ={i} value={option}>{option}</option>)}
            </select>
            <div className="flex-between">
              <ReturnBtn onClick={handleBackClick} name="Back" />
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
