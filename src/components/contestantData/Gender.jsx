import * as React from 'react';
import BioRow from "../BioRow";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import options from 'survivor-stats-common/models/gender';

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

function getStyles(option, gender, theme) {
  return {
    fontWeight:
      gender.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Gender(props) {
  const theme = useTheme();

  function handleChange(event) {
    const value = event.target.value;
    props.setContestant(prevContestant => {
      return {
        ...prevContestant,
        gender: (typeof value === 'string' ? value.split(',') : value)
      }
    }
      // On autofill we get a the stringified value.
      //typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <BioRow
      label="Gender"
      isEditMode={props.isEditMode}
      viewContent={props.gender.join(", ")}
      editContent={
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={props.gender}
          onChange={handleChange}
          input={<OutlinedInput label="Race and Ethnicity" />}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, props.gender, theme)}
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

function Gender(props) {

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
      viewContent={props.gender}
      editContent={
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-label">Race and Ethnicity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={props.gender[0]}
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

export default Gender;
*/}
