import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ContestantDataService from "../services/contestant.service";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const location = "hometown";
const seasonId = 41;

const markers = [
  /*{
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }*/
  { markerOffset: -15, name: "Los Angelos", coordinates: [-118.2437, 34.0522] },
  { markerOffset: -15, name: "New York City", coordinates: [-74.0060, 40.7128] }
  //{ markerOffset: -15, name: "Lynnwood", coordinates: [-122.3151, 47.8209] }
];

function MapChart(props) {
  const [locations, setLocations] = useState(new Map());
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  function handlePopoverOpen(event, popoverId) {
    //const { name, value } = event.target;
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
    console.log("popover opened");
  };

  function handlePopoverClose() {
    setAnchorEl(null);
    setOpenedPopoverId(null);
    console.log("closed");
  };

  //const open = Boolean(anchorEl);

  React.useEffect(() => {retrieveLocations()}, [seasonId]);

  //{location: location, contestants: []};
  //const map1 = new Map();
  //map1.set([-74.0060, 40.7128], {location: location, contestants: []});

  async function retrieveLocations() {
    try {
      console.log("Getting locations");
      const contestants = await ContestantDataService.getBySeasonId(seasonId);
      const newLocations = new Map();
      /*newLocations.set(
        {
            "lat": 47.8209,
            "long": -122.3151
        },
        {
            "firstName": "Ricard",
            "lastName": "Foyé",
        });*/
      console.log(contestants.data);
      contestants.data.map(contestant => {
        if (contestant.hometown && contestant.hometown.coordinates) {
          if (newLocations.get(contestant.hometown.coordinates)) {
            //add contestant to list
            let locationContestants = newLocations.get(contestant.hometown.coordinates);
            locationContestants.push(contestant);
            newLocations.set(contestant.hometown.coordinates, locationContestants);
          } else {
            newLocations.set(contestant.hometown.coordinates, [contestant]);
          }
        }
      });
      console.log(newLocations);
      setLocations(newLocations);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ComposableMap
      projection="geoAlbersUsa"
    >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
            //.filter(d => d.properties.NAME === "United States of America")
            .map(geo =>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            )
          }
        </Geographies>

        {[...locations].map(([key, value], index) => (
          <Marker key={index} coordinates={[key.long, key.lat]}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
    </ComposableMap>
  );


  /*return (
    <ComposableMap
      {projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            //.filter(d => d.properties.REGION_UN === "Americas")
            .filter(d => d.properties.NAME === "United States of America")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );*/
};

export default MapChart;
