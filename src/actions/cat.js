import API_BASE_URL from '../config';


const fetchCatRequest = () => ({
    type:FETCH_CAT_REQUEST_BEGIN
})

const fetchCatSuccess = (cats) => ({
    type: FETCH_CAT_SUCCESS,
    cats
})

const fetchCatError = (error) => ({
    type:FETCH_CAT_ERROR, 
    error
})

export function fetchCat(dispatch) {
    dispatch(fetchCatRequest());
    return fetch(`${API_BASE_URL}/api/cats`)
        .then(res => res.json())
        .then(cats => {
            dispatch(fetchCatSuccess(cats));
        })
        .catch(err => dispatch(fetchCatError(err)));
}