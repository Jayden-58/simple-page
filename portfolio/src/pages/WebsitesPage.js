import {Container, Row, Col, Card, CardBody, CardImg, CardText, Button} from 'reactstrap';
import recordDatabaseScreenshot from '../app/assets/website_screenshots/recordDBScreenshot.png'

const WebsitesPage = () => {
    return(
        <Container className='pb-4' fluid style={{background: 'radial-gradient(circle, rgba(69,27,33,1) 25%, rgba(28,30,31,1) 75%)'}}>
            <Row>
                <Col className='col-12'>
                    <h1 style={{marginTop: 0, color: 'white'}}>This is the Websites Page</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='col-6'>
                    <Card style={{ backgroundColor: 'rgba(28,30,31,1)', boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}>
                        <CardImg src={recordDatabaseScreenshot} alt = "Record Database"/>
                        <CardBody>
                            <CardText style={{fontFamily: 'Bebas Neue'}} className='text-light h1'>Record Database</CardText>
                            <Button style={{backgroundColor: '#722F37'}} href='https://record-db-227h7fvgtq-uc.a.run.app/'>View</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default WebsitesPage;