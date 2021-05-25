import React from 'react';
import Layout from '../components/layouts/Layout';

import facebook3 from '../assets/faceb3.png';
import facebook from '../assets/faceb.png';
import facebook2 from '../assets/faceb2.png';

function Facebook(){
  return(
    <>
    <Layout>
    <div className="missionContainer">
      <h1 className="title">SOCIAL MEDIA NEWS FEED</h1>
      <h6 className="w-100 justify-right">Easily share information with customers & get real time updates from your social media</h6>
      <div style={{display:"flex-around"}}>
        <div style={{width:"100vh", height:"100%", display:"contents", backgroundColor:"green", justifyContent:"center"}}>
            <img
            width="100vw"
            height="500px"
            src={facebook3} className="imageMission"></img>
          </div>
          <div style={{width:"100vw", height:"100%", display:"contents", backgroundColor:"green", justifyContent:"center"}}>
              <img
              width="100vw"
              height="510px"
              src={facebook2} className="imageMission"></img>
            </div>
        </div>

      </div>
    </Layout>
    </>
  )
}

export default Facebook;
