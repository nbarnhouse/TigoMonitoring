const starReducer = (state = [], action) => {
  if (action.type === 'GET_APOD_DATA') {
    return action.payload;
  }
  return state;
};

export default starReducer;
