import React from 'react';
import Layout from '../components/layouts/Layout'

import shopLocal from '../assets/mps0.jpg';

function Mission(){
  return(
    <>
    <Layout>
    <div className="missionContainer">
      <h1 className="title">OUR MISSION</h1>
      <h3 className="w-100">Think globally, act & buy locally</h3>
      <div style={{width:"70vh", height:"70vh", display:"contents", backgroundColor:"green", justifyContent:"center"}}>
        <img src={shopLocal} className="imageMission"></img>
      </div>
      <div className="missionStyle">
        <h3><bold>Definition of <i>gentrification</i></bold></h3>
        <blockquote cite="https://www.merriam-webster.com/dictionary/gentrification">
          : a process in which a poor area (as of a city) experiences
          an influx of middle-class or wealthy people who renovate and
          rebuild homes and businesses and which often results in an
          increase in property values and the displacement of earlier,
          usually poorer residents.
        </blockquote>
        <small>"gentrification." <i>Merriam-Webster.com. </i>2021. https://merriam-webster.com (4 May 2021)</small>
        </div>
          <author></author>
      </div>
    </Layout>
    </>
  )
}

export default Mission;
