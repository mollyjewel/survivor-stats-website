import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';

function LegendItem(props) {
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

export default LegendItem

/*
The more appealing html/css for a legend item, generated by Nivo:

<g transform="translate(0,0)" style="opacity: 1;">
  <rect width="80" height="20" fill="transparent" style="cursor: auto;">
  </rect>
  <circle r="8" cx="8" cy="10" fill="#4799bb" opacity="1" stroke-width="0" stroke="transparent" style="pointer-events: none;">
  </circle>
  <text text-anchor="start" x="24" y="10" style="font-family: sans-serif; font-size: 11px; fill: rgb(119, 119, 119); dominant-baseline: central; pointer-events: none; user-select: none;">
    male
  </text>
</g>

The problem is that these legends items aren't repsponsive.
They remain on a single line for mobile, despite getting cut off.
*/
