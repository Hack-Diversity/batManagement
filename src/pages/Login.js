import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <form className="login-form">
        <label >Username
          <input type="text" />
        </label>
        <label>Password
          <input type="text" />
        </label>
      </form>
    );
  };

};

export default Login;
