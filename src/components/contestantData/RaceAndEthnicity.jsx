import * as React from 'react';
import BioRow from "../BioRow";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import options from 'survivor-stats-common/models/raceAndEthnicity';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option, raceAndEthnicity, theme) {
  return {
    fontWeight:
      raceAndEthnicity.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function RaceAndEthnicity(props) {
  const theme = useTheme();

  function handleChange(event) {
    const value = event.target.value;
    props.setContestant(prevContestant => {
      return {
        ...prevContestant,
        raceAndEthnicity: (typeof value === 'string' ? value.split(',') : value)
      }
    }
      // On autofill we get a the stringified value.
      //typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <BioRow
      label="Race and Ethnicity"
      isEditMode={props.isEditMode}
      viewContent={props.raceAndEthnicity.join(", ")}
      editContent={
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Race and Ethnicity</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={props.raceAndEthnicity}
          onChange={handleChange}
          input={<OutlinedInput label="Race and Ethnicity" />}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, props.raceAndEthnicity, theme)}
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

function RaceAndEthnicity(props) {

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
      label="Race and Ethnicity"
      isEditMode={props.isEditMode}
      viewContent={props.raceAndEthnicity}
      editContent={
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">Race and Ethnicity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={props.raceAndEthnicity[0]}
            label="Race and Ethnicity"
            onChange={onChange}
           >
             <MenuItems />
           </Select>
         </FormControl>
      }
    />
  );
}

export default RaceAndEthnicity;
*/}
