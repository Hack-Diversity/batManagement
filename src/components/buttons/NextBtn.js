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
      className="createAccount_btn_back"
      id="change the href target to the correct ones from Mari"
      onClick={handleNextClick}
      type="submit"
      >Next</Button>
    </div>
  )

}

export default NextBtn;
