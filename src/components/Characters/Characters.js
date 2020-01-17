import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Characters.css';
import NavBar from '../NavBar/NavBar';
import {getAllCharacters} from '../../redux/reducers/characterReducer';

class Characters extends Component {

    componentDidMount(){
        this.props.getAllCharacters();
    }

    render(){
        console.log(this.props.characters)
        return(
            <div id='whole_page'>
                <NavBar/>
                Characters Component
                {/* <Link to='/add'>Add</Link>
                <Link to='/edit'>Edit</Link> */}
                <section>
                    {this.props.characters.map(character => {
                        return(
                            <div key={character.char_id}>
                                <section id='name_image_container'>
                                    <img id='char_image' src={character.char_image}/>
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
        characters: reduxState.characterReducer.characters
    }
}

export default connect(mapStateToProps, {
    getAllCharacters
})(Characters);