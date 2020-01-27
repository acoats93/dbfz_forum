import axios from 'axios'

//initial state
const initialState = {
    comments: []
}

//constants
const GET_COMMENTS = 'GET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

//functions
export const getComments = (char_id) => {
    return{
        type: GET_COMMENTS,
        payload: axios.get('/api/comments', char_id)
    }
};

export const addComment = (comment, user_id) => {
    return{
        type: ADD_COMMENT,
        payload: axios.post('/api/comments', comment, user_id)
    }
};

export const editComment = (comment, comment_id) => {
    return{
        type: EDIT_COMMENT,
        payload: axios.put(`/api/comments/${comment_id}`, comment)
    }
};

export const deleteComment = (comment_id) => {
    return{
        type: DELETE_COMMENT,
        payload: axios.delete(`api/comments/${comment_id}`)
    }
}

//reducer
export default function reducer(state=initialState,action){
    const {type, payload} = action;
    switch(type){
        case `${GET_COMMENTS}_FULFILLED`:
            return{
                ...state,
                comments: payload.data
            }
        case `${ADD_COMMENT}_FULFILLED`:
            return{
                ...state,
                comments: payload.data
            }
        case `${EDIT_COMMENT}_FULFILLED`:
            return{
                ...state,
                comments: payload.data
            }
        case `${DELETE_COMMENT}_FULFILLED`:
            return{
                ...state,
                comments: payload.data
            }
        default: return state
    }
}