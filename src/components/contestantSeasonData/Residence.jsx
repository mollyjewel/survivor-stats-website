import React, { useState } from "react";
import BioRow from "../BioRow";
import TextField from '@mui/material/TextField';
import {getHierarchy,getText} from "../../helpers/location.js";

function Residence(props) {

  const residence =
    (props.season.residence) ?
      props.season.residence : {};


  function onLocationChange(event) {
    const { name, value } = event.target;
    let season = {...props.season};
    residence[name] = value;
    season.residence = residence;
    props.setSeason(season, props.index);
  }

  return (
    <BioRow
      label="Residence"
      isEditMode={props.isEditMode}
      viewContent={getText(residence) || ""}
      editContent={
        getHierarchy().map(locationType => {
          return (
            <TextField
              key={locationType}
              variant="outlined"
              label={locationType}
              name={locationType}
              value={residence ? (residence[locationType] || "") : ""}
              onChange={onLocationChange}
               />
        )})
      }
    />
  );
}

export default Residence;




{/*


} else if (props.hometown[name] === "") {
  props.setContestant(prevContestant => {
    delete prevContestant.hometown[name];
    return prevContestant;
  });
}

  <input
    type="text"
    className="form-control"
    name={locationType}
    value={props.hometown ? (props.hometown[locationType] || "") : ""}
    onChange={onLocationChange}
    />


<Fragment>
  <KeyboardDatePicker
    autoOk
    variant="inline"
    inputVariant="outlined"
    label="Birthdate"
    format="MM/dd/yyyy"
    value={props.birthdate}
    InputAdornmentProps={{ position: "start" }}
    onChange={date => handleDateChange(date)}
  />
</Fragment>*/}



{/*import React, { useState } from 'react';
import BioRow from "../BioRow";
import getDateText from "../../helpers/date.js";

const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

function Birthdate(props) {

  return <BioRow key={props.birthdate}
    label="Birthdate"
    isEditMode={props.isEditMode}
    viewContent={getDateText(props.birthdate)}
    editContent={
      <div>
      <select name="month" id="month">
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>September</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
      </select>

      <select name="day" id="day">
        {range(1,31).map(day => <option value={day}>{day}</option>)}
      </select>
      </div>
    }
  />

}

export default Birthdate;*/}
