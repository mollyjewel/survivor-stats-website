//Doc for map used: 'https://www.react-simple-maps.io/docs/getting-started/'
import { useState, useEffect } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ContestantDataService from "services/contestant.service"
import LocationMarker from 'components/mapChart/LocationMarker'
import ErrorBoundary from 'components/ErrorBoundary'
import {getText} from "survivor-stats-common/helpers/location.js"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

function MapChart(props) {

  const [locations, setLocations] = useState(null)
  /* Example locations array: [
    [
      {lat: 42.7477457, lng: -105.009694},
      [{
        _id: '61f3802cf007c4b78ea809ab',
        firstName: 'Brad',
        lastName: 'Reese',
        seasons: [41],
        hometown:{
          city: "Shawnee",
          coordinates: {lat: 42.7477457, lng: -105.009694},
          country: "USA",
          state: "Wyoming"
        }
      }]
    ]
  ] */

  const [seasonId, setSeasonId] = useState(41)

  function onSeasonChange(event, newValue) {
    setSeasonId(newValue)
  }

  //retrieve locations for the current season
  useEffect(() => {
      ContestantDataService.getBySeasonId(seasonId).then((contestants) => {
        const newLocations = new Map()

        contestants.data.forEach(contestant => {
          if (contestant.hometown && contestant.hometown.coordinates) {
            if (newLocations.get(contestant.hometown.coordinates)) {
              let locationContestants = newLocations.get(contestant.hometown.coordinates)
              locationContestants.push(contestant)
              newLocations.set(contestant.hometown.coordinates, locationContestants)
            } else {
              newLocations.set(contestant.hometown.coordinates, [contestant])
            }
          }
        })
        setLocations(Array.from(newLocations))
      }).catch((error) => {
        console.log(error)
      })
    }, [seasonId])

  function valuetext(value) {
    return `${value}`
  }

  if (!locations) {
    return <div />
  }

  return (
    <Box>
    <Slider
      aria-label="Season"
      value={seasonId}
      getAriaValueText={valuetext}
      onChange={onSeasonChange}
      valueLabelDisplay="auto"
      color="secondary"
      step={1}
      marks
      min={1}
      max={41}
    />
    <ComposableMap
      projection="geoAlbersUsa"
    >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
            //.filter(d => d.properties.NAME === "United States of America")
            .map(geo =>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            )
          }
        </Geographies>

        {locations.map(([key, value], index) => (
          <ErrorBoundary key={index}>
          <LocationMarker
            key={index}
            index={index}
            coord={[key.lng, key.lat]}
            locationTxt={getText(value[0].hometown)}
            contestants={value}
          />
          </ErrorBoundary>
        ))}

    </ComposableMap>
    </Box>
  )
}

export default MapChart
