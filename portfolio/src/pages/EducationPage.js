import {Container, Row, Col} from 'reactstrap';
import GameDevTvLogo  from '../app/assets/GameDevTvLogo.png';
import ZenvaAcademyLogo from '../app/assets/ZanvaAcedemyLogo.png';
import LinkedInLearning from '../app/assets/LinkedInLearning.png';
import NucampLogo from '../app/assets/NucampLogo.png';
import DocumentBrowser from '../components/DocumentBrowser';
import { CERTIFICATESNUCAMP } from '../app/shared/CERTIFICATESNUCAMP';

const EducationPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{marginTop: 0, color: 'white'}}>This is the Education Page</h1>
                </Col>
            </Row>
            <Row className='mt-5 pb-5'>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={NucampLogo} alt="Nucamp"/>
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={LinkedInLearning} alt="LinkedInLearning" />
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={GameDevTvLogo} alt="GameDev.tv"/>
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={ZenvaAcademyLogo} alt="ZenvaAcedemy"/>
                </Col>
            </Row>
            <Row>
                <DocumentBrowser certificate={CERTIFICATESNUCAMP[0]}/>
            </Row>
        </Container>
    )
};

export default EducationPage;