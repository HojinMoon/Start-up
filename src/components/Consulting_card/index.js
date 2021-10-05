import Card from 'react-bootstrap/Card';

function Consulting_card() {
    return (
        <>

            <Card style={{maring:'100px'}}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/21/01/59/commerce-2160909_960_720.png" style={{ width: '18rem', }}/>
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <br />

      </>
    )
}

export default Consulting_card;