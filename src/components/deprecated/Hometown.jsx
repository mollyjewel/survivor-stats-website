import React from 'react';
import LocationText from "./LocationText";
import BioRow from "./BioRow";

function Hometown(props) {
  if (props.hometown == null) {return null}

  return (
    <BioRow label="Hometown">
      <LocationText {...props.hometown} />
    </BioRow>
  );
}

export default Hometown;
