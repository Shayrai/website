import React from 'react';
import PropTypes from 'prop-types';

import { getPokemonPictureSmall } from '../utils';

const ListRow = ({details, obtained, shiny}) => {
  const {
    pokemon,
    display
  } = details;

  return (
    <div className='row'>
      <div className='number col-md-3'>{pokemon.id}</div>
      <div className='name col-md-3'>
        {shiny && 'Shiny '}
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        {pokemon.has_gender_differences && (" " .concat(display))}
      </div>
      <div className='picture col-md-3'>
        {getPokemonPictureSmall(
          pokemon.name.concat(
            pokemon.has_gender_differences && display === 'female'
              ? '-f' : ''
          ),
          shiny
        )}
      </div>
      <div className='obtained col-md-3'>
        <input
          type="checkbox"
          id="obtainedPokemon"
          name="obtainedPokemon"
          disabled="disabled"
          checked={obtained}
        />
      </div>
    </div>
  );
}

ListRow.propTypes = {
  details: PropTypes.shape().isRequired,
  obtained: PropTypes.bool.isRequired,
  shiny: PropTypes.bool,
}

export default ListRow;