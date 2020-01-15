import axios from 'axios';

//initial state
const initialState = {
    terms: []
}


//constants
const GET_TERMS = 'GET_TERMS'

//functions
export const getTerms = () => {
    return {
        type: GET_TERMS,
        payload: axios.get('/api/general')
    }
}


//reducer
export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_TERMS}_FULFILLED`:
            return {
                ...state,
                terms: payload.data
            }
        default: return state
    }
}
