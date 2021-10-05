import React, { useState, useEffect } from 'react';
import ChildModal from './index_child';
import ProgressSpinner from '../ProgressSpinner'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Analysis_modal(props) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ sectorInfo, setSectorInfo ] = useState(null);
    const [ progress, setProgress ] = useState(false);
    

    const fetchdata = async() => {
        const response = await axios('/api', {
          lat: props.mark.lat,
          lng: props.mark.lng,
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
    

    return (
        <React.Fragment>
            <div style={{backgroundColor:"#91D7CC", borderRadius:"0px 0px 20px 20px"}}>
                <button className = "p-2 my-3 text-center" onClick={ openModal } style = {{background:"#F36F56", width:"30%", border: "none"}}>상권정보 조회하기</button>
            {/* //header 부분에 텍스트를 입력한다. */}
            </div>
            
            <ChildModal open={ modalOpen } close={ closeModal } header="상권 분석 결과" progress={progress}>

                <div className="d-flex justify-content-center">
                    <ProgressSpinner progress={progress}/>
                </div>
                <br/>
                <Link to={{
                pathname: `/analysis/${props.industry}`,
                query:{ 
                    sectorInfo: sectorInfo
                }
                }}>
                <button >상세보기</button>
                </Link>
            </ChildModal>
        </React.Fragment>
    )
}

export default Analysis_modal