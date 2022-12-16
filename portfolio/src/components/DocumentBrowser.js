import { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import {Row, Col} from 'reactstrap';
import {selectCertificatesBySchoolIdReal} from '../certificates/certificateSlicer';

 const DocumentBrowser = ({schoolId}) => {
  //const {id, image, name}  = certificate;
  const certificatesToDisplay = selectCertificatesBySchoolIdReal(schoolId); //other certificates are here, but I want to display them when the respective button is clicked
  const [toggle, setToggle] = useState(false);

  const documentAnimatedStyle = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
      config: {duration: 400}
  });

  useEffect(() => {
      setToggle(true);
  }, []);


  return (
    <Row className='mt-5 ps-5'>{
        certificatesToDisplay.map((certificates) => {
            return(
                <Col className = 'col-lg-3 col-4 mt-4 mb-4' key = {certificates.id}>
                  <animated.div style={documentAnimatedStyle}>
                    <img style = {{width: '20vw', boxShadow: '4px 3px 2px rgb(13, 13, 13)'}} src ={certificates.image} alt={certificates.name}></img>
                  </animated.div>
                </Col>
            )
        })
    }</Row>
  )


 };
 
 export default DocumentBrowser;