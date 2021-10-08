import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { Link, NavLink } from "react-router-dom";
import teamLogo from "./team_logo.png";
import mypage from "./mypage.png";

const NavVarStyle = {
  fontWeight: "bold",
  background: "#fff",
  color: "#fff1",
  display: "flex",
  width: "100%",
};

function Navigation() {
  return (
    <>
      <Navbar
        className="py-2 px-3"
        style={NavVarStyle}
        variant="red"
        text-align="center"
      >
        <Navbar.Brand href="home" style={{ marginLeft: "5.5rem" }}>
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
        <Nav style={{}}>
          <div
            class="box"
            style={{ marginLeft: "10rem", marginRight: "10rem" }}
          >
            <Nav.Link className="mx-3" href="home">
              HOME
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{ marginLeft: "10rem", marginRight: "10rem" }}
          >
            <Nav.Link className="mx-3" eventKey={2} href="service">
              SERVICE
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{ marginLeft: "10rem", marginRight: "10rem" }}
          >
            <Nav.Link className="mx-3" eventKey={3} href="contact">
              CONTACT
            </Nav.Link>
          </div>
          &nbsp;
          <div
            class="box"
            style={{ marginLeft: "10rem", marginRight: "10rem" }}
          >
            <Nav.Link className="mx-3" eventKey={4} href="MY">
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
