/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const ComboBox = ({ props, name }) => {
  /* 
  
   Etape 1. Tu crées un event onChange dans TextField, qui va faire un filter de tes events. Il récupère la valeur en premier lieu, que tu vas devoir stocker dans filteredValue.
   Etape 2. Tu crées tes actions, par exemple FILTER_DEPARTEMENT, FILTER_CATEGORY, FILTER_GAME
   FILTER_DEPARTEMENT : Tu récup ton tableau d'events (genre events = events.events.listevents) et tu fais un filter dessus :

  dans ton Reducer :
  case FILTER_DEPARTEMENT : 
  return {
    ...state,
    events: state.events.filter((event) => state.event.departement === action.input);
  }
    case FILTER_CATEGORY : 
  return {
    ...state,
    events: state.events.filter((event) => state.event.category === action.input);
  }
    case FILTER_GAME : 
  return {
    ...state,
    events: state.events.filter((event) => state.event.game === action.input);
  }

  
  dans ton action :
  export const FILTER_DEPARTEMENT = 'FILTER_DEPARTEMENT'
  export const filterDepartement = (inputValue) => ({
  type: FILTER_DEPARTEMENT,
  input: inputValue,
  });

  Etape 3. Tu appelles ces actions dans le onChange selon l'input. Ca donnera dans le handleChange : filterDepartement(event.target.value);

  Petit tips : Si tu veux factoriser ces 3 events, tu leur rajoute un payload, et tu les appelle par FILTER, ce qui donnera plus un truc du genre :
  filteredEvents = events.filter((event) => event[action.filter] === state.events.filteredValue) 
  */
  return(
  <Autocomplete
    className="combo-box-demo"
    options={props}
    getOptionLabel={(option) => option.name}
    renderInput={(params) => <TextField {...params} label={name} variant="outlined" />}
    noOptionsText="Aucun résultat"
  />
);};

ComboBox.propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.array.isRequired,
};

export default ComboBox;
