import {API_BASE_URL} from '../config';


const fetchCatRequest = () => ({
    type: 'FETCH_CAT_REQUEST'
})

const fetchCatSuccess = (cat) => ({
    type: 'FETCH_CAT_SUCCESS',
    cat
})

const fetchCatError = (error) => ({
    type: 'FETCH_CAT_ERROR', 
    error
})

const deleteCatSuccess = () => ({
    type: 'DELETE_CAT_SUCCESS'
})

const deleteCatError = (error) => ({
    type: 'DELETE_CAT_ERROR',
    error
})

export const fetchCat = () => dispatch =>  {
    dispatch(fetchCatRequest());
    return fetch(`${API_BASE_URL}/api/cat`)
        .then(res => res.json())
        .then(cats => {
            dispatch(fetchCatSuccess(cats));
        })
        .catch(err => dispatch(fetchCatError(err)));
}

export const deleteCat = () => dispatch => {
    dispatch(fetchCatRequest()); 
    return fetch(`${API_BASE_URL}/api/cat`, {
        method:'DELETE'
    })
    .then(() => {
        dispatch(deleteCatSuccess())
    })
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(deleteCatError(err))); 
}