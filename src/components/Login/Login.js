import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, login} from '../../redux/reducers/userReducer'
import NavBar from '../NavBar/NavBar';
import './Login.css';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    handleUsernameInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordInput = (e) => {
        // console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleClick = () => {
        this.props.login(this.state.username, this.state.password)
    }

    render(){
        return(
            <div>
                <NavBar/>
                <section id='login_section'>
                    <h1>Login!</h1>
                    <br/>
                    <input onChange={this.handleUsernameInput} placeholder='Username'></input>
                    <br/>
                    <input onChange={this.handlePasswordInput} placeholder='Password'></input>
                    <br/>
                    <Link to='/user'>
                        <button onClick={this.handleClick}>Login</button>
                    </Link>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    getUser,
    login
})(Login);