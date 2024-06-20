const tigoReducer = (state = [], action) => {
  if (action.type === 'GET_TIGO_DATA') {
    return action.payload;
  }
  return state;
};

export default tigoReducer;
