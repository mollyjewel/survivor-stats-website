import { useState, useEffect } from 'react'
import SeasonDataService from "services/season.service"
import ContestantDataService from "services/contestant.service"
import ContestantSummary from "components/seasonData/ContestantSummary"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function SeasonData(props) {

  const seasonId = props.seasonId ? props.seasonId : props.match.params.id
  const [season, setSeason] = useState({})
  const [contestants, setContestants] = useState([])

  // Retrieve season for current season Id
  useEffect(() => {
    SeasonDataService.get(seasonId).then((response) => {
      setSeason(response.data)
    }).catch ((error) => {
      console.log(error)
    })
  }, [seasonId])

  // Retrieve contestants for current season Id
  useEffect(() => {
    ContestantDataService.getBySeasonId(seasonId).then((response) => {
      setContestants(response.data)
    }).catch ((error) => {
      console.log(error)
    })
  }, [seasonId])

  return (
    <div>
      <div className="pageHeader">
        <Typography variant="h4">
          Season {season._id}
        </Typography>
        <Typography variant="h7">
          {season.title} {season.subtitle}
        </Typography>
      </div>
      <Grid container spacing={4}>
        {contestants.map(contestant => {
          return (
            <Grid item xs={4} md={3} lg={2} key={contestant._id}>
            <ContestantSummary seasonId={season._id} key={contestant._id} contestant={contestant}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SeasonData
