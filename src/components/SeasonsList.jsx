import React, { useState, useEffect } from "react";
import SeasonDataService from "../services/season.service";
import SeasonData from './SeasonData';
import ContestantData from './ContestantData';
import { Link } from "react-router-dom";

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
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)
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
    setSelectedSeason(null)
    setSelectedIndex(-1)
  }

  function setActiveSeason(season, index) {
    setSelectedSeason(season)
    setSelectedIndex(index)
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
            <h4>Seasons List</h4>

            <ul className="list-group">
              {seasons &&
                seasons.map((season, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === selectedIndex ? "active" : "")
                    }
                    onClick={() => setActiveSeason(season, index)}
                    key={index}
                  >
                    {season._id} {season.title} {season.subtitle}
                  </li>
                ))}
            </ul>

          </div>
          <div className="col-md-8">
            {selectedSeason ? (
                <SeasonData seasonId={selectedSeason._id}/>
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
