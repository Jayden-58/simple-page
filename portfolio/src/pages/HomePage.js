import {Container, Row, Col} from 'reactstrap';
import LogoBrowser from '../components/LogoBrowser';
import '../App.css';
import SelfPortrait from '../components/SelfPortrait';

const HomePage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col>
                    <h1 style={{color: 'green',marginTop: 0, paddingTop: 10, paddingBottom: 10, fontFamily: 'Source Code Pro', fontSize: 50}}>Hello World!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelfPortrait />
                </Col>
            </Row>
            <Row className='m-5 justify-content-center'>
                <Col className='col-md-4 mt-1 d-flex align-items-center'>
                    <h1 className='m-5' style = {{color: 'white', marginBottom: 0, paddingBottom: 5, fontFamily: 'Bebas Neue', verticalAlign: 'middle', /*fontSize: 60/ */}}>My mission:</h1>
                </Col>
                <Col className='col-md-6 d-flex align-items-center' >
                    <h2 style = {{color: 'white', marginBottom: 0,  fontFamily: 'Bebas Neue', verticalAlign: 'middle'}}>I have a passion for learning new things! My mission is to learn as much as I possibly can, and use that knowledge to build awesome projects that help make the world a better place!</h2>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <h1 style = {{color: 'white', marginBottom: 0, paddingBottom: 5,  fontFamily: 'Bebas Neue', /*fontSize: 60*/}}>Technologies I Use:</h1>
                </Col>
            </Row>
            <LogoBrowser />
        </Container>
    )
};

export default HomePage;