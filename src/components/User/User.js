import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {getUser} from '../../redux/reducers/userReducer';
import './User.css';


class Users extends Component {
    componentDidMount(){
        this.props.getUser();
    }

    render(){
        return(
            <div>
                <NavBar/>
                Users Component
                <h1 id='greeting_message'>Hello {this.props.username}</h1>
                <section>
                    <div></div>
                </section>
                <section>
                    <div></div>
                </section>
                <section>
                    <div></div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        username: reduxState.userReducer.username
    }
}

export default connect(mapStateToProps, {
    getUser
})(Users);