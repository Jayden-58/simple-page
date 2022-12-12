import {Container, Row, Col} from 'reactstrap';
import jaydenImage from '../app/assets/jayden_image.png';
import '../App.css';
const imgSize = {
    maxWidth: 400
}

const HomePage = () => {
    return(
        <Container fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col>
                    <h1 style={{color: 'green',marginTop: 0,fontFamily: 'Source Code Pro'}}>Hello World!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src = {jaydenImage} alt="jaydenkellarimage" style = {imgSize}></img>
                </Col>
            </Row>
            <Row>
                <Col className='md-4 mt-1' >
                    <h1 style = {{color: 'white', marginBottom: 0, paddingBottom: 5}}>My mission:</h1>
                </Col>
                <Col className='md-8 mt-2' >
                    <p style = {{color: 'white', marginBottom: 0, paddingBottom: 5}}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </Col>
            </Row>
            <Row>
                <Col className='md-4 mt-1' >
                    <h1 style = {{color: 'white', marginBottom: 0, paddingBottom: 5}}>My mission:</h1>
                </Col>
                <Col className='md-8 mt-2' >
                    <p style = {{color: 'white', marginBottom: 0, paddingBottom: 5}}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;