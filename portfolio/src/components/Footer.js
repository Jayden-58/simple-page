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
            <Col>
                <p style={{color: 'white'}}>Social Media:</p>
                <ul style={{marginTop: 0}} className='list-unstyled'>
                    <li>
                        <i style={{color: 'white', marginRight:6}} className= 'fa fa-linkedin fa-lg'/>
                        <a style={{color: 'white'}} href='https://www.linkedin.com/in/jayden-kellar-0a798323b/'>LinkedIn</a>
                    </li>
                    <li>
                        <i style={{color: 'white', marginRight:6}} className= 'fa fa-github fa-lg'/>
                        <a style={{color: 'white'}} href='https://github.com/Jayden-58'>Github</a>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
    </footer>
   )
 }
 
 export default Footer