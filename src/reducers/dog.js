const initialState = {data: [], error: null, loading: false};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_DOG_REQUEST':
      return {...state, loading: true};
    case 'FETCH_DOG_SUCCESS':
      return {...state, data: action.dog, loading: false};
    case 'FETCH_DOG_ERROR':
      return {...state, error: action.error, loading: false};
    case 'DELETE_DOG_SUCCESS':
      return {...state, data: null, loading: false};
    case 'DELETE_DOG_ERROR':
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
}