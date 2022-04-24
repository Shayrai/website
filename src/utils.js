export const getPokemonPicture = (name, shiny=false, width=null, height=null) => {
  return (
    <span id="pokemon">
      <img
        alt={`${name}-${!shiny ? 'normal' : 'shiny'}`}
        src={`https://img.pokemondb.net/sprites/home/${!shiny ? 'normal' : 'shiny'}/${name}.png`}
        width={width}
        height={height}
      />
    </span>
  )
}

export const getPokemonPictureSmall = (name, shiny=false) => {
  return getPokemonPicture(name, shiny, "15%");
}