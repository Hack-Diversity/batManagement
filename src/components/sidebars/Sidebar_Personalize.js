import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar_Personalize(props){
  const PERSONAL_OPTIONS = [ "DESIGN", "Logo & The Template", "Background Colors"];

    return(
        <>
        <aside className="sidebar" style={{display:"grid", backgroundColor:"bisque", justifyContent:"space-around"}}>
          <ListGroup className="sidebar_list_ul">
            {PERSONAL_OPTIONS.map((personalItems, i) =>
              <a href={`/${personalItems.replace(" ", "")}`}>
              <ListGroup.Item
                className="sidebar_list"
                key={i}>
                <span className="listGroupItem_span">
                  {personalItems}
                </span>
              </ListGroup.Item>
              </a>
            )}
          </ListGroup>
        </aside>
      </>
  )
}

  export default Sidebar_Personalize;
