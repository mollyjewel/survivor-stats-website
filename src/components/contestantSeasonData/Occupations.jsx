import BioRow from "components/BioRow"
import TextField from '@mui/material/TextField'

function Occupations(props) {

  function onOccupationsChange(event) {
    let season = {...props.season}
    season.occupations = event.target.value.split(", ").map(title => ({title}))
    props.setSeason(season, props.index)
  }

  const occupations =
    (props.season.occupations !=null) ?
      props.season.occupations.map(x => x.title).join(", "): ""

      return (
        <BioRow
          label="Occupations"
          isEditMode={props.isEditMode}
          viewContent={occupations}
          editContent={
            <TextField
              variant="outlined"
              label="Occupations"
              name="occupations"
              value={occupations}
              onChange={onOccupationsChange}
            />
          }
        />
      )
}

export default Occupations
