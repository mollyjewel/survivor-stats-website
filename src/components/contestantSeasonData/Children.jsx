import BioRow from "components/BioRow"
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

function Children(props) {

  function onStatusChange(event) {
    let season = {...props.season}
    season.children = event.target.value
    props.setSeason(season, props.index)
  }


  const children =
    (props.season.children !=null) ?
      props.season.children : ""

  const options = [...Array(15).keys()]

      return (
        <BioRow
          label="Children"
          isEditMode={props.isEditMode}
          viewContent={children}
          editContent={
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="children-label">Children</InputLabel>
            <Select
              labelId="children-label"
              id="children-select"
              value={children}
              label="Children"
              onChange={onStatusChange}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          }
        />
      )
}

export default Children
