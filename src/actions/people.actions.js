// Action types and creators for the 'people' module.
// Thunks go in a file like this

// ACTION TYPES
export const ADD_PERSON = 'ADD_PERSON';


// ACTION CREATORS
// eslint-disable-next-line arrow-body-style
const addPerson = person => ({
  person,
  type: ADD_PERSON,
});

export default {
  addPerson,
};
