import React from 'react';

const OriginMarksCard = ({
  originMarks,
}) => {
  return (
    <>
      {originMarks.map((originMark) => {
        return (
          <>
            {originMark}
            <br />
          </>
        )
      })}
    </>
  );
};

export default OriginMarksCard;