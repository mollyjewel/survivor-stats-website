import { useState, useEffect } from 'react'
import ContestantDataService from "services/contestant.service"
import BarGraph from 'components/barGraph/BarGraph'
import sexualOrientations from 'survivor-stats-common/models/sexualOrientation'

function SexOrientBarGraph(props) {
  const [data,setData] = useState([])
  const keys = [...sexualOrientations, 'unknown']

  async function getData() {
    try {
      let newData = (await ContestantDataService.getSeasonSexOrientPercents()).data
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

export default SexOrientBarGraph
