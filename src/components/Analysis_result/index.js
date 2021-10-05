import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import SectorInfoCard from '../SectorInfoCard'
import ModalChild from './index_child';
import axios from 'axios';

function Analysis_result(props) {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ sectorInfo, setSectorInfo ] = useState(null);
  const [ progress, setProgress ] = useState(false);
  

  const fetchdata = async() => {
      const response = await axios('/api', {
        
      });
      setSectorInfo(response.data)
      setTimeout(setProgress(true),5000)
    };

  const openModal = () => {
      // alert('데이터 보내기')
      //여기서 백엔드? 다른 서버로 데이터 보내서 분석 후 callback 받으면 결과 페이지를 띄워야할듯
      setModalOpen(true);
      fetchdata();
      
  }   
  const closeModal = () => {
      setProgress(false)
      setTimeout(setModalOpen(false),1000)
  }

  const card_height = {
    height: "30vh",
    margin: "10px",
  }

  const mapToComponent = data => {
    return Object.keys(data).map((sector, i) => {
      return (<SectorInfoCard sector={data[sector]} key={i}/>);
    });
  };  

    return (
        <>
          <div className = "container text-center">
            <div className = "row my-1">
                <div className ="col-6">
                  <Card>
                  <Card.Header style={{backgroundColor:"#CCF0EB"}}><h4>😉 고객층 😉</h4></Card.Header>
                  <Card.Body style = {card_height}>
                      <Card.Text>
                        해당 지역 거주 인구는 <strong>5,156명</strong>입니다. 
                      </Card.Text>
                  </Card.Body>
                  </Card>
                </div>
                <div className ="col-6">
                  <Card>
                  <Card.Header style={{backgroundColor:"#CCF0EB"}}><h4>🏍 라이더 🏍</h4></Card.Header>
                  <Card.Body style = {card_height}>
                      <Card.Text>
                        해당 지역 라이더는 <strong>21명</strong>이며, 가장 주문이 많은 시간은 <strong>8PM</strong>입니다. <br></br><br></br>
                                                
                        {/* 모달 */}
                        <React.Fragment>
                          <button className = "p-3 text-center" onClick={ openModal } style = {{background:"#57c7b6", width:"30%", border: "none",}}>동일업종리스트</button>
                          {/* //header 부분에 텍스트를 입력한다. */}
                          <ModalChild open={ modalOpen } close={ closeModal } header="상권 분석 결과" progress={progress}>

                              <div className="d-flex justify-content-center">
                                <row>{mapToComponent(props.sectorInfo)}</row>
                              </div>
                              
                          </ModalChild>
                      </React.Fragment>

                      </Card.Text>
                  </Card.Body>
                  </Card>
                </div>
            </div>

            <div style={{height:"20px"}}></div>

            <div className = "row mb-5">
                <div className ="col-6">
                  <Card>
                  <Card.Header><h4>👀 경쟁업체 👀</h4></Card.Header>
                  <Card.Body style = {card_height}>
                      <Card.Text>
                        내용 미정
                      </Card.Text>
                  </Card.Body>
                  </Card>
                </div>
                <div className ="col-6">
                  <Card>
                  <Card.Header><h4>⭐ 리뷰 ⭐️</h4></Card.Header>
                  <Card.Body style = {card_height}>
                      <Card.Text>
                       내용 미정
                      </Card.Text>
                  </Card.Body>
                  </Card>
                </div>
            </div>
            
          </div>

          
      </>
    )
}

export default Analysis_result;