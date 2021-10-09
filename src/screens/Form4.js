import Button from "react-bootstrap/Button";
//import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Markup from "../screens/markup-icon.png";
import Arrow4 from "../screens/src_img/step4.png";

function Form4(props) {
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
          <img alt="" src={Arrow4} height="50vh" width="250vw"></img>
        </div>
        <Button
          className="my-5"
          style={{
            width: "15vh",
            height: "7vh",
            backgroundColor: "#1F2D59",
            fontSize: "1.2em",
            marginLeft: "52.5vh",
          }}
        >
          완료
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default Form4;
