import { gql } from '@apollo/client';

const getAllPokemon = gql`
query getAllPokemon($limit: Int, $offset: Int) {
  pokemon_v2_pokemonspecies(order_by: {id: asc}, limit: $limit, offset: $offset) {
    name
    has_gender_differences
    id
    pokemon_v2_pokemons {
      pokemon_v2_pokemonforms {
        form_name
        is_battle_only
        is_default
      }
      pokemon_v2_pokemontypes {
        slot
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        is_hidden
        pokemon_v2_ability {
          generation_id
          name
        }
      }
    }
    evolves_from_species_id
    generation_id
    hatch_counter
    is_legendary
    is_mythical
    capture_rate
    pokemon_v2_pokemonegggroups {
      pokemon_v2_egggroup {
        pokemon_v2_egggroupnames(order_by: {id: desc}, limit: 1) {
          name
        }
      }
    }
  }
}
`

export default getAllPokemon