import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const GameCard = ({game}) => {
    const {name, image} = game;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
            </CardBody>
        </Card>
    )
}

export default GameCard;