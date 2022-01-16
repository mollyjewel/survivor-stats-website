import React, { Component } from "react";
import SeasonDataService from "../services/season.service";
import { Link } from "react-router-dom";

export default class SeasonsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveSeasons = this.retrieveSeasons.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSeason = this.setActiveSeason.bind(this);
    this.removeAllSeasons = this.removeAllSeasons.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      seasons: [],
      currentSeason: null,
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

  removeAllSeasons() {
    SeasonDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
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
    const { searchTitle, seasons, currentSeason, currentIndex } = this.state;

      return (
        <div className="list row">
          <div className="col-md-8">
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
          </div>
          <div className="col-md-6">
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

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllSeasons}
            >
              Remove All
            </button>
          </div>
          <div className="col-md-6">
            {currentSeason ? (
              <div>
                <h4>Season</h4>
                <div>
                  <img src={"/imgs/season_logo/" + currentSeason._id + ".png"} alt="season logo" height="100"/>
                </div>
                <div>
                  <label>
                    <strong>Number:</strong>
                  </label>{" "}
                  {currentSeason._id}
                </div>
                <div>
                  <label>
                    <strong>Title:</strong>
                  </label>{" "}
                  {currentSeason.title}
                </div>
                <div>
                  <label>
                    <strong>Subtitle:</strong>
                  </label>{" "}
                  {currentSeason.subtitle}
                </div>
                {/*{contestants.map(contestant => <ContestantSummary contestant={contestant}>)};*/}

                <Link
                  to={"/seasons/data/" + currentSeason._id}
                  className="badge badge-warning"
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Season...</p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
