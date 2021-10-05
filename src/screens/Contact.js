import React,{ useState ,useEffect} from 'react';

import Navigation from '../components/Navigation';

import Footer from '../components/Footer';
import Contactforus from './Contactforus.png'

function Contact(props) {


  return(
    <>
    <Navigation/>
    <br />
    <img
                alt=""
                src= {Contactforus}
                width="1064vh"
                height="340vh"
                
                // d-inline-block
                className="align-top"
              />{' '}
              &nbsp;
              <br /> 
    <Footer/>
    </>
    )
}

export default Contact