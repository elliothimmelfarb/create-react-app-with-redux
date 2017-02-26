import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import LeafletMap from '../Components/LeafletMap';

function LeafletContainer(props) {
  return (
    <div>
      <LeafletMap points={props.points} />
    </div>
  );
}

LeafletContainer.propTypes = {
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  points: state.point.points,
});

export default connect(mapStateToProps)(LeafletContainer);
