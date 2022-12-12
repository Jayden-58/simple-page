import {Container, Row, Col} from 'reactstrap';
import jaydenImage from '../app/assets/jayden_image.png';

const imgSize = {
    maxWidth: 900
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
                    <img src = {jaydenImage} alt="jaydenkellarimage" style = {imgSize}></img>
                </Col>
            </Row>
            <Row>
                <Col className='md-6' >
                    <p style = {{marginBottom: 0, paddingBottom: 5}}>wazzuuuupppp</p>
                </Col>
                <Col className='md-6' >
                    <p style = {{marginBottom: 0, paddingBottom: 5}}>wazzuuuupppp</p>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;