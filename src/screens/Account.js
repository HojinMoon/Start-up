import React,{ useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Markup from '../screens/markup-icon.png';
import Card1 from '../screens/scr_img/1_after.png';
import Card2 from '../screens/scr_img/2_before.png';


function Account(props) {


  return(
    <>
    <Navigation/>
      
    <div style={{width:"120vh", margin:"0 auto"}}>

      <div style={{height:"10vh"}}></div>

        <img
          alt=""
          src= {Markup}
          width="40vh"
          height="vh"
        
        // d-inline-block
          style={{marginLeft:"57.5vh", marginBottom:"1vh"}}
          />{' '}
          &nbsp;
        <br />

        <div className="text-center" style={{fontSize:"1.2em", color:"#303030", marginBottom:"5vh"}}><b>회원가입</b></div>
          
        <div className="row my-5">
          <img
            alt=""
            src= {Card1}
        
        // d-inline-block
            style={{width:"45vh", marginLeft:"14vh"}}
            />{' '}
            &nbsp;
          <br />
          <img
            alt=""
            src= {Card2}
        
        // d-inline-block
            style={{width:"45vh", marginLeft:"6vh"}}
            />{' '}
            &nbsp;
          <br />
        </div>

        <div className="my-4" style={{textAlign:"center", fontSize:"1.1em", color:"#505050"}}>본인의 회원 유형을 선택하세요.</div>

        <Link to = './form_step1'>
          <Button className="my-5" style={{width:"16vh", height:"5vh", backgroundColor:"#1F2D59", fontSize:"1.2em", marginLeft:"50vh"}}>다음 단계</Button>
        </Link>

      </div> 

    <Footer/>
    </>
    )
}

export default Account