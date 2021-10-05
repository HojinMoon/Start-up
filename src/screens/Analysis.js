import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Analysis_result from '../components/Analysis_result';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Markup from '../icons/markup-icon.png';


const NavVarLine = {
  width:'100%',
  height: '0.1em',
  backgroundColor: 'lightgray'
}


function Analysis(props) {

  return(
    <>
    <Navigation/>
    <div style = {NavVarLine}></div>
    {/* 페이지 제목. 나중에 컴포넌트로 분리해도 될듯 */}
    <div className="text-center my-3 py-5">
      <img alt="" src={Markup} style={{marginBottom:"15px"}}></img>
      <h3>우리동네 상권정보</h3>  
    </div>
    <Analysis_result sectorInfo = {props.location.query.sectorInfo} sector ={props.match.params.sector} />
    <div className="text-center my-2">
      <Link to="/Consult_list">
        <button className = "p-3 mb-5 text-center" style = {{background:"#1f2d59", width:"17%", border: "none", borderRadius:"13px"}}><span style={{fontSize:"18px"}}>상권 분석하기</span><br></br><span style={{color:"#CCF0EB"}}>상권 컨설팅 전문가 연결</span></button>
      </Link>
    </div>
    <Footer/>
    </>
    )
}

export default Analysis