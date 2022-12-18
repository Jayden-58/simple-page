import {Container, Row, Col} from 'reactstrap';
import WebsiteCard from '../components/WebsiteCard';
import { WEBSITES } from '../app/shared/WEBSITES';


const WebsitesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row className='p-5 justify-content-center'>
                <Col className='col-md-4 mt-1 d-flex align-items-center'>
                    <h1 className='m-5' style = {{color: 'white', marginBottom: 0, paddingBottom: 5, fontFamily: 'Bebas Neue', verticalAlign: 'middle', /*fontSize: 60/ */}}>Websites:</h1>
                </Col>
                <Col className='col-md-6 d-flex align-items-center' >
                    <h2 style = {{color: 'white', marginBottom: 0,  fontFamily: 'Bebas Neue', verticalAlign: 'middle'}}>These are some of the Websites I've created!</h2>
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