import React from 'react';
import UsStyled from './UsStyled';
import Flo from './img/flo.jpg';
import Fab from './img/fab.jpg';
import Will from './img/will.png';
import Tony from './img/tony.jpg';

const Us = () => (
  <UsStyled>
    <h1 className="titreh1">A propos de Nous !</h1>

    <div className="flex-container">
      <div className="description">
        <div className="img-avatar"><img className="avatar" alt="" src={Tony} /></div>
        <h2 className="Name">Anthony</h2>
        <h3 className="spe">Spécialité : React</h3>
        <h4 className="Tag">Lead Front</h4>
        <ul>
          <li className="title-jx">Jeux préférés :</li>
          <li>- Monopoly</li>
          <li>- La Bonne Paye</li>
          <li>- Docteur Maboul</li>
        </ul>
      </div>

      <div className="description">
        <div className="img-avatar"><img className="avatar" alt="" src={Fab} /></div>
        <h2 className="Name">Fabien</h2>
        <h3 className="spe">Spécialité : Symfony</h3>
        <h4 className="Tag">Lead Back</h4>
        <ul>
          <li className="title-jx">Jeux préférés :</li>
          <li>- Les Petits Chevaux</li>
          <li>- Solitaire</li>
          <li>- Zombicide</li>
        </ul>
      </div>

      <div className="description">
        <div className="img-avatar"><img className="avatar" alt="" src={Flo} /></div>
        <h2 className="Name">Florent</h2>
        <h3 className="spe">Spécialité : React</h3>
        <h4 className="Tag">Scrum Master</h4>
        <ul>
          <li className="title-jx">Jeux préférés :</li>
          <li>- Risk</li>
          <li>- Git Disaster</li>
          <li>- Uno</li>
        </ul>
      </div>

      <div className="description">
        <div className="img-avatar"><img className="avatar" alt="" src={Will} /></div>
        <h2 className="Name">Will</h2>
        <h3 className="spe">Spécialité : Symfony</h3>
        <h4 className="Tag">Product Owner</h4>
        <ul>
          <li className="title-jx">Jeux préférés :</li>
          <li>- 7 Wonders</li>
          <li>- Mafia de Cuba</li>
          <li>- Decrypto</li>
        </ul>
      </div>

    </div>
  </UsStyled>
);

export default Us;
