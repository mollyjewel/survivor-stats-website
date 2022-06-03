import { useState, useCallback, useEffect } from 'react'
import Cookie from 'js-cookie'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ContestantDataService from "services/contestant.service"
import BioRow from "components/BioRow"

// Contestant Data components
import Birthdate from "components/contestantData/Birthdate"
import Hometown from "components/contestantData/Hometown"
import RaceAndEthnicity from "components/contestantData/RaceAndEthnicity"
import Gender from "components/contestantData/Gender"
import SexualOrientation from "components/contestantData/SexualOrientation"

import ContestantSeasonData from "components/contestantSeasonData/ContestantSeasonData"

function ContestantData(props) {
    const [contestant, setContestant] = useState({})
    const [isEditMode, setEditMode] = useState(false)
    const [canEdit, setCanEdit] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const contestantId = props.contestantId ? props.contestantId : props.match.params.id

    const retrieveContestant = useCallback(async (params) => {
      ContestantDataService.get(contestantId)
        .then(response => {
          setContestant(response.data)
          setErrorMessage("")
        })
        .catch(error => {
          console.log(error)
          setErrorMessage("Failed to retrieve contestant data")
        })
    }, [contestantId])

    function discardEdits() {
      setEditMode(false)
      retrieveContestant()
    }

    function saveEdits() {
      ContestantDataService.update(contestant._id, contestant)
        .then(response => {
          setContestant(response.data)
          setEditMode(false)
          setErrorMessage("")
        })
        .catch(e => {
          console.log(e)
          setEditMode(false)
          setErrorMessage("Changes failed to save")
        })
    }

    function onFieldChange(event) {
      const { name, value } = event.target
      setContestant(prevContestant => {
        return {
          ...prevContestant,
          [name]: value
        }
      })
    }

    function setSeason(season, index) {
      let updatedSeasons = [...contestant.seasons]
      updatedSeasons[index] = season
      setContestant(prevContestant => {
        return {
          ...prevContestant,
          seasons: updatedSeasons
        }
      })
    }

    useEffect(() => {retrieveContestant()}, [retrieveContestant, contestantId])

    useEffect(() => { if (Cookie.get('canEdit')) setCanEdit(true) }, [])

    var lastSeasonId = contestant.seasons ? contestant.seasons[contestant.seasons.length - 1].seasonId : 0
    var photoFileName = "/imgs/contestants/" + lastSeasonId + "/" + contestant._id + ".jpg"

    return (
      <div className="contestantData">
        <Typography variant="h4" className="pageHeader">
          {contestant.firstName} {contestant.lastName}
        </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={5} lg={3}>
                  <div className="castPhoto">
                    <img className="img-fluid" src={photoFileName} alt="cast"/>
                  </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                  {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                  <form>
                    {isEditMode && <Button variant="text" onClick={saveEdits}>Save</Button>}
                    {isEditMode && <Button variant="text" onClick={discardEdits}>Discard</Button>}
                    {!isEditMode && canEdit && <Button variant="text" onClick={() => setEditMode(true)}>Edit</Button>}

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
                          name="nickname"
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
                      sexualOrientation={contestant.sexualOrientation || ''}
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
      </div>
    )
}


export default ContestantData
