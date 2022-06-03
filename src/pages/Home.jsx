import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { Link } from "react-router-dom"

import ChartIcon from 'components/icons/ChartIcon'
import DataIcon from 'components/icons/DataIcon'

function Home() {

  const styles = {
    container: {
      height: 'auto',
        backgroundImage: `url(${"imgs/fiji.jpg"})`
    },
    titleContainer: {
      position: 'relative',
      //textAlign: 'center',
    },
    titleText: {
      position: 'absolute',
      top: '10px',
      left: '20px'
      //transform: 'translate(-50%, -50%)'
    },
    titleHeader: {
      color: '#e28530',
      fontWeight: 'bold',
      margin: '0px 30px 0px 0px'
    },
    titleDescription: {
      paddingRight: '20px',
      margin: '4px 20px 0px 4px'
    }
  }

  return (
    <Container maxWidth="xl">
      <Alert severity="warning">
        This website is a developmental environment to experiment with the MERN
        (MongoDB, Express, React, NodeJS) stack for Molly Soliday. The data
        collected and displayed may be incomplete or incorrect.
      </Alert>
      <Grid container>
      <Grid item xs={12} md={8}>
      <Box className="titlePhoto" style={styles.titleContainer}>
        <img className="img-fluid" src={"imgs/fiji.jpg"} alt="fiji"/>
        <Box style={styles.titleText}>
          <Typography
            variant="h1"
            style={styles.titleHeader}
            sx={{
              fontSize: {
                lg: 120,
                md: 100,
                sm: 80,
                xs: 60
              }
            }}>
            Survivor Stats
          </Typography>
          <Typography
            variant="body"
            component="div"
            style={styles.titleDescription}
            sx={{
              fontSize: {
                lg: 30,
                md: 25,
                sm: 20,
                xs: 15
              }
            }}
          >
            Explore the data behind the popular reality TV show.
          </Typography>
        </Box>
      </Box>
      </Grid>
      <Grid item xs={12} md={4} textAlign={"center"}>
        <ContentSummary
          title="Analysis"
          icon={<ChartIcon />}
          description="Gain insights into compelling questions with the help of data visualizations."
          />
        <Divider/>
        <ContentSummary
          title="Data"
          icon={<DataIcon />}
          description="Dig deep into the raw data collected across seasons and contestants."
          />
      </Grid>
      </Grid>
    </Container>
  )
}

function ContentSummary(props) {
  return (
    <Box margin={'24px'}>
    <Link style={{ textDecoration: 'none', color:'#484848' }} to={'/data/seasons'}>
      <Typography variant="h2">
        {props.title}
      </Typography>
      <Typography variant="h1">
        {props.icon}
      </Typography>
      <Typography variant="body">
        {props.description}
      </Typography>
      </Link>
    </Box>
  )
}

export default Home
