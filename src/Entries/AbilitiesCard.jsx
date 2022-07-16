import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const AbilitiesCard = ({
  abilities,
}) => {
  const [primary, secondary, tertiary] = abilities;

  return (
    <>
      <Card className="entryCard abilitiesCard">
        <Card.Header>Abilities</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className={primary?.name}>
            {primary?.name} {primary?.isHidden && "(hidden)"}
          </ListGroup.Item>
          {secondary && (
            <ListGroup.Item className={secondary?.name}>
              {secondary?.name} {secondary?.isHidden && "(hidden)"}
            </ListGroup.Item>
          )}
          {tertiary && (
            <ListGroup.Item className={tertiary?.name}>
              {tertiary?.name} {tertiary?.isHidden && "(hidden)"}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </>
    // <>
    //   {primary?.name} {primary?.isHidden && "(hidden)"}
    //   <br />
    //   {secondary?.name} {secondary?.isHidden && "(hidden)"}
    //   <br />
    //   {tertiary?.name} {tertiary?.isHidden && "(hidden)"}
    // </>
  );
};

export default AbilitiesCard;