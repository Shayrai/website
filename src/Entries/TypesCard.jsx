import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const TypesCard = ({
  types,
}) => {
  const [primary, secondary] = types;

  return (
    <>
      <Card className="entryCard typesCard">
        <Card.Header>Types</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className={primary}>{primary}</ListGroup.Item>
          {secondary && (<ListGroup.Item className={secondary}>{secondary}</ListGroup.Item>)}
        </ListGroup>
      </Card>
    </>
  );
};

export default TypesCard;