import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OriginMarksCard from './OriginMarksCard';

const Homepage = () => {
  return (
    <>
      <Row className="noMargin">
        <Col xs={4} className="pad-1-t pad-1-l">
          <OriginMarksCard />
        </Col>
        <Col />
      </Row>
    </>
  )
};

export default Homepage;