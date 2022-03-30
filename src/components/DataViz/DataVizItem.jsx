import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function DataVizItem(props) {

  return (
      <Box sx={{borderRadius: '3px', backgroundColor: 'white', padding:'8px'/*border: '1px solid #c7c8c9'*/}}>
        <Typography variant="h4" color='#686869' textAlign='center' component="div" sx={{/*padding: '12px'*/}}>
          {props.title}
        </Typography>
        <Box sx={{/*padding: '10px'*/}}>
          {props.content}
        </Box>
      </Box>
  )
}

export default DataVizItem;
