import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Characters.css';
import NavBar from '../NavBar/NavBar';
import {getAllCharacters, deleteCharacter} from '../../redux/reducers/characterReducer';
import {getUser} from '../../redux/reducers/userReducer';
import {getComments, addComment, editComment, deleteComment} from '../../redux/reducers/commentReducer';

class Characters extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'menu',
            comment: '',
            charIndex: 0
        }
    }
    componentDidMount(){
        this.props.getAllCharacters();
        this.props.getUser();
        this.props.getComments();
    }

    menuClick = () => {
        if(this.state.menuStatus === 'menu_open'){
            this.setState({menuStatus: 'menu_closed'})
        }else{
            this.setState({menuStatus: 'menu_open'})
        }
    }

    commentInput = (e) => {
        this.setState({comment: e.target.value})
        console.log(e.target.value)
    }

    commentClick = () => {
        this.props.addComment(this.state.comment, this.props.user_id)
    }

    render(){
        console.log(this.props.comments)
        return(
            <div id='whole_page'>
                <NavBar/>
                <div id='menu_div'>
                    <img 
                    onClick={this.menuClick}
                    src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                    id='menu_button'
                    alt='menu_icon'/>
                    <div id={this.state.menuStatus}>{this.props.characters.map((character, index) => {
                        // let num = index;
                        // console.log(num)
                        return(
                            <div 
                            key={character.char_id}
                            onClick={() => this.setState({charIndex: index})}>
                                {character.char_name}
                            </div>
                            
                        )
                    })}</div>
                </div>
                {/* <h1>{this.props.characters[0].char_name}</h1> */}
                {this.props.is_admin === true?
                    <div>
                        <Link to='/add'>Add New Character!</Link>
                    </div>:null
                }
                <section>
                    {/* {this.props.characters ? this.props.characters.map(character => {
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
                    }):null */}
                    {this.props.user_id?
                    <div key={this.props.characters[this.state.charIndex]}>
                            <section id='name_image_container'>
                                <img alt='char_image' id='char_image' src={this.props.characters[this.state.charIndex].char_image}/>
                                <div id='char_name'>{this.props.characters[this.state.charIndex].char_name}</div>
                            </section>
                            <br/>
                            <section id='paragraph_container'>
                                <h1 className='paragraph_titles'>Description</h1>
                                <div id='char_description'>{this.props.characters[this.state.charIndex].char_description}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Special Move List</h1>
                                <div id='char_sp_moves'>{this.props.characters[this.state.charIndex].char_sp_moves}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Combos</h1>
                                <div id='char_combos'>{this.props.characters[this.state.charIndex].char_combos}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Advanced Combos</h1>
                                <div id='char_advanced_combos'>{this.props.characters[this.state.charIndex].char_advanced_combos}</div>
                                {this.props.is_admin === true ? 
                                    <div>
                                        <button>
                                            <Link to={`/edit/${this.props.characters[this.state.charIndex].char_id}`}>Edit</Link>
                                        </button>
                                        <button onClick={() => this.props.deleteCharacter(this.props.characters[this.state.charIndex].char_id)}>Delete</button>
                                    </div>
                                :this.props.characters.map(character => {
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
                                          </section>
                                        </div>
                                    )
                                  })
                                }
                            </section>
                            <br/>
                            <br/>
                            <section id='comment_section'>
                                <input placeholder='-comment-' onChange={this.commentInput}></input>
                                <button onClick={this.commentClick}>Post Comment</button>
                                <div>
                                    {this.props.comments.map(comment => {
                                        return(
                                            <div key={comment.comment_id} id='comment_box'>
                                                <div>{comment.comment_content}</div>
                                            </div>    
                                        )
                                    })}
                                </div>
                            </section>
                    </div>: null }
                </section>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        characters: reduxState.characterReducer.characters,
        user_id: reduxState.userReducer.user_id,
        is_admin: reduxState.userReducer.is_admin,
        comments: reduxState.commentReducer.comments
    }
}

export default connect(mapStateToProps, {
    getAllCharacters,
    getUser,
    deleteCharacter,
    getComments,
    addComment,
    editComment,
    deleteComment
})(Characters);