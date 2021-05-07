import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

function ReturnBtn(props){

  return(
    <div>
      <Button
      variant=""
      className="bat_btn_general btn_back gray"
      id="change the href target to the correct ones"
      onClick={props.onClick}
      type={props.type}
      >
        <span className="bold">
          Back
        </span>
      </Button>
    </div>
  )

}

export default ReturnBtn;
