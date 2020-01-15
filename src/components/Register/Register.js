import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import {getUser} from '../../redux/reducers/userReducer';


class Register extends Component {

    componentDidMount(){

    }

    handleInput = (e) => {

    }

    handleClick = () => {
        
    }

    handleBoxCheck = () => {

    }

    render(){
        return(
            <div>
                <NavBar/>
                <section id='login_section'>
                    <br/>

                    <h1>Register an Account!</h1>
                    <br/>

                    <input onChange={this.handleInput} placeholder='Username'></input>
                    <br/>

                    <input onChange={this.handleInput} placeholder='Password'></input>
                    <br/>

                    <p>Admin
                        <input type='checkbox'></input>
                    </p>
                    <br/>
                    
                    <button onClick={this.handleClick}>Make Account!</button>
                </section>
            </div>
        )
    }
}

mapStateToProps = (reduxState) => {
    return{

    }
}

export default Register;