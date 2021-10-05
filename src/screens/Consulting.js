import React from 'react';
import Navigation from '../components/Navigation';
import Consulting_card from '../components/Consulting_card'
import Consulting_list from '../components/Consulting_list'
import Footer from '../components/Footer'


function Analysis() {
  return(
    <>
    <Navigation/>
    {/* 페이지 제목. 나중에 컴포넌트로 분리해도 될듯 */}
    <div className="text-center my-3 py-5" style = {{backgroundColor:"#57c7b6", color:"white"}}>
        <h1>컨설팅 목록</h1>
    </div>
    
    <div className = "container">
      <Consulting_list/>
    </div>
    <Footer/>
    </>
    )
}

export default Analysis