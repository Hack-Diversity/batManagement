import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sidebar_Personalize} from '../sidebars';
import {Navigation} from '../navbar';
import {NextBtn, ReturnBtn} from '../../components/buttons';
import {useHistory} from 'react-router-dom';
import store from '../../assets/store.png';


function Sidebar_Personal(props){

  const PERSONAL_OPTIONS = [ "DESIGN", "Logo & Title", "Template", "Background Colors"];
  const history = useHistory();

  function handleSaveClick(){
    history.push('/welcome');
  };

  function handleCancelClick(){
    history.push('/');
  };

    return(
      <div className="personalContainer">
        <ListGroup className="personal_Listgroup">
          <div className="personal_options">
          {PERSONAL_OPTIONS.map((personalItems, i) =>
            <div className="personal_options_mapped">
            <a href={`/${personalItems.replace(" ", "")}`}>
            <ListGroup.Item
              className="sidebar_list"
              key={i}>
              <div className="listGroupItem_span">
                {personalItems}
              </div>
            </ListGroup.Item>
            </a>
            </div>
          )}
          </div>
          <div className="btn_personal">
          <div>
          <NextBtn
            type="submit"
            name="Save"
            onClick={handleSaveClick}
          />
          </div>
          <div className="m-top-10">
          <ReturnBtn
            type="submit"
            name="Cancel"
            onClick={handleCancelClick}
          />
          </div>
          </div>
        </ListGroup>
        <div>
        <div className="title"> Now it's time to personalize your website</div>
        <div style={{display:"grid", gridTemplateColumns:"40% 60%", justifyContents:"space-around"}}>
          <div style={{display:"inline-flex"}}>
            <img
            width="30px"
            height="30px"
            src={store}/>
            <span><h6>BHO GIRL</h6></span>
          </div>
          <div><ul style={{listStyle:"none", display:"flex", justifyContent:"space-between"}}>
            <li>About</li>
            <li>Sales</li>
            <li>Location</li>
            <li>Order</li>
          </ul></div>
        </div>
        <div
          style={{width:"100%", backgroundColor:"white", height:"100%", display:"contents", justifyContent:"space-around"}}
          >
          <div style={{display:"inline-flex"}}>
            <img
              width="80%"
              src={store}>
            </img>
          </div>
          <div style={{display:"inline", position:"", }}>
            <h5>Welcome to BHO GIRL Shop</h5>
          </div>
          </div>
        </div>
      </div>
    )};

function PersonalizeSite(props){
    return(
      <>
        <Navigation />
        <Sidebar_Personal />
      </>
  )
}

export default PersonalizeSite;
