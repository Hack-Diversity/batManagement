import React, {Component} from 'react';
import Layout from '../components/layouts/Layout'

class Login extends Component{
  render(){
    return(
      <Layout>
      <form className="login-form">
        <label >Username
          <input type="text" />
        </label>
        <label>Password
          <input type="text" />
        </label>
      </form>
      </Layout>
    );
  };

};

export default Login;
