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
            <Row className='pt-5'>
                <Col className=" col-md-6 col-12 12 ms-0 ps-0 align-text-middle">
                    <SelfPortrait imageId = {0}/>
                </Col>
                <Col className='col-md-5 col-12 align-middle pt-3'>
                    <h1 style = {{color: 'white', fontFamily: 'Bebas Neue'}}>My mission:</h1>
                    <h2 className='pt-2' style = {{color: 'white',  fontFamily: 'Bebas Neue'}}>I am dedicated to continuous learning and personal growth. My mission is to acquire as much knowledge as I can and use it to create meaningful projects that positively impact the world around me.</h2>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <h1 style = {{color: 'white', marginBottom: 0, paddingBottom: 5,  fontFamily: 'Bebas Neue', /*fontSize: 60*/}}>Technologies I Use:</h1>
                </Col>
            </Row>
            <LogoBrowser/>
        </Container>
    )
};

export default HomePage;