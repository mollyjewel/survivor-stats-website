import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function DataVizItem(props) {
  //if (props.children == null || props.children === "") {return null}

  return (
      <Box sx={{borderRadius: '12px', backgroundColor: '#ffffff'}}>
        <Typography variant="h4" component="div" sx={{padding: '20px'}}>
          Gender Diversity
        </Typography>
        <Divider/>
        <Box sx={{padding: '10px'}}>
          {props.content}
        </Box>
        <Divider/>
        <Typography variant="body1" component="div" sx={{padding: '30px'}}>
          Analysis. Takeaways. Blah blah blah blah blah.
        </Typography>
      </Box>
  )
}

export default DataVizItem;
