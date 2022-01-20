import * as React from 'react';
import BioRow from "../BioRow";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import options from 'survivor-stats-common/models/sexualOrientation';


export default function SexualOrientation(props) {

  function handleChange(event) {
    const value = event.target.value;
    props.setContestant(prevContestant => {
      return {
        ...prevContestant,
        sexualOrientation: value
      }
    }
      // On autofill we get a the stringified value.
      //typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <BioRow
      label="Sexual Orientation"
      isEditMode={props.isEditMode}
      viewContent={props.sexualOrientation}
      editContent={
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="sex-orient-label">Sexual Orientation</InputLabel>
        <Select
          labelId="sex-orient-label"
          id="sex-orient-select"
          value={props.sexualOrientation}
          label="Sexual Orientation"
          onChange={handleChange}
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

{/*
import React, { useState } from "react";
import BioRow from "../BioRow";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SexualOrientation(props) {

  const RACE_ETHNICITY_ENUM = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander',
    'White'
  ];

  function MenuItems() {
    return RACE_ETHNICITY_ENUM.map(item => <MenuItem value={item}>{item}</MenuItem>);
  }

  function onChange(event) {
    const { name, value } = event.target;
  }

  return (
    <BioRow
      label="Sexual Orientation"
      isEditMode={props.isEditMode}
      viewContent={props.sexualOrientation}
      editContent={
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">Sexual Orientation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={props.sexualOrientation[0]}
            label="Sexual Orientation"
            onChange={onChange}
           >
             <MenuItems />
           </Select>
         </FormControl>
      }
    />
  );
}

export default SexualOrientation;
*/}
