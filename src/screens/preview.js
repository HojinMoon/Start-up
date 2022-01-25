import React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import Background from "../img/Background.png"
import MainImg from "../img/MainImg.png"
import Our from "../img/Our.png"
import Analysis from "../img/1.png"

function Preview() {
  return (
    <>
      <Navigation />
      <div>
        <img
          src={Background}
          alt="Background"
          style={{
            width: "100%",
            height: "50%",
            position: "relative",
            zIndex: "0",
          }}
        />
        <p
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            zIndex: "auto",
            position: "absolute",
            marginTop: "-46%",
            marginLeft: "10%",
            color: "white",
          }}
        >
          동의.
        </p>
        <p
          style={{
            fontSize: "40px",
            fontColor: "white",
            zIndex: "auto",
            position: "absolute",
            marginTop: "-35%",
            marginLeft: "10%",
            color: "white",
          }}
        >
          동네의 의미를
        </p>
        <p
          style={{
            fontSize: "40px",
            fontColor: "white",
            zIndex: "auto",
            position: "absolute",
            marginTop: "-32%",
            marginLeft: "10%",
            color: "white",
          }}
        >
          부여하다
        </p>
        <p
          style={{
            width: "30vw",
            height: "10vh",
            fontSize: "15px",
            fontColor: "white",
            zIndex: "auto",
            position: "absolute",
            marginTop: "-25%",
            marginLeft: "10%",
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            paddingTop: "2vh",
            color: "white",
          }}
        >
          배달전문 매장의 창업을 원하는 예비소상공인이 매장 위치 선정을 위해{" "}
          <br />
          필요한 데이터를 제공하고 상권 컨설팅 업체를 연결해주는 디렉팅 서비스.
        </p>
        <p
          style={{
            width: "16vw",
            height: "6vh",
            fontSize: "18px",
            fontColor: "white",
            zIndex: "1",
            position: "absolute",
            marginTop: "-18%",
            marginLeft: "10%",
            backgroundColor: "white",
            textAlign: "center",
            borderRadius: "2em",
            paddingTop: "0.4%",
          }}
        >
          <img alt="" src={Our} width="20" height="20" />
          우리동네 상권 알아보기
        </p>
        <p
          style={{
            width: "13vw",
            height: "6vh",
            fontSize: "18px",
            fontColor: "white",
            zIndex: "1",
            position: "absolute",
            marginTop: "-18%",
            marginLeft: "27%",
            backgroundColor: "white",
            textAlign: "center",
            borderRadius: "2em",
            paddingTop: "0.4%",
          }}
        >
          <img alt="" src={Analysis} width="20" height="20" />
          상권 분석하기
        </p>
        <img
          src={MainImg}
          alt="Background"
          style={{
            width: "50%",
            position: "relative",
            marginLeft: "45%",
            marginTop: "-52%",
          }}
        />
      </div>
      <Footer />
    </>
  )
}

export default Preview
