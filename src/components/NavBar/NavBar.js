import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
            <div id='whole_navbar'>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd40884e-b688-4e2c-a6e2-02d2f841fe9e/d542zb9-55a6d6f8-98e4-4845-8698-f7280a95cd2b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkNDA4ODRlLWI2ODgtNGUyYy1hNmUyLTAyZDJmODQxZmU5ZVwvZDU0MnpiOS01NWE2ZDZmOC05OGU0LTQ4NDUtODY5OC1mNzI4MGE5NWNkMmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.amoaiTYW4cMe68vPJT6m6JG9bil3HwSoqqZn8NYj6NM'></img>
                <section>
                    <h1>Korin Tower</h1>
                    <div>
                        <h2>
                            <Link to='/'>Home</Link>
                        </h2>
                        <h2>
                            <Link to='/general'>General</Link>
                        </h2>
                        <h2>
                            <Link to='/characters'>Characters</Link>
                        </h2>
                    </div>
                </section>
                <section>
                <div id='login-reg-container'>
                    <button>
                        <Link to='/auth/login'>Login</Link>
                    </button>
                    <button>
                        <Link to='/auth/register'>Register</Link>
                    </button>
                </div>
                </section>
            </div>
        )
    }
}

export default NavBar;