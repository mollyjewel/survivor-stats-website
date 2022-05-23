import Grid from '@mui/material/Grid'

function BioRow(props) {

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
  )
}

export default BioRow
