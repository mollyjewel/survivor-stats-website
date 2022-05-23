import BioRow from "components/BioRow"
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import options from 'survivor-stats-common/models/sexualOrientation'


export default function SexualOrientation(props) {

  function handleChange(event) {
    props.setContestant(prevContestant => {
      return {
        ...prevContestant,
        sexualOrientation: event.target.value
      }
    }
    )
  }

  return (
    <BioRow
      label="Sexual Orientation"
      isEditMode={props.isEditMode}
      viewContent={props.sexualOrientation}
      editContent={
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="sex-orient-label">Sexual Orientation</InputLabel>
        <Select
          labelId="sex-orient-label"
          id="sex-orient-select"
          value={props.sexualOrientation}
          label="Sexual Orientation"
          onChange={handleChange}
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
