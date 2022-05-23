import { useState } from 'react'
import {Marker} from "react-simple-maps"
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

function LocationMarker(props) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Marker
      key={props.index}
      coordinates={props.coord}>
      <defs>
        <radialGradient id="gradient1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ff4b4c" />
          <stop offset="100%" stopColor="#b81516" />
        </radialGradient>
      </defs>
        <circle
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseOver={handlePopoverOpen}
          onMouseOut={handlePopoverClose}
          r={6} fill="url(#gradient1)" stroke="#fff" strokeWidth={.6} fillOpacity=".8"
        />
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
            <Typography variant="h7" component="div" sx={{ p: 1 }}>
              {(props.locationTxt)}
            </Typography>
            <Typography sx={{ p: 1 }}>
                {props.contestants.map(contestant => (contestant.firstName + " " + contestant.lastName))}
            </Typography>
        </Popover>
    </Marker>
  )
}

export default LocationMarker
