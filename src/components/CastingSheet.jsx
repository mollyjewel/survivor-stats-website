import React from 'react';
import BioRow from "./BioRow";
import getLocationText from "../helpers/location.js";

function CastingSheet(props) {
  if (props.children == null || props.children === "") {return null}

  return (
    <div className="container">
          <BioRow label="Season ID">
            {props.seasonId}
          </BioRow>

          <BioRow label="Residence">
            {getLocationText(props.residence)}
          </BioRow>

          <BioRow label="Relationship Status">
            {props.relationshipStatus}
          </BioRow>

          <BioRow label="Number of Children">
            {props.children}
          </BioRow>

          <BioRow label="Education">
            {}
          </BioRow>

          <BioRow label="Occupation">
            <BioRow label="Current">
              Crossfit Trainer
            </BioRow>
            <BioRow label="Previous">
              Physical Therapy Student
            </BioRow>
          </BioRow>

          <BioRow label="Self Descriptions">
            {props.selfDescriptions.join(", ")}
          </BioRow>

          <BioRow label="Hobbies">
            {props.hobbies.join(", ")}
          </BioRow>
    </div>
  );
}

export default CastingSheet;
