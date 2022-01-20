import React, { useState } from 'react';
import Residence from './contestantSeasonData/Residence'
import RelationshipStatus from './contestantSeasonData/RelationshipStatus'
import Children from './contestantSeasonData/Children'
import Occupations from './contestantSeasonData/Occupations'

function ContestantSeasonData(props) {

  return (
    <div>
      {props.season.seasonId}
      <RelationshipStatus season={props.season} index={props.index} setSeason={props.setSeason} isEditMode={props.isEditMode}/>
      <Children season={props.season} index={props.index} setSeason={props.setSeason} isEditMode={props.isEditMode}/>
      <Residence season={props.season} index={props.index} setSeason={props.setSeason} isEditMode={props.isEditMode}/>
      <Occupations season={props.season} index={props.index} setSeason={props.setSeason} isEditMode={props.isEditMode}/>
    </div>
  )
}

export default ContestantSeasonData;


{/*"seasons": [
            {
                "seasonId": 29,
                "castingSheet": {
                    "residence": {
                        "city": "Edgewater",
                        "state": "New Jersey",
                        "country": "USA"
                    },
                    "relationshipStatus": "single",
                    "children": 0,
                    "occupations": [
                        {
                            "title": "CrossFit Trainer"
                        },
                        {
                            "title": "Physical Therapy Student"
                        }
                    ]
                }
*/}
