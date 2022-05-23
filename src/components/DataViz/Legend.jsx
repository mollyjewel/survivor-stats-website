import Box from '@mui/material/Box'
import LegendItem from 'components/DataViz/LegendItem'

export default function Legend(props) {

  const categoryColors = props.categoryColors

  return (
    <Box className="legend" marginTop="8px">
      {Object.keys(categoryColors).map(key =>
        <LegendItem category={key} key={key} color={categoryColors[key]}/>)}
    </Box>
  )
}
