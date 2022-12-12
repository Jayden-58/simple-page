import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

 const Footer = () => {
   return (
    <footer className = "site-footer" style={{background: "black"}}>
    <Container>
        <Row>
            <Col xs={{ size: 4, offset: 1 }} sm='2'>
                <h4 style={{marginTop: 0, color: 'white'}} >Links:</h4>
                <ul style={{marginTop: 0}} className='list-unstyled'>
                    <li>
                        <Link style={{color: 'white'}} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} to='education'>Education</Link>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} to='games'>Games</Link>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} to='websites'>Websites</Link>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
    </footer>
   )
 }
 
 export default Footer