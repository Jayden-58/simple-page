import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { selectCertificatesBySchoolId, selectCertificatesBySchoolIdReal } from '../certificates/certificateSlicer';

 const DocumentBrowser = () => {
  //const {id, image, name}  = certificate;
  const certificatesToDisplay = selectCertificatesBySchoolIdReal(schoolId); //other certificates are here, but I want to display them when the respective button is clicked

  return (
    <Row className='mt-5 ps-5'>{
        certificatesToDisplay.map((certificates) => {
            return(
                <Col className = 'col-lg-3 col-4 mt-4 mb-4' key = {certificates.id}>
                  <img style = {{width: '20vw', boxShadow: '4px 3px 2px rgb(13, 13, 13)'}} src ={certificates.image}></img>
                </Col>
            )
        })
    }</Row>
  )


 };
 
 export default DocumentBrowser;