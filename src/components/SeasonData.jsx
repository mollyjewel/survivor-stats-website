import React, { useState } from 'react';
import SeasonDataService from "../services/season.service";
import ContestantDataService from "../services/contestant.service";
import ContestantSummary from "./ContestantSummary";
import Grid from '@mui/material/Grid';


function SeasonData(props) {

  const [season, setSeason] = useState({});
  const [contestants, setContestants] = useState([]);

  React.useEffect(() => {retrieveSeason()}, [props.match.params.id]);
  React.useEffect(() => {retrieveContestants()}, [props.match.params.id]);

  async function retrieveSeason() {
    console.log(props.match.params.id);
    try {
      const response = await SeasonDataService.get(props.match.params.id);
      // const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
      setSeason(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function retrieveContestants() {
    try {
      console.log("Getting contestants");
      const response = await ContestantDataService.getBySeasonId(props.match.params.id);
      setContestants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="pageHeader">
        <h2>
          {season.title}{season.subtitle ? ": " + season.subtitle : null}
        </h2>
        <h4>Season {season._id}</h4>
      </div>
      <Grid container spacing={4}>
        {contestants.map(contestant => {
          return (
            <Grid item xs={4} md={3} lg={2}>
            <ContestantSummary seasonId={season._id} key={contestant._id} contestant={contestant}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default SeasonData;
