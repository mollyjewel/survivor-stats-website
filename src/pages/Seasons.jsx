import React from 'react';
import Container from '@mui/material/Container';
import SeasonsTable from '../components/SeasonsTable';
import SeasonsList from '../components/SeasonsList';

function Seasons() {
  return (
    <Container maxWidth="xl">
      <SeasonsList/>
    </Container>
  )
}

export default Seasons;
