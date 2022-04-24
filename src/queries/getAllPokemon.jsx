import { gql } from '@apollo/client';

const getAllPokemon = gql`
  query getAllPokemon {
    pokemon_v2_pokemonspecies(order_by: {id: asc}, limit: 10) {
      name
      has_gender_differences
      id
      pokemon_v2_pokemons {
        pokemon_v2_pokemonforms {
          form_name
          is_battle_only
          is_default
        }
      }
    }
  }
`;

export default getAllPokemon