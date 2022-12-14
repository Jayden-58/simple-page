import {Container, Row, Col} from 'reactstrap';
import GameCard from '../components/GameCard';
import { GAMES } from '../app/shared/GAMES';

const GamesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{marginTop: 0, color: 'white'}}>This is the Games Page</h1>
                </Col>
            </Row>
            <Row className='m-5 justify-content-center'>
                <Col className='col-md-4 mt-1 d-flex align-items-center'>
                    <h1 className='m-5' style = {{color: 'white', marginBottom: 0, paddingBottom: 5, fontFamily: 'Bebas Neue', verticalAlign: 'middle', /*fontSize: 60/ */}}>Games:</h1>
                </Col>
                <Col className='col-md-6 d-flex align-items-center' >
                    <h2 style = {{color: 'white', marginBottom: 0,  fontFamily: 'Bebas Neue', verticalAlign: 'middle'}}>These are some of the videogames I've created! </h2>
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