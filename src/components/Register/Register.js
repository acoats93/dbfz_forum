import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {getUser, register} from '../../redux/reducers/userReducer';


class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            is_admin: false
        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    handleUsernameInput = (e) => {
        console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordInput = (e) => {
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleBoxCheck = (e) => {
        console.log(e.target.checked)
        if(e.target.checked === true){
            this.setState({is_admin: true})
        }else if(e.target.checked === false){
            this.setState({is_admin: false})
        }
    }
    
    handleClick = () => {
        this.props.register(this.state.username, this.state.password, this.state.is_admin)
    }

    render(){
        return(
            <div>
                <NavBar/>
                <section id='login_section'>
                    <br/>

                    <h1>Register an Account!</h1>
                    <br/>

                    <input onChange={this.handleUsernameInput} placeholder='Username'></input>
                    <br/>

                    <input onChange={this.handlePasswordInput} placeholder='Password'></input>
                    <br/>

                    <p>Admin
                        <input type='checkbox' onChange={this.handleBoxCheck}></input>
                    </p>
                    <br/>
                    
                    <Link to='/user'>
                        <button onClick={this.handleClick}>Make Account!</button>
                    </Link>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    getUser,
    register
})(Register);