import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Characters.css';
import NavBar from '../NavBar/NavBar';
import {getAllCharacters, deleteCharacter} from '../../redux/reducers/characterReducer';
import {getUser} from '../../redux/reducers/userReducer';

class Characters extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'menu'
        }
    }
    componentDidMount(){
        this.props.getAllCharacters();
        this.props.getUser();
    }

    menuClick = () => {
        if(this.state.menuStatus === 'menu_open'){
            this.setState({menuStatus: 'menu_closed'})
        }else{
            this.setState({menuStatus: 'menu_open'})
        }
    }

    render(){
        return(
            <div id='whole_page'>
                <NavBar/>
                <div id='menu_div'>
                    <img 
                    onClick={this.menuClick}
                    src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                    id='menu_button'
                    alt='menu_icon'/>
                    <div id={this.state.menuStatus}>{this.props.characters.map(character => {
                        return(
                            <div key={character.char_id}>
                                {character.char_name}
                            </div>
                        )
                    })}</div>
                </div>
                {this.props.is_admin === true?
                    <div>
                        <Link to='/add'>Add New Character!</Link>
                    </div>:null
                }
                <section>
                    {this.props.characters.map(character => {
                        return(
                            <div key={character.char_id}>
                                <section id='name_image_container'>
                                    <img alt='char_image' id='char_image' src={character.char_image}/>
                                    <div id='char_name'>{character.char_name}</div>
                                </section>
                                <br/>
                                <section id='paragraph_container'>
                                    <h1 className='paragraph_titles'>Description</h1>
                                    <div id='char_description'>{character.char_description}</div>
                                    <br/>
                                    <h1 className='paragraph_titles'>Special Move List</h1>
                                    <div id='char_sp_moves'>{character.char_sp_moves}</div>
                                    <br/>
                                    <h1 className='paragraph_titles'>Combos</h1>
                                    <div id='char_combos'>{character.char_combos}</div>
                                    <br/>
                                    <h1 className='paragraph_titles'>Advanced Combos</h1>
                                    <div id='char_advanced_combos'>{character.char_advanced_combos}</div>
                                    {this.props.is_admin === true ? 
                                    <div>
                                        <button>
                                            <Link to={`/edit/${character.char_id}`}>Edit</Link>
                                        </button>
                                        <button onClick={() => this.props.deleteCharacter(character.char_id)}>Delete</button>
                                    </div>
                                    :null
                                    }
                                </section>
                            </div>
                        )
                    })}
                </section>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        characters: reduxState.characterReducer.characters,
        user_id: reduxState.userReducer.user_id,
        is_admin: reduxState.userReducer.is_admin
    }
}

export default connect(mapStateToProps, {
    getAllCharacters,
    getUser,
    deleteCharacter,
})(Characters);