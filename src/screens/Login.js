import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Markup from "../screens/markup-icon.png";

function Login() {
  return (
    <>
      <Navigation />
      <div style={{ width: "45vh", margin: "0 auto" }}>
        <div style={{ height: "12vh" }}></div>
        <img
          alt=""
          src={Markup}
          width="40vh"
          height="vh"
          // d-inline-block
          style={{ marginLeft: "20vh", marginBottom: "3vh" }}
        />{" "}
        &nbsp;
        <br />
        <input
          className="mb-3"
          type="text"
          placeholder="E-mail  (example@gmail.com)"
          style={{
            width: "45vh",
            height: "6vh",
            border: "none",
            borderRadius: "0.3em",
            backgroundColor: "#EEE",
            paddingLeft: "1em",
          }}
        ></input>
        <input
          className="mb-3"
          type="text"
          placeholder="Password"
          style={{
            width: "45vh",
            height: "6vh",
            border: "none",
            borderRadius: "0.3em",
            backgroundColor: "#EEE",
            paddingLeft: "1em",
          }}
        ></input>
        <input id="" value="" name="platform" type="radio" className="mb-4" />
        <span
          style={{ fontSize: "0.9em", color: "#808080", marginLeft: "0.5em" }}
        >
          Remember me
        </span>
        <div></div>
        <button
          className="mb-2"
          style={{
            width: "45vh",
            height: "6vh",
            backgroundColor: "#57C7B6",
            border: "none",
            borderRadius: "0.4em",
            fontSize: "1em",
          }}
        >
          Login
        </button>
        <div
          className="text-center mb-4"
          style={{ color: "#909090", fontSize: "0.8em" }}
        >
          아이디 찾기 | 비밀번호 찾기
        </div>
        <span style={{ fontSize: "0.9em", color: "#808080" }}>
          Do you Have an Account?
        </span>
        <Link to="/account">
          <div
            className="text-center"
            style={{
              width: "5em",
              color: "#57C7B6",
              border: "solid 0.1em #57C7B6",
              float: "right",
              borderRadius: "5px",
            }}
          >
            회원가입
          </div>
        </Link>
        <div style={{ height: "17vh" }}></div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
