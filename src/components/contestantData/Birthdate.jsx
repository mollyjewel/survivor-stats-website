import React, { Fragment, useState } from "react";
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import BioRow from "../BioRow";
import getDateText from "../../helpers/date.js";

function Birthdate(props) {

  function handleDateChange(date) {
    props.setContestant(prevContestant => {
      return {
        ...prevContestant,
        birthdate: date
      }
    })
  }

  return (
    <BioRow
      label="Birthdate"
      isEditMode={props.isEditMode}
      viewContent={getDateText(props.birthdate)}
      editContent={
        <DatePicker
            label="Birthdate"
            value={props.birthdate}
            onChange={date => handleDateChange(date)}
            renderInput={(params) => <TextField {...params} />}
          />
      }
    />
  );
}

export default Birthdate;


{/*
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
