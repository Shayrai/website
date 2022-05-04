import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Table } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { forms, lastInDexByRegion, regions, fontAwesomeValues } from '../constants';
import useLoadPokemonList from '../hooks/useLoadPokemonList';
import obtained from '../data/obtained.json';
import Entry from './Entry';
import styles from './styles.css';

const List = ({
  showAlt,
  showGMax,
  showShiny,
}) => {
  
  const [ offset, setOffset ] = useState(0);
  const [ responseData, setResponseData ] = useState([]);

  const {
    pokemonListLoading,
    pokemonListError,
    pokemonListFetchMore,
  } = useLoadPokemonList({
    offset,
    setOffset,
    responseData,
    setResponseData,
  });

  const addNewRegion = (sections, id, rows) => {
    if(lastInDexByRegion.some((region) => region === id)) {
      sections[sections.length] = [...rows];
      rows.length = 0;
    };
  };

  const addNewRow = (rows) => {
    if (rows.length === 0 || rows[rows.length - 1]?.length === 12) {
      rows.push([]);
    };
  };

  const getFormDetails = (pokemonName, formName) => {
    if (formName.length === 0) return [];

    if (forms.general[formName]?.length === 0) return null;

    if (!forms.general[formName]) {
      const specials = forms[pokemonName];

      if (!specials) {
        console.log('missing form set for', pokemonName, 'looked for', formName);
        return null;
      };

      if(!specials[formName]) {
        console.log('missing', formName, 'for', pokemonName);
      }

      if(specials[formName]?.length === 0) return null;

      return specials[formName];
    };
    
    return forms.general[`${formName}`]
  };

  const hasObtained = (pokemon, gender, altName, isShiny) => (
    obtained.some((entry) => {
      const matchedId = pokemon.id === entry.id;

      const canGMax = entry.GMAX.isCapable;
      let matchedShiny = true;
      let matchedGender = true;
      let matchedAlt = true;
      let matchedGMax = false;

      if (matchedId) {
        matchedShiny = showShiny ? entry.isShiny === isShiny : true;
        matchedGender = gender ? entry.gender.toUpperCase() === gender.toUpperCase() : true;
        const lookingForGmax = showGMax && altName && altName.length > 0 && altName[1]?.includes('Gigantamax');
        if (!lookingForGmax && (showGMax ? !entry.GMAX.hasUnlocked : true )) matchedGMax = true;
        if (lookingForGmax && entry.GMAX.hasUnlocked) matchedGMax = true;
      };

      return matchedId && matchedShiny && matchedGender && matchedAlt && (canGMax ? matchedGMax : true);
    })
  );

  const Tables = () => {
    if(pokemonListLoading) {
      return (
        <Skeleton count={4} width={100}/>
      );
    };
    if (pokemonListError || !responseData[0]?.pokemon_v2_pokemonspecies) {
      return (
        <>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            color={fontAwesomeValues.colors.alert}
            size={fontAwesomeValues.sizes.huge}
            className='align-middle'
          /> <span className='align-middle'>
            <FormattedMessage id="error" />
          </span>
        </>
      );
    };

    const sections = [];
    let rows = [];

    const { pokemon_v2_pokemonspecies: species } = responseData[0];

    species.map((pokemon) => {
      pokemon.pokemon_v2_pokemons.map((formList) => {
        formList.pokemon_v2_pokemonforms.map((form) => {
          const formName = getFormDetails(pokemon.name, form.form_name);

          if (formName === null || (!showGMax && formName && formName === forms?.general?.gmax)) return null;

          if (!showAlt
            && formName?.length > 0
            && pokemon.pokemon_v2_pokemons[0].pokemon_v2_pokemonforms[0].form_name !== form.form_name
          ) return null;

          addNewRow(rows);
          
          rows[rows.length - 1].push({
            pokemon: pokemon,
            isShiny: false,
            altName: showAlt && formName,
            gender: showAlt && pokemon.has_gender_differences && 'male'
          });

          addNewRow(rows);

          if (showShiny) {
            rows[rows.length - 1].push({
              pokemon: pokemon,
              isShiny: true,
              altName: showAlt && formName,
              gender: showAlt && pokemon.has_gender_differences && 'male'
            });
          };

          addNewRow(rows);

          if (showAlt && pokemon.has_gender_differences) {
            rows[rows.length - 1].push({
              pokemon: pokemon,
              isShiny: false,
              altName: formName,
              gender: 'female'
            });

            addNewRow(rows);
  
            if (showShiny) {
              rows[rows.length - 1].push({
                pokemon: pokemon,
                isShiny: true,
                altName: formName,
                gender: 'female'
              });
            };
          }

        });
      });
      
      addNewRegion(sections, pokemon.id, rows);
    });

    return sections.map((section) => (
      <Table
        striped={true}
        bordered={12}
        hover={true}
        variant="dark"
      >
        <thead>
          <tr>
            <th colSpan={12} className="dexHeader">
              { 
                regions[sections.findIndex((currSection) => section === currSection)] 
              } {
                `(${section[0][0]?.pokemon?.id} - ${section[0][0]?.pokemon?.id + [].concat(...section.map((row) => row)).length - 1})`
              } {
                `[${(section.length - 1) * 12 + section[section.length - 1].length}]`
              }
            </th>
          </tr>
        </thead>
        <tbody>
          {
            section.map((row) => {
              return (
                <tr key={`row-starts-${row[0]?.pokemon?.name}${showAlt && row[0]?.altName ? `-${row[0].altName}` : ''}`}>
                  {
                    row.map((data) => (
                      <Entry
                        pokemon={data.pokemon}
                        isShiny={data.isShiny}
                        altName={data.altName}
                        gender={data.gender}
                        obtained={
                          hasObtained(data.pokemon, data.gender, data.altName, data.isShiny)
                        }
                        key={`col-${data.isShiny ? 'shiny-' : 'normal-'}${`${data.gender}-`}${data.pokemon.name}${showAlt && data.altName ? `-${data.altName[0]}` : ''}`}
                      />
                  ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    ));
  }

  return <Tables />;

};

export default List;