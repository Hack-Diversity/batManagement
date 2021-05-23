import React, {Component} from 'react';
import '../../App.css';
import Nav from '../navbar/Navigation';
import Footer from '../layouts/Footer';
import smoke from '../../assets/smoke2.png';

function Layout({children}){

  return(
    <>
    <Nav />
      {children}

    <Footer />
    </>
  );
}

export default Layout;
