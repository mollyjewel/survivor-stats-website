import React from "react";
import BioRow from "../BioRow";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import options from 'survivor-stats-common/models/relationshipStatus';

function RelationshipStatus(props) {

  function onStatusChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    season.castingSheet.relationshipStatus = value;
    props.setSeason(season, props.index);
  }

  const relationshipStatus =
    (props.season.castingSheet && props.season.castingSheet.relationshipStatus) ?
      props.season.castingSheet.relationshipStatus : "";

      return (
        <BioRow
          label="Relationship Status"
          isEditMode={props.isEditMode}
          viewContent={relationshipStatus}
          editContent={
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="relation-stat-label">Relationship Status</InputLabel>
            <Select
              labelId="relation-stat-label"
              id="relation-stat-select"
              value={relationshipStatus}
              label="Relationship Status"
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

export default RelationshipStatus;
