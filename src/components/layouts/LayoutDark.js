import React, {Component} from 'react';
import '../../App.css';
import NavDark from '../navbar/NavbarDark';
import Footer from '../layouts/Footer';
import smoke from '../../assets/smoke2.png';

function Layout({children}){

  return(
    <>
    <NavDark />
      {children}
    <Footer />
    </>
  );
}

export default Layout;
