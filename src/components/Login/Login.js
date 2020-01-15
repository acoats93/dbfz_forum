import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Login.css';

class Login extends Component {

    handleInput = (e) => {
        console.log(e.target.value);
    }

    handleClick = () => {

    }

    render(){
        return(
            <div>
                <NavBar/>
                <section id='login_section'>
                    <h1>Login!</h1>
                    <br/>
                    <input onChange={this.handleInput} placeholder='Username'></input>
                    <br/>
                    <input onChange={this.handleInput} placeholder='Password'></input>
                    <br/>
                    <button onClick={this.handleClick}>Login</button>
                </section>
            </div>
        )
    }
}

export default Login;