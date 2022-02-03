import React from "react";
import BioRow from "../BioRow";
import TextField from '@mui/material/TextField';

function Hobbies(props) {

  function onHobbiesChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    season.hobbies = value.split(", ");
    props.setSeason(season, props.index);
  }

  const hobbies =
    (props.season.hobbies) ?
      props.season.hobbies.join(", "): "";

      return (
        <BioRow
          label="Hobbies"
          isEditMode={props.isEditMode}
          viewContent={hobbies}
          editContent={
            <TextField
              variant="outlined"
              label="Hobbies"
              name="hobbies"
              value={hobbies}
              onChange={onHobbiesChange}
            />/*
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="hobbies-label">Hobbies</InputLabel>
            <Select
              labelId="hobbies-label"
              id="hobbies-select"
              value={hobbies}
              label="Hobbies"
              onChange={onHobbiesChange}
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
          */}
        />
      );
}

export default Hobbies;
