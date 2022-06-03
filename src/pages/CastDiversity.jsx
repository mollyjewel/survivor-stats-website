import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MapChart from 'components/mapChart/MapChart'
import GenderBarGraph from 'components/barGraph/GenderBarGraph'
import RaceBarGraph from 'components/barGraph/RaceBarGraph'
import SexOrientBarGraph from 'components/barGraph/SexOrientBarGraph'
import DataVizItem from 'components/DataViz/DataVizItem'

function CastDiversity() {
  return (
    <div>
    <Container maxWidth="xxl" className={"chartPageContainer"}>
      <Container maxWidth="xl">
        <Typography variant="h2" className={"pageHeader"}>
          How Diverse is Survivor Casting?
        </Typography>
      </Container>
    </Container>

    <Divider sx={{margin: '0 0 24px 0'}}/>

    <Container maxWidth="xxl" sx={{backgroundColor: '#f8f9fa'}}>
      <Container maxWidth="xl">
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
    </div>
  )
}

export default CastDiversity
