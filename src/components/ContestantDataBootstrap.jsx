import React, { useState } from 'react';
import ContestantDataService from "../services/contestant.service";
import BioRow from "./BioRow";
import CastingSheet from "./CastingSheet";
import TextField from '@mui/material/TextField';
import getDateText from "../helpers/date.js";
import getLocationText from "../helpers/location.js";

import Grid from '@mui/material/Grid';

import FirstName from "./contestantData/FirstName";
import Birthdate from "./contestantData/Birthdate";
import Hometown from "./contestantData/Hometown";
import RaceAndEthnicity from "./contestantData/RaceAndEthnicity";
import MultipleSelect from "./contestantData/MultipleSelect";

function ContestantData(props) {
    const [contestant, setContestant] = useState({});
    const [isEditMode, setEditMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function retrieveContestant() {
      console.log(props.match.params.id);
      try {
        const response = await ContestantDataService.get(props.match.params.id);
        setContestant(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    function discardEdits() {
      setEditMode(false);
      retrieveContestant();
    }

    function saveEdits() {
      ContestantDataService.update(contestant._id, contestant)
        .then(response => {
          console.log(response.data);
          setEditMode(false);
        })
        .catch(e => {
          console.log(e);
        });
    }

    function onFieldChange(event) {
      const { name, value } = event.target;
      setContestant(prevContestant => {
        return {
          ...prevContestant,
          [name]: value
        }
      });
    }

    React.useEffect(() => {retrieveContestant()}, [props.match.params.id]);

    return (
      <div className="contestantData">
        <div className="pageHeader">
        <h2>
          {contestant.firstName} {contestant.lastName}
        </h2>
        </div>
        <div className="mainInfo">
          <div className="container">
            <div className="row">
              <div className="col" style={{minWidth: "300px"}}>
                <img className="img-fluid" src={"/imgs/casting/" + contestant._id + ".jpeg"} alt="cast"/>
              </div>
              <div className="col" id="bio-data">
              <form>
                {isEditMode && <button type="button" className="btn btn-primary" onClick={saveEdits}>Save</button>}
                {isEditMode && <button type="button" className="btn btn-danger" onClick={discardEdits}>Discard</button>}
                {!isEditMode && <button type="button" className="btn btn-primary" onClick={() => setEditMode(true)}>Edit</button>}

                <BioRow
                  label="First Name"
                  isEditMode={isEditMode}
                  viewContent={contestant.firstName || ""}
                  editContent={
                    <TextField
                      variant="outlined"
                      label="First Name"
                      name="firstName"
                      value={contestant.firstName || ""}
                      onChange={onFieldChange}
                    />
                  }
                />

                <BioRow
                  label="Last Name"
                  isEditMode={isEditMode}
                  viewContent={contestant.lastName || ""}
                  editContent={
                    <TextField
                      variant="outlined"
                      label="Last Name"
                      name="lastName"
                      value={contestant.lastName || ""}
                      onChange={onFieldChange}
                    />
                  }
                />

                <Birthdate
                  isEditMode={isEditMode}
                  birthdate={contestant.birthdate}
                  setContestant={setContestant}
                />

                <Hometown
                  isEditMode={isEditMode}
                  hometown={contestant.hometown}
                  setContestant={setContestant}
                />

                <RaceAndEthnicity
                  isEditMode={isEditMode}
                  raceAndEthnicity={contestant.raceAndEthnicity || []}
                  setContestant={setContestant}
                />


                <MultipleSelect/>

              </form>
              {/*  <BioRow label="Last Name">
                  {contestant.lastName}
                </BioRow>

                <BioRow label="Nickname">
                  {contestant.nickname}
                </BioRow>

                <BioRow label="Birthdate">
                  {getDateText(contestant.birthdate)}
                </BioRow>

                <BioRow label="Hometown">
                  {getLocationText(contestant.hometown)}
                </BioRow>

                <BioRow label="Race and Ethnicity">
                  {contestant.raceAndEthnicity}
                </BioRow>

                <BioRow label="Gender">
                  {contestant.gender}
                </BioRow>

                <BioRow label="Sexual Orientation">
                  {contestant.sexualOrientation}
                </BioRow> */}

              </div>
            </div>
          </div>
        </div>
        {/* <div className="castingSheets">
          {contestant.castingSheets && contestant.castingSheets.map(castingSheet => <CastingSheet {...castingSheet}/> )}
        </div>*/}
      </div>
    )
}


export default ContestantData;
