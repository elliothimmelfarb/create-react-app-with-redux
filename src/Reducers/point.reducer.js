// import * as types from '../Actions/point.actions';

const initialState = {
  points: [
    {
      id: 1,
      coords: [40.014984, -105.2705],
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
