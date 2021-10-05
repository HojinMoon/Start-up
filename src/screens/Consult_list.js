import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Profile from '../components/Profile_card';
import { Link } from 'react-router-dom';
import Markup from '../icons/markup-icon.png';


const NavVarLine = {
  width:'100%',
  height: '0.1em',
  backgroundColor: 'lightgray'
}

const lineBoxStyle2 = {
  height:"25vh", 
  width:"40vh", 
  borderRadius:"15px", 
  border:"solid 1.5px gray"
}


function Consult_list(props) {

  return(
    <>
    <Navigation/>
    <div style = {NavVarLine}></div>

    <div className="text-center mt-5">

      <Link to ='/Consultant'>
        <img src={Markup}></img>
      </Link>
      <div className="my-3" style={{fontSize:"24px"}}>상권 컨설팅 전문가를 연결해 드려요</div>
      <div style={{width:"56vh", height:"7vh", margin:"0 auto", border:"4px solid #57c7b6", borderRadius:"15px", color:"gray", padding:"10px 0px 0px 10px", textAlign:"left"}}>검색어를 입력하세요.</div>


      <div style={{height:"7vh"}}></div>



      <div className = "row" style={{width:" 145vh", margin:"0 auto"}}>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"25vh", backgroundColor:"#CCEEE9", borderRadius:"12px 0px 0px 12px"}}>메 뉴</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8"}}>파일이</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8"}}>만료되서</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8"}}>글씨가</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8"}}>안보여요</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8"}}>교체필요</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"20vh", backgroundColor:"#F5F7F8",borderRadius:"0px 12px 12px 0px"}}>!!</div>

        <div style={{height:"13vh"}}></div>
        <div className = "mb-4" style={{height:"0.2em",width:"165vh", backgroundColor:"#9ADDD3"}}></div>

      <div style={{height:"5vh"}}></div>

      <div className="row" style={{width:"140vh", margin:"0 auto"}}>
        <div className="col-4">
          <Profile />
          <Profile />
          <Profile />
        </div>
        <div className="col-4">
          <Profile />
          <Profile />
          <Profile />
        </div>
        <div className="col-4">
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>

      <div style={{height:"10vh"}}></div>
       
      </div>
    </div>

    <Footer/>

    </>
    )
}

export default Consult_list