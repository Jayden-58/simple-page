import {Container, Row, Col} from 'reactstrap';
import GameDevTvLogo  from '../app/assets/GameDevTvLogo.png';
import ZenvaAcademyLogo from '../app/assets/ZanvaAcedemyLogo.png';
import LinkedInLearning from '../app/assets/LinkedInLearning.png';
import NucampLogo from '../app/assets/NucampLogo.png';
import DocumentBrowser from '../components/DocumentBrowser';
import { useState } from 'react';


const EducationPage = () => {
    const [school, setSchool] = useState('0')

    const nucamp = () => {
        document.getElementById(school).style.boxShadow="3px 3px 2px rgb(13, 13, 13)"
        setSchool('0')
        document.getElementById('0').style.boxShadow ="0px 0px 10px 15px #722F37";
    }

    const linkedIn = () => {
        document.getElementById(school).style.boxShadow="3px 3px 2px rgb(13, 13, 13)"
        setSchool('1')
        document.getElementById('1').style.boxShadow ="0px 0px 10px 15px #722F37";
    }

    const gamedev = () => {
        document.getElementById(school).style.boxShadow="3px 3px 2px rgb(13, 13, 13)"
        setSchool('2')
        document.getElementById('2').style.boxShadow ="0px 0px 10px 15px #722F37";
    }

    const zenva = () => {
        document.getElementById(school).style.boxShadow="3px 3px 2px rgb(13, 13, 13)"
        setSchool('3')
        document.getElementById('3').style.boxShadow ="0px 0px 10px 15px #722F37";
    }

    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{color: 'white'}}>This is the Education Page</h1>
                </Col>
            </Row>
            <Row className='m-5 justify-content-center'>
                <Col className='col-md-4 mt-1 d-flex align-items-center'>
                    <h1 className='m-5' style = {{color: 'white', marginBottom: 0, paddingBottom: 5, fontFamily: 'Bebas Neue', verticalAlign: 'middle', /*fontSize: 60/ */}}>Education:</h1>
                </Col>
                <Col className='col-md-6 d-flex align-items-center' >
                    <h2 style = {{color: 'white', marginBottom: 0,  fontFamily: 'Bebas Neue', verticalAlign: 'middle'}}>I love to take online courses to learn more about technology. This is a collection of the certificates I've aquired while studying with various online educators.</h2>
                </Col>
            </Row>
            <Row className='mt-5 pb-5'>
                <Col className='col-3'>
                    <img id="0" style={{borderRadius: 100, width: '12vw', boxShadow: "0px 0px 10px 15px #722F37"}} src={NucampLogo} alt="Nucamp" onClick={nucamp}/>
                </Col>
                <Col className='col-3'>
                    <img id="1" style={{borderRadius: 100, width: '12vw',  boxShadow: '3px 3px 2px rgb(13, 13, 13)'}} src={LinkedInLearning} alt="LinkedInLearning" onClick={linkedIn}/>
                </Col>
                <Col className='col-3'>
                    <img id="2" style={{borderRadius: 100, width: '12vw', boxShadow: '3px 3px 2px rgb(13, 13, 13)'}} src={GameDevTvLogo} alt="GameDev.tv" onClick={gamedev}/>
                </Col>
                <Col className='col-3'>
                    <img id='3' style={{borderRadius: 100, width: '12vw',  boxShadow: '3px 3px 2px rgb(13, 13, 13)'}} src={ZenvaAcademyLogo} alt="ZenvaAcedemy" onClick={zenva}/>
                </Col>
            </Row>
            <Row>
                <DocumentBrowser schoolId={school}/>
            </Row>
        </Container>
    )
};

export default EducationPage;