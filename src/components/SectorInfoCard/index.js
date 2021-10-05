import React from 'react';
import Card from 'react-bootstrap/Card';

function SectorInfoCard(props) {
    console.log(props.sector)
    return(
        <>
            <Card className = "mb-3 ">
                <Card.Header className = "px-5"><h6>{props.sector[0].상호명}</h6></Card.Header>
                <Card.Body><p>매장 위치 : {props.sector[0].위치}</p></Card.Body>
            </Card>
        </>
    )
}

export default SectorInfoCard