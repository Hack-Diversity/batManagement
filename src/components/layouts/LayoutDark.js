import React, {Component} from 'react';
import '../../App.css';
import NavDark from '../navbar/NavbarDark';
import Footer from '../layouts/Footer';


function Layout({children}){

  return(
    <>
    <NavDark />
      {children}
    </>
  );
}

export default Layout;
