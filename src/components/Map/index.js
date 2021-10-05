import React, { useState, useRef } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function Map(props) {
  const navermaps = window.naver.maps;
  const naverMapRef = useRef();

  const onClick = (e) => {
    const { _lat, _lng } = e.latlng;
    props.setMark({lat: _lat, lng: _lng});
    // naverMapRef.current.setCenter(new navermaps.LatLng(_lat, _lng));
  }

  return (
    <RenderAfterNavermapsLoaded
        ncpClientId={'fiut83vyz8'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
    >
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '90vh', // 네이버지도 세로 길이
                
            }}
            defaultCenter={{ lat: 37.300208, lng: 126.838399 }} // 지도 초기 위치
            defaultZoom={18} // 지도 초기 확대 배율
            zoomControl={true}
            // onClick = {addMarker}
            onClick={onClick}
            naverRef={naverMapRef}
            draggable = {true}
        > 
            <Marker 
                position={new navermaps.LatLng(props.mark.lat, props.mark.lng)}
                animation={navermaps.Animation.BOUNCE}
                onClick={() => {
                alert('여기는 네이버 입니다.')
                }}
            />
        </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;