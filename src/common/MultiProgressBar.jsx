import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const MultiProgressBar = ({
  current,
  max
}) => {
  const completed = max > 0 ? (current / max) * 100 : 100;

  return (
    <ProgressBar>
      <ProgressBar variant="success" now={completed} key={1}/>
      <ProgressBar variant="success" now={completed} key={1}/>
      <ProgressBar variant="danger" now={100 - completed} key={2}/>
      <div className="progressBarLabel">
        {current} / {max}
      </div>
    </ProgressBar>
  )
}

export default MultiProgressBar;
