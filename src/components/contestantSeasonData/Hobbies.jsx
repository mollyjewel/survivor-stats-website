import BioRow from "components/BioRow"
import TextField from '@mui/material/TextField'

function Hobbies(props) {

  function onHobbiesChange(event) {
    let season = {...props.season}
    season.hobbies = event.target.value.split(", ")
    props.setSeason(season, props.index)
  }

  const hobbies =
    (props.season.hobbies) ?
      props.season.hobbies.join(", ") : ""

      return (
        <BioRow
          label="Hobbies"
          isEditMode={props.isEditMode}
          viewContent={hobbies}
          editContent={
            <TextField
              variant="outlined"
              label="Hobbies"
              name="hobbies"
              value={hobbies}
              onChange={onHobbiesChange}
            />}
        />
      )
}

export default Hobbies
