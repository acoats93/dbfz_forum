import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div>
                NavBar Component
                <Link to='/'>Home</Link>
                <Link to='/general'>General</Link>
                <Link to='/characters'>Characters</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

export default NavBar;