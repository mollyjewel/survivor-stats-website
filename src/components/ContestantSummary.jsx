import React, { useState } from 'react';

function ContestantSummary(props) {
  const photoFileName = "/imgs/contestants/" + props.seasonId + "/" + props.contestant._id + ".jpg";

  return (
    <div className="contestantSummary">
      <a href={"/contestants/data/" + props.contestant._id}>
        <div className="contestantPhoto">
          <img className="img-fluid" src={photoFileName} alt="cast"/>
        </div>
        {props.contestant.firstName} {props.contestant.lastName}
      </a>
    </div>
  );
};

export default ContestantSummary;
