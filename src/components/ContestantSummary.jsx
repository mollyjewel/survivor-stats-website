import React, { useState } from 'react';

function ContestantSummary(props) {
  return (
    <div className="contestantSummary">
        <img className="img-fluid" src={"/imgs/casting/" + props.contestant._id + ".jpeg"} alt="cast"/>
        <a href={"/contestants/data/" + props.contestant._id}>{props.contestant.firstName} {props.contestant.lastName}</a>
    </div>
  );
};

export default ContestantSummary;
