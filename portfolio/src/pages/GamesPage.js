import {Container, Row, Col} from 'reactstrap';

const GamesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{marginTop: 0, color: 'white'}}>This is the Games Page</h1>
                </Col>
            </Row>
            <Row>
                <Col className='md-6' >
                    <p style = {{marginBottom: 0, paddingBottom: 5, color: 'white'}}>wazzzzzzupppp</p>
                </Col>
                <Col className='md-6' >
                    <p style = {{marginBottom: 0, paddingBottom: 5, color: 'white'}}>wazzuuuupppp</p>
                </Col>
            </Row>
        </Container>
    )
};

export default GamesPage;