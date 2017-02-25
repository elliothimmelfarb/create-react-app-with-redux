import React, { PropTypes } from 'react';
import Person from './Person';

// eslint-disable-next-line arrow-body-style
const PeopleList = ({ people }) => {
  return (
    <div>
      {people.map(person =>
        <Person key={person.lastname} person={person} />,
      )}
    </div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PeopleList;
