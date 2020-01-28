import axios from 'axios'

//initial state
const initialState = {
    comments: [],
    username: ''
}

//constants
const GET_COMMENTS = 'GET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const GET_USER_COMMENT = 'GET_USER_COMMENT';

//functions
export const getComments = () => {
    return{
        type: GET_COMMENTS,
        payload: axios.get('/api/comments')
    }
};

export const addComment = (newComment) => {
    return{
        type: ADD_COMMENT,
        payload: axios.post('/api/comments', newComment)
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
};

export const getUserComment = (comment_id) => {
    return {
        type: GET_USER_COMMENT,
        payload: axios.get('api/comments/username', comment_id)
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
        case `${GET_USER_COMMENT}_FULFILLED`:
            return{
                ...state,
                username: payload.data
            }
        default: return state
    }
}