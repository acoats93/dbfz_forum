import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import {editCharacter, getAllCharacters} from '../../redux/reducers/characterReducer';
import './Edit.css';


class Edit extends Component {
    constructor(){
        super()
        this.state = {
            char_name: '',
            char_description: '',
            char_sp_moves: '',
            char_combos: '',
            char_advanced_combos: '',
            char_image: ''
        }
    }

    componentDidMount(){
        this.props.getAllCharacters();
    }

    nameInput = (e) => {
        this.setState({char_name: e.target.value})
    }

    descriptionInput = (e) => {
        this.setState({char_description: e.target.value})
    }

    spMoveInput = (e) => {
        this.setState({char_sp_moves: e.target.value})
    }

    comboInput = (e) => {
        this.setState({char_combos: e.target.value})
    }

    advComboInput = (e) => {
        this.setState({char_advanced_combos: e.target.value})
    }

    imageInput = (e) => {
        this.setState({char_image: e.target.value})
    }

    handleClick = () => {
        let character = {
            char_name: this.state.char_name,
            char_description: this.state.char_description,
            char_sp_moves: this.state.char_sp_moves,
            char_combos: this.state.char_combos,
            char_advanced_combos: this.state.char_advanced_combos,
            char_image: this.state.char_image
        }
        this.props.editCharacter(this.props.match.params.char_id, character);
        return
    }

    // checkUploadResult = (error, resultEvent) => {
    //     if (resultEvent.event === 'success') {
    //         this.setState({ char_image: resultEvent.info.url })
    //     }
    // }

    render(){
        // let widget
        // if(window.cloudinary){
        //     widget = window.cloudinary.createUploadWidget(
        //         {
        //             cloudName: 'dlnezgd0h',
        //             uploadPreset: 'dbfz-preset',
        //             sources: ['local', 'url'],
        //             default: false
        //         },
        //         (error, result) => {
        //             this.checkUploadResult(error, result)
        //             this.checkUploadResult(error, result)
        //         }
        //         )
        // }
        return(
            <div>
            <NavBar/>
            <section id='whole_edit_section'>
                <h1>Editing {this.props.match.params.char_id}</h1>
                {/* <button onClick={() => widget.open()}>Select an Image</button> */}
                <input placeholder='Character Name' onChange={this.nameInput}></input>
                <input placeholder='Character Description' onChange={this.descriptionInput}></input>
                <input placeholder='Special Moves' onChange={this.spMoveInput}></input>
                <input placeholder='Basic Combos' onChange={this.comboInput}></input>
                <input placeholder='Advanced Combos' onChange={this.advComboInput}></input>
                <input placeholder='Character Image' onChange={this.imageInput}></input>

                <Link to='/characters'>
                    <button onClick={this.handleClick}>Submit Character Changes</button>
                </Link>
            </section>
        </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        characters: reduxState.characterReducer.characters,
    }
}

export default connect(mapStateToProps, {
    getAllCharacters,
    editCharacter
})(Edit);