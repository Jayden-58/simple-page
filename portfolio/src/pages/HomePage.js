import {Container, Row, Col} from 'reactstrap';
import jaydenImage from '../app/assets/jayden_image.png';

const imgSize = {
    maxWidth: 320
}

const HomePage = () => {
    return(
        <Container style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col>
                    <h1 style={{marginTop: 0}}>This is the homepage</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src = {jaydenImage} style = {imgSize}></img>
                </Col>
            </Row>
            <Row>
                <Col className='sm-5'>
                    <p>wazzuuuupppp</p>
                </Col>
                <Col className='sm-5'>
                    <p>wazzuuuupppp</p>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;