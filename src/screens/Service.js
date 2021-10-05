import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { render } from "@testing-library/react";
import SUCCESS404 from "./Success404.png";
import Sol from "./Sol.png";
import Solution1 from "./Solution1.png";
import Solution2 from "./Solution2.png";
import Solution3 from "./Solution3.png";
import Final from "./Final.png";

function Service(props) {
  return (
    <>
      <Navigation />
      <div>
        <body
          style={{ width: "100%", height: "50vh", backgroundColor: "#F2F2F2" }}
        >
          <br />
          <br />
          <br />
          <p style={{ marginRight: 200 }}>
            <img
              alt=""
              src={SUCCESS404}
              width="55%"
              height="25%"
              align="right"
              // d-inline-block
              className="align-top"
            />{" "}
          </p>
          &nbsp;
          <br />
          <br />
          <br />
          <br />
          <span
            style={{
              fontSize: 35,
              color: "navy",
              fontWeight: "700",
              marginLeft: 200,
              verticalAlign: "middle",
            }}
          >
            Story
          </span>
          <br />
          <br />
          <br />
          <span style={{ color: "#585858", marginLeft: 800 }}>
            {`저희 success404는 코로나와 급격한 변화에 힘들어하는 자영업자 분들과 예비창업자 분들을 위해`}
            <br />
          </span>
          <span style={{ color: "#585858", marginLeft: 870 }}>
            {`도움을 드리고자 대학생들이 모여 '동의' 라는 서비스를 기획하게 되었습니다.`}
            <br />
          </span>
          <br />
          <br />
        </body>
        <body style={{ width: "100%", height: "60vh" }}>
          <br />
          <span
            style={{
              fontSize: 35,
              color: "navy",
              fontWeight: "700",
              marginLeft: 830,
            }}
          >
            {`Solution`}
            <img
              alt=""
              src={Sol}
              width="2%"
              height="7%"
              align="center"
              // d-inline-block
              className="align-top"
            />{" "}
            &nbsp;
            <br />
          </span>
          <table>
            <tr>
              <td style={{ paddingLeft: 220 }}>
                <img
                  alt=""
                  src={Solution1}
                  width="90%"
                  height="80%"
                  align="left"
                  // d-inline-block
                  className="align-top"
                />{" "}
                &nbsp;
              </td>
              <td
                style={{ paddingLeft: 220, paddingRight: 220, paddingTop: 80 }}
              >
                <img
                  alt=""
                  src={Solution2}
                  width="90%"
                  height="80%"
                  display="block"
                  margin-left="auto"
                  margin-fight="auto"
                  // d-inline-block
                  className="align-top"
                />{" "}
                &nbsp;
              </td>
              <td style={{ paddingRight: 220 }}>
                <img
                  alt=""
                  src={Solution3}
                  width="90%"
                  height="80%"
                  align="right"
                  // d-inline-block
                  className="align-top"
                />{" "}
                &nbsp;
              </td>
            </tr>
          </table>
          <br />
          <br />
        </body>
        <body
          style={{ width: "100%", height: "50vh", backgroundColor: "#F2F2F2" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <p style={{ marginRight: 500 }}>
            <img
              alt=""
              src={Final}
              width="40%"
              height="10%"
              align="right"
              // d-inline-block
              className="align-top"
            />{" "}
            &nbsp;
          </p>

          <span
            style={{
              fontSize: 35,
              color: "navy",
              fontWeight: "700",
              marginTop: 100,
              marginLeft: 200,
            }}
          >
            {`About us`}
            <br />
          </span>

          <br />
          <br />
          <span style={{ color: "#585858", marginLeft: 825 }}>
            {`저희 'success404'는 동의라는 주요 서비스를 통해 예비 창업자와 폐업점주 분들을 도움으로써 사회적 가치를 창출합니다.`}
            <br />
          </span>
          <span style={{ color: "#585858", marginLeft: 800 }}>
            {`또한 4차 산업혁명의 키워드 중 하나인 빅데이터 확보를 통해 창업자 분들께 정확한 정보를 제공하고자 하는 비전을 가지고 있습니다.`}
            <br />
          </span>
        </body>
        <Footer />
      </div>
    </>
  );
}

export default Service;
