import { useState, useEffect } from 'react'
import ContestantDataService from "services/contestant.service"
import BarGraph from 'components/barGraph/BarGraph'
import genders from 'survivor-stats-common/models/gender'

function GenderBarGraph(props) {
  const [data,setData] = useState([])
  const keys = [...genders, 'unknown']

  async function getData() {
    try {
      let newData = (await ContestantDataService.getSeasonGenderPercents()).data
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

export default GenderBarGraph
