import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MapChart from '../components/MapChart';
import GenderBarGraph from '../components/GenderBarGraph';
import RaceBarGraph from '../components/RaceBarGraph';
import SexOrientBarGraph from '../components/SexOrientBarGraph';
import DataVizItem from '../components/DataViz/DataVizItem';

function CastDiversity() {
  return (
    <Container maxWidth="xxl" sx={{backgroundColor: '#acb4bd'}}>
      <Container maxWidth="xl">
        <Typography variant="h2" className={"chartPageHeader"}>
          How Diverse is Survivor Casting?
        </Typography>

        <Divider sx={{margin: '0 0 24px 0'}}/>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
              <DataVizItem title={'Gender Diversity'} content={<GenderBarGraph/>} />
          </Grid>
          <Grid item xs={12} lg={6}>
              <DataVizItem title={'Race Diversity'} content={<RaceBarGraph/>} />
          </Grid>
          <Grid item xs={12} lg={6}>
              <DataVizItem title={'Sexual Orientation Diversity'} content={<SexOrientBarGraph/>} />
          </Grid>
          <Grid item xs={12} lg={6}>
              <MapChart/>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default CastDiversity;
