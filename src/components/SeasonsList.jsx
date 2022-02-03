import React, { Component } from "react";
import SeasonDataService from "../services/season.service";
import SeasonData from './SeasonData';
import ContestantData from './ContestantData';
import { Link } from "react-router-dom";

export default class SeasonsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveSeasons = this.retrieveSeasons.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSeason = this.setActiveSeason.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      seasons: [],
      currentSeason: null,
      contestantId: "61e08308d26d9b1673bb72cd",
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveSeasons();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveSeasons() {
    SeasonDataService.getAll()
      .then(response => {
        this.setState({
          seasons: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveSeasons();
    this.setState({
      currentSeason: null,
      currentIndex: -1
    });
  }

  setActiveSeason(season, index) {
    this.setState({
      currentSeason: season,
      currentIndex: index
    });
  }


  searchTitle() {
    SeasonDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          seasons: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, seasons, currentSeason, contestantId, currentIndex } = this.state;

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
                  onClick={this.searchTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>*/}
          <div className="col-md-3">
            <h4>Seasons List</h4>

            <ul className="list-group">
              {seasons &&
                seasons.map((season, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveSeason(season, index)}
                    key={index}
                  >
                    {season._id} {season.title} {season.subtitle}
                  </li>
                ))}
            </ul>

          </div>
          <div className="col-md-5">
            {currentSeason ? (
                <SeasonData seasonId={currentSeason._id}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Season...</p>
              </div>
            )}
          </div>
          <div className="col-md-4">
            {true ? (
                <ContestantData contestantId={contestantId}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Contestant...</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }



  /*<div>
    <h4>
    <img src={"/imgs/season_logo/" + currentSeason._id + ".png"} alt="season logo" height="100"/>
     &nbsp;Season {currentSeason._id} {currentSeason.title} {currentSeason.subtitle}</h4>
  </div>*/
