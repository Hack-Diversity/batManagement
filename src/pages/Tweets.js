import React from 'react';
import Layout from '../components/layouts/Layout';

import twitter from '../assets/tweet.png';
import twitter2 from '../assets/tweet2.png';

function Twitter(){
  return(
    <>
    <Layout>
    <div className="missionContainer container">
      <h1 className="title">SOCIAL MEDIA NEWS FEED</h1>
      <h6 className="w-100">Easily share information with customers & get real time updates from your social media</h6>
      <div className="centered">
        <div className="flex-around">
          <div style={{display:"grid", gridTemplateColumns:"40% 40%", position:"relative", justifyConents:"space-around"}}>
            <div style={{width:"100vw", height:"100%", display:"grid", backgroundColor:""}}>
                <img
                width=""
                height="560px"
                src={twitter} className="imageMission"></img>
              </div>
              <div style={{width:"100vw", height:"100%", display:"grid", backgroundColor:""}}>
                  <img
                  width=""
                  height="560px"
                  src={twitter2} className="imageMission"></img>
                </div>
            </div>
            </div>
          </div>
      </div>
    </Layout>
    </>
  )
}

export default Twitter;
