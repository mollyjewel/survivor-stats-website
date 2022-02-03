import React from "react";
import BioRow from "../BioRow";
import TextField from '@mui/material/TextField';

function Occupations(props) {

  function onOccupationsChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    season.occupations = value.split(", ").map(title => ({title}));
    props.setSeason(season, props.index);
  }

  const occupations =
    (props.season.occupations !=null) ?
      props.season.occupations.map(x => x.title).join(", "): "";

      return (
        <BioRow
          label="Occupations"
          isEditMode={props.isEditMode}
          viewContent={occupations}
          editContent={
            <TextField
              variant="outlined"
              label="Occupations"
              name="occupations"
              value={occupations}
              onChange={onOccupationsChange}
            />/*
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="occupations-label">Occupations</InputLabel>
            <Select
              labelId="occupations-label"
              id="occupations-select"
              value={occupations}
              label="Occupations"
              onChange={onOccupationsChange}
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

export default Occupations;
