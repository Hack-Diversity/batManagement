import React, {Component} from 'react';
import '../../App.css';
import Nav from '../navbar/Navigation';
import Footer from '../layouts/Footer';


function Layout({children}){

  return(
    <>
    <Nav />
      {children}
    </>
  );
}

export default Layout;
