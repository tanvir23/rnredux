import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_ERROR } from './action_type';

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data
    }
}

function getPeopleError(err) {
    return {
        type: FETCHING_PEOPLE_ERROR,
        err
    }
}
// swapi.co/api/people
export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople())
        fetch('https://swapi.co/api/people')
        .then( res => res.json())
        .then(json => dispatch(getPeopleSuccess(json.results)))
        .catch(err => dispatch(getPeopleError(err)));
    }
} 