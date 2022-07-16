import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import MultiProgressBar from '../common/MultiProgressBar';

import styles from './styles.css'

import data from '../data/marks.json';

const OriginMarksCard = () => {
  const [ subcard, setSubcard ] = useState('');

  const loadSubCard = (identifier) => {
    if (subcard === identifier) {
      setSubcard('');
    } else {
      setSubcard(identifier);
    };
  };

  const Originmark = ({ mark, obtained, max}) => {
    return (
      <>
        {mark}
        <MultiProgressBar current={obtained} max={max} />
      </>
    )
  }

  const getByMarks = (entry, canSubList) => entry.entries.map((mark) => (
    <>
      <ListGroup.Item key={mark.name}  onClick={() => loadSubCard(mark.name)}>
        <Originmark
          mark={mark.name}
          obtained={mark.obtained}
          max={mark.max}
        />
        {canSubList && mark.name === subcard && (
          <RenderCard header={mark.name} identifier={mark.name} />
        )}
      </ListGroup.Item>
    </>
  ));

  const RenderCard = ({ header, identifier, canSubList = false }) => (
    <Card className="homeCard marksCard">
      {canSubList && <Card.Header>{header}</Card.Header>}
      <ListGroup variant="flush">
        {getByMarks(
          data.filter(
            (entry) => entry.card === identifier
          )[0] ?? {card: identifier, entries: []}, canSubList)
        }
      </ListGroup>
    </Card>
  )

  return (
    <RenderCard header="Origin Marks" identifier="Primary" canSubList={true}/>
  )
};

export default OriginMarksCard;