import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Characters.css';
import NavBar from '../NavBar/NavBar';
import {getAllCharacters, deleteCharacter} from '../../redux/reducers/characterReducer';
import {getUser,} from '../../redux/reducers/userReducer';
import {getComments, addComment, editComment, deleteComment, getUserComment} from '../../redux/reducers/commentReducer';

class Characters extends Component {
    constructor(){
        super()
        this.state = {
            menuStatus: 'menu',
            comment_content: '',
            charIndex: 0
        }
    }
    componentDidMount(){
        this.props.getAllCharacters();
        this.props.getUser();
        this.props.getComments();
        this.props.getUserComment();
        console.log(this.props.username)
    }

    menuClick = () => {
        if(this.state.menuStatus === 'menu_open'){
            this.setState({menuStatus: 'menu_closed'})
        }else{
            this.setState({menuStatus: 'menu_open'})
        }
    }

    commentInput = (e) => {
        this.setState({comment_content: e.target.value})
    }

    commentClick = () => {
        let newComment = {
            comment_content: this.state.comment_content,
            user_id: this.props.user_id,
            //need to send in char_id & then sort by char_id 
        }
        this.props.addComment(newComment)
    }

    commentDelete = () => {
        this.props.deleteComment(this.props.user_id)
    }

    commentEdit = () => {
        this.props.editComment()
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
                    <div id={this.state.menuStatus}>{this.props.characters.map((character, index) => {
                        return(
                            <div 
                            key={character.char_id}
                            onClick={() => this.setState({charIndex: index})}>
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
                    {this.props.user_id?
                    <div id='logged_in_display' key={this.props.characters[this.state.charIndex]}>
                            <section id='name_image_container'>
                                <img alt='char_image' id='char_image' src={this.props.characters[this.state.charIndex].char_image}/>
                                <div id='char_name'>{this.props.characters[this.state.charIndex].char_name}</div>
                            </section>
                            <br/>
                            <section id='paragraph_container'>
                                <h1 className='paragraph_titles'>Description</h1>
                                <div className='paragraph_text' id='char_description'>{this.props.characters[this.state.charIndex].char_description}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Special Move List</h1>
                                <div className='paragraph_text' id='char_sp_moves'>{this.props.characters[this.state.charIndex].char_sp_moves}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Combos</h1>
                                <div className='paragraph_text' id='char_combos'>{this.props.characters[this.state.charIndex].char_combos}</div>
                                <br/>
                                <h1 className='paragraph_titles'>Advanced Combos</h1>
                                <div className='paragraph_text' id='char_advanced_combos'>{this.props.characters[this.state.charIndex].char_advanced_combos}</div>
                                <br/>
                                {this.props.is_admin === true ? 
                                    <div>
                                        <button>
                                            <Link to={`/edit/${this.props.characters[this.state.charIndex].char_id}`}>Edit</Link>
                                        </button>
                                        <button onClick={() => this.props.deleteCharacter(this.props.characters[this.state.charIndex].char_id)}>Delete</button>
                                    </div>
                                :null
                                }
                            </section>
                            <br/>
                            <br/>
                            <section id='comment_section'>
                                <input placeholder='-comment-' onChange={this.commentInput}></input>
                                <button onClick={() => this.commentClick(this.state.comment)}>Post Comment</button>
                                <div id='comment_container'>
                                    {this.props.comments.map(comment => {
                                        return(
                                            <div key={comment.comment_id} id='comment_box'>
                                                <img src='https://image.flaticon.com/icons/png/128/1450/1450571.png' onClick={() => this.props.deleteComment(comment.comment_id)} id='x_button'></img>
                                                <div>{this.props.username} says:</div>
                                                <div id='actual_comment'>{comment.comment_content}</div>
                                            </div>    
                                        )
                                    })}
                                </div>
                            </section>
                                    
                                
                    </div>: this.props.characters.map(character => {
                                        return(
                                            <div id='logged_out_display' key={character.char_id}>
                                              <section id='name_image_container'>
                                                <img alt='char_image' id='char_image' src={character.char_image}/>
                                                <div id='char_name'>{character.char_name}</div>
                                              </section>
                                              <br/>
                                              <section id='paragraph_container'>
                                                <h1 className='paragraph_titles'>Description</h1>
                                                <div className='paragraph_text' id='char_description'>{character.char_description}</div>
                                                <br/>
                                                <h1 className='paragraph_titles'>Special Move List</h1>
                                                <div className='paragraph_text' id='char_sp_moves'>{character.char_sp_moves}</div>
                                                <br/>
                                                <h1 className='paragraph_titles'>Combos</h1>
                                                <div className='paragraph_text' id='char_combos'>{character.char_combos}</div>
                                                <br/>
                                                <h1 className='paragraph_titles'>Advanced Combos</h1>
                                                <div className='paragraph_text' id='char_advanced_combos'>{character.char_advanced_combos}</div>
                                              </section>
                                            </div>
                                        )
                                      }) }
                </section>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        characters: reduxState.characterReducer.characters,
        user_id: reduxState.userReducer.user_id,
        // username: reduxState.userReducer.username,
        is_admin: reduxState.userReducer.is_admin,
        comments: reduxState.commentReducer.comments,
        username: reduxState.commentReducer.userComment
    }
}

export default connect(mapStateToProps, {
    getAllCharacters,
    getUser,
    deleteCharacter,
    getComments,
    addComment,
    editComment,
    deleteComment,
    getUserComment
})(Characters);