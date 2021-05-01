import React from 'react';
import Container from 'react-bootstrap/Container';
import WelcomeMain from '../components/welcome/WelcomeMain';
import Sidebar from '../components/welcome/Sidebar';
import Layout from '../components/layouts/Layout'

function Welcome() {
  return(
    <>
    <Layout>
      <div className="welcome">
      <Sidebar />
      <WelcomeMain />
    </div>
    </Layout>
    </>
   )
}

export default Welcome;
