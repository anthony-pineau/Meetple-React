// == Import npm
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Organizes from './Event-organizes';
import Participate from './Event-participate';

import ProfilStyled from './ProfilStyled';

// == Composant
const ProfilPublic = () => (
  <ProfilStyled>
    <h2 className="title1">Page de profile</h2>

    <h3 className="title-organizes">Listes des évènements organisé : </h3>
    <Grid container spacing={5}>
      <Grid item xs={12} lg={6}>
        <Organizes />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Organizes />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Organizes />
      </Grid>
    </Grid>

    <h3 className="title-participate">Listes des évènements participer : </h3>
    <Grid container spacing={5}>
      <Grid item xs={12} lg={6}>
        <Participate />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Participate />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Participate />
      </Grid>
    </Grid>
  </ProfilStyled>
);

// == Export
export default ProfilPublic;
