import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
            <div id='whole_navbar'>
                <image/>
                <h1>Korin Tower</h1>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/general'>General</Link>
                    <Link to='/characters'>Characters</Link>
                </div>
                    
                <button>
                    <Link to='/auth/login'>Login</Link>
                </button>
                <button>
                    <Link to='/auth/register'>Register</Link>
                </button>
            </div>
        )
    }
}

export default NavBar;