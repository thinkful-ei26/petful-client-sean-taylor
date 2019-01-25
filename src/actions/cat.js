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

const deleteCatSuccess = () => ({
    type:DELETE_CAT_SUCCESS
})

const deleteCatError = (error) => ({
    type:DELETE_CAT_ERROR,
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

export function deleteCat(dispatch) {
    dispatch(fetchCatRequest()); 
    return fetch(`${API_BASE_URL}/api/cats`, {
        method:'delete'
    })
    .then(() => {
        dispatch(deleteCatSuccess())
    })
    .then(() => fetchCat(dispatch))
    .catch(err => dispatch(deleteCatError(err))); 
}