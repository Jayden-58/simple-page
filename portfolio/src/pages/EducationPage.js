import {Container, Row, Col} from 'reactstrap';
import GameDevTvLogo  from '../app/assets/GameDevTvLogo.png';
import ZenvaAcademyLogo from '../app/assets/ZanvaAcedemyLogo.png';
import LinkedInLearning from '../app/assets/LinkedInLearning.png';
import NucampLogo from '../app/assets/NucampLogo.png';
import DocumentBrowser from '../components/DocumentBrowser';
import { useState } from 'react';


const EducationPage = () => {
    const [school, setSchool] = useState('0')

    const changeStyle = (id) => {
        //I want to change it so that the icons glow when you click on them. I *Think* it mught be 'usestate'
        console.log("style changer")
       // setSchool(() = id)
    }

    const nucamp = () => {
        setSchool('0')
    }

    const linkedIn = () => {
        setSchool('1')
    }

    const gamedev = () => {
        setSchool('2')
    }

    const zenva = () => {
        setSchool('3')
    }

    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{marginTop: 0, color: 'white'}}>This is the Education Page</h1>
                </Col>
            </Row>
            <Row className='mt-5 pb-5'>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw', border: "1px solid red", boxShadow: "0px 0px 10px 15px #722F37"}} src={NucampLogo} alt="Nucamp" onClick={nucamp}/>
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={LinkedInLearning} alt="LinkedInLearning" onClick={linkedIn}/>
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={GameDevTvLogo} alt="GameDev.tv" onClick={gamedev}/>
                </Col>
                <Col className='col-3'>
                    <img style={{borderRadius: 100, width: '12vw'}} src={ZenvaAcademyLogo} alt="ZenvaAcedemy" onClick={zenva}/>
                </Col>
            </Row>
            <Row>
                <DocumentBrowser schoolId={school}/>
            </Row>
        </Container>
    )
};

export default EducationPage;