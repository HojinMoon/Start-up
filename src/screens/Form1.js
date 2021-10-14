import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Markup from "../screens/markup-icon.png";
import Arrow1 from "../screens/src_img/step1.png";

function Form1(props) {
  return (
    <>
      <Navigation />

      <div style={{ width: "120vh", margin: "0 auto" }}>
        <div style={{ height: "10vh" }}></div>
        <img
          alt=""
          src={Markup}
          width="40vh"
          height="vh"
          // d-inline-block
          style={{ marginLeft: "57.5vh", marginBottom: "1vh" }}
        />{" "}
        &nbsp;
        <br />
        <div
          className="text-center"
          style={{ fontSize: "1.2em", color: "#303030", marginBottom: "5vh" }}
        >
          <b>회원가입</b>
        </div>
        <div className="row">
          <img alt="" src={Arrow1} height="50vh" width="250vw"></img>
        </div>
        <div className="my-4">
          <button type="checkbox"></button>이용약관
        </div>
        <hr></hr>
        <div
          style={{
            marginLeft: "4vh",
            width: "850px",
            border: "3px solid grey",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          1<p></p>2<p></p>3<p></p>4<p></p>5<p></p>6<p></p>7
        </div>
        <div className="my-3">
          <button></button> 위치정보 이용약관에 동의하시겠습니까?(선택)
        </div>
        <hr></hr>
        <Link to="./form_step2">
          <Button
            className="my-5"
            style={{
              width: "18vh",
              height: "7vh",
              backgroundColor: "#1F2D59",
              fontSize: "1.2em",
              marginLeft: "50vh",
            }}
          >
            다음 단계
          </Button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Form1;
