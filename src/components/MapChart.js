//Doc for map used: 'https://www.react-simple-maps.io/docs/getting-started/'
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
import LocationMarker from './LocationMarker';
import ErrorBoundary from './ErrorBoundary';
import {getText} from "../helpers/location.js";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const location = "hometown";


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
  const minLng = -128 //-133 //done //-140 bad //-130 good //-125 good //-150 bad //-200
  const maxLng = -61 //done //-60 bad //-65 good//-75 good //-50 bad //0 bad
  const minLat = 25 //done //20 bad //15 bad //25 good //0 bad
  const maxLat = 52 //done //55 bad //50 good //60 bad //70 bad //80 bad //100 bad


  const [locations, setLocations] = useState(null);
  const [coords, setCoords] = useState([[minLng, 42.7477457],[maxLng, 42.7477457],[-105.009694, minLat],[-105.009694, maxLat], [-155.5828, 19.8968]])
  const seasonId = 41;

  const fakeLocations = [
    [
      {lat: 42.7477457, lng: -105.009694},
      [{_id: '61f3802cf007c4b78ea809ab', firstName: 'Brad', lastName: 'Reese', seasons: [41], hometown:{city: "Shawnee", coordinates: {lat: 42.7477457, lng: -105.009694}, country: "USA", state: "Wyoming"}}]
    ]
  ]

  React.useEffect(() => {retrieveLocations()}, [seasonId]);

  //{location: location, contestants: []};
  //const map1 = new Map();
  //map1.set([-74.0060, 40.7128], {location: location, contestants: []});

  async function retrieveLocations() {
    try {
      console.log("Getting locations");
      const contestants = await ContestantDataService.getBySeasonId(seasonId);
      const newLocations = new Map();

      console.log(contestants.data);
      contestants.data.map(contestant => {
        if (contestant.hometown && contestant.hometown.coordinates) {
          if (newLocations.get(contestant.hometown.coordinates)) {
            //add contestant to list
            let locationContestants = newLocations.get(contestant.hometown.coordinates);
            locationContestants.push(contestant);
            newLocations.set(contestant.hometown.coordinates, locationContestants);
            //setCord([contestant.hometown.coordinates.lng, contestant.hometown.coordinates.lat])
          } else {
            newLocations.set(contestant.hometown.coordinates, [contestant]);
            //setCord([contestant.hometown.coordinates.lng, contestant.hometown.coordinates.lat])
            //setCoords(prevCoords => {
            //  return [
            //    ...prevCoords,
            //    [contestant.hometown.coordinates.lng, contestant.hometown.coordinates.lat]
            //  ]
            //});
          }
        }
      });
      console.log(Array.from(newLocations));
      console.log(fakeLocations)
      setLocations(Array.from(newLocations));
      //setCord([-81.65565099999999, 30.3321838])
      console.log(coords)
    } catch (error) {
      console.log(error);
    }
  };

  if (!locations) {
    return <div />
  }

  const isIterable = (value) => {
    return Symbol.iterator in Object(value);
  }

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

        {/*locations.map(([key, value], index) => (
          <LocationMarker
            key={index}
            index={index}
            coord={[-81.65565099999999, 30.3321838]}
            locationTxt={getText(value[0].hometown)}
            contestants={value}
          />
        ))*/}

        {/*coords.map((coord, index) => (
          <LocationMarkerClass
            key={index}
            index={index}
            coord={coord}
            locationTxt=""
            contestants={[]}
          />
        ))*/}

        {locations.map(([key, value], index) => (
          <ErrorBoundary key={index}>
          <LocationMarker
            key={index}
            index={index}
            coord={[key.lng, key.lat]}
            locationTxt={getText(value[0].hometown)}
            contestants={value}
          />
          </ErrorBoundary>
        ))}

        {/*fakeLocations.map(([key, value], index) => (
          <LocationMarker
            key={index}
            index={index}
            coord={[key.lng, key.lat]}
            locationTxt={getText(value[0].hometown)}
            contestants={value}
          />
      ))*/}

    </ComposableMap>
  );


  /*return (

  <Marker
    key={index}
    index={index}
    coordinates={[key.long, key.lat]}
    onMouseEnter={handlePopoverOpen}
    onMouseLeave={handlePopoverClose}>
      <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
      <text
        textAnchor="middle"
        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
      >
      {value.map(contestant => (contestant.firstName + " " + contestant.lastName))}
      </text>
  </Marker>




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
  );

  <Typography
      onMouseEnter={(e) => handlePopoverOpen(e, index)}
      onMouseLeave={handlePopoverClose()}>
      {console.log(value)}
      {value.hometown.city}
  </Typography>
  <Popover
      open={openedPopoverId === index}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Typography>
          {value.map(contestant => (contestant.firstName + " " + contestant.lastName))}
          popover content
      </Typography>
    </Popover>



  */
};

export default MapChart;
