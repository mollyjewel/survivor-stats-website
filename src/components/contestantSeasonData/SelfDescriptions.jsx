import BioRow from "components/BioRow"
import TextField from '@mui/material/TextField'

export default function SelfDescriptions(props) {

  function onSelfDescriptionsChange(event) {
    let season = {...props.season}
    season.selfDescriptions = event.target.value.split(", ")
    props.setSeason(season, props.index)
  }

  const selfDescriptions =
    (props.season.selfDescriptions) ?
      props.season.selfDescriptions.join(", "): ""

      return (
        <BioRow
          label="Self Descriptions"
          isEditMode={props.isEditMode}
          viewContent={selfDescriptions}
          editContent={
            <TextField
              variant="outlined"
              label="Self Descriptions"
              name="selfDescriptions"
              value={selfDescriptions}
              onChange={onSelfDescriptionsChange}
            />
          }
        />
      )
}
