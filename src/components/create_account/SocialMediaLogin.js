import React from 'react';
import Layout from '../layouts/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SocialMediaLogin(){
  return(
      <Layout>
      <div style={{width:"100%", display:"content"}}>
        <h2 className="title">Login into Facebook</h2>
        <div style={{display:"contents", position:"relative", width:"", justifyContent:"space-around"}}>
        <Form id="create-account-form" style={{display:"grid", gridTemplateColumns:"30% 30%", gridGap:"25px", backgroundColor:"red"}}>
          <Form.Group>
            <Form.Label
            size="lg"
            className="start-form-label"
            >
              Email or Username:
            </Form.Label>
            <input
            type="email"
            name="email_or_username"
            value=""
            placeholder="Email or Username"
            className="createAccount_input"
            />
            <Form.Label
            size="lg"
            className="start-form-label centered"
            >
              Password:
            </Form.Label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            className="createAccount_input"
            />
            <div style={{margin:"20px 0px", display:"grid", position:"relative", gridTemplateColumns:"5% 95%", justifyContent:"space-between", alignItems:"center", backgroundColor:"orange"}}>
            <input
            type="radio"
            name="choice"
            value="Remeber Me"
            className="" style={{display:"inline", margin:"0px 0px"}}
            />
            <div style={{display:"grid", padding:"0px", margin:"0px", gridTemplateColumns:"50% 50%", position:"relative"}}>
              <div>Remember Me</div>
              <div style={{ textAlign:"right"}}>Forgot Password?</div>
            </div>
            </div>
          </Form.Group>
          <div>
          <div style={{width:"20px", height:"45%", borderRight:"1px solid black"}}></div>
          <div style={{width:"40px", height:"10%", border:"none", textAlign:"center"}}><h6 >Or</h6></div>
          <div style={{width:"20px", height:"45%", borderRight:"1px solid black"}}></div>
          </div>
        </Form>
        </div>
      </div>
      </Layout>
  )
};

export default SocialMediaLogin;
