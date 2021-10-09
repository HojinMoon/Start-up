import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Markup from "../screens/markup-icon.png";
import Card1_1 from "../screens/src_img/1_before.png";
import Card1_2 from "../screens/src_img/1_after.png";
import Card2_1 from "../screens/src_img/2_before.png";
import Card2_2 from "../screens/src_img/2_after.png";

function Account(props) {
  return (
    <>
      <Navigation />
      <div style={{ position: "relative" }}>
        <div style={{ width: "120vh", margin: "0 auto" }}>
          <div style={{ height: "10vh" }}></div>
          <img
            alt=""
            src={Markup}
            width="40vh"
            height="40vh"
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
          <div
            class=" button"
            style={{
              display: "flex",
              positon: "absolute",
              transform: "translate( 22%, 0%)",
            }}
          >
            <button style={{ backgroundColor: "white", border: "white" }}>
              <img
                src={Card1_1}
                alt=""
                style={{ width: "30vh" }}
                // d-inline-block
              />{" "}
              &nbsp;
            </button>
            <br />
            <button style={{ backgroundColor: "white", border: "white" }}>
              <img
                alt=""
                src={Card2_1}
                style={{ width: "30vh" }}
                // d-inline-block
              />{" "}
              &nbsp;
              <br />
            </button>
          </div>
          <div
            className="my-4"
            style={{ textAlign: "center", fontSize: "1.1em", color: "#505050" }}
          >
            본인의 회원 유형을 선택하세요.
          </div>
          <Link to="./form_step1">
            <Button
              className="my-5"
              style={{
                width: "16vh",
                height: "5vh",
                backgroundColor: "#1F2D59",
                fontSize: "1.2em",
                marginLeft: "50vh",
              }}
            >
              다음 단계
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Account;
// 해야될것
// 마우스 토글 만들기
