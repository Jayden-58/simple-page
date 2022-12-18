import {Container, Row, Col} from 'reactstrap';
import GameCard from '../components/GameCard';
import { GAMES } from '../app/shared/GAMES';
import BigLogo from '../components/BigLogo';
import { OTHERICONS } from '../app/shared/OTHERICONS';

const GamesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row className='pt-5'>
                <Col className=" col-md-6 col-12 12 ms-0 ps-0 align-text-middle">
                    <BigLogo icon={OTHERICONS[1]} />
                </Col>
                <Col className='col-md-5 col-12 align-middle pt-3'>
                    <h1 style = {{color: 'white', fontFamily: 'Bebas Neue'}}>Games:</h1>
                    <h2 className='pt-2' style = {{color: 'white',  fontFamily: 'Bebas Neue'}}>My love for technology began with my passion for videogames. I have been fortunate to have the opportunity to create a few of my own over the years. These are some of the videogames that I have developed and am proud to share with others.</h2>
                </Col>
            </Row>
            <Row className='m-4 justify-content-center'>
                <Col className='col-5 m-5'>
                    <GameCard game={GAMES[0]}/>
                </Col>
                <Col className='col-5 m-5'>
                    <GameCard game={GAMES[1]}/>
                </Col>
            </Row>
            <Row className='m-4 justify-content-center'>
                <Col className='col-5 m-5'>
                    <GameCard game={GAMES[2]}/>
                </Col>
                <Col className='col-5 m-5'>
                    <GameCard game={GAMES[3]}/>
                </Col>
            </Row>
        </Container>
    )
};

export default GamesPage;