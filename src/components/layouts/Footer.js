import React from 'react';
import '../../App.css';
import batLogo from "../../assets/batLogo.jpg";

import {Instagram, Twitter, Pintrest, Facebook, Yelp, Snapchat, Tiktok} from '../../assets';

const FooterData = ["About", "Term", "Privacy", "Security", "Docs"];
const SocialMediaIcons = [Instagram, Twitter, Pintrest, Facebook, Yelp, Snapchat, Tiktok];
const Links = ["instagram", "twitter", "pintrest", "facebook", "yelp", "snapchat", "tiktok"];

function socialLinks(){
  const Links = ["instagram", "twitter", "pintrest", "facebook", "yelp", "snapchat", "tiktok"];
  return (<a> {Links.map((target, y) => (<a href={`www.${target}.com`} />))}</a>)
}

function Footer(){
  return(
    <>
    <footer className="footerContainer">
      <div className="footerTop">
        <div className="footerTop_left">
          <div className="flex-start">
            <img src={batLogo} className="footer_Logo"/>
          </div>
          <div className="flex-around">
            {FooterData.map((footerTabs, index) =>
              <div>
                <ul className="footer_list">
                  <li key={index}>{footerTabs}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div style={{border:"none", display:"flex", justifyContent:"space-around"}}>
        {SocialMediaIcons.map((images, x) =>
            <a>
            <img
            width="30px"
            height="30px"
            src={images}
            href="www.google.com"
            alt ={`${images} icon`}
            key={x}/>
            </a>
        )}
        </div>
      </div>
      <div className="footerText">
        <h6>BatManagement 101 Commonwealth Ave, Boston, MA 02122</h6>
        <h6>617-533-8677 <span> batManagement@gmail.com</span></h6>
      </div>
      <div className="footerText">
        <small className="copyRight">&copy; Copyright 2021 deHack21_Bat All Rights Reserved</small>
      </div>

    </footer>
    </>
  )}

export default Footer;
