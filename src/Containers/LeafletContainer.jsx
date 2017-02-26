import React, { PropTypes } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import '../App.css';

function LeafletContainer(props) {
  const attribution = `
    &copy;<a href="http://osm.org/copyright">OpenStreetMap</a>contributors
  `;

  const Points = props.points.map(point => (
    <Marker position={point}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  ));

  console.log('points', Points)

  return (
    <div className="leaflet-container">
      <Map center={props.points[0]} zoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution={attribution}
        />
        { Points }
      </Map>
    </div>
  );
}

LeafletContainer.propTypes = {
  points: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => ({
  points: state.point.coords,
});

export default connect(mapStateToProps)(LeafletContainer);
