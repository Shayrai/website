import { gql } from '@apollo/client';

const getAllPokemon = gql`
query getAllPokemon($limit: Int, $offset:Int) {
  pokemon_v2_pokemonspecies(order_by:{id:asc}, limit:$limit, offset:$offset) {
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