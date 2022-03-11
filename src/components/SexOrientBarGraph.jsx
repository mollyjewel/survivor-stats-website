import React, { useState } from 'react'
import ContestantDataService from "../services/contestant.service";
import BarGraph from './DataViz/BarGraph';
import sexualOrientations from 'survivor-stats-common/models/sexualOrientation';

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

  React.useEffect(() => {getData()}, [])

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
