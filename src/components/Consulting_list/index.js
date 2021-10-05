import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./index.css";
import person1 from '../../img/person1.png';
import person2 from '../../img/person2.png';
import person3 from '../../img/person3.png';
import person4 from '../../img/person4.png';

function Consulting_list() {
    return (
        <>
        <div className = "row mb-4">
            <div className = "col">
                <Card >
                    <Card.Header as="h5">ㅤ </Card.Header>
                    <Card.Body className = "my-3">
                        <Card.Text>
                            <div className = "row">
                                <div className = "col-1"></div>
                                <div className ="col-3">
                                    <img src = {person1} style={{width:"100%",}}/>
                                </div>
                                <div className ="col-8">
                                    <Card.Title>상권분석전문가 강영원입니다.</Card.Title>
                                    <ul>
                                        <li>2000.03 상권분석전문가 취득</li>
                                        <li>2002.03 TV 방송 출연</li>
                                        <div align = "right" className = "row">
                                            <button className = "btn-navy mt-3 w-50 ">연락하기</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className = "col">
            <Card >
                    <Card.Header as="h5">ㅤ </Card.Header>
                    <Card.Body className = "my-3">
                        <Card.Text>
                            <div className = "row">
                                <div className = "col-1"></div>
                                <div className ="col-3">
                                    <img src = {person2} style={{width:"100%",}}/>
                                </div>
                                <div className ="col-8">
                                    <Card.Title>마케팅전문가 김하나입니다.</Card.Title>
                                    <ul>
                                        <li>2000.03 마케팅전문가 취득</li>
                                        <li>2002.03 마케팅의왕 마케팅부서 팀장</li>
                                        <div align = "right" className = "row">
                                            <button className = "btn-navy mt-3 w-50 ">연락하기</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>
        </div>
        <div className = "row mb-4">
            <div className = "col">
            <Card >
                    <Card.Header as="h5">ㅤ </Card.Header>
                    <Card.Body className = "my-3">
                        <Card.Text>
                            <div className = "row">
                                <div className = "col-1"></div>
                                <div className ="col-3">
                                    <img src = {person3} style={{width:"100%",}}/>
                                </div>
                                <div className ="col-8">
                                    <Card.Title>매장위치선정멘토 이두찌입니다.</Card.Title>
                                    <ul>
                                        <li>2000.03 매장위치분석전문가 취득</li>
                                        <li>2002.04 배달의왕 CEO </li>
                                        <div align = "right" className = "row">
                                            <button className = "btn-navy mt-3 w-50 ">연락하기</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className = "col">
            <Card >
                    <Card.Header as="h5">ㅤ </Card.Header>
                    <Card.Body className = "my-3">
                        <Card.Text>
                            <div className = "row">
                                <div className = "col-1"></div>
                                <div className ="col-3">
                                    <img src = {person4} style={{width:"100%",}}/>
                                </div>
                                <div className ="col-8">
                                    <Card.Title>매출추정전문가 차세찌입니다.</Card.Title>
                                    <ul>
                                        <li>2000.03 매출추정전문가 취득</li>
                                        <li>2002.03 가맹점 4개 운영</li>
                                        <div align = "right" className = "row">
                                            <button className = "btn-navy mt-3 w-50 ">연락하기</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
        </div>

            

        </>
    )
}

export default Consulting_list;