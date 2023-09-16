import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const Cards = ({nombre,descripcion,texto,colorFondo,imagen}) => {
    return (
    <>
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={imagen}
    />
    <Card.Body>
    <Card.Title>{nombre} </Card.Title>
    <Card.Text>{descripcion}</Card.Text>
    <Tags texto = {texto}
        colorFondo = {colorFondo}
    />
    </Card.Body>
    </Card>
    </>
    );
    };
    export default Cards;
    