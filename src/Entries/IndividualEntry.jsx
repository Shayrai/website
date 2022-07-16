import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router-dom'
import list from '../data/list.json';
import Footer from '../Footer';
import TitleBar from './TitleBar';
import TypesCard from './TypesCard';
import AbilitiesCard from './AbilitiesCard';
import ApriballsCard from './ApriballsCard';
import OriginMarksCard from './OriginMarksCard';
import styles from './styles.css';
import { Col, Row } from 'react-bootstrap';

const Entry = () => {
  const [ details, setDetails ] = useState(null);

  const { id: searchedId } = useParams();
  useEffect(() => {
    setDetails(list.find((entry) => entry.id === searchedId));
  }, []);

  if (!details) {
    return <></>
  }

  return (
    <div className="pad-1-t pad-1-lr">
      <TitleBar name={details.name} id={details.id} subtext={details.subtext} />
      <Row>
        <Col xs={2}>
          <TypesCard types={details.types} />
        </Col>
        <Col xs={6}>
          <AbilitiesCard abilities={details.abilities} />
        </Col>
        <Col>
        </Col>
      </Row>
      <ApriballsCard apriballs={details.availableBalls} />
      <OriginMarksCard originMarks={details.originMarks} />
      <Footer />
    </div>
  )
};

export default Entry;