import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import MultiProgressBar from '../common/MultiProgressBar';

import styles from './styles.css'

import data from '../data/homepageData.json';

const OriginMarksCard = () => {
  const [ subcard, setSubcard ] = useState('');

  const loadSubCard = (identifier) => {
    if (subcard === identifier) {
      setSubcard('');
    } else {
      setSubcard(identifier);
    };
  };

  const Originmark = ({ mark, obtained, max }) => {
    return (
      <>
        {mark}
        <MultiProgressBar current={obtained} max={max} />
      </>
    )
  }

  const getByMarks = (entry, hasSublist) => entry.entries.map((mark) => (
    <>
      <ListGroup.Item key={mark.name}  onClick={() => loadSubCard(mark.name)}>
        <Originmark
          mark={mark.name}
          obtained={mark.obtained}
          max={mark.max}
        />
        {hasSublist && mark.name === subcard && (
          <RenderCard
            list={entry.subCards ?? []}
            header={mark.name}
            identifier={mark.name}
            hasSublist={mark.subCards}
          />
        )}
      </ListGroup.Item>
    </>
  ));

  const RenderCard = ({ list, header, identifier, hasSublist = true }) => (
    <Card className="homeCard marksCard">
      {hasSublist && <Card.Header>{header}</Card.Header>}
      <ListGroup variant="flush">
        {getByMarks(
          list.filter(
            (entry) => entry.card === identifier
          )[0] ?? {card: identifier, entries: []}, hasSublist)
        }
      </ListGroup>
    </Card>
  )

  return (
    <RenderCard
      list={data}
      header="Origin Marks"
      identifier="OriginMarks"
    />
  )
};

export default OriginMarksCard;