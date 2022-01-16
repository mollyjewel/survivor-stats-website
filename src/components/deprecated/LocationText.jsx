import React from 'react';

const LocationText=(props)=>{
    const locationOrder = ["city", "island", "state", "municipality", "province", "country"];
    const locationText = locationOrder.map(x => props[x]).filter(x => x).join(", ");

    if (locationText === "") {return null}

    return (
      <span className="locationText">
      {locationText}
      </span>
    );
}

export default LocationText;
