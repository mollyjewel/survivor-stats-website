import { useState, useEffect } from 'react'
import ContestantDataService from "services/contestant.service"
import BarGraph from 'components/barGraph/BarGraph'
import raceAndEthnicityTypes from 'survivor-stats-common/models/raceAndEthnicity'

function RaceBarGraph(props) {
  const [data,setData] = useState([])
  const keys = [...raceAndEthnicityTypes, 'unknown']

  async function getData() {
    try {
      let newData = (await ContestantDataService.getSeasonRacePercents()).data
      setData(newData)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {getData()}, [])

  return (
    <BarGraph
      data={data}
      keys={keys}
      indexBy={'season'}
      xLegend={'season'}
      yLegend={'percentage'}
    />
  )
}

export default RaceBarGraph
