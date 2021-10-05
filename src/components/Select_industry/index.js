import React from 'react';
import Button from 'react-bootstrap/Button';
import "./index.css";
import Icon1 from "../Select_industry/menu-icon/전체.png"
import Icon2 from "../Select_industry/menu-icon/치킨피자.png"
import Icon3 from "../Select_industry/menu-icon/한식.png"
import Icon4 from "../Select_industry/menu-icon/양식.png"
import Icon5 from "../Select_industry/menu-icon/분식.png"
import Icon6 from "../Select_industry/menu-icon/제과.png"
import Icon7 from "../Select_industry/menu-icon/카페.png"
import Icon8 from "../Select_industry/menu-icon/기타.png"


function Select_industry(props) {  
  
  const changeIndustry_전체 = () => {
    props.setIndustry("전체")
  };

  const changeIndustry_치킨피자 = () => {
    props.setIndustry("치킨피자")
  };

  const changeIndustry_한식 = () => {
    props.setIndustry("한식")
  };

  const changeIndustry_양식 = () => {
    props.setIndustry("양식")
  };

  const changeIndustry_분식 = () => {
    props.setIndustry("분식")
  };

  const changeIndustry_제과 = () => {
    props.setIndustry("제과")
  };

  const changeIndustry_카페 = () => {
    props.setIndustry("카페")
  };

  const changeIndustry_기타 = () => {
    props.setIndustry("기타")
  };

 


    return(
    <div>

      <div className = "row mt-3 mx-2">
         <div className = "col-3"><button className = "btn-big-blue" onClick={changeIndustry_전체}><img src={Icon1} style={{width: "60%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-yellow" onClick={changeIndustry_치킨피자}><img src={Icon2} style={{width:"100%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-blue" onClick={changeIndustry_한식}><img src={Icon3} style={{width:"90%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-red" onClick={changeIndustry_양식}><img src={Icon4} style={{width:"95%"}}></img></button></div>
       </div>
       <div className = "row my-1 mx-2">
         <div className = "col-3" style={{fontSize:"13px"}}>전 체</div>
         <div className = "col-3" style={{fontSize:"13px"}}>치킨 피자</div>
         <div className = "col-3" style={{fontSize:"13px"}}>한 식</div>
         <div className = "col-3" style={{fontSize:"13px"}}>양 식</div>
       </div>
       <div className = "row mt-3 mx-2">
         <div className = "col-3"><button className = "btn-big-blue" onClick={changeIndustry_분식}><img src={Icon5} style={{width:"80%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-yellow" onClick={changeIndustry_제과}><img src={Icon6} style={{width:"80%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-blue" onClick={changeIndustry_카페}><img src={Icon7} style={{width:"60%"}}></img></button></div>
         <div className = "col-3"><button className = "btn-big-red" onClick={changeIndustry_기타}><img src={Icon8} style={{width:"70%"}}></img></button></div>
       </div>
       <div className = "row my-1 mx-2">
         <div className = "col-3" style={{fontSize:"13px"}}>분 식</div>
         <div className = "col-3" style={{fontSize:"13px"}}>제 과</div>
         <div className = "col-3" style={{fontSize:"13px"}}>카 페</div>
         <div className = "col-3" style={{fontSize:"13px"}}>기 타</div>
       </div>
       
      <p className= "mt-5">현재 선택하신 업종은 <strong>"{props.industry}"</strong>입니다. </p>
      
    
    </div>
    
    )}

export default Select_industry;