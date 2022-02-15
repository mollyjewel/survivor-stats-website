import React, { useState } from 'react';
import {Marker} from "react-simple-maps";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {getText} from "../helpers/location.js";

function LocationMarker(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    console.log("open");
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    console.log("close");
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            <Typography sx={{ p: 1 }}>
                <h6>{(props.locationTxt)}</h6>
                {props.contestants.map(contestant => (contestant.firstName + " " + contestant.lastName))}
            </Typography>
        </Popover>
    </Marker>
  );
};

export default LocationMarker;

/*function LocationMarker(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  //const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);
  const divRef = React.useRef();

  function handlePopoverOpen() {
    //const { name, value } = event.target;
    //setAnchorEl({ name, value });
    setOpenPopover(true);
    setAnchorEl(divRef.current);
    console.log("popover opened");
    //console.log(event.target);
  };

  function handlePopoverClose() {
    setAnchorEl(null);
    setOpenPopover(false);
    console.log("closed");
  };

  return (
    <div ref={divRef}>
    <Marker
      key={props.index}
      index={props.index}
      coordinates={[props.coord.long, props.coord.lat]}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}>
        <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
    </Marker>
    <Popover
        open={openPopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography>
            {props.contestants.map(contestant => (contestant.firstName + " " + contestant.lastName))}
            popover content
        </Typography>
      </Popover>
      </div>
  );
};

export default LocationMarker;*/
