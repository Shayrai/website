import React from 'react';
import { FormattedMessage } from 'react-intl';
import { forms } from '../constants';
import styles from './styles.css';

const Entry = ({
  pokemon,
  isShiny,
  altName,
  gender,
  obtained
}) => {

  return (
    <td className={`dexEntry ${obtained ? 'obtained' : 'unobtained'}`}>
    # {String(pokemon.id).padStart(3, 0)}
    <br />
    {isShiny && <FormattedMessage id="shiny" />}
    <FormattedMessage
      id="pokemonDexEntry"
      values={{
        pokemon: pokemon.name.slice(0, 1).toUpperCase().concat(pokemon.name.slice(1)),
        form: altName?.length > 0 ? altName[1] : '',
        gender: gender && pokemon.has_gender_differences && (isShiny ? ` ${forms.general[gender][1]}` : forms.general[gender][1]),
      }}
    />
    <br />
    <input
      type="checkbox"
      id="obtainedPokemon"
      name="obtainedPokemon"
      disabled="disabled"
      checked={obtained}
    />
  </td>
  );
};

export default Entry;