import React, { PropTypes } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

function LeafletMap(props) {
  const attribution = `
    &copy;
    <a href="http://osm.org/copyright">
      OpenStreetMap
    </a>contributors
  `;


  const Points = props.points.map(point => (
    <Marker position={point.coords} key={point.id}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  ));

  return (
    <div className="leaflet-container">
      <Map center={props.points[0].coords} zoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution={attribution}
        />
        { Points }
      </Map>
    </div>
  );
}

LeafletMap.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LeafletMap;
