import React, { useState, useEffect } from 'react';
import list from './data/list.json';
import { getPokemonPicture } from './utils';

const Viewer = (id) => {

  const [ details, setDetails ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    console.log(id);
    console.log(list);
    setDetails(list.find((pokemon) => pokemon.id === id.id));

    if (!details) { setIsError(true); }
    setIsLoading(false);

  }, [id, details]);

  if (isLoading) {
    return 'loading';
  }

  if (isError) { 
    return 'error';
  }

  return (
    <>
      {getPokemonPicture(details.name)}
      {getPokemonPicture(details.name, true)}
    </>
  )

};

export default Viewer;