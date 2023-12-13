import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterCard = ({character}) => {
    console.log(character);
  return (
    <Card
      style={{
        width: "10rem",
        borderRadius: "10px",
        border: "white",
        fontSize: "12px",
      }}
      className="text-light bg-dark gallery_card"
    >
      <Card.Img variant="top" src={character.image} />
      <Card.Body className="p-0 text-center mt-1">
        <Card.Title className="m-1">{character.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush text-success">
        <ListGroup.Item className="bg-dark text-light border-0">
          Estatus: {character.status}
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark text-light border-0">
          Especie: {character.species}
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark text-light border-0">
          Género: {character.gender}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CharacterCard