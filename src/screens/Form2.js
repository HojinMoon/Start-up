import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Markup from "../screens/markup-icon.png";
import Arrow2 from "../screens/src_img/step2.png";
import BG from "./form2 - 1.png";
import BG2 from "./form2 -2.png";
import BG3 from "./form2 - none.png";
import BG4 from "./form 2 -check.png";

function Form2(props) {
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
        <div className="row" style={{ position: "relative" }}>
          <img alt="" src={Arrow2} height="50vh" width="250vw"></img>
        </div>
        <div
          class="box"
          style={{
            paddingTop: "15px",
            borderBottom: "1px solid #39EEB1",
            fontSize: "80%",
          }}
        >
          <input
            type="radio"
            style={{
              marginRight: "2%",
              marginLeft: "4%",
            }}
          />
          회원유형
        </div>
        <div class="boxB" style={{ position: "relative", marginTop: "3%" }}>
          <div
            class="businessman"
            style={{ position: "absolute", zIndex: "1", marginLeft: "15%" }}
          >
            <img alt="" src={BG} height="200vh" width="600vw"></img>
          </div>
          <div
            class="box"
            style={{
              position: "absolute",
              zIndex: "2",
              fontWeight: "bold",
              left: "45%",
              marginTop: "1.7%",
              color: "#0E0650",
            }}
          >
            <div style={{ marginBottom: "8%", fontSize: "150%" }}>
              사업자 유무
            </div>
            <div
              className="col"
              style={{ fontSize: "130%", marginLeft: "-67%", display: "flex" }}
            >
              <p>
                <img alt="" src={BG2} height="100vh" width="80vw"></img>
              </p>
              <p class="button" style={{ marginTop: "8%", marginLeft: "20%" }}>
                <img
                  alt=""
                  src={BG3}
                  height="30vh"
                  width="30vw"
                  hspace="15"
                ></img>
                있다
              </p>
              <p class="button" style={{ marginTop: "8%", marginLeft: "20%" }}>
                <img
                  alt=""
                  src={BG3}
                  height="30vh"
                  width="30vw"
                  hspace="15"
                ></img>
                없다
              </p>
            </div>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Link to="./form_step3">
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

export default Form2;
