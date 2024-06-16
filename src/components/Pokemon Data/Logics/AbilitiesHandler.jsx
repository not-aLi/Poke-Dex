import React, { useContext } from 'react'
import { PokemonContext } from '../../States/StateContext'
import Abilities from '../Sub Layouts/Abilities';
import getTypeStyles from './getTypeStyles';

const AbiliiesHandler = () => {
    const {pokemonInfo, currentAbilityIndex, setCurrentAbilityIndex, setAbilityDetailBox, abilityDetailBox} = useContext(PokemonContext); 

    
 /**
  * The function `renderTypeColor` returns the style object for the primary type of a Pokemon based on
  * the `pokemonInfo` data.
  * @returns An object containing the styles for the primary type of the Pokemon, or an empty object if
  * there is no `pokemonInfo` available.
  */
  const renderTypeColor = () => {
    if (pokemonInfo) {
      const primaryType = pokemonInfo.types[0].type.name;
      return getTypeStyles(primaryType);
    }
    return {};
  };

/**
 * The function `toggleAbilityDetailBox` toggles the visibility of an ability detail box based on the
 * index provided.
 */
  const toggleAbilityDetailBox = (index) => {
    if(currentAbilityIndex === index){
    setAbilityDetailBox(!abilityDetailBox);
    setCurrentAbilityIndex(null);
    }
    else{
      setCurrentAbilityIndex(index);
      setAbilityDetailBox(true);
    }
  };

  return (
    <div>
      <Abilities renderTypeColor={renderTypeColor} toggleAbilityDetailBox={toggleAbilityDetailBox}/>
    </div>
  )
}

export default AbiliiesHandler
