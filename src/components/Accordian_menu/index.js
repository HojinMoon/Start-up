import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select_industry from "../Select_industry";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Display_coordinate from '../Display_coordinate';

import React, { Component, useState } from 'react';

function Accordion_menu(props) {  
    return (
        <>
        <div style={{backgroundColor:"#91D7CC", borderRadius:"20px 20px 0px 0px"}}>
          <Accordion className = "mt-3 pt-2 px-4 " defaultActiveKey="0">
            <div style={{height:"20px"}}></div>
            <Card style={{backgroundColor:"#2E4564", color:"white"}}>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                위치를 선택하세요.
              </Accordion.Toggle>
                <Card.Body>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>위치 검색</Form.Label>
                    <div className = "row">
                      <div className = "col-12"><Form.Control className = "p1-0" type="email" placeholder="시/군/구 + 도로명, 동명 또는 건물명" /></div>
                    </div>
                  </Form.Group>
                  </Form>
                </Card.Body>
            </Card>
            <div style={{height:"20px"}}></div>
            <Card style={{backgroundColor:"#2E4564", color:"white"}}>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                업종을 선택하세요.
              </Accordion.Toggle>
              <Form className = "mt-2 pt-2 px-3 ">
                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <div className = "row">
                      <div className = "col-12"><Form.Control className = "p1-0" type="email" /></div>
                    </div>
                  </Form.Group>
              </Form>

              <div className="mx-3 mt-3" style={{height:"10%", backgroundColor:"white", borderRadius:"7px"}}>
                <Button className="my-1 mx-2" style={{fontSize:"14px", background:"#F36F56", border:"None"}}>일반 음식</Button>
                <Button className="my-1 mx-2" style={{fontSize:"14px", background:"white", color:"black", border:"None"}}>휴게 음식</Button>
              </div>
                <Card.Body className = "text-center">
                  <Select_industry setIndustry={props.setIndustry} industry={props.industry}/>
                </Card.Body>
            </Card>      
          </Accordion>
        </div>
          
      </>
    )
}

export default Accordion_menu;