import { useState, useEffect } from "react"
import SeasonDataService from "services/season.service"
import SeasonData from 'components/seasonData/SeasonData'
import {useLocation, useHistory} from "react-router-dom"

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Grid from '@mui/material/Grid'

function SeasonsList(props) {

  const search = useLocation().search
  const history = useHistory()

  const [seasons, setSeasons] = useState([])
  const [activeSeasonId, setActiveSeasonId] = useState(new URLSearchParams(search).get('id'))

  function retrieveSeasons() {
    SeasonDataService.getAll()
      .then(response => {
        setSeasons(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  function handleSeasonChange(seasonId) {
    history.replace(`seasons?id=${seasonId}`)
    setActiveSeasonId(seasonId)
  }

  useEffect(() => {retrieveSeasons()}, [])

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
          </Grid>
          <Grid item xs={9}>
            {activeSeasonId ? (
                <SeasonData seasonId={activeSeasonId}/>
            ) : (
              <div>
                <br />
                <p>Please click on a Season...</p>
              </div>
            )}
          </Grid>
        </Grid>
    )
  }

  export default SeasonsList
