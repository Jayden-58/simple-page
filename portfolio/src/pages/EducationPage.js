import {Container, Row, Col} from 'reactstrap';
import GameDevTvLogo  from '../app/assets/GameDevTvLogo.png';
import ZenvaAcademyLogo from '../app/assets/ZanvaAcedemyLogo.png';
import LinkedInLearning from '../app/assets/LinkedInLearning.png';
import NucampLogo from '../app/assets/NucampLogo.png';
import DocumentBrowser from '../components/DocumentBrowser';
import { useState } from 'react';
import lightbulb from '../app/assets/other_icons/lightbulb.png'


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
            <Row className='pt-5'>
                <Col className=" col-md-6 col-12 12 ms-0 ps-0 align-text-middle">
                    <img src={lightbulb} style = {{width: '40%', boxShadow: "0px 0px 55px 25px #FFFF00"}} />
                </Col>
                <Col className='col-md-5 col-12 align-middle pt-3'>
                    <h1 style = {{color: 'white', fontFamily: 'Bebas Neue'}}>Education:</h1>
                    <h2 className='pt-2' style = {{color: 'white',  fontFamily: 'Bebas Neue'}}>I love to take online courses to learn more about technology. This is a collection of the certificates I've aquired while studying with various online educators.</h2>
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