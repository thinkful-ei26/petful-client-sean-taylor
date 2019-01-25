import {API_BASE_URL} from '../config';


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

export function fetchDog() {
    console.log('fetch dog');
    return(dispatch) => {
    dispatch(fetchDogRequest());
        return fetch(`${API_BASE_URL}/api/dog`)
            .then(res => res.json(res))
            .then(dogs => {
                dispatch(fetchDogSuccess(dogs));
            })
            .catch(err => dispatch(fetchDogError(err)));
        }
}

export function deleteDog() {
    console.log('dog delete');
    return (dispatch) => {
        dispatch(fetchDogRequest()); 
        return fetch(`${API_BASE_URL}/api/dog`, {
            method:'DELETE'
        })
        .then(() => {
            dispatch(deleteDogSuccess())
        })
        .then(() => dispatch(fetchDog()))
        .catch(err => dispatch(deleteDogError(err))); 
        
    }
}