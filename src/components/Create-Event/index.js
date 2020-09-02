/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import FormStyled from 'src/components/FormStyled/FormStyled';
import Field from './Field';

const Create = ({
  title,
  date,
  department,
  adress,
  maxParticipants,
  description,
  changeValue,
  sendEvent,
  autocategory,
  autogames,
  autotags,
  selectCategory,
  selectGames,
  selectTags,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('onsubmit');
    sendEvent();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <h1 className="title">Créer un événement</h1>
      <Field
        description="Titre"
        name="title"
        value={title}
        onChange={changeValue}
      />
      <Field
        type="date"
        description="Date"
        name="date"
        value={date}
        onChange={changeValue}
      />
      <Field
        description="Département"
        name="department"
        value={department}
        onChange={changeValue}
      />
      <Field
        description="Adresse"
        name="adress"
        value={adress}
        onChange={changeValue}
      />
      <div className="input-container">
        <label className="label" htmlFor="category">Categories
          <select required className="input" id="category" name="selectedCategoryId" onChange={(event) => selectCategory(event.target.value, 'selectedCategoryId')}>
            <option>-</option>
            {autocategory.map((currentCategory) => (
              <option key={currentCategory.id} value={currentCategory.id}>
                {currentCategory.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="input-container">
        <label className="label" htmlFor="games">Les jeux
          <select required className="input" id="games" name="selectedGamesId" onChange={(event) => selectGames(event.target.value, 'selectedGamesId')}>
            <option>-</option>
            {autogames.map((currentGames) => (
              <option key={currentGames.id} value={currentGames.id}>
                {currentGames.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="input-container">
        <label className="label" htmlFor="tags">Les tags
          <select required type="checkbox" className="input" id="tags" name="selectedTagsId" onChange={(event) => selectTags(event.target.value, 'selectedTagsId')}>
            <option>-</option>
            {autotags.map((currentTags) => (
              <option key={currentTags.id} value={currentTags.id}>
                {currentTags.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Field
        description="Nombre maximum de participants"
        name="maxparticipants"
        value={maxParticipants}
        type="number"
        onChange={changeValue}
      />
      <Field
        description="Description"
        name="description"
        value={description}
        onChange={changeValue}
      />
      <div className="action">
        <button className="action-button" type="submit">Valider</button>
      </div>
    </FormStyled>
  );
};

Create.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  maxParticipants: PropTypes.string.isRequired,
  description: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  sendEvent: PropTypes.func.isRequired,
  autocategory: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired,
  autogames: PropTypes.array.isRequired,
  selectGames: PropTypes.func.isRequired,
  autotags: PropTypes.array.isRequired,
  selectTags: PropTypes.func.isRequired,
};

Create.defaultProps = {
  description: '',
};

export default Create;
