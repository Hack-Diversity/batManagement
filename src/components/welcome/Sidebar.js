import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import '../../App.css';

function Sidebar(props){
  const [icon, setIcon] = useState(props.src);
  const [text, setText] = useState("");
  const [onClick, setClick] = useState(props.onClick);

//handles all of the above in one go, but needs to be properly defined
  const [values, setValues] = useState({
    icon: props.src,
    text:"",
    handleClick:""
  });


  return(
    <>
    <aside className="sidebar" style={{display:"grid", justifyContent:"space-around"}}>
      <ul className="sidebar_list_ul">
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Overview
        </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Account
        </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Teplates
        </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Social Media
        </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Translation
        </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Review
        </li>
        <li
          className="sidebar_list" >
            {icon}
            {text}
            {onClick}
            Settings
          </li>
        <li
          className="sidebar_list">
            {icon}
            {text}
            {onClick}
            Subscription
        </li>
      </ul>
    </aside>
      </>
  )
}

export default Sidebar;
