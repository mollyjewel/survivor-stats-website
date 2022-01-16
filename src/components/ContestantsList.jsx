import React, { Component } from "react";
import ContestantDataService from "../services/contestant.service";
import { Link } from "react-router-dom";

export default class ContestantsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveContestants = this.retrieveContestants.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveContestant = this.setActiveContestant.bind(this);
    this.removeAllContestants = this.removeAllContestants.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      contestants: [],
      currentContestant: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveContestants();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveContestants() {
    ContestantDataService.getAll()
      .then(response => {
        this.setState({
          contestants: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveContestants();
    this.setState({
      currentContestant: null,
      currentIndex: -1
    });
  }

  setActiveContestant(contestant, index) {
    this.setState({
      currentContestant: contestant,
      currentIndex: index
    });
  }

  removeAllContestants() {
    ContestantDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    ContestantDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          contestants: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, contestants, currentContestant, currentIndex } = this.state;

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
            <h4>Contestants List</h4>

            <ul className="list-group">
              {contestants &&
                contestants.map((contestant, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveContestant(contestant, index)}
                    key={index}
                  >
                    {contestant._id} {contestant.firstName} {contestant.lastName}
                  </li>
                ))}
            </ul>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllContestants}
            >
              Remove All
            </button>
          </div>
          <div className="col-md-6">
            {currentContestant ? (
              <div>
                <h4>Contestant</h4>
                <div>
                  <img src={"/imgs/contestantProfilePic/" + currentContestant._id + ".png"} alt="contestant" height="100"/>
                </div>
                <div>
                  <label>
                    <strong>ID:</strong>
                  </label>{" "}
                  {currentContestant._id}
                </div>
                <div>
                  <label>
                    <strong>First Name:</strong>
                  </label>{" "}
                  {currentContestant.firstName}
                </div>
                <div>
                  <label>
                    <strong>Last Name:</strong>
                  </label>{" "}
                  {currentContestant.lastName}
                </div>

                <Link
                  to={"/contestants/data/" + currentContestant._id}
                  className="badge badge-warning"
                >
                  Edit
                </Link>
              </div>
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
