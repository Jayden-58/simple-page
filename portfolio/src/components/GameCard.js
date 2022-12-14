import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';

const GameCard = ({game}) => {
    const {name, image, url} = game;

    return (
        <Card style={{ backgroundColor: 'rgba(28,30,31,1)', boxShadow: '4px 3px 2px rgb(13, 13, 13)'}}>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle style={{fontFamily: 'Bebas Neue'}} className='text-light h1'>{name}</CardTitle>{/*fix this later for responsiveness */}
                <Button style={{backgroundColor: '#722F37'}} href={url}>Play!</Button>
            </CardBody>
        </Card>
    )
}

export default GameCard;