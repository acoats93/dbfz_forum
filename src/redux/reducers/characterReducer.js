import axios from 'axios';

//initial state
const initialState = {
    characters: []
}

//constants
const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
const ADD_CHARACTER = 'ADD_CHARACTER';
const EDIT_CHARACTER = 'EDIT_CHARACTER';
const DELETE_CHARACTER = 'DELETE_CHARACTER';

//functions

export const getAllCharacters = () => {
    return {
        type: GET_ALL_CHARACTERS,
        payload: axios.get('/api/characters')
    }
}

export const addCharacter = (character) => {
    return {
        type: ADD_CHARACTER,
        payload: axios.post('/admin/add', character)
    }
}

export const editCharacter = (char_id, character) => {
    console.log(character)
    return {
        type: EDIT_CHARACTER,
        payload: axios.put(`/admin/edit/${char_id}`, character)
    }
}

export const deleteCharacter = (char_id) => {
    return{
        type: DELETE_CHARACTER,
        payload: axios.delete(`/admin/delete/${char_id}`)
    }
}

//reducers
export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_ALL_CHARACTERS}_FULFILLED`:
            return {
                ...state,
                characters: payload.data
            }
        case `${ADD_CHARACTER}_FULFILLED`:
            return {
                ...state,
                characters: payload.data
            }
        case `${EDIT_CHARACTER}_FULFILLED`:
            return {
                ...state,
                characters: payload.data
            }
        case `${DELETE_CHARACTER}_FULFILLED`:
            return {
                ...state,
                characters: payload.data
            }
        default: return state
    }
}
