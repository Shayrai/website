import React from 'react';
import { Alert } from 'react-bootstrap';

const TitleBar = ({
  name,
  id,
  subtext,
}) => {
  return (
    <>
      <Alert key={id} variant="info" className="text-center">
        {name} ({id})
      </Alert>
      {/* <br />
      {subtext}
      <br /> */}
    </>
  );
};

export default TitleBar;