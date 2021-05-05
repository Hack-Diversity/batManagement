import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

function ReturnBtn(){
  const [values, setValues] = useState("");
  const history = useHistory();

  const handleNextClick = () =>{
    history.push('/welcome');
  };

  return(
    <div>
      <Button
      variant=""
      className="bat_btn_general btn_back gray"
      id="change the href target to the correct ones from Mari"
      onClick={handleNextClick}
      type="submit"
      >
        <span className="bold">
          Back
        </span>
      </Button>
    </div>
  )

}

export default ReturnBtn;