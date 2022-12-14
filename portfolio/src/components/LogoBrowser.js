import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {selectAllLogos} from '../app/logos/logoSlicer'

 const LogoBrowser = () => {
  const logos = selectAllLogos(); //other certificates are here, but I want to display them when the respective button is clicked

  return (
    <Row className='mt-5'>{
        logos.map((logo) => {
            return(
                <Col className = ' col-xs-12 col-lg-3 col-md-4 mt-4 mb-4' key = {logo.id}>
                  <img style = {{width: '10vw'}} src ={logo.image}></img>
                </Col>
            )
        })
    }</Row>
  )


 };
 
 export default LogoBrowser;