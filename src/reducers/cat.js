
const initialState = {data: null, error: null, loading: false};

export default (state=initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'FETCH_CAT_REQUEST':
      return {...state, loading: true};
    case 'FETCH_CAT_SUCCESS':
      return {...state, data:action.cat, loading: false};
    case 'FETCH_CAT_ERROR':
      return {...state, error: action.error, loading: false};
    case 'DELETE_CAT_SUCCESS':
      return {...state, data: null, loading: false};
    case 'DELETE_CAT_ERROR':
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
}