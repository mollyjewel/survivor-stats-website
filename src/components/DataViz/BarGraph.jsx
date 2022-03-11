import { ResponsiveBar } from '@nivo/bar'
import React, { useState } from 'react'
import Box from '@mui/material/Box';

const colors = [
  '#4799bb',
  '#87c8d8',
  '#6cb95e',
  '#bdde85',
  '#e28530',
  '#f2ab90',
  '#a76cc5',
  '#b3abe2'
]

function BarGraph(props) {
  const categoryColors = getCategoryColors()

  function getCategoryColors() {
    let categoryColors = {}
    for (let i = 0; i < props.keys.length; i++) {
      categoryColors[props.keys[i]] = colors[i]
    }
    return categoryColors
  }

  return (
    <Box sx={{
          height: 400,
        }}>
      <ResponsiveBar
          data={props.data}
          keys={props.keys}
          indexBy={props.indexBy}
          margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
          padding={0.2}
          //layout="horizontal"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={({ id, data }) => {
            return String(categoryColors[id])
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
              legend: props.xLegend,
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: props.yLegend,
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

export default BarGraph
