import React, { useState, useEffect } from "react";
import SeasonDataService from "../services/season.service";
import SeasonData from './SeasonData';
import { Link, useLocation, useHistory} from "react-router-dom";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function SeasonsList(props) {

  const search = useLocation().search
  const history = useHistory();

  const [seasons, setSeasons] = useState([])
  const [activeSeasonId, setActiveSeasonId] = useState(new URLSearchParams(search).get('id'))
  const [searchTitle, setSearchTitle] = useState("")

  function onChangeSearchTitle(e) {
    const newSearchTitle = e.target.value
    setSearchTitle(newSearchTitle)
  }

  function retrieveSeasons() {
    SeasonDataService.getAll()
      .then(response => {
        setSeasons(response.data)
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function refreshList() {
    retrieveSeasons();
    setActiveSeasonId(null)
  }

  function findSearchTitle() {
    SeasonDataService.findByTitle(searchTitle)
      .then(response => {
        setSeasons(response.data)
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function handleSeasonChange(seasonId) {
    history.replace(`seasons?id=${seasonId}`)
    setActiveSeasonId(seasonId)
  }

  useEffect(() => {retrieveSeasons()}, []);

  return (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                overflow: 'auto',
                maxHeight: 750,
                '& ul': { padding: 0 },
              }}
              subheader={
                <ListSubheader>
                    Select Season
                </ListSubheader>}
            >
            {seasons && seasons.map((season, index) => (
                      <ListItemButton
                        key={`season-${season._id}`}
                        selected={season._id === activeSeasonId}
                        onClick={() => handleSeasonChange(season._id)}
                      >
                        <ListItemText primary={
                          season._id +
                          (season.title ? (' ' + season.title) : '') +
                          (season.subtitle ? (' ' + season.subtitle) : '')
                        }/>
                      </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            {activeSeasonId ? (
                <SeasonData seasonId={activeSeasonId}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Season...</p>
              </div>
            )}
          </Grid>
        </Grid>
    )
  }

  export default SeasonsList



  /*<div>
    <h4>
    <img src={"/imgs/season_logo/" + selectedSeason._id + ".png"} alt="season logo" height="100"/>
     &nbsp;Season {selectedSeason._id} {selectedSeason.title} {selectedSeason.subtitle}</h4>
  </div>*/
