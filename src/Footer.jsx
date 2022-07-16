import React from 'react';
import styles from './index.scss';

const Footer = () => {
  return (
    <div className="footer pad-1-lr">
      Pokémon © 2002-2022 Pokémon. © 1995-2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names, as well as all other details contained about Pokémon, are trademarks of Nintendo.
      <br />
      I utilized the <a href="https://pokeapi.co/">PokeAPI.co</a> API to generate the base list of Pokémon. Some data may be incorrect. Please let me know so I can correct it on this website. Some other data I manually added using a generator, but the accuracy logic was not perfect. Please let me know if fields show as available on an entry when they are not truly available.
    </div>
  );
}

export default Footer;