import React, { useState, useEffect } from "react";
import SeasonDataService from "../services/season.service";
import SeasonData from './SeasonData';
import ContestantData from './ContestantData';
import { Link, useLocation, useHistory} from "react-router-dom";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

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
        <div className="list row">
          {/*<div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findSearchTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>*/}
          <div className="col-md-4">
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
          </div>
          <div className="col-md-8">
            {activeSeasonId ? (
                <SeasonData seasonId={activeSeasonId}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Season...</p>
              </div>
            )}
          </div>
        </div>
    )
  }

  export default SeasonsList



  /*<div>
    <h4>
    <img src={"/imgs/season_logo/" + selectedSeason._id + ".png"} alt="season logo" height="100"/>
     &nbsp;Season {selectedSeason._id} {selectedSeason.title} {selectedSeason.subtitle}</h4>
  </div>*/
