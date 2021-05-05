import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import bell from "../../assets/notificationIcon.svg";
import lock from "../../assets/lock.svg";
import bulb from "../../assets/bulb.svg";
import social from "../../assets/social.svg";
import setting from "../../assets/settings.svg";
import globe from "../../assets/globe.svg";
import sub from "../../assets/sub.svg";
import overview from "../../assets/ove.svg";

function Sidebar(props){

const OPTIONS = [
  { option:"Overview", photo:`${overview}`},
  { option:"Account", photo:`${lock}` },
  { option:"Templates", photo:`${bulb}`},
  { option:"Social Media", photo:`${social}` },
  { option:"Translation", photo:`${globe}` },
  { option:"Review", photo:`${bell}` },
  { option:"Settings", photo:`${setting}` },
  { option:"Subscription", photo:`${sub}` }
];

  return(
    <>
    <aside className="sidebar" style={{display:"grid", justifyContent:"space-around"}}>
      <ListGroup className="sidebar_list_ul">
        {OPTIONS.map((listItem, i) =>
          <a href={`/${listItem.option.replace(" ", "")}`}>
          <ListGroup.Item
            className="sidebar_list"
            key={i}>
            <span className="listGroupItem_span">
              <img
                className="nav-icons side-icon"
                src={listItem.photo}
                />
              {listItem.option}
            </span>
          </ListGroup.Item>
          </a>
        )}
      </ListGroup>
    </aside>
    </>
  )
}

export default Sidebar;
