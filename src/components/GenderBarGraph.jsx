// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import React, { useState } from 'react'
import ContestantDataService from "../services/contestant.service";
import Box from '@mui/material/Box';
import genders from 'survivor-stats-common/models/gender';

function GenderBarGraph(props) {
  const [data,setData] = useState([])
  const keys = [...genders, 'unknown']
  const colors = {
    male: '#4799bb',
    female: '#87c8d8',
    trans: '#6cb95e',
    nonbinary: '#bdde85',
    unknown: '#e28530'
  }

  async function getData() {
    try {
      let newData = (await ContestantDataService.getSeasonGenderPercents()).data
      setData(newData)
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {getData()}, [])

return (
  <Box sx={{
        height: 400,
      }}>
    <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="season"
        margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
        padding={0.2}
        //layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ id, data }) => {
          //console.log(`${id}Color`)
          return String(colors[id])
        }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'season',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'percentage',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                anchor: 'top-left',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemsSpacing: 4,
                symbolSize: 16,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
    </Box>
  )
}

export default GenderBarGraph
