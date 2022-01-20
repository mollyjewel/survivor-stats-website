import React, { useState } from 'react';
import ContestantDataService from "../services/contestant.service";
import BioRow from "./BioRow";
import CastingSheet from "./CastingSheet";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getDateText from "../helpers/date.js";
import getLocationText from "../helpers/location.js";

import Grid from '@mui/material/Grid';
import UploadContestantPhoto from './UploadPhotoButton';
import { DropzoneArea } from 'material-ui-dropzone';

// Contestant Data components
import FirstName from "./contestantData/FirstName";
import Birthdate from "./contestantData/Birthdate";
import Hometown from "./contestantData/Hometown";
import RaceAndEthnicity from "./contestantData/RaceAndEthnicity";
import Gender from "./contestantData/Gender";
import SexualOrientation from "./contestantData/SexualOrientation";

import ContestantSeasonData from "./ContestantSeasonData";

function ContestantData(props) {
    const [contestant, setContestant] = useState({});
    const [isEditMode, setEditMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function retrieveContestant() {
      console.log(props.match.params.id);
      try {
        const response = await ContestantDataService.get(props.match.params.id);
        // const users = await axios.get("https://randomuser.me/api/?page=1&results=10&nat=us");
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

    function setSeason(season, index) {
      let updatedSeasons = [...contestant.seasons];
      updatedSeasons[index] = season;
      setContestant(prevContestant => {
        return {
          ...prevContestant,
          seasons: updatedSeasons
        }
      });
    }

    React.useEffect(() => {retrieveContestant()}, [props.match.params.id]);

    var lastSeasonId = contestant.seasons ? contestant.seasons[contestant.seasons.length - 1].seasonId : 0;
    var photoFileName = "/imgs/contestants/" + lastSeasonId + "/" + contestant._id + ".jpg";

    return (
      <div className="contestantData">
        <div className="pageHeader">
        <h2>
          {contestant.firstName} {contestant.lastName}
        </h2>
        </div>
              <Grid container spacing={4}>
                <Grid item xs={12} md={5} lg={3}>
                  <div className="castPhoto">
                    <img className="img-fluid" src={photoFileName} alt="cast"/>
                  </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  <form>
                    {isEditMode && <Button variant="text" onClick={saveEdits}>Save</Button>}
                    {isEditMode && <Button variant="text" onClick={discardEdits}>Discard</Button>}
                    {!isEditMode && <Button variant="text" onClick={() => setEditMode(true)}>Edit</Button>}

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

                    <BioRow
                      label="Nickname"
                      isEditMode={isEditMode}
                      viewContent={contestant.nickname || ""}
                      editContent={
                        <TextField
                          variant="outlined"
                          label="Nickname"
                          name="nickName"
                          value={contestant.nickname || ""}
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

                    <Gender
                      isEditMode={isEditMode}
                      gender={contestant.gender || []}
                      setContestant={setContestant}
                    />

                    <SexualOrientation
                      isEditMode={isEditMode}
                      sexualOrientation={contestant.sexualOrientation || []}
                      setContestant={setContestant}
                    />

                  </form>
                </Grid>
              </Grid>


              <Grid>
                {(contestant && contestant.seasons) ?
                  contestant.seasons.map(
                    (season, index) =>
                      <ContestantSeasonData
                        isEditMode={isEditMode}
                        contestant_id={contestant._id}
                        season={season}
                        key={index}
                        index={index}
                        setSeason={setSeason}
                      />
                  )
                  : "no seasons"}
              </Grid>



              {/*

                {contestants.map(contestant => { return (<ContestantSummary key={contestant._id} contestant={contestant}/>)})}
contestant.seasons.map(season => {<ContestantSeasonData season={season}/>}



                <BioRow label="Last Name">
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

        {/* <div className="castingSheets">
          {contestant.castingSheets && contestant.castingSheets.map(castingSheet => <CastingSheet {...castingSheet}/> )}
        </div>*/}
      </div>
    )
}


export default ContestantData;
