import React from 'react';
import DateText from "./DateText";
import BioRow from "./BioRow";

function Birthdate(props) {
  if (props.birthdate == null) {return null}

  return (
    <BioRow label="Bithdate">
      <DateText birthdate={props.birthdate} />
    </BioRow>
  );
}

export default Birthdate;
