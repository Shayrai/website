import React from 'react';

const ApriballsCard = ({
  apriballs,
}) => {
  return (
    <>
      {apriballs.map((apriball) => {
        return (
          <>
            {apriball}
            <br />
          </>
        )
      })}
    </>
  );
};

export default ApriballsCard;