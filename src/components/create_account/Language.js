import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Navigation, Sidebar} from '../../components/navbar';
import {NextBtn, ReturnBtn} from '../../components/buttons';
import {useHistory} from 'react-router-dom';

const SOCIAL_OPTIONS = [
  "Arabic", "Bengali", "Burmese" "Creole", "English", "German", "Hindi", "Igbo", "Fulani",
  "French", "Italian", "Japanese", "Mandarine", "Spanish", "Russian", "Yoruba" ];

function Langyage() {
  const [values, setValues] = useState("");
  const history = useHistory();

  const handleBackClick = () => {
      history.push('/welcome');
    };

  const handleNextClick = () =>{
    history.push('/Manage Social Media');
  }


  return(
    <>
    <div className="w-100" fluid expand="lg">
      <Navigation />
      <div>

      <section style={{marginTop:"50px"}}>
        <h2 className="title mg">
          Select Social Media Platforms You Would like to Manage
        </h2>
      </section>
      <section className="dashboard" style={{backgroundColor:"transparent"}}>
        {SOCIAL_OPTIONS.map((social, i) => <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          key={i}>{social}</Button>)}
          <div className="flex-start">
            <ReturnBtn
            onClick={handleBackClick}
            />
          </div>
          <div className="flex-end">
            <NextBtn
            onClick={handleNextClick}/>
          </div>
      </section>
      </div>
    </div>
    </>
   )
}

export default Language;
