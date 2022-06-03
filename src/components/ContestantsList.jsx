import { useState, useEffect } from 'react'
import ContestantDataService from 'services/contestant.service'
import ContestantData from 'components/contestantData/ContestantData'
import {useLocation, useHistory} from 'react-router-dom'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Grid from '@mui/material/Grid'

function ContestantsList(props) {

  const search = useLocation().search
  const history = useHistory()

  const [contestants, setContestants] = useState([])
  const [activeContestantId, setActiveContestantId] = useState(new URLSearchParams(search).get('id'))

  function retrieveContestants() {
      ContestantDataService.getAll()
        .then(response => {
          setContestants(response.data)
        })
        .catch(e => {
          console.log(e)
        })
  }

  function handleContestantChange(contestantId) {
    history.replace(`contestants?id=${contestantId}`)
    setActiveContestantId(contestantId)
  }

  useEffect(() => {retrieveContestants()}, [])

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
                    Select Contestant
                </ListSubheader>}
            >
            {contestants && contestants.map((contestant, index) => (
                      <ListItemButton
                        key={`contestant-${contestant._id}`}
                        selected={contestant._id === activeContestantId}
                        onClick={() => handleContestantChange(contestant._id)}
                      >
                        <ListItemText primary={
                          (contestant.firstName && `${contestant.firstName}`) +
                          (contestant.nickname ? ` "${contestant.nickname}"` : ``) +
                          (contestant.lastName ? ` ${contestant.lastName}` : ``)
                        }/>
                      </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            {activeContestantId ? (
                <ContestantData contestantId={activeContestantId}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Contestant...</p>
              </div>
            )}
          </Grid>
        </Grid>
    )
  }

  export default ContestantsList
