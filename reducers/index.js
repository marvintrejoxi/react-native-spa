const INITIAL_STATE = {
  authorize: false,
};

function data(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'INIT_SESSION':
      return {
        ...state,
        ...action.payload
      }
    case 'DESTROY_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default data;