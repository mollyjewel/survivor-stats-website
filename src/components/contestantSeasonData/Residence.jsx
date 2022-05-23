import BioRow from "components/BioRow"
import TextField from '@mui/material/TextField'
import {getHierarchy,getText} from "survivor-stats-common/helpers/location.js"

function Residence(props) {

  const residence =
    (props.season.residence) ?
      props.season.residence : {}


  function onLocationChange(event) {
    const { name, value } = event.target
    let season = {...props.season}
    residence[name] = value
    season.residence = residence
    props.setSeason(season, props.index)
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
  )
}

export default Residence
