import React from 'react';
import Layout from '../layouts/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';

const handleLogin = async googleData =>{
  const res = await fetch('/api/v1/auth/google', {
    method:"POST",
    body: JSON.stringify({
      token:googleData.tokenId
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()
  //
}


function SocialMediaLogin(){
  return(
      <Layout className="w-100 flex-around">
        <h2 className="title">Login into Facebook</h2>
        <div className="login">
        <div className="loginContainer">
        <Form className="loginInput" >
          <Form.Group>
            <Form.Label
            size="lg"
            className="form-label"
            >
              Email or Username:
            </Form.Label>
            <input
            type="email"
            name="email or username"
            value=""
            placeholder="Email or Username"
            className="createAccount_input"
            />
            <Form.Label
            size="lg"
            className="start-form-label"
            >
              Password:
            </Form.Label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            className="createAccount_input"
            />
            <div className="radio">
            <input
            type="radio"
            name="choice"
            value="Remeber Me"
            />
            <div className="radio_text">
                Remember Me
                  <span className="forgot">
                    Forgot Password?
                    </span>
              </div>
            </div>
            <Button
              variant=""
              className="bat_btn_large btn_login_large purple bold">
                Login Now
              </Button>

          </Form.Group>
          <div>
            <div className="divider"></div>
            <div className="divider_middle"><h6> Or </h6></div>
            <div className="divider "></div>
          </div>
          <div style={{ display:"flex", position:"relative", alignItems:"center" }}>
          <div  style={{width:"100%!important", position:"relative", display:"", color:"green!important"}}>
            <GoogleLogin
              className="bat_btn_large btn-google"
              clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
            />
              <small>Don't have an account?
                <span> Join for free</span>
              </small>
              </div>
            </div>
        </Form>
        </div>
        </div>
      </Layout>
  )
};

export default SocialMediaLogin;
