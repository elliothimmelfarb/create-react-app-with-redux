import React, { PropTypes } from 'react';

// eslint-disable-next-line arrow-body-style
const Person = ({ person }) => {
  return (
    <div>
      {person.lastname}, {person.firstname}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Person;
