import React, { useState, useEffect } from "react";
import SeasonDataService from "../services/season.service";
import SeasonData from './SeasonData';
import ContestantData from './ContestantData';
import { Link } from "react-router-dom";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

function SeasonsList(props) {
  /*constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveSeasons = this.retrieveSeasons.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSeason = this.setActiveSeason.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      seasons: [],
      selectedSeason: null,
      contestantId: "61e08308d26d9b1673bb72cd",
      selectedIndex: -1,
      searchTitle: ""
    };
  }*/

  const [seasons, setSeasons] = useState([])
  const [activeSeasonId, setActiveSeasonId] = useState(1)
  //const [selectedIndex, setSelectedIndex] = useState(-1)
  const [searchTitle, setSearchTitle] = useState("")

  /*componentDidMount() {
    this.retrieveSeasons();
  }*/

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
    setActiveSeasonId(1)
    //setSelectedIndex(-1)
  }

  /*function setActiveSeason(season, index) {
    setSelectedSeason(season)
    setSelectedIndex(index)
  }*/


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
                        selected={season._id === activeSeasonId}
                        onClick={() => setActiveSeasonId(season._id)}
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
