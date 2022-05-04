import React, { useState } from 'react';
import List from './List';
import Options from './Options';

const LivingDex = () => {
  
  const [ showAlt, setShowAlt ] = useState(false);
  const [ showGMax, setShowGMax ] = useState(false);
  const [ showShiny, setShowShiny ] = useState(false);

  const alternates = { showAlt, setShowAlt };
  const GMaxSet = { showGMax, setShowGMax };
  const shinies = { showShiny, setShowShiny };

  return (
    <>
      <Options alternates={alternates} shinies={shinies} GMaxSet={GMaxSet}/>
      <br />
      <List
        showAlt={showAlt}
        showShiny={showShiny}
        showGMax={showGMax}
      />
    </>
  )
};

export default LivingDex;