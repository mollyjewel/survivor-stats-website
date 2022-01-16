import React from 'react';
import Grid from '@mui/material/Grid';

function BioRow(props) {
  //if (props.children == null || props.children === "") {return null}

  return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label className="form-label">
            {props.label}
          </label>
        </Grid>
        <Grid item xs={8}>
          {props.isEditMode ? props.editContent : props.viewContent}
        </Grid>
      </Grid>
  );
}

export default BioRow;


{/*
  return (
    <div className="row">
      <div className="col label-col">
        <label className="form-label">
          {props.label}
        </label>
      </div>
      <div className="col">
          {props.isEditMode ? props.editContent : props.viewContent}
      </div>
    </div>
  );
*/}
