import {Container, Row, Col} from 'reactstrap';
import jaydenImage from '../app/assets/jayden_image.png';
import '../App.css';
import PythonLogo from '../app/assets/coding_logos/python.png'
import HTMLLogo from '../app/assets/coding_logos/html.png'
import CSSLogo from '../app/assets/coding_logos/css3.png'
import JSLogo from '../app/assets/coding_logos/javascript.png'
import DjangoLogo from '../app/assets/coding_logos/django.png'
import PostgresLogo from '../app/assets/coding_logos/postgresql.png'
import ReactLogo from '../app/assets/coding_logos/react.png'
import DockerLogo from '../app/assets/coding_logos/docker.png'
import GithubLogo from '../app/assets/coding_logos/github.png'
import SQLiteLogo from '../app/assets/coding_logos/sqllite.png'
import UnityLogo from '../app/assets/coding_logos/unity.png'
import cSharpLogo from '../app/assets/coding_logos/c.png'
import GoogleCloudLogo from '../app/assets/coding_logos/google-cloud.png'
import AWSIcon from '../app/assets/coding_logos/aws.png'
import BootstrapLogo from '../app/assets/coding_logos/bootstrap.png'

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
                    <img src = {jaydenImage} alt="jaydenkellarimage" style = {{width: '33vw', borderRadius: 6, boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}></img> 
                </Col>
            </Row>
            <Row className='m-5 justify-content-center'>
                <Col className='col-md-4 mt-1 d-flex align-items-center'>
                    <h1 className='m-5' style = {{color: 'white', marginBottom: 0, paddingBottom: 5, fontFamily: 'Bebas Neue', verticalAlign: 'middle', fontSize: 60}}>My mission:</h1>
                </Col>
                <Col className='col-md-6 d-flex align-items-center' >
                    <h2 style = {{color: 'white', marginBottom: 0,  fontFamily: 'Bebas Neue', verticalAlign: 'middle'}}>I have a passion for learning new things! My mission is to learn as much as I possibly can, and use that knowledge to build awesome projects that help make the world a better place!</h2>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <h1 style = {{color: 'white', marginBottom: 0, paddingBottom: 5,  fontFamily: 'Bebas Neue', fontSize: 60}}>Technologies I Use:</h1>
                </Col>
            </Row>
            <Row className='m-5 mb-5'>
                <Col>
                    <img style={{width: "10vw"}} src = {JSLogo} alt = "JavascriptLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {HTMLLogo} alt = "HTML5Logo"/>
                </Col>
                <Col>
                <img style={{width: "10vw"}} src = {CSSLogo} alt = "CSSLogo"/>
                </Col>
            </Row>
            <Row className='m-5 mb-5'>
                <Col>
                    <img style={{width: "10vw"}} src = {PythonLogo} alt = "PythonLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {DjangoLogo} alt = "DjangoLogo"/>
                </Col>
                <Col>
                <img style={{width: "10vw"}} src = {PostgresLogo} alt = "PostgresqlLogo"/>
                </Col>
            </Row>
            <Row className='m-5 mb-5'>
                <Col>
                    <img style={{width: "10vw"}} src = {ReactLogo} alt = "ReactLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {DockerLogo} alt = "DockerLogo"/>
                </Col>
                <Col>
                <img style={{width: "10vw"}} src = {GithubLogo} alt = "GithubLogo"/>
                </Col>
            </Row>
            <Row className='m-5 mb-5'>
                <Col>
                    <img style={{width: "10vw"}} src = {SQLiteLogo} alt = "SQLiteLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {UnityLogo} alt = "UnityLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {cSharpLogo} alt = "C#Logo"/>
                </Col>
            </Row>
            <Row className='m-5 mb-5'>
                <Col>
                    <img style={{width: "10vw"}} src = {GoogleCloudLogo} alt = "GoogleCloudLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {AWSIcon} alt = "AWSLogo"/>
                </Col>
                <Col>
                    <img style={{width: "10vw"}} src = {BootstrapLogo} alt = "BootstrapLogo"/>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;