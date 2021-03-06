import { ResponsiveBarCanvas } from '@nivo/bar'
import Box from '@mui/material/Box'
import TooltipWrapper from 'components/DataViz/TooltipWrapper'
import Legend from 'components/DataViz/Legend'

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

export default function BarGraph(props) {
  const categoryColors = getCategoryColors()

  function getCategoryColors() {
    let categoryColors = {}
    for (let i = 0; i < props.keys.length; i++) {
      categoryColors[props.keys[i]] = colors[i]
    }
    return categoryColors
  }

  return (
    <Box>
    <Box sx={{
          height: 400,
        }}>
      <ResponsiveBarCanvas
          data={props.data}
          keys={props.keys}
          indexBy={props.indexBy}
          margin={{ top: 12, right: 12, bottom: 50, left: 43 }}
          padding={0.2}
          //width={800}
          //layout="horizontal"
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          //valueFormat=" >-0.4~p"
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
              tickValues: [1,10,20,30,40],
              legend: props.xLegend,
              legendPosition: 'middle',
              legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: [0,25,50,75,100],
              legend: props.yLegend,
              legendPosition: 'middle',
              legendOffset: -38
          }}
          enableGridY={false}
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
          legends={[]}
          tooltip={function(e){
            const formattedPercent=Intl.NumberFormat('en-US', {
              style: "percent",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            }).format(e.value/100)

            //parseFloat(e.value).toFixed(2)+"%"
            return (
              <TooltipWrapper>
                <span>Season {e.indexValue}<br/><strong>{formattedPercent} {e.id}</strong></span>
              </TooltipWrapper>
            )
          }}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
      />
    </Box>
    <Legend categoryColors={categoryColors} />
    </Box>
  )
}
