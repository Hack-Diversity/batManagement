import React from 'react';
import Layout from '../components/layouts/Layout'

import shopLocal from '../assets/mps0.jpg';


const missionContainer={
  justifyContent:'flex-start',
  width:'100%',
  height:'auto',
  margin:'20px',
}

const imageMission = {
  width:'100%',
  height:'auto',
}

const missionStyle = {
  fontSize:'1.5rem',
  marginBottom:'1rem',
  marginTop:'50px',
};

const missionBody = {
  fontSize:'1.2rem',
  margin:'1.78rem',
  textAlign:'left',

};

function Mission(){
  return(
    <>
    <Layout>
    <div>
      <div style={missionContainer}>
        <h1 className="title">ABOUT US</h1>
          <h2 style={missionStyle}>What is it about coffee and books that makes life wonderful?</h2>
          <img src={shopLocal} style={imageMission}></img>
          <p style={missionBody}>Bat Team's Coffee Shop, is a local book store focused on community building through books, fair trade coffee, and local restaurers. It is targeted at booklovers, coffee drinkers, adventurers, curious cats, authors and you. It offers feature releases and a host of events including live readings and writing workshops. But our best known service is our artisinal brews and mouth watering pasteries.</p>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Mission;
