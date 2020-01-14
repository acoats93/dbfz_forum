import axios from 'axios';

//initial state
const initialState = {
    user_id: null,
    username: '',
    is_admin: false
}


//constants
const GET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

//functions

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('auth/user')
    }
}

//reducers

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: action.data.user_id,
                username: action.data.username,
                is_admin: action.data.is_admin
            }
        default: return state
    }
}