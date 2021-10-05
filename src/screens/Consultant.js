import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

 

const NavVarLine = {
  width:'100%',
  height: '0.1em',
  backgroundColor: 'lightgray'
}

const lineBoxStyle1 = {
  height:"32vh", 
  width:"32vh", 
  borderRadius:"15px", 
  border:"solid 1.5px gray"
}

const lineBoxStyle2 = {
  height:"25vh", 
  width:"42vh", 
  borderRadius:"15px", 
  border:"solid 1.5px gray"
}


function Consultant(props) {

  return(
    <>
    <Navigation/>
    <div style = {NavVarLine}></div>
    
    <div style={{margin: "0 auto", width: "150vh"}}>

      <div style={{height:"10vh"}}></div>

      <div className = "row" style={{height:"35vh", width:"75vh", borderRadius: "25px", border:"solid 2px white", backgroundColor:"#EEF8F6", margin: "0 auto"}}>
        
        <div style={{height:"25vh", width:"32vh", borderRadius: "15px", border:"solid 2px gray", marginTop:"2.2em", marginLeft:"2.5em"}}></div>

        <div className = "text-center col-2 mx-2" style={{width:"35vh"}}>
          <div style={{fontSize:"20px", margin:"4vh 2vh 1vh 0"}}>상권 컨설업체</div>
          <div style={{margin:"1vh 4vh 2vh 2vh"}}>★★★★☆ 4.5<span style={{fontSize:"12px"}}> (25개의 평가)</span></div>
          <div className = "row">
            <div className = "col-2" style={{width:"17vh", color:"#3DB7CC", fontSize:"13px"}}>평균 응답시간</div>
            <div className = "col-2" style={{width:"17vh", color:"#3DB7CC", fontSize:"13px"}}>작업 횟수</div>
          </div>
          <div className = "row mt-1 mb-4">
            <div className = "col-2" style={{width:"17vh", fontSize:"14px"}}>평균 1시간 내외</div>
            <div className = "col-2" style={{width:"17vh", fontSize:"15px"}}>125회</div>
          </div>
          <button>버튼 수정 예정</button>
        </div>

      </div>

      <div style={{height:"10vh"}}></div>

      <div className = "row mx-1">
        <div className = "text-center py-2" style={{fontSize:"15px", width:"25vh", backgroundColor:"#CCEEE9", borderRadius:"15px 0px 0px 0px"}}>소 개</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"25vh", backgroundColor:"#F5F7F8"}}>포트폴리오</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"25vh", backgroundColor:"#F5F7F8"}}>제공 서비스</div>
        <div className = "text-center py-2" style={{fontSize:"15px", width:"25vh", backgroundColor:"#F5F7F8", borderRadius:"0px 15px 0px 0px"}}>평 가</div>
      </div>

      <div className = "mb-4" style={{height:"0.2em",width:"150vh", backgroundColor:"#9ADDD3"}}></div>
      <h3>소개</h3>
      <h6>간단한 소개</h6>
      <div style={{height:"20vh"}}></div>

      <div className = "mb-4" style={{height:"0.2em", width:"150vh", backgroundColor:"lightgray"}}></div>
      <h6>포트폴리오 (4)</h6>
      <div className = "row mx-2 mt-3">
        <div className = "mx-3 mt-3" style={lineBoxStyle1}></div>
        <div className = "mx-3 mt-3" style={lineBoxStyle1}></div>
        <div className = "mx-3 mt-3" style={lineBoxStyle1}></div>
        <div className = "mx-3 mt-3" style={lineBoxStyle1}></div>
      </div>

      <div style={{height:"10vh"}}></div>
      <div className = "mb-4" style={{height:"0.2em", width:"150vh", backgroundColor:"lightgray"}}></div>

      <h6>제공 서비스 (6)</h6>
      <div className = "row mx-2 mt-3">
        <div className = "mx-4 my-3" style={lineBoxStyle2}></div>
        <div className = "mx-4 my-3" style={lineBoxStyle2}></div>
        <div className = "mx-4 my-3" style={lineBoxStyle2}></div>
      </div>

      <div className = "row mx-2">
        <div className = "mx-4" style={{width:"42vh"}}>
          <div style={{fontSize:"12px"}}>Analyist</div>
          <div style={{fontSize:"19px"}}>배달 업종 상권 컨설팅 해드립니다.</div>
          <div style={{fontSize:"21px", textAlign:"right"}}>5,000원~</div>
          <div style={{fontSize:"13px", textAlign:"right"}}>★ 4.5 (25개의 평가)</div> 
        </div>
        <div className = "mx-4" style={{width:"42vh"}}>
          <div style={{fontSize:"12px"}}>Analyist</div>
          <div style={{fontSize:"19px"}}>배달 업종 상권 컨설팅 해드립니다.</div>
          <div style={{fontSize:"21px", textAlign:"right"}}>5,000원~</div>
          <div style={{fontSize:"13px", textAlign:"right"}}>★ 4.5 (25개의 평가)</div> 
        </div>
        <div className = "mx-4" style={{width:"42vh"}}>
          <div style={{fontSize:"12px"}}>Analyist</div>
          <div style={{fontSize:"19px"}}>배달 업종 상권 컨설팅 해드립니다.</div>
          <div style={{fontSize:"21px", textAlign:"right"}}>5,000원~</div>
          <div style={{fontSize:"13px", textAlign:"right"}}>★ 4.5 (25개의 평가)</div> 
        </div>
      </div>

      <div style={{height:"5vh"}}></div>
      <div className = "mb-4" style={{height:"0.2em", width:"150vh", backgroundColor:"lightgray"}}></div>
      <h5>서비스 평가</h5>
      <div>★★★★☆ 4.5<span style={{fontSize:"12px"}}> (25개의 평가)</span></div>
      <div style={{textAlign:"right", fontSize:"14px"}}>최신순 | 별점 높은 순 | 별점 낮은 순</div>
      <div style={{height:"20vh"}}></div>



      
    </div>
    <Footer/>

    </>
    )
}

export default Consultant