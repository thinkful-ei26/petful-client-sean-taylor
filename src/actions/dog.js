import API_BASE_URL from '../config';


const fetchDogRequest = () => ({
    type: 'FETCH_DOG_REQUEST'
})

const fetchDogSuccess = (dog) => ({
    type: 'FETCH_DOG_SUCCESS',
    dog
})

const fetchDogError = (error) => ({
    type: 'FETCH_DOG_ERROR', 
    error
})

const deleteDogSuccess = () => ({
    type: 'DELETE_DOG_SUCCESS'
})

const deleteDogError = (error) => ({
    type: 'DELETE_DOG_ERROR',
    error
})

export function fetchDog(dispatch) {
    dispatch(fetchDogRequest());
    return fetch(`${API_BASE_URL}/api/dogs`)
        .then(res => res.json())
        .then(dogs => {
            dispatch(fetchDogSuccess(dogs));
        })
        .catch(err => dispatch(fetchDogError(err)));
}

export function deleteDog(dispatch) {
    dispatch(fetchDogRequest()); 
    return fetch(`${API_BASE_URL}/api/dogs`, {
        method:'delete'
    })
    .then(() => {
        dispatch(deleteDogSuccess())
    })
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(deleteDogError(err))); 
}