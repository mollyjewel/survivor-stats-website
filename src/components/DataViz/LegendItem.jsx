import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';

export default function LegendItem(props) {
  return (
    <Box display="inline" whiteSpace="nowrap" margin="12px">
      <svg height="12" width="12" fill={props.color} >
        <circle cx="6" cy="6" r="6"/>
      </svg>
      <Typography variant="caption" display="inline" margin="4px" style={{verticalAlign:"middle", color:"#777"}}>
        {props.category}
      </Typography>
    </Box>
  )
}
