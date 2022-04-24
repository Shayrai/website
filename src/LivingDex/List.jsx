import React from 'react';
import PropTypes from 'prop-types';
import obtained from '../data/obtained.json';
import ListRow from './ListRow';

import getAllPokemon from '../queries/getAllPokemon';
import { useQuery } from '@apollo/client';

const List = ({alternates, shinies}) => {

  const Header = () => {
    return (
      <div className='row'>
        <div className='col-md-3'>ID</div>
        <div className='col-md-3'>Name</div>
        <div className='col-md-3'>Picture</div>
        <div className='col-md-3'>Obtained</div>
        <br />
      </div>
    );
  }

  const { loading, error, data } = useQuery(getAllPokemon);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const Row = ({pokemon, showShiny}) => {
    return (
      <>
        <ListRow
          details={{
            pokemon: pokemon,
            display: pokemon.has_gender_differences && "male"
          }}
          obtained={
            obtained.some((pokemon2) => {
              console.log(pokemon.id == pokemon2.id)
              return pokemon.id == pokemon2.id && pokemon2.shiny === showShiny
            })
          }
          shiny={showShiny}
        />
        {pokemon.has_gender_differences && (
          <>
            <br />
            <ListRow
              details={{
                pokemon: pokemon,
                display: "female"
              }}
              obtained={
                obtained.some((pokemon2) => (
                  pokemon.id == pokemon2.id && pokemon2.shiny === showShiny
                ))
              }
              shiny={showShiny}
            />
          </>
        )}
      </>
    )
  }

  const Rows = () => {
    const { showAlt } = alternates;
    const { showShiny } = shinies;

    const { pokemon_v2_pokemonspecies: species } = data;

    return species.map((pokemon) => (
      <>
        <Row pokemon={pokemon} showShiny={false} />
        {showShiny && (<><br /> <Row pokemon={pokemon} showShiny={true} /></>)}
        <br />
      </>
    ));

  };

  return (
    <>
      <Header />
      <Rows />
    </>
  )
}

List.propTypes = {
  alternates: PropTypes.shape({
    showAlt: PropTypes.bool.isRequired,
    setShowAlt: PropTypes.func.isRequired,
  }).isRequired,
  shinies: PropTypes.shape({
    showShiny: PropTypes.bool.isRequired,
    setShowShiny: PropTypes.func.isRequired,
  }).isRequired
};

export default List;