import React from "react";
import BioRow from "../BioRow";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Children(props) {

  function onStatusChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    season.children = value;
    props.setSeason(season, props.index);
  }


  const children =
    (props.season.children !=null) ?
      props.season.children : "";

  const options = [...Array(15).keys()];

      return (
        <BioRow
          label="Children"
          isEditMode={props.isEditMode}
          viewContent={children}
          editContent={
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="children-label">Children</InputLabel>
            <Select
              labelId="children-label"
              id="children-select"
              value={children}
              label="Children"
              onChange={onStatusChange}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          }
        />
      );
}

export default Children;
