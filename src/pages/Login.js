import React from 'react';
import Layout from '../components/layouts/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { RefreshTokenSetup } from '../api';
const tokenId = '1013844202712-kbs44e7uh1h7dch1lsj7jt6i3msntetj.apps.googleusercontent.com';

  const onSuccess = (response) =>{
    console.log("Login Success: Current User: ", response.profileObj);
    RefreshTokenSetup(response);
  };

  const onFailure = (response) =>{
    console.log("Login failed: Response", response);
  };
  //



function Login(){
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
              <small>
                Remember Me
              </small>
                  <span className="forgot">
                    <small>
                      <a>Forgot Password?</a>
                    </small>
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
              clientId={tokenId}
              buttonText="Log in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            />

              <div>
                <small>Don't have an account?
                  <span><a href="https://accounts.google.com/ServiceLogin/signinchooser?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    Join for free</a>
                  </span>
                  </small>
                </div>
              </div>
            </div>
        </Form>
        </div>
        </div>
      </Layout>
  )
};

export default Login;
