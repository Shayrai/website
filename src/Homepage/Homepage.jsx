import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OriginMarksCard from './OriginMarksCard';
import AltFormsCard from './AltFormsCard';
import ShinyCard from './ShinyCard';
import LangTagsCard from './LangTagsCard'

const Homepage = () => {
  return (
    <>
      <Row className="noMargin">
        <Col xs={12} sm={6} md={4} className="pad-1-t pad-1-l">
          <OriginMarksCard />
        </Col>
        <Col xs={12} sm={6} md={4} className="pad-1-t pad-1-l">
          <ShinyCard />
        </Col>
        <Col xs={12} sm={6} md={4} className="pad-1-t pad-1-l">
          <LangTagsCard />
        </Col>
      </Row>
      <Row className="noMargin">
        <Col xs={12} sm={6} md={4} className="pad-1-t pad-1-l">
          <AltFormsCard isShiny={false} />
        </Col>
        <Col xs={12} sm={6} md={4} className="pad-1-t pad-1-l">
          <AltFormsCard isShiny={true} />
        </Col>
      </Row>
    </>
  )
};

export default Homepage;