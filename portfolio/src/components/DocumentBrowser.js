import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

 const DocumentBrowser = ({certificate}) => {
  const {id, image, name}  = certificate;
   return (
    <div>
        <p style={{color: "white"}}>This is the Document Browser</p>
        <img src = {certificate} />
    </div>
   )
 }
 
 export default DocumentBrowser;