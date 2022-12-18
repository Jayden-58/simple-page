import { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import {Row, Col} from 'reactstrap';
import {selectAllLogos} from '../slicers/logoSlicer'

 const LogoBrowser = () => {
  const logos = selectAllLogos(); //other certificates are here, but I want to display them when the respective button is clicked
  const [toggle, setToggle] = useState(false);
  
  const logoAnimatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(0,0)',
    config: {duration: 400}
});

useEffect(() => {
    setToggle(true);
}, []);

  return (
    <Row className='mt-5'>{
        logos.map((logo) => {
            return(
                <Col className='Col-sm-6 col-xs-12 col-lg-4 col-md-4 mt-4 mb-4' key = {logo.id}>
                  <animated.div style={logoAnimatedStyle}>
                    <img style = {{width: '7vw'}} src ={logo.image} alt={logo.name}></img>
                  </animated.div>
                </Col>
            )
        })
    }</Row>
  )


 };
 
 export default LogoBrowser;