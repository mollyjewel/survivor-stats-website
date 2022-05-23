import BioRow from "components/BioRow"
import TextField from '@mui/material/TextField'
import {getHierarchy,getText} from "survivor-stats-common/helpers/location.js"

export default function Hometown(props) {

  function onLocationChange(event) {
    const { name, value } = event.target
    props.setContestant(prevContestant => {
        const newHometown = {...prevContestant.hometown, [name]: value}
        return {
          ...prevContestant,
          hometown: newHometown
        }
    })
  }

  return (
    <BioRow
      label="Hometown"
      isEditMode={props.isEditMode}
      viewContent={getText(props.hometown)}
      editContent={
        getHierarchy().map(locationType => {
          return (
            <TextField
              key={locationType}
              variant="outlined"
              label={locationType}
              name={locationType}
              value={props.hometown ? (props.hometown[locationType] || "") : ""}
              onChange={onLocationChange}
               />
        )})
      }
    />
  )
}
