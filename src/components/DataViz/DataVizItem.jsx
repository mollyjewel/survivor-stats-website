import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function DataVizItem(props) {

  return (
      <Box sx={{borderRadius: '3px', backgroundColor: 'white', padding:'8px'}}>
        <Typography variant="h4" color='#686869' textAlign='center' component="div">
          {props.title}
        </Typography>
        <Box>
          {props.content}
        </Box>
      </Box>
  )
}
