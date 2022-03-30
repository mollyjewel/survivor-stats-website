import React from 'react'
import Box from '@mui/material/Box';
import LegendItem from './LegendItem'

function Legend(props) {

  const categoryColors = props.categoryColors

  return (
    <Box className="legend" marginTop="8px">
      {Object.keys(categoryColors).map(key =>
        <LegendItem category={key} key={key} color={categoryColors[key]}/>)}
    </Box>
  )
}

export default Legend

/*
//Object.entries(props.categoryColors).forEach(entry => (<p>entry</p>)
for (const key in props.categoryColors) {
  return (<p>boo</p>)
    //console.log(`${key}: ${user[key]}`);
}
  /*{
  const [category, color] = entry;
  console.log('category' + category)
  return (
  <div>
    <p>boo</p>
    <LegendItem color={color}/>
  </div>
  )
}*/
