import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import General from './components/General/General';
import Characters from './components/Characters/Characters';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Users from './components/User/User';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import { editCharacter } from './redux/reducers/characterReducer';


export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={General} exact path='/general'/>
        <Route component={Characters} exact path='/characters'/>
        <Route component={Login} exact path='/auth/login'/>
        <Route component={Register} exact path='/auth/register'/>
        <Route component={Users} exact path='/user'/>
        <Route component={Add} exact path='/add'/>
        <Route component={Edit} exact path='/edit'/>
        <Route render={() => <h1>404 NOT FOUND.</h1>}/>
    </Switch>
)