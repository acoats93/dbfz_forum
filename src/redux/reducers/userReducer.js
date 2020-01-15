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
        payload: axios.get('/auth/user')
    }
}

export const login = (username, password) => {
    const user = {
        username,
        password
    }
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', user)
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: axios.post('/auth/logout')
    }
}

export const register = (username, password, is_admin) => {
    const user = {
        username,
        password,
        is_admin
    }
    return {
        type: REGISTER,
        payload: axios.post('/auth/register', user)
    }
}

//reducers

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_admin: payload.data.is_admin
            }
        case `${LOGIN}_FULFILLED`:
            return{
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_admin: payload.data.is_admin                
            }
        case `${REGISTER}_FULFILLED`:
            return{
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                is_admin: payload.data.is_admin                
            }
        case `${LOGOUT}_FULFILLED`:
            return{
                ...state,
                user_id: null,
                username: '',
                is_admin: false                
            }    
        default: return state
    }
}