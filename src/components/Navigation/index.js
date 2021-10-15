import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link, NavLink } from "react-router-dom";
import teamLogo from "./team_logo.png";
import mypage from "./mypage.png";

const NavVarStyle = {
  fontWeight: "bold",
  background: "white",
  color: "#fff1",
  display: "flex",
  width: "100%",
  borderBottom: "1px solid black",
};

function Navigation() {
  return (
    <>
      <Navbar
        className="py-0 px-2"
        style={NavVarStyle}
        variant="red"
        text-align="center"
        display="table"
      >
        <Navbar.Brand href="home" style={{ marginLeft: "3.2vw" }}>
          &nbsp;
          <img
            alt=""
            src={teamLogo}
            width="40"
            height="40"
            // d-inline-block
            className="align-top"
          />{" "}
          &nbsp;
        </Navbar.Brand>
        <Nav style={{ marginTop: "0%" }}>
          <div
            class="box"
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              height: "10%",
              position: "absolute",
              top: "10%",
              left: "-11%",
            }}
          >
            <Nav.Link className="mx-3" href="home">
              HOME
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              height: "10%",
              position: "absolute",
              top: "10%",
              left: "16%",
            }}
          >
            <Nav.Link className="mx-3" eventKey={2} href="service">
              SERVICE
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{
              marginLeft: "30%",
              marginRight: "30%",
              height: "10%",
              position: "absolute",
              top: "10%",
              left: "40%",
            }}
          >
            <Nav.Link className="mx-3" eventKey={3} href="contact">
              CONTACT
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{
              marginLeft: "8%",
              marginRight: "8%",
              height: "5%",
              position: "absolute",
              top: "10%",
            }}
          >
            <Nav.Link
              className="mx-3"
              eventKey={4}
              href="MY"
              style={{ position: "relative", top: "10%", left: "1050%" }}
            >
              <img
                alt=""
                src={mypage}
                width="45"
                height="20"
                // d-inline-block
                className="align-top"
              />{" "}
              &nbsp;
            </Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
