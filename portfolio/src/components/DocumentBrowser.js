import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { selectCertificatesBySchoolId, selectCertificatesBySchoolIdReal } from '../certificates/certificateSlicer';

 const DocumentBrowser = () => {
  //const {id, image, name}  = certificate;
  const certificatesToDisplay = selectCertificatesBySchoolIdReal('0'); //other certificates are here, but I want to display them when the respective button is clicked

  //  return (
  //   <div>
  //       <p style={{color: "white"}}>This is the Document Browser</p>
  //       <img src = {certificate.image} style={{width: "20vw"}} />
  //   </div>
  //  )

  return (
    <Row>{
        certificatesToDisplay.map((certificates) => {
            return(
                <Col className = 'col-4 mt-5' key = {certificates.id}>
                  <img style = {{width: '15vw'}} src ={certificates.image}></img>
                </Col>
            )
        })
    }</Row>
  )


 };
 
 export default DocumentBrowser;