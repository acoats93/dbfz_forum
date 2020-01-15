import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';


const rootReducer = combineReducers({
    userReducer,
    generalReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
