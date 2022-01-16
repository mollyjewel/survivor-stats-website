import React from 'react';

const DateText=(props)=>{
  if (!props.birthdate) {return}

  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const dateText = new Date(props.birthdate).toLocaleDateString("en-US", options);

  return (
    <span className="dateText">
      {dateText}
    </span>
  );
}

export default DateText;
