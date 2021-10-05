import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Preview1 from '../img/preview1.jpeg';
import Preview2 from '../img/preview2.jpg';

function Preview() {
  return(
    <>
    <Navigation/>
    <Carousel fade interval={3000}>
        <Carousel.Item >
            <img src = {Preview1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
                <Link to="/select_card">
                    <Button className = "btn-light" style = {{marginBottom : "35vh", marginRight: "105vh"}}>
                        GO TO MORE
                    </Button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <img
            className="d-block w-100" src = {Preview2} alt="Second slide"/>
            <Carousel.Caption>
                <Link to="/select_card">
                    <Button className = "btn-secondary" style = {{marginBottom : "38vh", marginRight: "105vh"}}>
                        GO TO MORE
                    </Button>
                </Link>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <Footer/>
    
    
    </>
    )
}

export default Preview