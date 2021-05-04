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

//handles all of the above in one go, but needs to be properly defined
  const [values, setValues] = useState({
    icon: props.src,
    text:"",
    handleClick:""
  });

const OPTIONS = [
  { msg:"Overview", photo:`${overview}`},
  { msg:"Account", photo:`${lock}` },
  { msg:"Templates", photo:`${bulb}`},
  { msg:"Social Media", photo:`${social}` },
  { msg:"Translation", photo:`${globe}` },
  { msg:"Review", photo:`${bell}` },
  { msg:"Settings", photo:`${setting}` },
  { msg:"Subscription", photo:`${sub}` }
];

  return(
    <>
    <aside className="sidebar" style={{display:"grid", justifyContent:"space-around"}}>
      <ListGroup className="sidebar_list_ul">
        {OPTIONS.map((listItem, i) =>
          <ListGroup.Item
            className="sidebar_list"
            key={i}>
              {listItem.msg}
            <span>  <img className="nav-icons side-icon" src={listItem.photo} /> </span>
          </ListGroup.Item>
        )}
      </ListGroup>
    </aside>
    </>
  )
}

export default Sidebar;
