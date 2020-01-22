import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import {getUser, addUserCharacters} from '../../redux/reducers/userReducer';
import {getAllCharacters} from '../../redux/reducers/characterReducer';
import './User.css';


class Users extends Component {
    constructor(){
        super()
        this.state = {
            point_char_id: '',
            mid_char_id: '',
            anchor_char_id: ''
        }
    }

    componentDidMount(){
        this.props.getUser();
        this.props.getAllCharacters();
    }

    handlePointChange = (e) => {
        this.setState({point_char_id: e.target.value})
    }

    handleMidChange = (e) => {
        this.setState({mid_char_id: e.target.value})
    }

    handleAnchorChange = (e) => {
        this.setState({anchor_char_id: e.target.value})
    }

    handleClick = () => {
        let userTeam = {
            point_char_id: this.state.point_char_id,
            mid_char_id: this.state.mid_char_id,
            anchor_char_id: this.state.anchor_char_id
        }
        addUserCharacters(userTeam, this.props.user_id)
        console.log(this.state.point_char_id)
        console.log(this.state.mid_char_id)
        console.log(this.state.anchor_char_id)
    }

    render(){
        // console.log(this.props.characters)
        return(
            <div>
                <NavBar/>
                Users Component
                <h1 id='greeting_message'>Hello {this.props.username}</h1>
                <section className='team_building_section'>
                    <section className='category_titles'>Point Character
                        <select>
                            <option value='-blank-'>-Choose a Character</option>
                            {this.props.characters.map(character => {
                                return(
                                    <option onChange={this.handlePointChange} value={character.char_id}>{character.char_name}</option>
                                )
                            })}
                        </select>
                    </section>
                    <section className='category_titles'>Mid Character
                        <select>
                            <option value='-blank-'>-Choose a Character</option>
                            {this.props.characters.map(character => {
                                return(
                                    <option onChange={this.handleMidChange} value={character.char_id}>{character.char_name}</option>
                                )
                            })}
                        </select>
                    </section>
                    <section className='category_titles'>Anchor Character
                        <select>
                            <option value='-blank-'>-Choose a Character</option>
                            {this.props.characters.map(character => {
                                return(
                                    <option onChange={this.handleClick} value={character.char_id}>{character.char_name}</option>
                                )
                            })}
                        </select>
                        <br/>
                        <button onClick={this.handleClick}>Submit Team</button>
                    </section>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        user_id: reduxState.userReducer.user_id,
        username: reduxState.userReducer.username,
        characters: reduxState.characterReducer.characters,
        point_char_id: reduxState.userReducer.point_char_id,
        mid_char_id: reduxState.userReducer.mid_char_id,
        anchor_char_id: reduxState.userReducer.anchor_char_id
    }
}

export default connect(mapStateToProps, {
    getUser,
    getAllCharacters,
    addUserCharacters
})(Users);