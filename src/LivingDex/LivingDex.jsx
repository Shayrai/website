import React, { useState } from 'react';
import List from './List';
import Options from './Options';

const LivingDex = () => {
  
  const [ showAlt, setShowAlt ] = useState(false);
  const [ showShiny, setShowShiny ] = useState(false);

  const alternates = { showAlt, setShowAlt };
  const shinies = { showShiny, setShowShiny };

  return (
    <>
      <Options alternates={alternates} shinies={shinies} />
      <br />
      <List
        alternates={alternates}
        shinies={shinies}
      />
    </>
  )
};

export default LivingDex;