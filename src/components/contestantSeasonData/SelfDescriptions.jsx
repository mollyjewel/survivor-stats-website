import React from "react";
import BioRow from "../BioRow";
import TextField from '@mui/material/TextField';

function SelfDescriptions(props) {

  function onSelfDescriptionsChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    season.selfDescriptions = value.split(", ");
    props.setSeason(season, props.index);
  }

  const selfDescriptions =
    (props.season.selfDescriptions) ?
      props.season.selfDescriptions.join(", "): "";

      return (
        <BioRow
          label="Self Descriptions"
          isEditMode={props.isEditMode}
          viewContent={selfDescriptions}
          editContent={
            <TextField
              variant="outlined"
              label="Self Descriptions"
              name="selfDescriptions"
              value={selfDescriptions}
              onChange={onSelfDescriptionsChange}
            />/*
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="selfDescriptions-label">SelfDescriptions</InputLabel>
            <Select
              labelId="selfDescriptions-label"
              id="selfDescriptions-select"
              value={selfDescriptions}
              label="SelfDescriptions"
              onChange={onSelfDescriptionsChange}
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

export default SelfDescriptions;
