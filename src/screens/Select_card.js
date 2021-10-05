import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Markup from '../screens/markup-icon.png';
import Card1 from '../screens/scr_img/1_after.png';
import Card2 from '../screens/scr_img/2_before.png';



function Select_card() {
  

  return(
    <>
    <Navigation/>
      <div style={{width:"150vh", margin:"0 auto"}}>

        <div style={{height:"7vh"}}></div>
        
        <Link to ='./Main'>
          <div className="row my-5">
          
            <img
              alt=""
              src= {Card1}
        
        // d-inline-block
              style={{width:"65vh", marginLeft:"8vh"}}
              />{' '}
              &nbsp;
            <br />

            <img
              alt=""
              src= {Card2}
        
        // d-inline-block
              style={{width:"65vh", marginLeft:"8vh"}}
              />{' '}
              &nbsp;
              <br />
          </div>
        </Link>

        <div style={{height:"2vh"}}></div>

        <div className="text-center">원하는 서비스 유형을 선택하세요.</div>

        <div style={{height:"10vh"}}></div>

      </div>
    <Footer/>
    </>
    )
}

export default Select_card