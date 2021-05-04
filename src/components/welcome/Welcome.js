import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import NavDark from '../../components/navbar/NavbarDark';
import Sidebar from '../welcome/Sidebar';

function WelcomeCompany(props){
  return (
    <h3 className={props.className}>
      <span className="bold">
        Welcome
      </span>,
      {props.name}
    </h3>
  )}

function Welcome() {

  return(
    <>
    <div className="w-100" fluid expand>
    <NavDark />
    <div className="welcome-side-nav">
    <Sidebar />
    <div className="welcome">
      <section className="welcome-container">
        <WelcomeCompany name="[Compant Name]" />
        <p className="mg">
          This is your administrator page,
          where you can manage your business' website
        </p>
        <p className="small">(Select from the options below or on the left)</p>
      </section>
      <section className="welcome-dashboard">
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >
          Overview
        </Button>
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >
          Manage Social Media
        </Button>
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >Manage Subscription
        </Button>
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >
          Template
        </Button>
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >Translation Settings
        </Button>
        <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          >Settings
        </Button>
      </section>
      </div>
    </div>
    </div>
    </>
   )
}

export default Welcome;
