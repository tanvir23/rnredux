import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_ERROR } from '../action_type';

const initialState = {
    people: [],
    isFetching: false,
    error: false
}

export  default function peopleReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_PEOPLE:
            return {
                ...state,
                isFetching: true,
                people: []
            }
        case FETCHING_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                people: action.data
            }
        case FETCHING_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state;
    }
}