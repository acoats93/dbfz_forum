import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
