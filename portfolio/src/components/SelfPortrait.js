import { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import JaydenImage from '../app/assets/jayden_image.png'

const SelfPortrait = () => {
    const [toggle, setToggle] = useState(false);

    const portraitAnimatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: {duration: 400}
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={portraitAnimatedStyle}>
            <img src = {JaydenImage} alt="jaydenkellarimage" style = {{width: '65%', borderRadius: 6, boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}></img> 
        </animated.div>
    )
}

export default SelfPortrait;