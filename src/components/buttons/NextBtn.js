import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

function NextBtn(){
  const [values, setValues] = useState("");
  const history = useHistory();

  const handleNextClick = () =>{
    history.push('/');
  };

  return(
    <div>
      <Button
      variant="secondary"
      className="bat_btn_general btn_next"
      id="change the href target to the correct ones"
      onClick={handleNextClick}
      type="submit"
      >
        <span className="bold">
          Next
        </span>
      </Button>
    </div>
  )

}

export default NextBtn;
