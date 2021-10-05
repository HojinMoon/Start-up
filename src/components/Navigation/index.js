import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import teamLogo from './team_logo.png';
import mypage from './mypage.png';


const NavVarStyle = {
  fontWeight: 'bold',
  background :"#fff",
  color: "#fff1",
}

function Navigation() {
    return (
        <>
          <Navbar className = "py-2 px-3" style={NavVarStyle} variant="red" text-align="center"> 
            <Navbar.Brand href="#home">
              &nbsp;
              <img
                alt=""
                src= {teamLogo}
                width="40"
                height="40"
                // d-inline-block
                className="align-top"
              />{' '}
              &nbsp;
            </Navbar.Brand>
            <Nav>
              <Nav.Link className = "mx-5" href="home">HOME</Nav.Link>
              &nbsp;
              <Nav.Link className = "mx-5" eventKey={2} href="service">
                SERVICE
              </Nav.Link>
              &nbsp;
              <Nav.Link className = "mx-5" eventKey={3} href="contact">
                CONTACT
              </Nav.Link>
              &nbsp;
              <Nav.Link className = "mx-5" eventKey={4} href="MY">
              <img
                alt=""
                src= {mypage}
                width="45"
                height="20"
                // d-inline-block
                className="align-top"
              />{' '}
              &nbsp;
              </Nav.Link>

            </Nav>
          </Navbar>
      </>
    )
}

export default Navigation;