import { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';


const BigLogo = ({icon}) => {
    //const logoToDisplay = OTHERICONS[id].image;


    const [toggle, setToggle] = useState(false);

    const iconAnimatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0,1)',
        config: {duration: 400}
    });

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={iconAnimatedStyle}>
            <img src = {icon.image} alt='bigLogo' style = {{width: '40%', filter: 'brightness(0) invert(1)'}}></img> 
        </animated.div>
    )
}

export default BigLogo;