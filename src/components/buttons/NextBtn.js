import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

function NextBtn(props){
  return(
    <div>
      <Button
      variant="secondary"
      className="bat_btn_general btn_next"
      id="change the href target to the correct ones"
      type="submit"
      onClick = {props.onClick}
      >
        <span className="bold">
          Next
        </span>
      </Button>
    </div>
  )

}

export default NextBtn;
