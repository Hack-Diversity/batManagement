import React, {useState} from 'react';
import axios from 'axios';
import CreateAccount from './create_account/CreateAccount';

const TweetBox = (props) =>{
  return(
    <div className="tweet-body">
    {props.children}
    </div>
  )
}

const Image = (props) =>{
  return(
    <img
      src={props.image}
      alt="Logo_twitter"
      className="picture_twitter"/>
  )
}

const handleTwit = (props) =>{
  return(
    <div className="handleTwit">
    {props.handleTwitt}
    </div>
  )
}

const NameTwit = (props) =>{
  return(
    <div className="name_twit">
    {props.nameTwit}
    </div>
  )
}

const Tweet=(props)=>{
  return(
    <div className="tweet">
    {props.tweet}
    </div>
  )
}

function Posting(){
  return(
    <div>Coming Soon!</div>
  )
}
export default Posting;
