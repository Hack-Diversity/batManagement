import React, { Component } from "react";
import Posting from '../components/Posting';
import Layout from '../components/layouts/Layout';
import batLogo from "../assets/batLogo.jpg";
import temp from "../assets/temp.png";
import temp2 from "../assets/temp2.png";
import temp3 from "../assets/temp3.png";
import {NextBtn, ReturnBtn} from '../components/buttons';
import {useHistory} from 'react-router-dom';

import '../styles/cTemp.css';
import '../styles/styleCar.css';
import '../styles/myAdd.css';

function Price(){
    const history = useHistory();

    const handleBackClick = () => {
      history.push('/createAccount');
    };

    function handleNextClick(){
      history.push('/price');
    };

    return(
      <>
       <Layout>
          <head><title>PRICE</title></head>
          <body style={{display:"contents"}}>

            <section className="ftco-section">
              <div className="container">
                <div className="row centered">
                  <div className="col-md-12 text-center" >
                    <h2 className="heading-section mb-3"><b>Choose A Price</b></h2>
                  </div>
                  <div className="col-md-10">
                    <div className="featured-carousel owl-carousel">
                      <div className="item">
                        <div className="work">
                          <div className="img d-flex align-items-end justify-content-center white">
                            <div style={{display:"grid"}}>
                            <div className="text w-100" >
                              <span className="cat">Individual</span>
                              <h3><a href="#" className="bold">FREE </a></h3>
                            </div>
                              <ul className="sidebar_list_ul">
                                <li>
                                  Choose 1 Template
                                </li>
                                <li>
                                  Limit 1 Account
                                </li>
                                <li>
                                  Single Sign-On (SSO)
                                </li>
                              </ul>


                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="work">
                          <div className="img d-flex align-items-end justify-content-center" style={{backgroundImage:"url(images/work-2.jpg)"}}>
                          <div style={{display:"grid"}}>
                          <ul>
                            <li>
                              Choose 1-3 Templates
                            </li>
                            <li>
                              Limit 1-3 admin users
                            </li>
                            <li>
                              Translation Feature
                            </li>
                            <li>
                              Social Media Management
                            </li>
                            <li>
                              Single Sign-On (SSO)
                            </li>
                          </ul>
                            <div className="text w-100">
                              <span className="cat">Business</span>
                              <h3><a href="#" className="bold">&#x24;19.99<small>/month</small></a></h3>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="work">
                          <div class="img d-flex align-items-end justify-content-center" style={{backgroundImage: "url(images/work-3.jpg)"}}>
                          <div style={{display:"grid"}}>
                          <ul>
                            <li>
                              Unlimited Templates
                            </li>
                            <li>
                              Limit 1-10 admin users
                            </li>
                            <li>
                              Translation Feature
                            </li>
                            <li>
                              Social Media Management
                            </li>
                            <li>
                              Single Sign-On (SSO)
                            </li>
                          </ul>
                            <div class="text w-100">
                              <span className="cat">Corporate</span>
                              <h3><a href="#" className="bold">&#x24;59.99<small>/month</small></a></h3>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container col-md-10 d-flex centered">
                  <div className="gapped_10">
                    <ReturnBtn
                      type="submit"
                      name="Back"
                      onClick={handleBackClick}
                    />
                  </div>
                  <div className="">
                    <NextBtn
                      type="submit"
                      name="Next"
                      onClick={handleNextClick}
                    />
                  </div>
                </div>
              </div>
            </section>

            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.sticky.js"></script>
            <script src="js/main.js"></script>
          </body>
          </Layout>
          </>

    )};

export default Price;
