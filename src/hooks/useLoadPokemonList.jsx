import { useState, useEffect } from 'react';
import getAllPokemon from '../queries/getAllPokemon';
import { useQuery } from '@apollo/client';

export default function useLoadPokemonList({
  offset,
  setOffset,
  responseData,
  setResponseData
}) {

  const [ pokemonListLoading, setPokemonListLoading ] = useState(true);
  const [ pokemonListError, setPokemonListError ] = useState(false);

  const { loading, error, data, fetchMore } = useQuery(getAllPokemon, {
    variables: {
      offset
    },
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  }); 
  
  useEffect(() => {
    setPokemonListLoading(loading);
    setPokemonListError(error);
    if(loading) return;
    if(error) return;
    setResponseData([data]);
  }, [data]);

  const pokemonListFetchMore = () => {
    setOffset(offset + 10);
    fetchMore({
      variables: {
        offset: offset + 10
      }
    });
  }

  return { pokemonListLoading, pokemonListError, pokemonListFetchMore }
}
