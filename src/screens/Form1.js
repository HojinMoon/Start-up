import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Markup from '../screens/markup-icon.png';
import Arrow1 from '../screens/scr_img/step1_after.png';
import Arrow2 from '../screens/scr_img/step2,3_before.png';
import Arrow3 from '../screens/scr_img/step4_before.png';



function Form1(props) {


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
          
        <div className="row">
          <img className="col-3" src={Arrow1} height="50vh"></img>
          <img className="col-3" src={Arrow2} height="50vh"></img>
          <img className="col-3" src={Arrow2} height="50vh"></img>
          <img className="col-3" src={Arrow3} height="50vh"></img>
        </div>

        <Button className="my-5" style={{width:"18vh", height:"7vh", backgroundColor:"#1F2D59", fontSize:"1.2em", marginLeft:"50vh"}}>다음 단계</Button>

      </div> 

    <Footer/>
    </>
    )
}

export default Form1