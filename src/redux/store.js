import {createStore, applyMiddleware, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';
import characterReducer from './reducers/characterReducer'


const rootReducer = combineReducers({
    userReducer,
    generalReducer,
    characterReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
