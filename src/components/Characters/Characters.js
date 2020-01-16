import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';

class Characters extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                Characters Component
                <Link to='/add'>Add</Link>
            </div>
        )
    }
}

export default Characters;