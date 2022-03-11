import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function DataVizItem(props) {

  return (
      <Box sx={{borderRadius: '3px', margin: '12px 0px', border: '1px solid #c7c8c9'}}>
        <Typography variant="h4" component="div" sx={{padding: '20px'}}>
          {props.title}
        </Typography>
        <Divider/>
        <Box sx={{padding: '10px'}}>
          {props.content}
        </Box>
      </Box>
  )
}

export default DataVizItem;
