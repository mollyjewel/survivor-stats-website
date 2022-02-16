import React, { useState } from 'react';
import SeasonDataService from "../services/season.service";
import ContestantDataService from "../services/contestant.service";
import ContestantSummary from "./ContestantSummary";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function SeasonData(props) {

  const seasonId = props.seasonId ? props.seasonId : props.match.params.id;
  const [season, setSeason] = useState({});
  const [contestants, setContestants] = useState([]);

  React.useEffect(() => {retrieveSeason()}, [seasonId]);
  React.useEffect(() => {retrieveContestants()}, [seasonId]);

  async function retrieveSeason() {
    try {
      const response = await SeasonDataService.get(seasonId);
      // const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
      setSeason(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function retrieveContestants() {
    try {
      console.log("Getting contestants");
      const response = await ContestantDataService.getBySeasonId(seasonId);
      setContestants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pageHeader">
        {/*}<h2>
          {season.title}{season.subtitle ? ": " + season.subtitle : null}
        </h2>
        <h4>Season {season._id}</h4>
        */}
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
  );
}

export default SeasonData;
