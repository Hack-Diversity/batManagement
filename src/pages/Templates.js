import React from 'react';
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


function Template(){
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/createAccount');
  };

  function handleNextClick(){
    history.push('/personalize');
  };

  return(
    <>
    <Layout>
    <head><title>TEMPLATE</title></head>
    <body style={{display:"contents"}}>

      <section className="ftco-section">
        <div className="container">
          <div className="row centered">
            <div className="col-md-12 text-center" >
              <h2 className="heading-section mb-3"><b>Choose A Template</b></h2>
            </div>
            <div className="col-md-10">
              <div className="featured-carousel owl-carousel">
                <div className="item">
                  <div className="work">
                    <div className="img d-flex align-items-end justify-content-center white">
                      <div style={{display:"grid"}}>
                        <img
                          style={{display:"flex", justifyContent:"center"}}
                          width="100%"
                          height="400px"
                          src={temp}/>
                        <div className="text w-100" >
                          <span className="cat">Web Design</span>
                          <h3><a href="#">Template 1</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="work">
                    <div className="img d-flex align-items-end justify-content-center" style={{backgroundImage:"url(images/work-2.jpg)"}}>
                    <div style={{display:"grid"}}>
                      <img
                        style={{display:"flex", justifyContent:"center"}}
                        width="100%"
                        height="400px"
                        src={temp2}/>
                      <div className="text w-100">
                        <span className="cat">Web Design</span>
                        <h3><a href="#">Template 2</a></h3>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="work">
                    <div class="img d-flex align-items-end justify-content-center" style={{backgroundImage: "url(images/work-3.jpg)"}}>
                    <div style={{display:"grid"}}>
                      <img
                        style={{display:"flex", justifyContent:"center"}}
                        width="100%"
                        height="420px"
                        src={temp3}/>
                      <div class="text w-100">
                        <span className="cat">Web Design</span>
                        <h3><a href="#">Template 3</a></h3>
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


export default Template;
