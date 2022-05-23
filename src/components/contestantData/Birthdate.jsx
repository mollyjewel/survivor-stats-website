import DatePicker from '@mui/lab/DatePicker'
import TextField from '@mui/material/TextField'
import BioRow from "components/BioRow"
import getDateText from "helpers/date.js"

export default function Birthdate(props) {

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
  )
}
