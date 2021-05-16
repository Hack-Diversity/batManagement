import React, {Component} from 'react';
import Layout from '../components/layouts/Layout'

class Login extends Component{
  render(){
    return(
      <Layout>
      <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", backgroundColor:"azure"}}>
      <div style={{width:"80%", backgroundColor:"blanchedalmond", display:"flex", justifyContent:"space-around", margin:"0px"}}>
      <form className="" style={{display:"grid", gridTemplateColumns:"40% 40%", gridGap:"25px", justifyContent:"space-around"}}>
        <label className="bold" style={{display:"block"}}>
            Username
          <input
            type="text"
            onClick
            />
        </label>
        <label className="bold">
            Password
          <input
            type="password"
            onClick
            />
        </label>
      </form>
      </div>
      </div>
      </Layout>
  )};
};

export default Login;
