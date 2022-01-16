import React, { useState } from 'react';
import BioRow from "../BioRow";

function FirstName(props) {
    const[firstName, setfirstName]=useState(props.firstName);

    function handleChange(event) {
      const { name, value } = event.target;
      setfirstName(value);
    }

    return (
        <BioRow
          label="First Name"
          editContent={<input type="text" className="form-control" name="firstName" value={firstName} onChange={handleChange}/>} >
          {firstName}
        </BioRow>
    )
}

export default FirstName;
