import axios from 'axios';

//initial state
const initialState = {
    user_id: null,
    username: '',
    is_admin: false,
    point_char_id: null,
    mid_char_id: null,
    anchor_char_id: null,
    point_char_image: '',
    mid_char_image: '',
    anchor_char_image: ''
}


//constants
const GET_USER = 'GET_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';
const ADD_USER_CHARACTERS = 'ADD_USER_CHARACTERS';
const GET_TEAM_IMAGES = 'GET_TEAM_IMAGES';
// const GET_MID_CHAR_IMAGE = 'GET_MID_CHAR_IMAGE';
// const GET_ANCHOR_CHAR_IMAGE = 'GET_ANCHOR_CHAR_IMAGE';

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

export const addUserCharacters = (userCharacters, user_id) => {
    return {
        type: ADD_USER_CHARACTERS,
        payload: axios.put(`/api/team/${user_id}`, userCharacters)
    }
}

export const getTeamImages = () => {
    return {
        type: GET_TEAM_IMAGES,
        payload: axios.get('/api/team')
    }
}

// export const getMidCharImage = (user_id) => {
//     return {
//         type: GET_MID_CHAR_IMAGE,
//         payload: axios.get('/api/team/mid', user_id)
//     }
// }

// export const getAnchorCharImage = (user_id) => {
//     return {
//         type: GET_ANCHOR_CHAR_IMAGE,
//         payload: axios.get('/api/team/anchor', user_id)
//     }
// }

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
        case `${ADD_USER_CHARACTERS}_FULFILLED`:
            return{
                ...state,
                point_char_id: payload.data.point_char_id,
                mid_char_id: payload.data.mid_char_id,
                anchor_char_id: payload.data.anchor_char_id
            }
        case `${GET_TEAM_IMAGES}_FULFILLED`:
            console.log(payload.data);
            return{
                ...state,
                point_char_image: payload.data[1].char_image,
                mid_char_image: payload.data[0].char_image,
                anchor_char_image: payload.data[2].char_image
            }
        // case `${GET_MID_CHAR_IMAGE}_FULFILLED`:
        //     return{
        //         ...state,
        //         mid_char_image: payload.data.char_id
        //     }
        // case `${GET_ANCHOR_CHAR_IMAGE}_FULFILLED`:
        //     return{
        //         ...state,
        //         anchor_char_image: payload.data.char_id
        //     }
        default: return state
    }
}