import { useState, useEffect } from 'react';
import {Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';
import {useSpring, animated} from 'react-spring';


const WebsiteCard = ({website}) => {
    const {name, image, url} = website;
    const [toggle, setToggle] = useState(false);

    const cardAnimatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: {duration: 400}
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={cardAnimatedStyle}>
            <Card style={{ backgroundColor: 'rgba(28,30,31,1)', boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle style={{fontFamily: 'Bebas Neue'}} className='text-light h1'>{name}</CardTitle>{/*fix this later for responsiveness */}
                    <Button style={{backgroundColor: '#722F37'}} href={url}>View</Button>
                </CardBody>
            </Card>
        </animated.div>
    )
}

export default WebsiteCard;