import {Container, Row, Col} from 'reactstrap';
import WebsiteCard from '../components/WebsiteCard';
import { WEBSITES } from '../app/shared/WEBSITES';


const WebsitesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row className='pt-5'>
                <Col className=" col-md-6 col-12 12 ms-0 ps-0 align-text-middle">
                    <img src={'/'} alt="Icon" style = {{width: '40%'}} /> {/*update later*/}
                </Col>
                <Col className='col-md-5 col-12 align-middle pt-3'>
                    <h1 style = {{color: 'white', fontFamily: 'Bebas Neue'}}>Websites:</h1>
                    <h2 className='pt-2' style = {{color: 'white',  fontFamily: 'Bebas Neue'}}>I am proud to present a selection of the websites I have designed and developed. Each of these projects represents a unique challenge and opportunity for me to utilize my skills and creativity to bring a vision to life. It is my goal to continuously learn and grow as a web developer.</h2>
                </Col>
            </Row>
            <Row className='justify-content-center pt-5'>
                <Col className='col-5 p-5'>
                    <WebsiteCard website={WEBSITES[0]}/>
                </Col>
                <Col className='col-5 p-5'>
                    <WebsiteCard website={WEBSITES[1]}/>
                </Col>
            </Row>
        </Container>
    )
};

export default WebsitesPage;