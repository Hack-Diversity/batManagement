import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {NavbarDark} from '../../components/navbar';
import {Sidebar} from '../../components/sidebars';
import Footer from "../../components/layouts/Footer";

const DASHBOARD_OPTIONS = [
  "Overview", "Templates", "Manage Social Media",
  "Translation Settings", "Manage Subscription", "Settings"
];

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
    <div className="w-100" fluid expand="lg">
    <NavbarDark />
    <div className="welcome-side-nav">
    <Sidebar />
    <div className="welcome">
      <section className="welcome-container">
        <WelcomeCompany name="[Compant Name]" />
        <p className=" welcome_opt black_text">
          This is your administrator page,
          where you can manage your business' website
        </p>
        <p className="welcome_opt2 black_text">(Select from the options below or on the left)</p>
      </section>
      <section className="dashboard">
        {DASHBOARD_OPTIONS.map((dashOptions, i) => <Button
          type="button"
          className="bat_btn_general bat_btn_options"
          variant=""
          href={`/${dashOptions}`}
          key={i}>{dashOptions}</Button>)}
      </section>
      <Footer />
      </div>
    </div>
    </div>
    </>
   )
}

export default Welcome;
