import React from 'react';
import Layout from '../components/layouts/Layout'

import shopLocal from '../assets/mps0.jpg';


const missionContainer={
  width:'100%',
  height:'auto',
  margin:'20px',
}

const imageMission = {
  width:'35rem',
  height:'auto',
  display:"flex",
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
          <h2 style={missionStyle}>Think globally, act & buy locally</h2>
          <div style={{display:"contents", justifyContents:"center!important"}}>
            <img src={shopLocal} style={imageMission}></img>
          </div>
          <h3 style={{margin:'1.78rem'}}>
            <bold>Definition of <i>gentrification</i></bold>
          </h3>
          <p style={missionBody}>
            : a process in which a poor area (as of a city) experiences
            an influx of middle-class or wealthy people who renovate and
            rebuild homes and businesses and which often results in an
            increase in property values and the displacement of earlier,
            usually poorer residents.
          </p>
          <author></author>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Mission;
